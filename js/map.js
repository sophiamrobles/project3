function initMap() {
    var cocochanel = {lat:41.900626660924985, lng:-87.62586197929068};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom:10, center: cocochanel});
    var marker = new google.maps.Marker({position: cocochanel, map:map,});
}
window.initMap = initMap;



