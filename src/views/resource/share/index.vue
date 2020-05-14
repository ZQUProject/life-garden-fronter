<template>
    <div >        
        <div style="float:right">
            <Input v-model="value13" style="width:20rem;margin-right:0px;float:right;margin-bottom:15px;">
                <Select v-model="select3" slot="prepend" style="width: 80px">
                    <Option value="day">Day</Option>
                    <Option value="month">Month</Option>
                </Select>
                <Button slot="append" icon="ios-search"></Button>
            </Input>
        </div>
        <div style="width: 100%;position: absolute;margin-top: 35px;">
            <Table border :show-header=false :columns="columns7" :data="data6"></Table>
         </div>
    </div>
</template>

<script>
export default {
    data() {
       return {
                columns7: [
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
                ],
                data6: [
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
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
    }
</script>

<style>
#scbar_txt{
    font-size: 14px;
    line-height: 20px;
    width: 230px;
    padding: 0;
    border: none;
}
#scbar_btn{
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