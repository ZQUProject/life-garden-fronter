<template>
  <div class="login">
    <div class="header Cblue">
      <div class="wrapper clearfix">
        <h1>VUE+IVIEW V1.0</h1>
        <span class="QRspan">
          <Icon type="logo-googleplus" size="24"/>
          <span>关注公众号</span>
        </span>
      </div>
    </div>
    <!--:style="{height: screenHeight}"-->
    <div class="content">
      <div class="notice-panel">
        <div class="content-notice">
          <img src="../assets/logo.png"/>
        </div>
      </div>

      <div class="login-panel">
        <div>
          <img src="../assets/logo.png" class="login-logo"/>
        </div>
        <div class="formDiv">

          <Form ref="loginForm" class="login-input">
            <FormItem prop="userName">

              <Input  class="el-input input" placeholder="账号"  size="large">
                <span slot="prefix">
                  <svg-icon icon-class="user" class="input-icon"></svg-icon>
                </span>
              </Input>
            </FormItem>

            <FormItem prop="password">
              <Input type="password" class="el-input input" size="large" placeholder="密码">
                <span slot="prefix">
                  <svg-icon icon-class="password" class="input-icon"></svg-icon>
                </span>
              </Input>
            </FormItem>

            <FormItem prop="vailted">
              <div class="input-left input-code">
                <Input style="width: 60%; vertical-align: middle;"
                       size="large" class="el-input input" placeholder="验证码">
                  <span slot="prefix">
                 <svg-icon icon-class="verificationCode" class="input-icon"></svg-icon>
                  </span>
                </Input>
                <img src="../assets/logo.png" class="login-code"/>
              </div>
            </FormItem>

            <FormItem style="color: white">
              <label>记住我</label>
              <i-switch size="middle">
                <span slot="open">开</span>
                <span slot="close">关</span>
              </i-switch>
            </FormItem>
            <FormItem>
              <Button @click="handleSubmit" size="large" type="primary"
                      long>登录
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>


    <div class="footer">
      <div class="wrapper">
        <span>Copyright © 2019-2020 Lin.Su</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style>

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
    background-image: url('../assets/images/login.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
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
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
    height: 100%;
    max-height: 420px;
    display: flex;
  }

  .content-notice {
    padding-top: 40px;
    padding-left: 50px;
    padding-right: 50px;
  }
  .notice-panel{
    flex: 5;
    float: left;
    height: 100%;
    background-color: rgba(0,0,0,0.66);
    overflow: auto;
    display: block;
    border-radius: 6px;
  }
  .login-panel {
    color: white;
    margin-left: 20px;
    width: 350px;
    height: 100%;
    border-radius: 6px;
    background-color: rgba(0,0,0,0.66);
  }
  .login-logo{
    height: 100px;
    width: 100px;
    margin-left: 32%;
    margin-bottom: 5px;
  }
  .login-code {
    width: 33%;
    display: inline-block;
    height: 38px;
    float: right;
    img{
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

</style>