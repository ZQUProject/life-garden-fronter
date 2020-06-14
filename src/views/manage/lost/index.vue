<template>
  <div>
    <span style="font-size: 50px;margin-left: 500px;">失物招领</span>
    <Table border :loading="loading" :columns="columns7" :data="data6">

    </Table>
    <div style="text-align: center;">
      <Page :total="100" prev-text="Previous" next-text="Next" @on-change="changePageData"/>
    </div>
    <Modal title="查看大图" v-model="visible">
      <img :src="imgUrl" v-if="visible" class="img-css">
    </Modal>
  </div>

</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class ManageApproval extends Vue {
        private loading = false;
        private visible = false ;//查看大图弹窗
        private imgUrl:'';
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
                title: '类型',
                key: 'lostType',
                render: (h, params) => {
                    if (params.row.lostType== 1) {
                        return h('span', '寻找失物');
                    }else {
                        return h('span', '拾到失物');
                    }
                }
            },
            {
                title:'图片',
                align: 'center',
                render: (h, params) =>{
                    return h('img',{
                        attrs:{
                            src:params.row.imgUrl
                        },
                        style:{
                            width:'120px',
                            height:'50px',
                            verticalAlign:'middle',
                            cursor:'pointer'
                        },
                        on:{
                            click:(e)=>{
                                let _this=this;
                                _this.handleView(e.srcElement.currentSrc)  //点击查看大图
                            }
                        }
                    })
                }
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
                lostType: 1,
                lostPropertyName: '12354878845asdfasdfasdffas',
                content: '5',
                contractWay: 100,
                imgUrl: 'http://young.cn-bj.ufileos.com/45c0efc8-202d-401b-a414-f8c25552268c.jpg?UCloudPublicKey=TOKEN_2d33a0c3-a5c9-4296-9170-8d3590105ba5&Signature=ESYJXViLOxyr54guTVAqAnGFO%2Bc%3D&Expires=1907333271'
            },
            {
                id:'10',
                username: '201724113251',
                nickname: '杨志勇',
                lostType: 1,
                lostPropertyName: '12354878845asdfasdfasdffas',
                content: '5',
                contractWay: 100,
                imgUrl: 'http://young.cn-bj.ufileos.com/45c0efc8-202d-401b-a414-f8c25552268c.jpg?UCloudPublicKey=TOKEN_2d33a0c3-a5c9-4296-9170-8d3590105ba5&Signature=ESYJXViLOxyr54guTVAqAnGFO%2Bc%3D&Expires=1907333271'
            },
            {
                id:'10',
                username: '201724113251',
                nickname: '杨志勇',
                lostType: 2,
                lostPropertyName: '12354878845asdfasdfasdffas',
                content: '5',
                contractWay: 100,
                imgUrl: 'http://young.cn-bj.ufileos.com/45c0efc8-202d-401b-a414-f8c25552268c.jpg?UCloudPublicKey=TOKEN_2d33a0c3-a5c9-4296-9170-8d3590105ba5&Signature=ESYJXViLOxyr54guTVAqAnGFO%2Bc%3D&Expires=1907333271'
            },

        ]

        private show(index) {
            this.$Modal.confirm({
                title: '审批信息',
                content: `账号：${this.data6[index].username}<br>
                          姓名：${this.data6[index].nickname}<br>
                          发布类型：${this.showType(this.data6[index].lostType)}<br>
                          物品描述：${this.data6[index].content}<br>
                          物品名称：${this.data6[index].lostPropertyName}<br>
                          联系方式：${this.data6[index].contractWay}<br>`,

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
        private handleView(url) {
            let _this=this
            _this.imgUrl = url;
            _this.visible = true;
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
                    lostType: 1,
                    lostPropertyName: '手机',
                    content: '在二教101丢失了一台手机',
                    contractWay: 100,
                    imgUrl: 'http://young.cn-bj.ufileos.com/45c0efc8-202d-401b-a414-f8c25552268c.jpg?UCloudPublicKey=TOKEN_2d33a0c3-a5c9-4296-9170-8d3590105ba5&Signature=ESYJXViLOxyr54guTVAqAnGFO%2Bc%3D&Expires=1907333271'
                }
            ]
            this.loading = false;
        }
        showType(params){
            if(params==1){
                return '寻找失物';
            }else{
                return '拾到失物';
            }
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
