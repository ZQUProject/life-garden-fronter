<template>
  <Form ref="activityFormValidate" :model="activityFormValidate" :rules="activityRuleValidate" :label-width="80"
        class="resource-form">
    <FormItem label="标题" prop="title">
      <Input v-model="activityFormValidate.title" placeholder="请输入标题"></Input>
    </FormItem>

    <FormItem label="举办地点" prop="location">
      <Input v-model="activityFormValidate.location" placeholder="请输入内容"></Input>
    </FormItem>

    <FormItem label="活动范围" prop="scopeId">
      <Select v-model="activityFormValidate.scopeId" placeholder="请选择活动范围">
        <Option value="1">第一教学楼</Option>
        <Option value="2">第二教学楼</Option>
        <Option value="3">图书馆</Option>
        <Option value="4">学生活动中心</Option>
      </Select>
    </FormItem>

    <FormItem label="开始时间" prop="startTime">
      <DatePicker type="datetime" format="yyyy-MM-dd HH:mm" v-model="activityFormValidate.startTime"
                  placeholder="选择日期和时间（不含秒）"
                  style="width: 200px"></DatePicker>
    </FormItem>

    <FormItem label="结束时间" prop="endTime">
      <DatePicker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间（不含秒）"
                  v-model="activityFormValidate.endTime" style="width: 200px"></DatePicker>
    </FormItem>

    <FormItem label="可见范围" prop="socpeType">
      <Select v-model="activityFormValidate.socpeType" placeholder="请选择可见范围">
        <Option value="0">全校</Option>
        <Option value="1">计算机学院</Option>
        <Option value="2">文学院</Option>
        <Option value="3">法学院</Option>
        <Option value="5">数学院</Option>
        <Option value="6">外国语学院</Option>
        <Option value="7">管理学院</Option>
      </Select>
    </FormItem>

    <FormItem label="人数限制" prop="userLimit">
      <Input v-model="activityFormValidate.userLimit" placeholder="请输入人数限制"></Input>
    </FormItem>

    <FormItem label="内容介绍" prop="content">
      <Input v-model="activityFormValidate.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
             placeholder="请输入内容"></Input>
    </FormItem>


    <FormItem>
      <Button type="primary" @click="handleSubmit('activityFormValidate')" class="form-button">提交</Button>
      <Button @click="handleReset('activityFormValidate')" class="form-button">重置</Button>
    </FormItem>
  </Form>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';

    @Component
    export default class ActivityForm extends Vue {

        private activityFormValidate = {
            title: '',
            location: '',
            scopeId: '',
            startTime: '',
            endTime: '',
            socpeType: '',
            userLimit: '',
            content: ''
        };
        private activityRuleValidate = {
            title: [
                {required: true, message: '标题不能为空', trigger: 'blur'}
            ],
            location: [
                {required: true, message: '地点不能为空', trigger: 'blur'}
            ],
            scopeId: [
                {required: true, message: '请选择活动范围', trigger: 'change'}
            ],
            startTime: [
                {required: true, type: 'date', message: '请选择开始时间', trigger: 'change'}
            ],
            endTime: [
                {required: true, type: 'date', message: '请选择结束时间', trigger: 'change'}
            ],
            content: [
                {required: true, message: '请输入活动介绍', trigger: 'blur'},
                {type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur'}
            ],
            userLimit: [
                {required: true, message: '人数限制不能为空', trigger: 'blur'}
            ],
            socpeType: [
                {required: true, message: '请选择可见范围', trigger: 'change'}
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