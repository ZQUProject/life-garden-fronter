<template>
  <Form ref="ticketFormValidate" :model="ticketFormValidate" :rules="ticketRuleValidate" :label-width="80"
        class="resource-form">
    <FormItem label="抢票标题" prop="title">
      <Input v-model="ticketFormValidate.title" placeholder="请输入标题"></Input>
    </FormItem>

    <FormItem label="总票数" prop="userNumberLimit">
      <Input v-model="ticketFormValidate.userNumberLimit" placeholder="请输入总票数"></Input>
    </FormItem>




    <FormItem label="开始时间" prop="startTime">
      <DatePicker type="datetime" format="yyyy-MM-dd HH:mm"
                  v-model="ticketFormValidate.startTime"
                  placeholder="选择日期和时间（不含秒）"
                  style="width: 200px"></DatePicker>
    </FormItem>

    <FormItem label="结束时间" prop="endTime">
      <DatePicker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间（不含秒）"
                  v-model="ticketFormValidate.endTime" style="width: 200px"></DatePicker>
    </FormItem>
    <FormItem label="抢票介绍" prop="detail">
      <Input v-model="ticketFormValidate.detail" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
             placeholder="请输入内容介绍"></Input>
    </FormItem>

    <FormItem>
      <Button type="primary" @click="handleSubmit('ticketFormValidate')" class="form-button">提交</Button>
      <Button @click="handleReset('ticketFormValidate')" class="form-button">重置</Button>
    </FormItem>
  </Form>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';

    @Component
    export default class ActivityForm extends Vue {

        private ticketFormValidate = {
            title: '',
            userNumberLimit:'',
            startTime: '',
            endTime: '',
            detail:''

        };
        private ticketRuleValidate = {
            title: [
                {required: true, message: '标题不能为空', trigger: 'blur'}
            ],
            userNumberLimit: [
                {required: true, message: '总票数不能为空', trigger: 'blur'}
            ],
            startTime: [
                {required: true, type: 'date', message: '请选择开始时间', trigger: 'change'}
            ],
            endTime: [
                {required: true, type: 'date', message: '请选择结束时间', trigger: 'change'}
            ],
            detail: [
                {required: true, message: '请输入内容介绍', trigger: 'blur'},
                {type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur'}
            ]

        };


        handleSubmit(name) {
            let el: any = this.$refs[name];
            el.validate((valid) => {
                if (valid) {
                    this.$Message.success('提交成功!');
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
        };

        handleReset(name) {
            let el: any = this.$refs[name];
            el.resetFields();
        };
    }
</script>

<style lang="scss" scoped>
  .resource-form {
    margin: 0px auto;
    width: 30rem;
    padding: 8px 20px;
    padding-top: 15px;
    border: 2px solid #5da9c8;
    border-radius: 30px;
    box-shadow: 2px 0 3px -1px #5da9c8, 0 2px 3px -1px #5da9c8;
  }

  .form-button{
    margin-left: 50px;
  }
</style>