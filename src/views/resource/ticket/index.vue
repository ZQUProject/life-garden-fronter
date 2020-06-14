<template>
  <div>
    <div class="search-box">
      <Select placeholder="请选择条件" style="width: 10%" size="large">
        <Option value="title">标题</Option>
        <Option value="detail">内容介绍</Option>
      </Select>
      <Input v-model="value13" placeholder="搜索内容" size="large" style="" class="search-content">
      </Input>
      <Button slot="append" type="info" size="large" shape="circle" icon="ios-search">Search</Button>
    </div>
    <div style="margin-bottom:10px;">
      <TicketForm/>
    </div>
    <div style="width: 100%;margin-top: 35px;">
      <List item-layout="vertical">
        <ListItem v-for="(item,index) in ticketForm" :key="item.title">
          <ListItemMeta :avatar="item.avatar" :title="item.title" :description="item.userNumberLimit"/>
          {{ item.detail }}
          <template slot="action">
            <li>
              <div slot="title">
                <div style="font-size:12px;color:white;text-align: center;">
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
            </li>
            <li>
              <Button style="margin-left: 80px" type="success" size="small" icon="md-eye" @click="show(index)">查看</Button>

            </li>
            <li>
              <Button style="margin-left: 30px" type="error" size="small" icon="md-close-circle">删除</Button>
            </li>
          </template>
          <template slot="extra">
            <img :src="item.imgUrl" style="width: 250px;">
           <!-- <img src="https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large" style="width: 280px">-->
          </template>
        </ListItem>
      </List>
    </div>
    <div style="text-align: center;">
      <Page :total="100" prev-text="Previous" next-text="Next" @on-change="changePageData"/>
    </div>
  </div>
</template>

<script lang="ts">

    import {Component, Vue} from 'vue-property-decorator';
    import TicketForm from './form.vue';

    @Component({
        components: {
            TicketForm
        },
    })
    export default class TicketAdd extends Vue {
        private loading =false;
        private ticketForm = [
            {
                id: '1',
                title: '十大歌手',
                status: '1',
                userNumberLimit: '100',
                startTime: '2020-10-01 08:00:00',
                endTime: '2020-10-02 23:00:00',
                detail: '校园十大歌手比赛！！！！！！！！！！！！！！！！！',
                imgUrl: 'https://trademark-pics-search.oss-cn-shanghai.aliyuncs.com/big/h4534360455939072.jpg',

            },
            {
                id: '1',
                title: '十大歌手',
                status: '1',
                userNumberLimit: '100',
                startTime: '2020-10-01 08:00:00',
                endTime: '2020-10-02 23:00:00',
                detail: '校园十大歌手比赛！！！！！！！！！！！！！！！！！',
                imgUrl: 'https://trademark-pics-search.oss-cn-shanghai.aliyuncs.com/big/h4534360455939072.jpg',

            },
            {
                id: '1',
                title: '十大歌手',
                status: '3',
                userNumberLimit: '100',
                startTime: '2020-10-01 08:00:00',
                endTime: '2020-10-02 23:00:00',
                detail: '校园十大歌手比赛！！！！！！！！！！！！！！！！！',
                imgUrl: 'https://trademark-pics-search.oss-cn-shanghai.aliyuncs.com/big/h4534360455939072.jpg',

            },
            {
                id: '1',
                title: '十大歌手',
                status: '2',
                userNumberLimit: '100',
                startTime: '2020-10-01 08:00:00',
                endTime: '2020-10-02 23:00:00',
                detail: '校园十大歌手比赛！！！！！！！！！！！！！！！！！',
                imgUrl: 'https://trademark-pics-search.oss-cn-shanghai.aliyuncs.com/big/h4534360455939072.jpg',

            }
        ]
        show(index) {
            this.$Modal.confirm({
                title: '查看信息',
                content: `   标题：${this.ticketForm[index].title}<br>
                          开始时间：${this.ticketForm[index].startTime}<br>
                          结束时间：${this.ticketForm[index].endTime}<br>
                          总票数：${this.ticketForm[index].userNumberLimit}<br>
                          内容介绍：${this.ticketForm[index].detail}<br>

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
            this.ticketForm = [
                {
                    id: '1',
                    title: '十大歌手',
                    status: '2',
                    userNumberLimit: '100',
                    startTime: '2020-10-01 08:00:00',
                    endTime: '2020-10-02 23:00:00',
                    detail: '校园十大歌手比赛！！！！！！！！！！！！！！！！！',
                    imgUrl: 'https://trademark-pics-search.oss-cn-shanghai.aliyuncs.com/big/h4534360455939072.jpg',

                }
            ]
            this.loading = false;
        }
    }


</script>

<style lang="scss" scoped>
  .search-box {
    width: 100%;

    .search-content {
      width: 20rem;
      margin-right: 0px;

      .ivu-input {
        border-radius: 15px !important;
      }

      .ivu-select-selection {
        border-radius: 15px !important;
      }
    }
  }

  #scbar_txt {
    font-size: 14px;
    line-height: 20px;
    width: 230px;
    padding: 0;
    border: none;
  }

  #scbar_btn {
    position: relative;
    z-index: 2;
    overflow: inherit;
    width: 40px;
    height: 40px;
    margin: 0;
    border-radius: 15px;
    background: #5da9c8;
  }

  .pn::before {
    font-family: 'test999_icons';
    font-size: 18px;
    line-height: 44px;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 40px;
    height: 40px;
    content: '\E986';
    text-align: center;
    color: #fff;
  }
</style>