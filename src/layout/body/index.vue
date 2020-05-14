<template>
    <div>
        <div class="wrapper-container-top">
            <BodyBreadcrumb :currentPath="currentPath"></BodyBreadcrumb>
        </div>
        <Col  :xs="0" :sm="0" :md="3" :lg="4" style="overflow:hidden">
            <BodySideBar></BodySideBar>
        </Col>
         <Col  :xs="24" :sm="24" :md="21" :lg="20"
           <BodyMain></BodyMain>
        </Col>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BodyBreadcrumb from './breadcrumb/index.vue';
import BodySideBar from './sidebar/index.vue';
import BodyMain from './main/index.vue'
import util from '@/utils/util'
@Component({
  components: {
      BodyBreadcrumb,
      BodySideBar,
      BodyMain
  },
})
export default class LayoutBody extends Vue {
    mounted() {
        this.init();
    }
    computed: {
    }
    watch: {

    }
    private get currentPath() {
        return [{path:'/home', name: "首页"}, {path : '/user/center', name :"123"}];  //  当前面包屑数组
    }
    private init() {
        // let pathArr = util.setCurrentPath(this, this.$route.name);
        // if (pathArr.length >= 2) {
        //     this.$store.commit("addOpenSubmenu", pathArr[1].name);
        // }
    }
}
</script>

<style lang="scss" scoped>
.wrapper-container-top{
    line-height: 40px;
    position: relative;
    overflow: inherit;
    height: 40px;
    border: none;
}
</style>
