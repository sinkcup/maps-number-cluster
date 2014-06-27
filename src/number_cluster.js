if (typeof maps == 'undefined') {
    var maps = {};
}
maps.NumberCluster = function(input) {
    this.input = input;
    this.adapterObj = {};
    this.numbers = {};
    var self = this;
    if (input.showAdaptersSwitch === true) {
        var adaptersSwitch = '<ul id="' + input.switchId + '" style="z-index:2; position:absolute; left:40%; list-style:none; margin:0; padding:0;">';
        for (var i in input.adapters) {
            adaptersSwitch += '<li style="display:inline;"><a style="text-decoration: none; display:inline-block; background: #ccc; padding: 0.5em 1em;" data-adapter="' + i + '" href="#' + i + '">' + input.adapters[i] + '</a></li>';
        }
        adaptersSwitch += '</ul>';
        $('#' + input.containerId).append(adaptersSwitch);
        $('#' + input.switchId).find('a').click(function() {
            var adapter = $(this).data('adapter');
            self.changeAdapter(adapter);
            if (typeof self.numbers != {}) {
                self.addNumbers(self.numbers);
            }
        });
    }
    this.adapter = input.defaultAdapter;
    self.changeAdapter(input.defaultAdapter);
}

maps.NumberCluster.prototype.addNumbers = function(numbers) {
    var self = this;
    self.numbers = numbers;
    self.adapterObj.addNumbers(numbers);
}

maps.NumberCluster.prototype.changeAdapter = function(adapter) {
    var self = this;console.log(adapter);
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
