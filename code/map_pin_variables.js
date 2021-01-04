// Map support code
// Update this whenever new map pins are created
// All the icons that might be used for maps are listed below
// This code and the icons are hosted at https://github.com/wilmot/scvas_markers

var redIcon_dim = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_red_dim.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
}); 
var orangeIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_orange.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var orangeIcon_dim = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_orange_dim.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_green.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var greenIcon_dim = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_green_dim.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var blueIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_blue.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var blueIcon_dim = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_blue_dim.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var yellowIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_yellow.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var yellowIcon_dim = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_yellow_dim.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var greyIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_gray.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var greyIcon_dim = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_gray_dim.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var icon1 = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_1.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var icon2 = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_2.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var icon3 = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_3.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var icon4 = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_4.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var icon5 = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_5.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var icon6 = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_6.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var icon7 = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_7.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var icon8 = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_8.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var icon9 = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_9.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var icon10 = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_10.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var icon11 = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_11.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var icon12 = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_12.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var icon13 = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_13.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var icon14 = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_14.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var icon15 = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_15.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var icon16 = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_16.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var icon17 = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_17.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var icon18 = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_18.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var icon19 = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_19.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var icon20 = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_20.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var iconNoNumber = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_no_number.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var iconRestroom = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_restroom.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var iconParking = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_parking.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var iconParkingAndRestroom = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_parking_restroom.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var iconParking1 = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_parking_1.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var iconParking2 = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_parking_2.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var iconParking3 = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_parking_3.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var iconTrailhead = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_trailhead.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var iconBench = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_bench.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var iconPicnicTable = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_picnic_table.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
var iconBridge = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_bridge.png',
  shadowUrl: 'https://raw.githubusercontent.com/wilmot/scvas_markers/master/img/scvas_pin_shadow.png',
  iconSize: [28, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});