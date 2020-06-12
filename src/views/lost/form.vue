<template>
  <Form ref="lostFormValidate" :model="lostFormValidate" :rules="lostRuleValidate" :label-width="80"
        class="resource-form">

    <FormItem label="发布类型" prop="type">
      <Select v-model="lostFormValidate.type" placeholder="请选择发布类型">
        <Option value="0">寻找失物</Option>
        <Option value="1">拾到失物</Option>
      </Select>
    </FormItem>

    <FormItem label="物品名称" prop="lostPropertyName">
      <Input v-model="lostFormValidate.lostPropertyName" placeholder="请输入备注"></Input>
    </FormItem>


    <FormItem label="联系方式" prop="contractWay">
      <Input v-model="lostFormValidate.contractWay" placeholder="请输入联系方式"></Input>
    </FormItem>

    <FormItem label="物品介绍" prop="content">
      <Input v-model="lostFormValidate.content" type="textarea" :autosize="{minRows: 2,maxRows: 5}"
             placeholder="请输入内容"></Input>
    </FormItem>


    <FormItem>
      <Button type="primary" class="form-button" @click="handleSubmit('lostFormValidate')" >提交</Button>
      <Button @click="handleReset('lostFormValidate')" class="form-button">重置</Button>
    </FormItem>
  </Form>
</template>

<script lang="ts">
    import {Component, Vue, Prop} from 'vue-property-decorator';

    @Component
    export default class ActivityForm extends Vue {

        private lostFormValidate = {
            type: '',
            lostPropertyName: '',
            contractWay: '',
            content: ''
        };
        private lostRuleValidate = {
            bookName: [
                {required: true, message: '请选择发布类型', trigger: 'blur'}
            ],
            lostPropertyName: [
                {required: true, message: '物品名称不能为空', trigger: 'blur'}
            ],
            contractWay: [
                {required: true, message: '联系不能为空', trigger: 'change'},
                {
                    validator: this.checkPhone,
                    trigger: "blur"
                }

            ],
            content: [
                {required: true, message: '请输入物品详细介绍', trigger: 'blur'},
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