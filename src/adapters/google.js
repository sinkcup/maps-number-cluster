if (typeof maps.NumberCluster.adapters == 'undefined') {
    maps.NumberCluster.adapters = {};
}
maps.NumberCluster.adapters.google = function(input) {
    var self = this;
    zoomLevel = 11;
    var point = new google.maps.LatLng(input.center.lat, input.center.lng); //定义一个点坐标

    this.map = new google.maps.Map(document.getElementById(input.containerId + '_google'), {
        center: point, //地图中心点  
        zoom: zoomLevel  //地图显示的比例尺级别  
    });
}

maps.NumberCluster.adapters.google.prototype.addNumbers = function(numbers) {
    var self = this;
    $.each(numbers, function(k, v) {
        var point = new google.maps.LatLng(v.lat, v.lng);

        var length = v.number.toString().length;
        if (length == 1) {
            length = 2; //1位数时是背景太小，所以要加大一点
        }
        var width = length/1.2 + 'em';

        var ibLabel = new InfoBox({
            content: v.number.toString(),
            boxClass: "googleLabel",
            boxStyle: {
                "background": "#f75850",
                "borderRadius": width,
                "minHeight": width,
                "lineHeight": width,
                "minWidth": width,
                "textAlign": "center",
                "fontSize": "1em"
            },
            closeBoxURL: "",
            disableAutoPan: true,
            position: point,
            isHidden: false,
            pane: "mapPane",
            enableEventPropagation: true
        });

        ibLabel.open(self.map);
    });

    /*
    //动态改变 高度，切换时会有问题。所以不用。如果不切换使用单地图，则可以使用。
    google.maps.event.addListener(self.map, 'tilesloaded', function(evt) {
        $('div.googleLabel').each(function() {
            var width = $(this).width();
            $(this).css({'minHeight': width + 'px', 'line-height': width + 'px', 'border-radius': width + 'px'});
        });
    });
    */
}
