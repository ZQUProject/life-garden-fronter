<template>
  <div>
    <div>
      <Select placeholder="请选择条件" style="width: 10%" size="large">
        <Option value="title">标题</Option>
        <Option value="location">举办地点</Option>
        <Option value="content">内容介绍</Option>
      </Select>
      <Input placeholder="请输入搜索内容" style="width: 20%" size="large"></Input>
      <Button type="info" size="large" shape="circle" icon="md-search">搜索</Button>
    </div>
    <div style="margin-bottom:10px;">
      <ActivityForm/>
    </div>
    <div style="display: flex; flex-wrap: wrap; flex: 1; justify-content: space-between;">
      <div style="width:430px;margin-bottom: 20px;background:#eee;padding: 20px" v-for="(item, index )  in activityForm"
           :key="index">
        <Card :bordered="false">
          <div slot="title">
            <div style="font-size:20px;color:white;text-align: center;">
              <div v-if="item.status == 1"
                   style="background:#1E90FF; border-radius: 10px; padding: 3px;display: inline-block;"> 审批通过
              </div>
              <div v-if="item.status == 2"
                   style="background:#A52A2A; border-radius: 10px; padding: 3px;display: inline-block;"> 审批不通过
              </div>
              <div v-if="item.status == 3"
                   style="background:#9ACD32; border-radius: 10px; padding: 3px;display: inline-block;"> 审批中
              </div>
            </div>
          </div>
          <Button slot="extra" icon="ios-download-outline" type="primary" shape="circle"
                  @click.prevent="download"></Button>
          <p>
          <div style="font-size:16px;">
            <span style="font-weight: bold;">活动标题：</span><span>{{item.title}}</span>
          </div>
          <div style="font-size:16px;">
            <span style="font-weight: bold;">活动内容：</span><span>{{item.content}}</span>
          </div>
          <div style="font-size:16px;">
            <span style="font-weight: bold;">举办地点：</span><span>{{item.location}}</span>
          </div>
          <!-- <div style="font-size:16px;">
             <span style="font-weight: bold;">申请原因：</span><span>{{item.reason}}</span>
           </div>
           <div style="font-size:16px;">
             <span style="font-weight: bold;">内容详情：</span><span>{{item.detail}}</span>
           </div>-->
          <div style="font-size:16px;">
            <span style="font-weight: bold;">活动图片：</span>
            <img :src="item.imgUrl" style="width: 250px;height: 70px">
          </div>
          </p>

          <Button style="margin-left: 80px" type="success" icon="md-eye" @click="show(index)">查看</Button>
          <!-- <Button style="margin-left: 20px" type="info" icon="md-create ">修改</Button>-->
          <Button style="margin-left: 30px" type="error" icon="md-close-circle">删除</Button>
        </Card>
      </div>
    </div>
    <div style="text-align: center;">
      <Page :total="100" prev-text="Previous" next-text="Next" @on-change="changePageData"/>
    </div>
  </div>

</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import ActivityForm from './form.vue';

    @Component({
        components: {
            ActivityForm
        },
    })
    export default class ActivityAdd extends Vue {
        private loading = false;
        private activityForm = [
            {
                id: '',
                title: 'Java',
                location: '第一教学楼',
                scopeId: '',
                startTime: '2020-10-01',
                endTime: '2020-10-02',
                status: '1',
                socpeType: '',
                userLimit: '100',
                content: '大师傅的算法上打发顺丰sad方框架ask了缴费抗裂砂浆阿弗莱克就加快冷风机克拉斯聚隆科技分开来卡斯柯烦解开垃圾',
                imgUrl: 'https://trademark-pics-search.oss-cn-shanghai.aliyuncs.com/big/h4534360455939072.jpg'
            },
            {
                id: '',
                title: '',
                location: '',
                scopeId: '',
                startTime: '',
                endTime: '',
                status: '2',
                socpeType: '',
                userLimit: '',
                content: '',
                imgUrl: 'https://trademark-pics-search.oss-cn-shanghai.aliyuncs.com/big/h4534360455939072.jpg'
            },
            {
                id: '',
                title: '',
                location: '',
                scopeId: '',
                startTime: '',
                endTime: '',
                status: '3',
                socpeType: '',
                userLimit: '',
                content: '',
                imgUrl: 'https://trademark-pics-search.oss-cn-shanghai.aliyuncs.com/big/h4534360455939072.jpg'
            }
        ]

        show(index) {
            this.$Modal.confirm({
                title: '查看信息',
                content: `   标题：${this.activityForm[index].title}<br>
                          举办地点：${this.activityForm[index].location}<br>
                          开始时间：${this.activityForm[index].startTime}<br>
                          结束时间：${this.activityForm[index].endTime}<br>
                          范围序号：${this.activityForm[index].scopeId}<br>
                          人数限制：${this.activityForm[index].userLimit}<br>
                          可见范围：${this.activityForm[index].socpeType}<br>
                          内容介绍：${this.activityForm[index].content}<br>

                         `,
                okText: '确定',
                onOk: () => {
                    this.$Message.info('Clicked ok');
                },
                cancelText: '取消',
                onCancel: () => {
                    this.$Message.info('Clicked cancel');
                }
            })
        }
        private changePageData() {
            this.$Message.info('开始请求');
            this.loading = true;
            this.$Message.info('请求结束');
            this.activityForm = [
                {
                    id: '',
                    title: 'Java',
                    location: '第一教学楼',
                    scopeId: '',
                    startTime: '2020-10-01',
                    endTime: '2020-10-02',
                    status: '1',
                    socpeType: '',
                    userLimit: '100',
                    content: '大师傅的算法上打发顺丰sad方框架ask了缴费抗裂砂浆阿弗莱克就加快冷风机克拉斯聚隆科技分开来卡斯柯烦解开垃圾',
                    imgUrl: 'https://trademark-pics-search.oss-cn-shanghai.aliyuncs.com/big/h4534360455939072.jpg'
                }
            ]
            this.loading = false;
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