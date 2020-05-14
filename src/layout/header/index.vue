<template>
    <div class="layout-nav">
        <div class="layout-logo" @click="goHomePage">
           <a> <img :src="logo" class="layout-logo-image" /> </a>
        </div>
            <div class= "layout-nav-info">
                <Info></Info>
            </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Info from './component/Info.vue'
@Component({
  components: {
      Info: Info
  },
})
export default class LayoutHeader extends Vue {
    private theme1: string  = 'light';
    private logo: string = require('@/assets/images/logo.png');
    private HOME_PAGE: string = '/';
    private goHomePage() {
        this.$router.push({ path: this.HOME_PAGE }).catch( (data) => { });
    }
}
</script>

<style lang="scss" scoped>
.layout-nav{
    float: left;
    margin: 0 auto;
    width: 100%;
    background-color: #fff;
    padding: 0px 15px;
}
.layout-nav .layout-nav-menu{
    float: left
}
.layout-logo{
    width: 130px;
    height: 50px;
    background: #fff;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 5px;
    left: 20px;
    margin-right: 50px;
}
.layout-logo .layout-logo-image{
    width: 100%;
    height: 100%;
}

.layout-nav-info{
    margin-right: 1rem;
    float: right;
}
</style>
