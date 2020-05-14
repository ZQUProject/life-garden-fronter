<template>
    <div class="footer-main">        
        <span> 213123123 </span><br/>
        <span> 213123123 </span><br/>
        <span> 213123123 </span><br/>
        <span> 213123123 </span><br/>
        <span> 213123123 </span><br/>
        <span> 213123123 </span><br/>
        <span> 213123123 </span><br/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {

  },
})
export default class Footer extends Vue {
}
</script>

<style lang="scss" scoped>
.footer-main {
    border-bottom-right-radius: 14px;
    border-bottom-left-radius: 14px;
    background-color: #5da9c8;
    color: white;
}
</style>
