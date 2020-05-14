<template>
  <div style="display: inline-block;">
    <Icon type="ios-loading" size=18 color="#2d8cf0" class="spin-icon-load"></Icon>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({
  components: {
  },
})
export default class CircleLoading extends Vue {
    
}
</script>

<style lang="less">
  .spin-icon-load {
    margin-left: 5px;
    animation: ani-demo-spin 1s linear infinite;
  }
</style>

