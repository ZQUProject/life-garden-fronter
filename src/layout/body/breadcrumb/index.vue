<template>
  <div>
        <h1 class="wrapper-container-h1"></h1>
        <Layout class="wrapper-container-breadcrumb">
            <Breadcrumb :separator='separator'>
                <BreadcrumbItem 
                    v-for="item in currentPath" 
                    :to="item.path" 
                    :key="item.name"
                >{{ item.name }}</BreadcrumbItem>
            </Breadcrumb>
        </Layout>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({
  components: {
  },
})
export default class BodyBreadcrumb extends Vue {
    private separator: string = '<b style=\'color: #2d8cf0;padding: 0 5px;\'>=></b>';
      @Prop({
            type: Array, 
            required: true,
        })  currentPath !: any;
    watch() {
        this.getBreadCrumb();
    }
    created() {
        this.getBreadCrumb();
    }
    private getBreadCrumb() {
        // let matched =  this.$router.matched.filter(item => {
        //     if(item.name) {
        //         return true;
        //     }
        // })
    }
}
</script>

<style lang="scss" scoped>

.wrapper-container-breadcrumb {
    margin-left: 20px;

    background: #fff;
}
.wrapper-container-h1 {
    font-weight: 700;
    position: absolute;
    top: 0;
    left: 0;
    height: 40px;
    padding-left: 15px;
    border-left: 8px solid #5da9c8;
}
</style>
