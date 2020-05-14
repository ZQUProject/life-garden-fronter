<template>
    <div>
            <div style="background:#eee;padding: 20px">
                <Card :bordered="false">
                    <p slot="title">No border title</p>
                    <Button type="primary" slot="extra">查看详情</Button>
                    <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                </Card>
            </div>
            <div style="background:#eee;padding: 20px">
                <Card :bordered="false">
                    <p slot="title">No border title</p>
                    <Button type="primary" slot="extra">查看详情</Button>
                    <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                </Card>
            </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
  },
})
export default class Lost extends Vue {
}
</script>

<style>

</style>