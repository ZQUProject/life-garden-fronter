<template>
   <Carousel autoplay loop>
        <CarouselItem v-for="(carousel, index,) in carouselList" :key="index">
            <a :href="carousel.url"><img class="carousel-img" :src="carousel.imageUrl" :alt="carousel.titile" /></a>
            <div class="demo-carousel" v-show="carousel.titile"></div>
        </CarouselItem>
    </Carousel>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({
  components: {
  },
})
export default class HomeCarousel extends Vue {
     @Prop({
            type: Array, 
            required: true,
            default: [] 
        })  carouselList !: any;
    private value2 = 0;
}
</script>

<style lang="scss" scoped>
.carousel-img {
    height:100%;
    width: 100%;
    display: block;
}
</style>