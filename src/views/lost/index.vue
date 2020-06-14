<template>
    <div>
        <div class="search-box">
            <Select placeholder="请选择条件" style="width: 10%" size="large">
                <Option value="lostPropertyName">物品名称</Option>
                <Option value="content">物品介绍</Option>
            </Select>
            <Input v-model="value13" placeholder="搜索内容" size="large" style="" class="search-content">
            </Input>
            <Button slot="append" type="info" size="large" shape="circle" icon="ios-search">Search</Button>
        </div>
        <div style="margin-bottom:10px;">
            <LostForm/>
        </div>
        <div style="width: 100%;margin-top: 35px;">
            <List item-layout="vertical">
                <ListItem v-for="(item,index) in lostForm" :key="item.lostPropertyName">
                    <ListItemMeta :avatar="item.avatar" :title="item.lostPropertyName" :description="showType(item.lostType)"/>
                    {{ item.content }}
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
    import LostForm from './form.vue';

    @Component({
        components: {
           LostForm
        },
    })
    export default class LostADD extends Vue {
        private loading = false;
        private lostForm = [
            {
                id: '1',
                status: '1',
                lostType: '1',
                lostPropertyName: '手机',
                contractWay: '18318265276',
                content: '二教101手机二教101手机二教101手机二教101手机二教101手机二教101手机二教101手机二教101手机二教101手机',
                imgUrl: 'https://trademark-pics-search.oss-cn-shanghai.aliyuncs.com/big/h4534360455939072.jpg'
            },
            {
                id: '1',
                status: '2',
                lostType: '1',
                lostPropertyName: '手机',
                contractWay: '18318265276',
                content: '二教101手机二教101手机二教101手机二教101手机二教101手机二教101手机二教101手机二教101手机二教101手机',
                imgUrl: 'https://trademark-pics-search.oss-cn-shanghai.aliyuncs.com/big/h4534360455939072.jpg'
            },
            {
                id: '1',
                status: '3',
                lostType: '1',
                lostPropertyName: '手机',
                contractWay: '18318265276',
                content: '二教101手机二教101手机二教101手机二教101手机二教101手机二教101手机二教101手机二教101手机二教101手机',
                imgUrl: 'https://trademark-pics-search.oss-cn-shanghai.aliyuncs.com/big/h4534360455939072.jpg'
            },





        ]
        show(index) {
            this.$Modal.confirm({
                title: '查看信息',
                content: `物品名称：${this.lostForm[index].lostPropertyName}<br>
                          寻找类型：${this.showType(this.lostForm[index].lostType)}<br>
                          联系方式：${this.lostForm[index].contractWay}<br>
                          物品介绍：${this.lostForm[index].content}<br>`,
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
         showType(params){
            if(params==1){
                return '寻找失物';
            }else{
                return '拾到失物';
            }
        }
        private changePageData() {
            this.$Message.info('开始请求');
            this.loading = true;
            this.$Message.info('请求结束');
            this.lostForm = [
                {
                    id: '1',
                    status: '1',
                    lostType: '1',
                    lostPropertyName: '手机',
                    contractWay: '18318265276',
                    content: '二教101手机二教101手机二教101手机二教101手机二教101手机二教101手机二教101手机二教101手机二教101手机',
                    imgUrl: 'https://trademark-pics-search.oss-cn-shanghai.aliyuncs.com/big/h4534360455939072.jpg'
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