<template>
    <div style="">        
        <div style="width:100%">
            <Input v-model="value13" style="width:20rem;margin-right:0px;margin-bottom:15px;">
                <Select v-model="select3" slot="prepend" style="width: 80px">
                    <Option value="day">Day</Option>
                    <Option value="month">Month</Option>
                </Select>
                <Button slot="append" icon="ios-search"></Button>
            </Input>
        </div>
        <div style="width: 100%;margin-top: 35px;">
       <List item-layout="vertical">
        <ListItem v-for="item in data" :key="item.title">
            <ListItemMeta :avatar="item.avatar" :title="item.title" :description="item.description" />
            {{ item.content }}
            <template slot="action">
                <li>
                    <Icon type="ios-star-outline" /> 123
                </li>
                <li>
                    <Icon type="ios-thumbs-up-outline" /> 234
                </li>
                <li>
                    <Icon type="ios-chatbubbles-outline" /> 345
                </li>
            </template>
            <template slot="extra">
                <img src="https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large" style="width: 280px">
            </template>
        </ListItem>
    </List>
         </div>
    </div>
</template>

<script>
import bookImage from '@/assets/avatar/book.jpg';
export default {
   data () {
            return {
                data: [
                    {
                        title: 'This is title 1',
                        description: 'This is description, this is description, this is description.',
                        avatar: bookImage,
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    },
                    {
                        title: 'This is title 2',
                        description: 'This is description, this is description, this is description.',
                        avatar: bookImage,
                        content: 'This is the content, this is the cont213333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333ent, this is the content, this is the content.'
                    },
                    {
                        title: 'This is title 3',
                        description: 'This is description, this is description, this is description.',
                        avatar: bookImage,
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    },
                    {
                        title: 'This is title 3',
                        description: 'This is description, this is description, this is description.',
                        avatar: bookImage,
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    }
                ]
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