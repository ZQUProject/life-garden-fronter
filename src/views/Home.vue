<template>

     <div class="layout">
        
            <Header class="layout-header">
               <LayoutHeader></LayoutHeader>
            </Header>
            <Layout class="layout-body"> 
                <LayoutBody></LayoutBody>
            </Layout>
            <!-- <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer> -->
       
        <Footer class="layout-footer">
            <LayoutFooter></LayoutFooter>
        </Footer>
        <BackTop style="bottom: 100px; right: 30px;"></BackTop>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LayoutHeader from '@/views/layout/header/index.vue';
import LayoutBody from '@/views/layout/body/index.vue';
import LayoutFooter from '@/views/layout/footer/index.vue';
@Component({
  components: {
    LayoutHeader : LayoutHeader,
    LayoutBody : LayoutBody,
    LayoutFooter : LayoutFooter,
  },
})
export default class Home extends Vue {
    create(){
        console.log(this)
    }
}

</script>

<style lang="scss" scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    width: 100%;
    // height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
}
.layout-header{
    background: #fff;
    padding: 0;
}
.layout-body{
    width: 96%;
    margin: 20px auto;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
    min-height: 32rem;
}
.layout-footer{
    background: #fff;
    position: relative;
    padding: 0;
    width: 100%;
    bottom:0;
}
</style>