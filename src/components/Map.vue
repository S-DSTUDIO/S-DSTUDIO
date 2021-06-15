<template>
  <div id="map">
    <l-map
      :zoom="zoom"
      :center="center"
      style="height: 100%"
    >
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-marker :lat-lng="position">
        <l-icon :icon-url="icon.iconUrl"
          :icon-size="icon.iconSize"
          :icon-anchor="icon.iconAnchor"
          :popup-anchor="icon.popupAnchor"
          :shadow-url="icon.shadowUrl"
          :shadow-size="icon.shadowSize"></l-icon>
        <l-popup>
          <div class="popup-text d-flex justify-content-center">
            <a href="https://www.google.com.tw/maps/place/S-D+STUDIO(%E6%80%9D%E5%B8%9D%E5%BD%B1%E5%83%8F%E4%BA%8B%E6%A5%AD%E4%BC%81%E6%A5%AD%E7%A4%BE)/@23.0127678,120.2656828,15.5z/data=!4m12!1m6!3m5!1s0x346e7180c9c2c2bd:0x39e5e4c0daf7922c!2zUy1EIFNUVURJTyjmgJ3luJ3lvbHlg4_kuovmpa3kvIHmpa3npL4p!8m2!3d23.0143876!4d120.2739939!3m4!1s0x346e7180c9c2c2bd:0x39e5e4c0daf7922c!8m2!3d23.0143876!4d120.2739939?hl=zh-TW&authuser=0"
            target="_blank">
            思帝影像事業企業社
            <br>S-D STUDIO
            </a>
          </div>
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { Icon } from 'leaflet';
import {
  LMap, LTileLayer, LMarker, LPopup, LIcon,
} from 'vue2-leaflet';

// eslint-disable-next-line no-underscore-dangle
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  // eslint-disable-next-line global-require
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  // eslint-disable-next-line global-require
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  // eslint-disable-next-line global-require
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LIcon,
  },
  data() {
    return {
      zoom: 14,
      center: [23.015, 120.2742728477136],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> S-D',
      position: [23.01405, 120.2742],
      icon: {
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconAnchor: [12, 41],
        popupAnchor: [0, -38],
        shadowSize: [41, 41],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
#map{
  height: 205px;
  .popup-text a{
    margin: 0 auto;
    color: #000;
    text-align: center;
    font-family: "GenJyuuGothic-Medium";
    font-size: 0.5rem !important;
    &:hover{
      text-decoration: none;
    }
  }
}
@media (max-width: 1200px){
  #map{
    height: 300px;
  }
}
</style>
