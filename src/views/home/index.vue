<template>
   <div>
        <Col :xs="24" :sm="15" :md="17" :lg="17">
            <div>
                <HomeCarousel autoplay :carouselList="carouselList"></HomeCarousel>
            </div>
            <div style="justify-content: space-between;display: flex; flex:1;flex-flow: wrap; padding:0 30px;">
                <Col :md="10" :lg="10">
                    <div style="background:#eee;padding: 20px">
                        <Card :bordered="false">
                            <p slot="title">No border title</p>
                            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                        </Card>
                    </div>
                </Col>
                <Col :md="10" :lg="10">
                    <div style="background:#eee;padding: 20px">
                        <Card :bordered="false">
                            <p slot="title">No border title</p>
                            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                        </Card>
                    </div>
                </Col>
            <Col :md="10" :lg="10">
                    <div style="background:#eee;padding: 20px">
                        <Card :bordered="false">
                            <p slot="title">No border title</p>
                            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                        </Card>
                    </div>
                </Col>
                <Col :md="10" :lg="10">
                    <div style="background:#eee;padding: 20px">
                        <Card :bordered="false">
                            <p slot="title">No border title</p>
                            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                        </Card>
                    </div>
                </Col>
                <Col :md="10" :lg="10">
                    <div style="background:#eee;padding: 20px">
                        <Card :bordered="false">
                            <p slot="title">No border title</p>
                            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                        </Card>
                    </div>
                </Col>
            </div>
        </Col>
        <Col :xs="0" :sm="9" :md="7" :lg="7">
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
        </Col>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeCarousel  from '@/components/carousel/index.vue';
import { getHomeCarousel } from '@/api/show'
@Component({
  components: {
      HomeCarousel
  },
})
export default class HomeDefault extends Vue {
    private carouselList = []
    created() {
        this.getCarouseList();
    }
    private async getCarouseList() {
        getHomeCarousel().then(res => {
            console.log(res);
            this.carouselList = res.carouselList;
        })
    }
}
</script>

<style>

</style>