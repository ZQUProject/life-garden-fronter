<template>
  <div>
    <div>
      <Select placeholder="请选择条件" style="width: 10%" size="large">
        <Option value="title">标题</Option>
        <Option value="workPlace">工作地点</Option>
        <Option value="workContent">工作内容</Option>
      </Select>
      <Input placeholder="请输入搜索内容" style="width: 20%" size="large"></Input>
      <Button type="info" size="large" shape="circle" icon="md-search">搜索</Button>
    </div>
    <div style="margin-bottom:10px;">
      <ActivityForm/>
    </div>
    <div style="display: flex; flex-wrap: wrap; flex: 1; justify-content: space-between;">
      <div style="width:430px;margin-bottom: 20px;background:#eee;padding: 20px" v-for="(item, index )  in partTimeForm"
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
            <span style="font-weight: bold;">标题：</span><span>{{item.title}}</span>
          </div>
          <div style="font-size:16px;">
            <span style="font-weight: bold;">总薪资：</span><span>{{item.workSalary}}</span>
          </div>

          <div style="font-size:16px;">
            <span style="font-weight: bold;">工作地点：</span><span>{{item.workPlace}}</span>
          </div>
          <div style="font-size:16px;">

            <span style="font-weight: bold;">兼职内容：</span><span>{{item.workContent}}</span>
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
    export default class PartTimeADD extends Vue {
        private loading = false;
        private partTimeForm = [
            {
                id: '',
                title: '派传单',
                workRequire: '口雌伶俐，配合工作',
                workContent: '啥的范德萨发大发飞洒懂法守法方算法大飞洒发斯蒂芬啥大师傅',
                startTime: '2020-10-01 08:00:00',
                endTime: '2020-10-01 18:00:00',
                status: '1',
                workSalary: '100',
                workPlace: '肇庆学院',
                contactWay: '18318265276'
            },
            {
                id: '',
                title: '派传单',
                workRequire: '口雌伶俐，配合工作',
                workContent: '啥的范德萨发大发飞洒懂法守法方算法大飞洒发斯蒂芬啥大师傅',
                startTime: '2020-10-01 08:00:00',
                endTime: '2020-10-01 18:00:00',
                status: '2',
                workSalary: '100',
                workPlace: '肇庆学院',
                contactWay: '18318265276'
            },
            {
                id: '',
                title: '派传单',
                workRequire: '口雌伶俐，配合工作',
                workContent: '啥的范德萨发大发飞洒懂法守法方算法大飞洒发斯蒂芬啥大师傅',
                startTime: '2020-10-01 08:00:00',
                endTime: '2020-10-01 18:00:00',
                status: '3',
                workSalary: '100',
                workPlace: '肇庆学院',
                contactWay: '18318265276'
            },

        ]

        show(index) {
            this.$Modal.confirm({
                title: '查看信息',
                content: `   标题：${this.partTimeForm[index].title}<br>
                          工作地点：${this.partTimeForm[index].workPlace}<br>
                          开始时间：${this.partTimeForm[index].startTime}<br>
                          结束时间：${this.partTimeForm[index].endTime}<br>
                          工作要求：${this.partTimeForm[index].workRequire}<br>
                          总薪资：${this.partTimeForm[index].workSalary}<br>
                          联系方式：${this.partTimeForm[index].contactWay}<br>
                          工作内容：${this.partTimeForm[index].workContent}<br>

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
            this.partTimeForm = [
                {
                    id: '',
                    title: '派传单',
                    workRequire: '口雌伶俐，配合工作',
                    workContent: '啥的范德萨发大发飞洒懂法守法方算法大飞洒发斯蒂芬啥大师傅',
                    startTime: '2020-10-01 08:00:00',
                    endTime: '2020-10-01 18:00:00',
                    status: '1',
                    workSalary: '100',
                    workPlace: '肇庆学院',
                    contactWay: '18318265276'
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