<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
@import "//at.alicdn.com/t/font_2690774_lq6kq6yhy4j.css";
 [class^="icon-wy"], [class^="icon-wy"] {
    font-family: "iconfont", serif !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
