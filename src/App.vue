<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component({
  components: {
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
html, body{
    width: 100%;
    // height: 100%;
    padding: 0;
    border: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 18px;
    line-height: 1;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // overflow: hidden;
}
*, ::before, ::after{
    box-sizing: inherit;
    font-size: inherit;
}
#app{
    width: 100%;
    height: 100%;
    position: absolute;
}
</style>
