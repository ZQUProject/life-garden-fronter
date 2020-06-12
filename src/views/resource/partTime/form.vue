<template>
  <Form ref="partTimeFormValidate" :model="partTimeFormValidate" :rules="partTimeRuleValidate" :label-width="80"
        class="resource-form">
    <FormItem label="兼职标题" prop="title">
      <Input v-model="partTimeFormValidate.title" placeholder="请输入标题"></Input>
    </FormItem>

    <FormItem label="工作要求" prop="workRequire">
      <Input v-model="partTimeFormValidate.workRequire" placeholder="请输入工作要求"></Input>
    </FormItem>

    <FormItem label="工作内容" prop="workContent">
      <Input v-model="partTimeFormValidate.workContent" placeholder="请输入内容"></Input>
    </FormItem>

    <FormItem label="开始时间" prop="startTime">
      <DatePicker type="datetime" format="yyyy-MM-dd HH:mm"
                  v-model="partTimeFormValidate.startTime"
                  placeholder="选择日期和时间（不含秒）"
                  style="width: 200px"></DatePicker>
    </FormItem>

    <FormItem label="结束时间" prop="endTime">
      <DatePicker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="选择日期和时间（不含秒）"
                  v-model="partTimeFormValidate.endTime" style="width: 200px"></DatePicker>
    </FormItem>



    <FormItem label="薪资" prop="workSalary">
      <Input v-model="partTimeFormValidate.workSalary" placeholder="单位（元）"></Input>
    </FormItem>

    <FormItem label="工作地点" prop="workPlace">
      <Input v-model="partTimeFormValidate.workPlace" placeholder="请输入内容"></Input>
    </FormItem>

    <FormItem label="联系方式" prop="contactWay">
      <Input v-model="partTimeFormValidate.contactWay" placeholder="请输入内容"></Input>
    </FormItem>

    <FormItem>
      <Button type="primary" @click="handleSubmit('partTimeFormValidate')" class="form-button">提交</Button>
      <Button @click="handleReset('partTimeFormValidate')" class="form-button">重置</Button>
    </FormItem>
  </Form>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class ActivityForm extends Vue {

        private partTimeFormValidate = {
            title: '',
            workRequire: '',
            workContent: '',
            startTime: '',
            endTime: '',
            workSalary:'',
            workPlace: '',
            contactWay: ''
        };
        private partTimeRuleValidate = {
            title: [
                {required: true, message: '标题不能为空', trigger: 'blur'}
            ],
            workRequire: [
                {required: true, message: '工作要求不能为空', trigger: 'blur'}
            ],
            workContent: [
                {required: true, message: '工作内容不能为空', trigger: 'change'}
            ],
            startTime: [
                {required: true, type: 'date', message: '请选择开始工作时间', trigger: 'change'}
            ],
            endTime: [
                {required: true, type: 'date', message: '请选择结束工作时间', trigger: 'change'}
            ],
            workSalary: [
                {required: true, message: '薪资纯数字', trigger: 'blur'}
            ],
            workPlace: [
                {required: true, message: '工作地点不能为空', trigger: 'blur'}
            ],
            contactWay: [
                {required: true, message: '联系方式不能为空', trigger: 'change'},
                {
                    validator: this.checkPhone,
                    trigger: "blur"
                }
            ]
        };
        // 验证手机
        checkPhone(rule, value, callback) {
            let isTel: boolean = false;
            const telReg = /^[1][3,4,5,7,8][0-9]{9}$/;
            isTel = telReg.test(value);
            if (!isTel) {
                isTel = false;
                callback(new Error("请检查要输入的手机号码是否合法"));
            } else {
                isTel = true;
            }
            callback();
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