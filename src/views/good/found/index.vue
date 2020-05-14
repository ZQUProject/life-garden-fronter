<template>
    <div>
        <div style="display:flex;">
            <Input v-model="searchContent" style="width:20rem;margin-right:0px;">
                <Select v-model="selectSearchContent" slot="prepend" style="width: 80px">
                    <Option value="day">Day</Option>
                    <Option value="month">Month</Option>
                </Select>
                <Button slot="append" icon="ios-search"></Button>
            </Input>
            <Button type="primary" @click="showApplyForm = true">submit applylication</Button>
             <Modal v-model="showApplyForm" style="width:400;" :mask-closable=false>
                <p slot="header" style="color:#5da9c8;text-align:center">
                    <!-- <Icon type="ios-information-circle"></Icon> -->
                    <span>Applylication Title</span>
                </p>
                <div>
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                    <FormItem label="Name" prop="name">
                        <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
                    </FormItem>
                    <FormItem label="E-mail" prop="mail">
                        <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
                    </FormItem>
                    <FormItem label="City" prop="city">
                        <Select v-model="formValidate.city" placeholder="Select your city">
                            <Option value="beijing">New York</Option>
                            <Option value="shanghai">London</Option>
                            <Option value="shenzhen">Sydney</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="Date">
                        <Row>
                            <Col span="11">
                                <FormItem prop="date">
                                    <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
                                </FormItem>
                            </Col>
                            <Col span="2" style="text-align: center">-</Col>
                            <Col span="11">
                                <FormItem prop="time">
                                    <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>
                                </FormItem>
                            </Col>
                        </Row>
                    </FormItem>
                    <FormItem label="Gender" prop="gender">
                        <RadioGroup v-model="formValidate.gender">
                            <Radio label="male">Male</Radio>
                            <Radio label="female">Female</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="Hobby" prop="interest">
                        <CheckboxGroup v-model="formValidate.interest">
                            <Checkbox label="Eat"></Checkbox>
                            <Checkbox label="Sleep"></Checkbox>
                            <Checkbox label="Run"></Checkbox>
                            <Checkbox label="Movie"></Checkbox>
                        </CheckboxGroup>
                    </FormItem>
                    <FormItem label="Desc" prop="desc">
                        <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                    </FormItem>
                </Form>
        </div>
        <div slot="footer" style="text-align: center;">
            <Button shape="circle"  @click="applyCancel" >close</Button>
            <Button type="primary" shape="circle" :loading="modal_loading" @click="applySubmit">submit</Button>
        </div>
    </Modal>
                  
        </div>
        <div style="width: 100%;position: absolute;margin-top: 35px;">
            <div style="background:#eee;padding: 20px">
                <Card :bordered="false">
                    <p slot="title">No border title</p>
                    <Button type="primary" slot="extra">查看详情</Button>
                    <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                </Card>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import  ApplyForm  from './form.vue';
import { Message, Notice } from 'view-design';
@Component({
  components: {
      ApplyForm
  },
})
export default class Found extends Vue {
    private showApplyForm = false;
    private selectSearchContent = '';
    private searchContent = 'content';
     private formValidate = {
        name: '',
        mail: '',
        city: '',
        gender: '',
        interest: [],
        date: '',
        time: '',
        desc: ''
    };
    private ruleValidate = {
        name: [
            { required: true, message: 'The name cannot be empty', trigger: 'blur' }
        ],
        mail: [
            { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
            { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ],
        city: [
            { required: true, message: 'Please select the city', trigger: 'change' }
        ],
        gender: [
            { required: true, message: 'Please select gender', trigger: 'change' }
        ],
        interest: [
            { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
            { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
        ],
        date: [
            { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
        ],
        time: [
            { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
        ],
        desc: [
            { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
            { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
        ]
    };
    private handleSubmit (name) {
        const form: any = this.$refs[name]
        form.validate((valid) => {
            if (valid) {
            } else {
            }
        })
    };
    private handleReset (name) {
        const form: any = this.$refs[name]
        form.resetFields();
    }
    private applySubmit() {
        this.$Notice.success({
            title: 'Notification title',
            desc:  'Here is the notification description. Here is the notification description. '
        })
        this.showApplyForm = false;
    }
    private applyCancel() {
        this.showApplyForm = false;
    }
}
</script>

<style>

</style>