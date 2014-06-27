if (typeof maps == 'undefined') {
    var maps = {};
}
maps.NumberCluster = function(input) {
    this.input = input;
    this.adapterObj = {};
    var self = this;
    if (input.showAdaptersSwitch === true) {
        var adaptersSwitch = '<ul id="switch" style="z-index:2; position:absolute; list-style:none; margin:0; padding:0;">';
        for (var i in input.adapters) {
            adaptersSwitch += '<li style="display:inline;"><a style="text-decoration: none; display:inline-block; background: #ccc; padding: 0.5em 1em;" data-adapter="' + input.adapters[i] + '" href="#' + i + '">' + input.adapters[i] + '</a></li>';
        }
        adaptersSwitch += '</ul>';
        $('#' + input.containerId).append(adaptersSwitch);
        $('#switch').find('a').click(function() {
            self.adapter = $(this).data('adapter');
            self.changeAdapter(adapter);
        });
    }
    this.adapter = input.defaultAdapter;
    self.changeAdapter(input.defaultAdapter);
}

maps.NumberCluster.prototype.addNumbers = function(numbers) {
    var self = this;
    self.adapterObj.addNumbers(numbers);
}

maps.NumberCluster.prototype.changeAdapter = function(adapter) {
    var self = this;
    self.adapterObj = new maps.NumberCluster.adapters[adapter](self.input);
}
