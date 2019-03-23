<template>
  <section class="map">
    <div class="container map__container">
      <div class="row">
        <div class="col-lg-6">
          <h2 class="map__heading">Our Offices</h2>

          <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item" v-for="(item, index) in tabsData" :key="index">
              <a
                class="nav-link"
                data-toggle="tab"
                href="javascript:void(0);"
                role="tab"
                :class="{active: activeTab === index + 1}"
                @click="activeTab = index + 1, setcenter(index + 1)"
              >{{item.name}}</a>
            </li>
          </ul>
          <div class="tab-content">
            <div
              v-for="(item, index) in tabsData"
              :key="index"
              class="tab-pane fade"
              role="tabpanel"
              :class="{active: activeTab === index + 1, show: activeTab === index + 1}"
            >
              <h3 class="map__subheading">{{item.heading}}</h3>
              <address class="map__address">
                <p>{{item.address}}</p>
                <p>{{item.num}}</p>
                <p>{{item.country}}</p>
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="map-wrapper">
      <gmap-map
        ref="mapRef"
        class="test"
        :center="center"
        :zoom="12"
        style="width:100%;  height: 500px;"
        :options="{
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: false,
        styles: styles
      }"
      >
        <gmap-marker
          :key="index"
          v-for="(marker, index) in activeMarkers"
          :position="marker.position"
          :icon="{ url: require('../assets/marker.svg')}"
          @click="center=marker.position"
        ></gmap-marker>
      </gmap-map>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 1,
      tabsData: [
        {
          name: "Kyiv",
          heading: "Global Message Services Ukraine LLC",
          address: "Kuiv, Stepan Bandera, 33",
          num: "02066",
          country: "Ukraine"
        },
        {
          name: "New york",
          heading: "Global Message Services New york LLC",
          address: "New york, Stepan Bandera, 33",
          num: "02067",
          country: "USA"
        },
        {
          name: "Guangzhou",
          heading: "Global Message Services Guangzhou LLC",
          address: "Guangzhou, Stepan Bandera, 33",
          num: "02068",
          country: "China"
        },
        {
          name: "Barcelona",
          heading: "Global Message Services Barcelona LLC",
          address: "Barcelona, Stepan Bandera, 33",
          num: "02069",
          country: "Italy"
        }
      ],
      center: { lat: 50.417074, lng: 30.523888 },
      index: 0,
      styles: [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#212121"
            }
          ]
        },
        {
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575"
            }
          ]
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#212121"
            }
          ]
        },
        {
          featureType: "administrative",
          elementType: "geometry",
          stylers: [
            {
              color: "#757575"
            }
          ]
        },
        {
          featureType: "administrative.country",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e"
            }
          ]
        },
        {
          featureType: "administrative.land_parcel",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#bdbdbd"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#181818"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#1b1b1b"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#2c2c2c"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#8a8a8a"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#373737"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#3c3c3c"
            }
          ]
        },
        {
          featureType: "road.highway.controlled_access",
          elementType: "geometry",
          stylers: [
            {
              color: "#4e4e4e"
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161"
            }
          ]
        },
        {
          featureType: "transit",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#000000"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#3d3d3d"
            }
          ]
        }
      ],
      markers: [
        {
          index: 0,
          position: {
            lat: 50.417074,
            lng: 30.523888
          }
        },
        {
          index: 1,
          position: {
            lat: 40.718958,
            lng: -73.996695
          }
        },
        {
          index: 2,
          position: {
            lat: 23.133899,
            lng: 113.252588
          }
        },
        {
          index: 3,
          position: {
            lat: 41.376704,
            lng: 2.169
          }
        }
      ],
      places: [],
      currentPlace: null
    };
  },
  computed: {
    /**
     * Определение активного маркера
     */
    activeMarkers() {
      return this.markers.filter(item => {
        return item.index === this.index;
      });
    }
  },
  methods: {
    /**
     * Установка центра карты
     * @param {Number} num номер активного таба
     */
    setcenter(num) {
      const lat = this.markers[num - 1].position.lat;
      const lng = this.markers[num - 1].position.lng;
      this.$refs.mapRef.$mapPromise.then(map => {
        map.panTo({ lat: lat, lng: lng });
      });
      this.index = num - 1;
    }
  },
  mounted() {
    this.setcenter(1);
  }
};
</script>

<style lang="scss">
@import "../scss/variables.scss";
.map {
  padding-top: 50px;
  background: #000
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAGFBMVEUYGBgZGRkaGhobGxscHBweHh4fHx8hISFuCeYIAAAEkUlEQVRYw62YW7IdNxIDiUyA2v+O54PHDtvjh6Sr/45usqqQQPVZ6aoimG85XqiYchRPlSgw0bKtNNDGIT09zYna1rVXm1G2Dcuh7Uozm7PoQhOlTY3sLK1cYpmsbYsia9HLDuydt2pL9aR1JCrnuNnRosedGRclTYpX2cFwe7hisFS5Fa7rOClCrLeAc1BauCQ9gdHIZrlNjJlYWS2SIzDc0EkT0mtRJ2ZtdVYMvHN+o7cYCqU5hpaUq+5VOpPWCk6rWtNooWG39h6vYnmVoitTOprMUGzhFkE2kYTWd4i/fPlwWJyasel7RWaddzc63pGOrrXqjMWmrXLeqE0tvg+EmnE6xJPgMqqLtXBPtNbihXIwh6ZKLSEVJXesasHQQ0mu+Glki1qier63pUGLrILJgCxchhxLaayfA4nI1RuJa03SArGvxm00zTUhmNN2a3JYf75rZ10leCp40ZsasoB4ATbeQFKjsSql5gieP+hLPJiCpC28WnhTe/HeZqax8lvtLXjyzVxqXzOf6uo9YXtd5VsDB23hkaCTvLHpxUPmDJlET4O0jfEJiluOa5e1/VzIVmXa3J4hNdjSRz0HSltCGyJC6Fpkbiu0UMtx57v6+SmTmpXPJNU3bvX2qFDrKRZgtpVmkJlyzVJ4xTUNYmxW/fC6qZ21PbMpEYeYSaJlIOU9N0NrxJU1v0wMbVOe6E+pJn5mzSZ+H6yPq/dU6D6nD52Hgw0kUf+9hofX3gb9Vk5DJ71Gw+fs/2VCZ13J0egT2oQVsZYMJlxIt/TB7JVgPC17fphQsrRGLT3SjdMZtPepKT8njqP4acv2xt/VllXk0LJV02dKvOHwcMR2ht9fI/aIcpL+qJeeL2aAD6OO7w4DPe1ED+2rZrCtFiOcvVm+9JR3D2x6njNvpUB624bPVU8HOzqW+hrNsDTN8dS0vtoUglRgL3S0Xa3hdr6o1Vp76x5BZ2vr2Kfv9qKcFTsu6HygOj5i+jwXbpKUujFVcz7dX62ePp6sPAUlLa4vX/xzTjxfde9vXebBfCImM2vpWC+97ws1WStgHU/celzitelj8cQkCFybVN+4KU0fN4fsyfX/3fp8P/3/DUvnO7r5AVZfgqNhcxZ/H97zT65c8x7r92D2V3n4V6/ztHhO7amp0I8ivfeiaf1OyR3Hxghyr3H0uUBnAtClpg66M3kDnSecVjg/we9WXdJxO8B7aknG8+C68gFJj1Y3aZ9Xfbj/wPPHBHsykL3a6Fuk0H2y3aqeiVJiXD5MxLbp0F+FrV+yTnl+JqLBG7JIv83oQZhfteDz9/won12sL1e5+bw6nkscf1p9zk8Q82826/PjdRDz/Mx2GXc9m59OFjLmnnt7i7ZtQ+mV6RxPlc5wmyk97/1pPpvEyoPzTOKnyn3xpPTvY9VpXib8GtfP134qzNXR8yPrzj+D9Xw52jQx5w/BH9Ca50MunF3VkFZouOUif13mjpXqzS31PIzmtVmcL61r5WoMWCi8Vdz27ny5LJp4hr+pXVqa0rZ3MOibuP/C9fnpLPInZZ2v7wuZOb+Eof0fyNg4/tdBH4IAAAAASUVORK5CYII=);
  position: relative;
  color: #fff;
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    display: block;
    height: 500px;
    padding-top: 90px;
  }
}

.map__container {
  padding-bottom: 50px;
  @media (min-width: 992px) {
    padding-bottom: 0;
  }
}

.map__heading {
  margin-bottom: 32px;
}

.map__subheading {
  font-family: $fontLight;
  font-size: 26px;
  line-height: 30px;
  letter-spacing: 0.7px;
  margin-bottom: 37px;
}

.map__address {
  p {
    font-family: $fontLight;
    font-size: 11px;
    line-height: 14px;
    letter-spacing: 0.5px;
    margin-bottom: 7px;
  }
}

.nav-link {
  padding: 0;
  font-family: $fontBold;
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}

.nav-tabs .nav-link {
  border: 0;
  color: #fff;

  &:hover {
    color: $green;
  }
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: $green;
  background-color: transparent;
}

.nav-item:not(:last-child) {
  margin-right: 8px;
  @media (min-width: 375px) {
    margin-right: 20px;
  }
}

.nav.nav-tabs {
  border: 0;
  margin-bottom: 50px;
}

.map-wrapper {
  height: 500px;
  @media (min-width: 992px) {
    position: absolute;
    width: 50%;
  }
  width: 100%;
  right: 0;
  top: 0;
}
</style>
