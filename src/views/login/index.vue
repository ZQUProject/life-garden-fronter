<template>
  <div class="login">
    <div class="header">

    </div>
    <!--:style="{height: screenHeight}"-->
    <div class="content">
      <div class="notice-panel">
          <img :src="loginShowImage"  style="width:100%; height:100%"/>
      </div>

      <div class="login-panel">
        <div>
          <img :src="logoImg" class="login-logo"/>
        </div>
        <div class="formDiv">

          <Form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-input"  auto-complete="on">
            <FormItem prop="account">
              <Input v-model="loginForm.account" class="el-input input" placeholder="账号" size="large">
                <Icon custom="i-icon i-icon-login-user" slot="prepend" />
              </Input>
            </FormItem>

            <FormItem prop="password">
              <Input v-model="loginForm.password" type="password" class="el-input input" size="large" placeholder="密码">
               <Icon custom="i-icon i-icon-password" slot="prepend" />
              </Input>
            </FormItem>
            <FormItem prop="captcha">
              <div class="input-left input-code">
                <Input v-model="loginForm.captcha" style="width: 60%; vertical-align: middle;"
                       size="large" class="el-input input" placeholder="验证码">
                  <Icon custom="i-icon i-icon-yanzhengma" slot="prepend" />
                </Input>
				<div style="margin-left: 15px;">
                	<img :src="captchaUrl" @click="getCaptchaImg">
				</div>
              </div>
            </FormItem>
            <FormItem class="login-form-content-label" label="记住我">
                <i-switch v-model="loginForm.rememberMe" size="large">
                    <span slot="open">On</span>
                    <span slot="close">Off</span>
                </i-switch>
            </FormItem>
            <FormItem>
               <Button type="primary" :loading="loading" @click="handleSubmit" long>
                  <span v-if="!loading">登录</span>
                  <span v-else>Loading...</span>
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="wrapper">
        <span>Copyright © 2020-2020 LWJ, YZY, YSK</span>
      </div>
    </div>
        <vue-particles
            color="#dedede"
            :particleOpacity="0.7"
            :particlesNumber="80"
            shapeType="circle"
            :particleSize="4"
            linesColor="#dedede"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
      >
      </vue-particles>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { isValidAccount } from '@/utils/validator';
import { login, getCaptchaImage } from '@/api/user';
import  { encrypt, decrypt } from '@/utils/crypt'
import Cookies from 'js-cookie'
import allLoginShowImage from '@/assets/images'

const validateAccount = (rule: any, value: string, callback: any) => {
  if (!isValidAccount(value)) {
    callback(new Error('请输入正确的用户名'));
  } else {
    callback();
  }
};
const validateCaptcha = (rule: any, value: string, callback: any) => {
	if(value == '' || value == undefined || value == null ||value.length != 4) {
		callback(new Error('请输入4位验证码'));
	} else  {
		callback();
	}
}
@Component({
  components: {
  },
})
export default class Login extends Vue {
	private buttonSize = 100;
  private logoImg = require("../../assets/images/logo.png");
  private allLoginShowImage = allLoginShowImage;
  private  randIndex = Math.floor(Math.random() * this.allLoginShowImage.length)
  private loginShowImage = this.allLoginShowImage[this.randIndex]
	private captchaUrl =  '';
	private loginForm: any = {
		account: '',
		password: '',
		captcha: '',
		rememberMe: false,
		uuid: ''
  };
  computed() {
     
  }
	private loading: boolean = false;
		private loginRules: any = {
			account: [
				{ required: true, trigger: 'blur', message: '账号不能为空' },
				{ trigger: 'blur', validator: validateAccount }

			],
			password: [
				{ required: true, trigger: 'blur', message: '密码不能为空' },
			],
			captcha: [
				{ required: true, trigger: 'blur', message: '验证码不能为空' },
				{ trigger: 'blur', validator: validateCaptcha }
			]
	};

	created () {
		// 获取记住我时的Cookie值'
		this.getCookieRememberValue();
		// 获取验证码
		this.getCaptchaImg();
	}
	private getCaptchaImg() {
		getCaptchaImage().then(res => {
      this.loginForm.uuid = res.uuid
      this.captchaUrl = 'data:image/gif;base64,' + res.captchaImage;
		})
	}
	private getCookieRememberValue() {
		let user = Cookies.get('LIFE_GARDEN_SYSTEM_USER');
		if(!(user === undefined)) {
			this.loginForm.rememberMe = true;
            user = decrypt(user).split('&')
            this.loginForm = {
              account: user[0],
              password: user[1]
            }
		}
	}
	private handleSubmit() {

	}
}
</script>

<style lang="scss" scoped>
@import '../../components/icon/style.scss';
  .el-input input {
    background: none;
    text-indent: 10px;
    -webkit-appearance: none;
    border-radius: 14px;
    border: 1px solid white;
    box-sizing: border-box;
    color: white;
    display: block;
    font-size: inherit;
    height: 42px;
    line-height: 1;
    outline: 0;
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
    width: 100%;
  }


  .login-input {
  margin-left: 20px;
  margin-right: 20px;
}
.input-icon{
  height: 39px;
  margin-top: 6px;
  margin-left: 5px;
}
.input{
  -webkit-appearance: none;

}

  .login{
    width: 100%;
    height: 100%;
    background-image: url('../../assets/images/background.jpg');
    background-size: cover;
    background-position: center;
    position: absolute;
    overflow-y: hidden;
    &-con{
      position: absolute;
      right: 160px;
      top: 50%;
      transform: translateY(-60%);
      width: 300px;
      &-header{
        font-size: 16px;
        font-weight: 300;
        text-align: center;
        padding: 30px 0;
      }
      .form-con{
        padding: 10px 0 0;
      }
      .login-tip{
        font-size: 10px;
        text-align: center;
        color: #c3c3c3;
      }
    }
  }
  .content{
    /*border:1px solid red;*/
    position: relative;
    margin-top: 10%;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    height: 100%;
    max-height: 420px;
    display: flex;
  }

  
  .notice-panel{
    flex: 5;
    float: left;
    padding: 0;
    height: 100%;
    background-color: rgba(0,0,0,0.66);
    display: block;
    border-radius: 15px;
    overflow: hidden;
  }
  .login-panel {
    color: white;
    margin-left: 20px;
    width: 350px;
    height: 100%;
    border-radius: 15px;
    background-color: rgba(0,0,0,0.66);
  }
  .login-logo{
    height: 100px;
    width: 100px;
    margin-left: 32%;
    margin-bottom: 5px;
  }
  .captcha-code {
    width: 33%;
    display: inline-block;
    height: 38px;
    float: right;
    img {
      width: 100%;
      height: 100%;
      cursor: pointer;
      vertical-align:middle
    }
  }
  .input-left{
    background-repeat: no-repeat;
    background-position: left;
    background-position-x: 15px;
    background-size: 19px 19px;
    font-size: 14px;
    width: 100%;
    height: 42px;
  }
  .input-code{
    display: flex;
  }
.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
}
.login-form-content-label > :first-child{
	color: white !important;
}
</style>