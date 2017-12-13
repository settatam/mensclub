cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-battery-status.battery",
        "file": "plugins/cordova-plugin-battery-status/www/battery.js",
        "pluginId": "cordova-plugin-battery-status",
        "clobbers": [
            "navigator.battery"
        ]
    },
    {
        "id": "cordova-plugin-camera.Camera",
        "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "id": "cordova-plugin-camera.CameraPopoverOptions",
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "id": "cordova-plugin-camera.camera",
        "file": "plugins/cordova-plugin-camera/www/Camera.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "id": "cordova-plugin-camera.CameraPopoverHandle",
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverHandle"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification",
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification_android",
        "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-file-transfer.FileTransferError",
        "file": "plugins/cordova-plugin-file-transfer/www/FileTransferError.js",
        "pluginId": "cordova-plugin-file-transfer",
        "clobbers": [
            "window.FileTransferError"
        ]
    },
    {
        "id": "cordova-plugin-file-transfer.FileTransfer",
        "file": "plugins/cordova-plugin-file-transfer/www/FileTransfer.js",
        "pluginId": "cordova-plugin-file-transfer",
        "clobbers": [
            "window.FileTransfer"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.geolocation",
        "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.PositionError",
        "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
        "pluginId": "cordova-plugin-geolocation",
        "runs": true
    },
    {
        "id": "cordova-plugin-globalization.GlobalizationError",
        "file": "plugins/cordova-plugin-globalization/www/GlobalizationError.js",
        "pluginId": "cordova-plugin-globalization",
        "clobbers": [
            "window.GlobalizationError"
        ]
    },
    {
        "id": "cordova-plugin-globalization.globalization",
        "file": "plugins/cordova-plugin-globalization/www/globalization.js",
        "pluginId": "cordova-plugin-globalization",
        "clobbers": [
            "navigator.globalization"
        ]
    },
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "id": "cordova-plugin-media-capture.CaptureAudioOptions",
        "file": "plugins/cordova-plugin-media-capture/www/CaptureAudioOptions.js",
        "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
            "CaptureAudioOptions"
        ]
    },
    {
        "id": "cordova-plugin-media-capture.CaptureImageOptions",
        "file": "plugins/cordova-plugin-media-capture/www/CaptureImageOptions.js",
        "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
            "CaptureImageOptions"
        ]
    },
    {
        "id": "cordova-plugin-media-capture.CaptureVideoOptions",
        "file": "plugins/cordova-plugin-media-capture/www/CaptureVideoOptions.js",
        "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
            "CaptureVideoOptions"
        ]
    },
    {
        "id": "cordova-plugin-media-capture.CaptureError",
        "file": "plugins/cordova-plugin-media-capture/www/CaptureError.js",
        "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
            "CaptureError"
        ]
    },
    {
        "id": "cordova-plugin-media-capture.MediaFileData",
        "file": "plugins/cordova-plugin-media-capture/www/MediaFileData.js",
        "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
            "MediaFileData"
        ]
    },
    {
        "id": "cordova-plugin-media-capture.MediaFile",
        "file": "plugins/cordova-plugin-media-capture/www/MediaFile.js",
        "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
            "MediaFile"
        ]
    },
    {
        "id": "cordova-plugin-media-capture.helpers",
        "file": "plugins/cordova-plugin-media-capture/www/helpers.js",
        "pluginId": "cordova-plugin-media-capture",
        "runs": true
    },
    {
        "id": "cordova-plugin-media-capture.capture",
        "file": "plugins/cordova-plugin-media-capture/www/capture.js",
        "pluginId": "cordova-plugin-media-capture",
        "clobbers": [
            "navigator.device.capture"
        ]
    },
    {
        "id": "cordova-plugin-media-capture.init",
        "file": "plugins/cordova-plugin-media-capture/www/android/init.js",
        "pluginId": "cordova-plugin-media-capture",
        "runs": true
    },
    {
        "id": "cordova-plugin-network-information.network",
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "id": "cordova-plugin-network-information.Connection",
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "id": "cordova-plugin-vibration.notification",
        "file": "plugins/cordova-plugin-vibration/www/vibration.js",
        "pluginId": "cordova-plugin-vibration",
        "merges": [
            "navigator.notification",
            "navigator"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-call-number.CallNumber",
        "file": "plugins/cordova-plugin-call-number/www/CallNumber.js",
        "pluginId": "cordova-plugin-call-number",
        "clobbers": [
            "call"
        ]
    },
    {
        "id": "cordova-plugin-googlemaps.BaseClass",
        "file": "plugins/cordova-plugin-googlemaps/www/BaseClass.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.BaseArrayClass",
        "file": "plugins/cordova-plugin-googlemaps/www/BaseArrayClass.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.LatLng",
        "file": "plugins/cordova-plugin-googlemaps/www/LatLng.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.LatLngBounds",
        "file": "plugins/cordova-plugin-googlemaps/www/LatLngBounds.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.VisibleRegion",
        "file": "plugins/cordova-plugin-googlemaps/www/VisibleRegion.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.Location",
        "file": "plugins/cordova-plugin-googlemaps/www/Location.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.CameraPosition",
        "file": "plugins/cordova-plugin-googlemaps/www/CameraPosition.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.Polyline",
        "file": "plugins/cordova-plugin-googlemaps/www/Polyline.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.Polygon",
        "file": "plugins/cordova-plugin-googlemaps/www/Polygon.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.Marker",
        "file": "plugins/cordova-plugin-googlemaps/www/Marker.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.HtmlInfoWindow",
        "file": "plugins/cordova-plugin-googlemaps/www/HtmlInfoWindow.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.Circle",
        "file": "plugins/cordova-plugin-googlemaps/www/Circle.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.TileOverlay",
        "file": "plugins/cordova-plugin-googlemaps/www/TileOverlay.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.GroundOverlay",
        "file": "plugins/cordova-plugin-googlemaps/www/GroundOverlay.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.Common",
        "file": "plugins/cordova-plugin-googlemaps/www/Common.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.encoding",
        "file": "plugins/cordova-plugin-googlemaps/www/encoding.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.spherical",
        "file": "plugins/cordova-plugin-googlemaps/www/spherical.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.poly",
        "file": "plugins/cordova-plugin-googlemaps/www/poly.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.Geocoder",
        "file": "plugins/cordova-plugin-googlemaps/www/Geocoder.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.Map",
        "file": "plugins/cordova-plugin-googlemaps/www/Map.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.event",
        "file": "plugins/cordova-plugin-googlemaps/www/event.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.MapTypeId",
        "file": "plugins/cordova-plugin-googlemaps/www/MapTypeId.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.KmlOverlay",
        "file": "plugins/cordova-plugin-googlemaps/www/KmlOverlay.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.Environment",
        "file": "plugins/cordova-plugin-googlemaps/www/Environment.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.MarkerCluster",
        "file": "plugins/cordova-plugin-googlemaps/www/MarkerCluster.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.Cluster",
        "file": "plugins/cordova-plugin-googlemaps/www/Cluster.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.geomodel",
        "file": "plugins/cordova-plugin-googlemaps/www/geomodel.js",
        "pluginId": "cordova-plugin-googlemaps",
        "runs": true
    },
    {
        "id": "cordova-plugin-googlemaps.CordovaGoogleMaps",
        "file": "plugins/cordova-plugin-googlemaps/www/googlemaps-cdv-plugin.js",
        "pluginId": "cordova-plugin-googlemaps",
        "clobbers": [
            "plugin.google.maps"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-battery-status": "1.2.5",
    "cordova-plugin-compat": "1.2.0",
    "cordova-plugin-camera": "2.4.1",
    "cordova-plugin-device": "1.1.7",
    "cordova-plugin-dialogs": "1.3.4",
    "cordova-plugin-file-transfer": "1.6.3",
    "cordova-plugin-geolocation": "2.4.3",
    "cordova-plugin-globalization": "1.0.8",
    "cordova-plugin-inappbrowser": "1.7.2",
    "cordova-plugin-media-capture": "1.4.3",
    "cordova-plugin-network-information": "1.3.4",
    "cordova-plugin-vibration": "2.1.6",
    "cordova-plugin-splashscreen": "4.1.0",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-call-number": "1.0.1",
    "cordova-plugin-googlemaps": "2.1.1"
};
// BOTTOM OF METADATA
});