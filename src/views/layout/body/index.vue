<template>
    <div>
        <div class="wrapper-container-top">
            <BodyBreadcrumb></BodyBreadcrumb>
        </div>
        <div  class="ivu-col-span-4">
            <BodySideBar></BodySideBar>
        </div>
       <div  class="ivu-col-span-20">
           <div style="background:#eee;padding: 20px">
            <Card :bordered="false">
                <p slot="title">No border title</p>
                <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
            </Card>
        </div><div style="background:#eee;padding: 20px">
            <Card :bordered="false">
                <p slot="title">No border title</p>
                <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
            </Card>
        </div><div style="background:#eee;padding: 20px">
            <Card :bordered="false">
                <p slot="title">No border title</p>
                <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
            </Card>
        </div><div style="background:#eee;padding: 20px">
            <Card :bordered="false">
                <p slot="title">No border title</p>
                <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
            </Card>
    </div>
    <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
            <p slot="title">No border title</p>
            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
        </Card>
    </div>
    <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
            <p slot="title">No border title</p>
            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
        </Card>
    </div>
    <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
            <p slot="title">No border title</p>
            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
        </Card>
    </div>
    <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
            <p slot="title">No border title</p>
            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
        </Card>
    </div>
    <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
            <p slot="title">No border title</p>
            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
        </Card>
    </div>
    <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
            <p slot="title">No border title</p>
            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
        </Card>
    </div>
       </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BodyBreadcrumb from './breadcrumb/index.vue';
import BodySideBar from './sidebar/index.vue';
@Component({
  components: {
      BodyBreadcrumb: BodyBreadcrumb,
      BodySideBar: BodySideBar,
  },
})
export default class LayoutBody extends Vue {
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
