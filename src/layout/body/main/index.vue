<template>
        <Col :xs="24" :sm="24" :md="21" :lg="20">
            <section>
                <router-view :key="path"/>
            </section>
        </Col>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
  },
})
export default class BodyMain extends Vue {
    computed() {
     
    }
     get cachedPage(){
        return "/home";
    }
    get path() {
      console.log(this.$route.fullPath)
      return this.$route.fullPath;
    }
}
</script>

<style>

</style>