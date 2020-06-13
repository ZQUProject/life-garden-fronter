<template>
  <div>
    <span style="font-size: 50px;margin-left: 500px;">兼职审核</span>
    <Table border :loading="loading" :columns="columns7" :data="data6">

    </Table>
    <div style="text-align: center;">
      <Page :total="100" prev-text="Previous" next-text="Next" @on-change="changePageData"/>
    </div>

  </div>

</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class ManageApproval extends Vue {
        private loading = false;

        private columns7 = [
            {
                title: '账号',
                key: 'username'
            },
            {
                title: '姓名',
                key: 'nickname',
                render: (h, params) => {
                    return h('div', [
                        h('Icon', {
                            props: {
                                type: 'person'
                            }
                        }),
                        h('strong', params.row.nickname)
                    ]);
                }
            },
            {
                title: '标题',
                key: 'title'
            },
            {
                title: '工作内容',
                key: 'workContent'
            },
            {
                title: '操作',
                key: 'action',
                width: 150,
                align: 'center',
                render: (h, params) => {
                    return h('div', [
                        h('Button', {
                            props: {
                                type: 'primary',
                                size: 'small'
                            },
                            style: {
                                marginRight: '5px'
                            },
                            on: {
                                click: () => {
                                    this.show(params.index)
                                }
                            }
                        }, '查看'),

                    ]);
                }
            }
        ]
        private data6 = [
            {
                id:'10',
                username: '201724113251',
                nickname: '杨志勇',
                title: '派传单',
                startTime: '2020-10-01 08:00:00',
                endTime: '2020-10-01 12:00:00',
                contractWay: '18318265276',
                workPlace:'肇庆学院',
                workRequire:'口齿伶俐',
                workContent:'派传单',
                workSalary:100
            },
            {
                id:'10',
                username: '201724113251',
                nickname: '杨志勇',
                title: '派传单',
                startTime: '2020-10-01 08:00:00',
                endTime: '2020-10-01 12:00:00',
                contractWay: '18318265276',
                workPlace:'肇庆学院',
                workRequire:'口齿伶俐',
                workContent:'派传单',
                workSalary:100
            },
            {
                id:'10',
                username: '201724113251',
                nickname: '杨志勇',
                title: '派传单',
                startTime: '2020-10-01 08:00:00',
                endTime: '2020-10-01 12:00:00',
                contractWay: '18318265276',
                workPlace:'肇庆学院',
                workRequire:'口齿伶俐',
                workContent:'派传单',
                workSalary:100
            },
            {
                id:'10',
                username: '201724113251',
                nickname: '杨志勇',
                title: '派传单',
                startTime: '2020-10-01 08:00:00',
                endTime: '2020-10-01 12:00:00',
                contractWay: '18318265276',
                workPlace:'肇庆学院',
                workRequire:'口齿伶俐',
                workContent:'派传单',
                workSalary:100
            }

        ]

        private show(index) {
            this.$Modal.confirm({
                title: '审批信息',
                content: `账号：${this.data6[index].username}<br>
                          姓名：${this.data6[index].nickname}<br>
                          标题：${this.data6[index].title}<br>
                          开始时间：${this.data6[index].startTime}<br>
                          结束时间：${this.data6[index].endTime}<br>
                          联系方式：${this.data6[index].contractWay}<br>
                          总薪资：${this.data6[index].workSalary}<br>
                          工作地点：${this.data6[index].workPlace}<br>
                          工作要求：${this.data6[index].workRequire}<br>
                          工作内容：${this.data6[index].workContent}<br>`,

                okText: '通过',
                onOk: () => {
                    this.$Message.info('Clicked ok');
                },
                cancelText: '不通过',
                onCancel: () => {
                    this.$Message.info('Clicked cancel');
                }
            })
        }

        private remove(index) {
            this.data6.splice(index, 1);
        }

        private changePageData() {
            this.$Message.info('开始请求');
            this.loading = true;
            this.$Message.info('请求结束');
            this.data6 = [
                {
                    id:'10',
                    username: '201724113251',
                    nickname: '杨志勇',
                    title: '派传单',
                    startTime: '2020-10-01 08:00:00',
                    endTime: '2020-10-01 12:00:00',
                    contractWay: '18318265276',
                    workPlace:'肇庆学院',
                    workRequire:'口齿伶俐',
                    workContent:'派传单',
                    workSalary:100
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
  .img-css {
    width: 100%;
    height: 300px;
  }

</style>
