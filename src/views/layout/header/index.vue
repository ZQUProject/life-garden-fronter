<template>
    <div class="layout-nav">
        <div class="layout-logo" @click="goHomePage">
            <img :src="logo" class="layout-logo-image" />
        </div>
        <div class="layout-nav-menu">
            <Menu mode="horizontal" :theme="theme1" active-name="1">
            
                    <MenuItem name="1">
                        <Icon type="ios-navigate"></Icon>
                        Item 1
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="ios-keypad"></Icon>
                        Item 2
                    </MenuItem>
                    <MenuItem name="3">
                        <Icon type="ios-analytics"></Icon>
                        Item 3
                    </MenuItem>
                    <MenuItem name="4">
                        <Icon type="ios-paper"></Icon>
                        Item 4
                    </MenuItem>
            </Menu>
        </div>
       
            <div class= "layout-nav-info">
                    <Badge :count="100">
                        <Icon type="ios-notifications-outline" size="26"></Icon>
                    </Badge>
            </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
  },
})
export default class LayoutHeader extends Vue {
    private theme1: string  = 'light';
    private logo: string = require('@/assets/images/logo.png');
    private HOME_PAGE: string = '/';
    private goHomePage(){
        this.$router.push({ path: this.HOME_PAGE }).catch( data => { });
    }
}

</script>

<style lang="scss" scoped>
.layout-nav{
    float: left;
    margin: 0 auto;
    width: 100%;
    background-color: #fff;
    padding: 0px 30px;
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
    padding-top: 8px;
}
</style>
