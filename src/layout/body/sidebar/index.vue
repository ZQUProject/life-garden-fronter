<template>
  <div>
        <Sider hide-trigger :style="{background: '#fff'}">
            <Menu theme="light" width="auto" :open-names="['1']">
                <MenuGroup  v-for="menu in menuList" :key="menu.name" :title="menu.name">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        <span>{{menu.name}}</span>
                    </template>
                        <MenuItem v-for="(item, index ) in menu.children" :key="index" :name="item.name" :to="item.path">{{item.name}}</MenuItem>
                </MenuGroup >
            </Menu>
        </Sider>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
  },
})
export default class BodySideBar extends Vue {
    created(){}
    get menuList() {
        return [{id:'1', name:'资源共享', children:[{id:'2', name:'图书共享',path:'/resource/share'},{id:'3', name:'资源申请',path:'/resource/apply'},{id:'7', name:'抢票',path:'/resource/ticket'}]},
        {id:'4', name:'失物招领', children:[{id:'5', name:'失物',path:'/good/lost'},{id:'6', name:'找物',path:'/good/found'}]},
        {id:'8', name:'快捷办公', children:[{id:'9', name:'文件审批',path:'/work/approval'},{id:'10', name:'文件发布',path:'/work/file'},{id:'11', name:'官方通知',path:'/work/notice'}]},
        {id:'11', name:'编辑管理', children:[{id:'12', name:'审批信息',path:'/manage/approval'}]}]
    }
}

</script>

<style lang="scss" scoped>


</style>
