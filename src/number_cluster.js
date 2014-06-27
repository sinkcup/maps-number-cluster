if (typeof maps == 'undefined') {
    var maps = {};
}
maps.NumberCluster = function(input) {
    this.input = input;
    this.adapterObj = {};
    this.numbers = {};
    this.adapter = input.defaultAdapter;
    var self = this;
    if (input.adaptersSwitch.show === true) {
        this.backgrounds = {
            "normal" : '#444',
            "visiting": "#3d9400"
        }
        var adaptersSwitch = '<ul id="' + input.adaptersSwitch.id + '" style="z-index:2; position:absolute; left:40%; list-style:none; margin:0; padding:0;">';
        for (var i in input.adapters) {
            adaptersSwitch += '<li style="display:inline;"><a style="';
            var background = self.backgrounds.normal;
            if (i == this.adapter) {
                background = self.backgrounds.visiting;
            }
            adaptersSwitch += 'text-decoration: none; display: inline-block; color: #fff; background: ' + background + '; padding: 0.5em 1em; border: 1px solid #ebebeb" data-adapter="' + i + '" href="#' + i + '">' + input.adapters[i] + '</a></li>';
        }
        adaptersSwitch += '</ul>';
        $('#' + input.containerId).append(adaptersSwitch);
        $('#' + input.adaptersSwitch.id).find('a').click(function() {
            var adapter = $(this).data('adapter');
            self.changeAdapter(adapter);
            if (typeof self.numbers != {}) {
                self.addNumbers(self.numbers);
            }
            $('#' + input.adaptersSwitch.id).find('a').css({"background": self.backgrounds.normal});
            $(this).css({"background": self.backgrounds.visiting});
            if (input.adaptersSwitch.changeHash === false) {
                return false;
            }
            //window.location.hash = '#' + adapter;
        });
    }
    self.changeAdapter(input.defaultAdapter);
}

maps.NumberCluster.prototype.addNumbers = function(numbers) {
    var self = this;
    self.numbers = numbers;
    self.adapterObj.addNumbers(numbers);
}

maps.NumberCluster.prototype.changeAdapter = function(adapter) {
    var self = this;
    var mapId = self.input.containerId + '_' + adapter;
    if ($('#' + mapId).length == 0) {
        $('div.maps_container').each(function() {
            $(this).hide();
        });
        var tmp2 = '<div class="maps_container" id="' + mapId + '" style="' + $('#' + self.input.containerId).attr('style') + '"></div>';
        $('#' + self.input.containerId).append(tmp2);
        self.adapterObj = new maps.NumberCluster.adapters[adapter](self.input);
    } else {
        $('div.maps_container').each(function() {
            $(this).hide();
        });
        $('#' + mapId).show();
    }
}
