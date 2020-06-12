
<template>
  <Form ref="bookFormValidate" :model="bookFormValidate" :rules="bookRuleValidate" :label-width="80"
        class="resource-form">
    <FormItem label="书名" prop="bookName">
      <Input v-model="bookFormValidate.bookName" placeholder="请输入书名"></Input>
    </FormItem>

    <FormItem label="备注" prop="remark">
      <Input v-model="bookFormValidate.remark" placeholder="请输入备注"></Input>
    </FormItem>


    <FormItem label="联系方式" prop="contractWay">
      <Input v-model="bookFormValidate.contractWay" placeholder="请输入联系方式"></Input>
    </FormItem>

    <FormItem label="详情" prop="detail">
      <Input v-model="bookFormValidate.detail" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
             placeholder="请输入内容"></Input>
    </FormItem>


    <FormItem>
      <Button type="primary" class="form-button" @click="handleSubmit('bookFormValidate')" >提交</Button>
      <Button @click="handleReset('bookFormValidate')" class="form-button">重置</Button>
    </FormItem>
  </Form>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';

    @Component
    export default class ActivityForm extends Vue {

        private bookFormValidate = {
            bookName: '',
            remark: '',
            contractWay: '',
            detail: ''
        };
        private bookRuleValidate = {
            bookName: [
                {required: true, message: '书名不能为空', trigger: 'blur'}
            ],
            remark: [
                {required: true, message: '备注不能为空', trigger: 'blur'}
            ],
            contractWay: [
                {required: true, message: '联系不能为空', trigger: 'change'},
                {
                    validator: this.checkPhone,
                    trigger: "blur"
                }

            ],
            detail: [
                {required: true, message: '请输入书本详情', trigger: 'blur'},
                {type: 'string', min: 20, message: '详情不能少于20字', trigger: 'blur'}
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