if (typeof maps.NumberCluster.adapters == 'undefined') {
    maps.NumberCluster.adapters = {};
}
maps.NumberCluster.adapters.qq = function(input) {
    var self = this;
    zoomLevel = 11;
    var point = new qq.maps.LatLng(input.center.lat, input.center.lng); //定义一个点坐标

    this.map = new qq.maps.Map(document.getElementById(input.containerId + '_qq'), {
        center: point, //地图中心点  
        zoom: zoomLevel  //地图显示的比例尺级别  
    });
}

maps.NumberCluster.adapters.qq.prototype.addNumbers = function(numbers) {
    var self = this;
    $.each(numbers, function(k, v) {
        var point = new qq.maps.LatLng(v.lat, v.lng);
        
        var length = v.number.toString().length;
        if (length == 1) {
            length = 2; //1位数时是背景太小，所以要加大一点
        }
        var width = length/2 + 'em';
        var label = new qq.maps.Label({
            "position": point,
            "map": self.map,
            "content": v.number.toString(),
            "style": {
                "color": "#000",
                "backgroundColor": "#fff",
                "min-width": width,
                "height": width,
                "lineHeight": width,
                "borderColor": "#309cd2",
                "borderWidth": "3px",
                "borderRadius": width,
                "textAlign": "center"
            },
            zIndex: 3
        });
        label.setMap(self.map);
    });
}
