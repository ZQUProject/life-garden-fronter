<template>
    <div>
        <Table border :loading="loading"  :columns="columns7" :data="data6"></Table>
        <div style="text-align: center;">
            <Page :total="100" prev-text="Previous" next-text="Next" @on-change="changePageData" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
  },
})
export default class ManageApproval extends Vue {
    private loading = false;
    private  columns7 =  [
                    {
                        title: 'Name',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: 'Action',
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
                                }, 'View'),
                               
                            ]);
                        }
                    }
                ]
           private     data6 =  [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    }
                ]

        private    show (index) {
                this.$Modal.confirm({
                    title: '审批信息',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`,
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
        private remove (index) {
            this.data6.splice(index, 1);
        }
        private changePageData() {
             this.$Message.info('开始请求');
             this.loading= true;
             this.$Message.info('请求结束');
             this.data6 =  [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    }
             ]
             this.loading= false;
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
