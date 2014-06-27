if (typeof maps.NumberCluster.adapters == 'undefined') {
    maps.NumberCluster.adapters = {};
}
maps.NumberCluster.adapters.amap = function(input) {
    var self = this;
    zoomLevel = 11;
    var point = new AMap.LngLat(input.center.lng, input.center.lat); //定义一个点坐标

    this.mapObj = new AMap.Map(input.containerId, {
        center:point, //地图中心点  
        level: zoomLevel  //地图显示的比例尺级别  
    });

    this.mapObj.plugin(["AMap.ToolBar"],function() {
        //加载工具条
        var tool = new AMap.ToolBar({
            offset : new AMap.Pixel(10, 50)
        });
        self.mapObj.addControl(tool);
    });
}

maps.NumberCluster.adapters.amap.prototype.addNumbers = function(numbers) {
    var self = this;
    $.each(numbers, function(k, v) {
        var point = new AMap.LngLat(v.lng, v.lat);
        
        //自定义点标记内容
        var markerContent = document.createElement("div");
        markerContent.className = "markerContent";
        var markerSpan = document.createElement("span");
        markerSpan.innerHTML = v.number;
        var length = v.number.toString().length;
        if (length==1) {
            length = 4; //1位数时是背景太小，所以要加大一点
        }
        markerContent.setAttribute("style", 'padding:' + length + 'px; background-color: #ffbf00;');
        markerContent.appendChild(markerSpan);
        var marker=new AMap.Marker({
            "position":point,
            "content":markerContent   //自定义点标记覆盖物内容
        });
        marker.setMap(self.mapObj);  //在地图上添加点  
    });
    $('div.markerContent').each(function() {
        var width = $(this).width();
        $(this).css({'height': width + 'px', 'line-height': width + 'px', 'border-radius': width + 'px'});
    });
}
