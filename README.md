#麻数图（Number Cluster）

如果只有1千个点，可以使用麻点图；当有1万甚至10万个点时，用麻点图会卡死浏览器，怎么办？所以我开发了麻数图。

Too Too Many Markers! "marker cluster" can't draw 100000 points, so I write "number cluster", it draws numbers not points.

在线演示本项目（国内，高德和腾讯）：[http://jsfiddle.net/sinkcup/Z6v9x/](http://jsfiddle.net/sinkcup/Z6v9x/)

在线演示本项目（国外，Google）：[http://jsfiddle.net/sinkcup/Y5NaT/](http://jsfiddle.net/sinkcup/Y5NaT/)

如何集成到自己的项目：请看examples目录。

##麻点图/点聚合（无法满足10万个点的需求）：

###高德地图：

点聚合显示：[http://developer.amap.com/api/javascript-api/example/e/0507-2/](http://developer.amap.com/api/javascript-api/example/e/0507-2/)

叠加云数据图层：[http://developer.amap.com/api/javascript-api/example/r/1801-2/](http://developer.amap.com/api/javascript-api/example/r/1801-2/)

###谷歌地图：

MarkerClusterer：[https://developers.google.com/maps/articles/toomanymarkers#markerclusterer](https://developers.google.com/maps/articles/toomanymarkers#markerclusterer)
