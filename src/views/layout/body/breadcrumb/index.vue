<template>
  <div>
        <h1 class="wrapper-container-h1"></h1>
        <Layout class="wrapper-container-breadcrumb">
            <Breadcrumb :separator='separator'>
                <BreadcrumbItem to="/">
                    <Icon type="ios-home-outline"></Icon> Home
                </BreadcrumbItem>
                <BreadcrumbItem to="/components/breadcrumb">
                    <Icon type="logo-buffer"></Icon> Components
                </BreadcrumbItem>
                <BreadcrumbItem >
                    <Icon type="ios-cafe"></Icon> Breadcrumb
                </BreadcrumbItem>
            </Breadcrumb>
        </Layout>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
  },
})
export default class BodyBreadcrumb extends Vue {
    private separator: string = "<b style='color: #2d8cf0;padding: 0 5px;'>=></b>";
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
