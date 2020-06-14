<template>
    <div>
        <div style="margin-bottom:10px;"><FileApplyForm/></div>
        <div style="display: flex; flex-wrap: wrap; flex: 1; justify-content: space-between;">
            <div style="width:430px;margin-bottom: 20px;background:#eee;padding: 20px" v-for="(item, index )  in applyItem" :key="index">
                <Card :bordered="false">
                    <div slot="title">
                        <div style="font-size:20px;color:white;text-align: center;">
                        <div  v-if="item.status == 1"  style="background:#1E90FF; border-radius: 10px; padding: 3px;display: inline-block;">  审批通过 </div>
                        <div  v-if="item.status == 2"  style="background:#A52A2A; border-radius: 10px; padding: 3px;display: inline-block;">  审批不通过 </div>
                        <div  v-if="item.status == 3"  style="background:#9ACD32; border-radius: 10px; padding: 3px;display: inline-block;">  审批中 </div>
                        </div>
                    </div>
                    <Button slot="extra" icon="ios-download-outline" type="primary" shape="circle" @click.prevent="download"></Button>
                    <p>
                        <div style="font-size:18px;">
                            <span style="font-weight: bold;">申请时间：</span><span>{{item.applyTime}}</span>
                        </div>
                        <div style="font-size:18px;">
                            <span style="font-weight: bold;">申请类型：</span><span>{{item.applyTime}}</span>
                        </div>
                        <div style="font-size:18px;">
                            <span style="font-weight: bold;">申请原因：</span><span>{{item.reason}}</span>
                        </div>
                        <div style="font-size:18px;">
                            <span style="font-weight: bold;">内容详情：</span><span>{{item.detail}}</span>
                        </div>
                    </p>
                </Card>
            </div>
            <!-- <Form :model="formItem" label-position="left" :label-width="80" class="resource-form">
                <div style="text-align: center; padding-bottom: 20px;">
                    <h1>文件申请</h1>
                </div>
                <FormItem label="Input">
                    <Input v-model="formItem.input" placeholder="Enter something..."></Input>
                </FormItem>
                <FormItem label="Select">
                    <Select v-model="formItem.select">
                        <Option value="beijing">New York</Option>
                        <Option value="shanghai">London</Option>
                        <Option value="shenzhen">Sydney</Option>
                    </Select>
                </FormItem>
                <FormItem label="DatePicker">
                    <Row>
                        <Col span="11">
                            <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>
                        </Col>
                        <Col span="2" style="text-align: center">-</Col>
                        <Col span="11">
                            <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem label="Radio">
                    <RadioGroup v-model="formItem.radio">
                        <Radio label="male">Male</Radio>
                        <Radio label="female">Female</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem label="Checkbox">
                    <CheckboxGroup v-model="formItem.checkbox">
                        <Checkbox label="Eat"></Checkbox>
                        <Checkbox label="Sleep"></Checkbox>
                        <Checkbox label="Run"></Checkbox>
                        <Checkbox label="Movie"></Checkbox>
                    </CheckboxGroup>
                </FormItem>
                <FormItem label="Switch">
                    <i-switch v-model="formItem.switch" size="large">
                        <span slot="open">On</span>
                        <span slot="close">Off</span>
                    </i-switch>
                </FormItem>
                <FormItem label="Slider">
                    <Slider v-model="formItem.slider" range></Slider>
                </FormItem>
                <FormItem label="Text">
                    <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>
                </FormItem>
                <FormItem>
                    <Button type="primary">Submit</Button>
                    <Button style="margin-left: 8px">Cancel</Button>
                </FormItem>
            </Form> -->
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FileApplyForm from './form.vue'
@Component({
  components: {
      FileApplyForm
  },
})
export default class FileApply extends Vue {
    private applyItem = [
        {
            status: 1,
            applyTime: "2020-5-22 16:00",
            applyType: "审核类型",
            reason: "原因就是在这样原因就是在这样原因就是在这样原因就是在这样",
            detail: "内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情"
        },{
            status: 2,
            applyTime: "2020-5-22 16:00",
            applyType: "审核类型",
            reason: "原因就是在这样原因就是在这样原因就是在这样原因就是在这样",
            detail: "内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情"
        },{
            status: 3,
            applyTime: "2020-5-22 16:00",
            applyType: "审核类型",
            reason: "原因就是在这样原因就是在这样原因就是在这样原因就是在这样",
            detail: "内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情"
        },{
            status: 1,
            applyTime: "2020-5-22 16:00",
            applyType: "审核类型",
            reason: "原因就是在这样原因就是在这样原因就是在这样原因就是在这样",
            detail: "内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情"
        },{
            status: 1,
            applyTime: "2020-5-22 16:00",
            applyType: "审核类型",
            reason: "原因就是在这样原因就是在这样原因就是在这样原因就是在这样",
            detail: "内容详情内容详情内容详情内容详情内容详情内容详12333333333311111111111111111111情内容详情内容详情内容详情内容详情内容详情"
        }
    ]
    private download() {

    }
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
</style>>
