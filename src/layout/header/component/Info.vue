  
<template>
    <div class="right-menu">
		<div>
        	<Badge :count='messageCount'>
            	<Icon type="ios-notifications-outline" size="26"></Icon>
			</Badge>
		</div>
		<div>
      <Dropdown  class="avatar-container right-menu-item" >
        <div class="avatar-wrapper">
          <img :src="avatar" class="user-avatar">
          <Icon type="ios-arrow-down"></Icon>
        </div>
        <DropdownMenu slot="list">
          <router-link to="/user/center">
            <DropdownItem>
              个人中心
            </DropdownItem>
          </router-link>
          <span style="display:block;" @click="open">
            <DropdownItem divided>
              退出登录
            </DropdownItem>
          </span>
        </DropdownMenu>
      </Dropdown>
	  </div>
    </div>
</template>


<script lang="ts">
import { mapGetters } from 'vuex'
import { Component, Vue } from 'vue-property-decorator';
import { getUserMessage } from '@/api/user'
@Component({
  components: {

  },
})
export default class Info extends Vue {
    private avatar = require('@/assets/avatar/avatar1.jpeg' )
	private dialogVisible = false
	private messageCount = 0
	created() {
		this.getMessage()
	}
	private async getMessage() {
		getUserMessage().then(response => {
			if(response.count >= 0) {
				this.messageCount = response.count;
			}
			console.log( response)
		});
	}
    private open() {
        this.$Modal.confirm({
            title: '退出',
            content: '<p>确定注销并退出系统吗？</p>',
            okText: '确定',
            cancelText: '取消',
            onOk: () => {
               this.logout()
            },
        })
      }
    privatetoggleSideBar() {
        this.$store.dispatch('ToggleSideBar')
    }
    private logout() {
        this.dialogVisible = false
        this.$store.dispatch('LogOut').then(() => {
            location.reload() // 为了重新实例化vue-router对象 避免bug
        })
	}
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .right-menu {
		div {
			display: inline-block;
			margin-left: 10px;
		}
      &:focus{
        outline: none;
      }
      .right-menu-item {
        display: inline-block;
        margin: 0 8px;
      }
      .screenfull {
        height: 20px;
      }
      .international{
        vertical-align: top;
      }
      .theme-switch {
        vertical-align: 15px;
      }
      .avatar-container {
        height: 50px;
        margin-right: 30px;
        .avatar-wrapper {
          margin-top: 5px;
          position: relative;
          .user-avatar {
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 10px;
          }
          .el-icon-caret-bottom {
            cursor: pointer;
            position: absolute;
            right: -20px;
            top: 25px;
            font-size: 12px;
          }
        }
      }
    }
</style>