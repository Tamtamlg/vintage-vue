<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap-reboot.scss";
@import "../node_modules/bootstrap/scss/bootstrap-grid.scss";
@import "../node_modules/bootstrap/scss/_nav.scss";
@import "scss/variables.scss";

@font-face {
  font-family: "Suisse Intl";
  src: url("fonts/suisseintl-webfont.woff2") format("woff2"),
    url("fonts/suisseintl-webfont.woff") format("woff"),
    url("fonts/suisseintl-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Suisse Intl - Light";
  src: url("fonts/suisseintl-light-webfont.woff2") format("woff2"),
    url("fonts/suisseintl-light-webfont.woff") format("woff"),
    url("fonts/suisseintl-light-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Suisse Intl - Semi Bold";
  src: url("fonts/suisseintl-semibold-webfont.woff2") format("woff2"),
    url("fonts/suisseintl-semibold-webfont.woff") format("woff"),
    url("fonts/suisseintl-semibold-webfont.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

body {
  margin: 0;
  padding: 0;
  font-family: $font;
  font-size: 15px;
  font-weight: 300;
  color: $black;
  background: #fff;
  letter-spacing: -0.1px;
}

* {
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
}

@media (min-width: 1280px) {
  .container {
    max-width: 1190px;
  }
}

h1 {
  font-family: $fontLight;
  font-size: 50px;
  line-height: 48px;
}

h2 {
  font-family: $fontLight;
  font-size: 34px;
  line-height: 48px;
}

p {
  line-height: 28px;
}

.main {
  padding-top: 60px;
}

.main-heading {
  margin-bottom: 30px;
}

.colored {
  color: $green;
}
</style>
