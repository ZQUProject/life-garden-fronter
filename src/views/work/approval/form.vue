<template>
<div>
    <div style="text-align: right;" >
        <Button type="primary" icon="md-add" @click="modal1 = true">新增申请</Button>
    </div>
    <Modal
        v-model="modal1"
        title="申请表"
        @on-ok="ok"
        @on-cancel="cancel">
        <Form :label-width="100">
            <FormItem label="申请时间：">
                <Row>
                    <Col :sm="21" :md="11" :lg="11">
                        <DatePicker type="date" placeholder="start date" v-model="formItem.startDate"></DatePicker>
                    </Col>
                    <Col :sm="2" :md="2" :lg="2" style="text-align: center">-</Col>
                    <Col :sm="21" :md="11" :lg="11">
                        <DatePicker type="date" placeholder="end date" v-model="formItem.endDate"></DatePicker>
                    </Col>
                </Row>
            </FormItem>
            <FormItem label="申请类型：">
                <RadioGroup v-model="formItem.applyType">
                    <Radio v-for="(item, index)  in applyRatio" :key="index" :label="item.type">{{item.name}}</Radio>
                </RadioGroup>
            </FormItem>
            <FormItem label="申请原因：">
                <Input v-model="formItem.reason" type="textarea" :autosize="{minRows: 3}" maxlength="60" show-word-limit="true" placeholder="输入申请原因" ></Input>
            </FormItem>
            <FormItem label="内容详情：">
                <Input v-model="formItem.detail" type="textarea" :autosize="{minRows: 4}" maxlength="80" show-word-limit="true" placeholder="输入详细信息" ></Input>
            </FormItem>
        </Form>
    </Modal>
</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
  },
})
export default class FileApplyForm extends Vue {
    private applyRatio: any = [
        {
            type: 1,
            name : '活动'
        },
        {
            type: 2,
            name : '外出'
        },
        {
            type: 3,
            name : '类型3'
        }
    ];
    private modal1 =  false;
    private formItem = {
        startDate : '',
        endDate : '',
        reason : "原因",
        applyType: '',
        detail: ''
    }

        private ok () {
            this.$Message.info('Clicked ok' + this.formItem.applyType);
        }
        private cancel () {
            this.$Message.info('Clicked cancel');
        }
}
</script>
