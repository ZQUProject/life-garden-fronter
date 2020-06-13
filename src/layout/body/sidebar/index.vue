<template>
  <div>
    <Sider hide-trigger :style="{background: '#fff'}">
      <Menu theme="light" width="auto" :open-names="['1']">
        <MenuGroup v-for="menu in menuList" :key="menu.name" :title="menu.name">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            <span>{{menu.name}}</span>
          </template>
          <MenuItem v-for="(item, index ) in menu.children" :key="index" :name="item.name" :to="item.path">
            {{item.name}}
          </MenuItem>
        </MenuGroup>
      </Menu>
    </Sider>
  </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class BodySideBar extends Vue {
        created() {
        }

        get menuList() {
            return [
                {
                    id: '1', name: '资源共享',
                    children: [
                        {id: '2', name: '图书共享', path: '/resource/bookShare'},
                        {id: '3', name: '兼职', path: '/resource/partTime'},
                        {id: '4', name: '抢票', path: '/resource/ticket'},
                        {id: '5', name: '活动', path: '/activity/activity'}]
                },
                {
                    id: '6', name: '失物招领',
                    children: [
                        {id: '7', name: '失物', path: '/lost'},
                        {id: '8', name: '找物', path: '/lost'},
                        {id: '15', name: '页面测试', path: '/work/approval'}
                    ]
                },
                /*{id:'8', name:'快捷办公', children:[{id:'9', name:'文件审批',path:'/work/approval'},{id:'10', name:'文件发布',path:'/work/file'},{id:'11', name:'官方通知',path:'/work/notice'}]},*/
                {
                    id: '9', name: '编辑管理',
                    children: [
                        {id: '10', name: '活动审批', path: '/manage/activity'},
                        {id: '11', name: '图书审批', path: '/manage/bookShare'},
                        {id: '12', name: '失物审批', path: '/manage/lost'},
                        {id: '13', name: '兼职审批', path: '/manage/partTime'},
                        {id: '14', name: '抢票审批', path: '/manage/ticket'}]
                }]
        }
    }

</script>

<style lang="scss" scoped>


</style>
