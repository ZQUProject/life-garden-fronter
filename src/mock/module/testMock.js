const fs = require('fs')
const path = require('path')
const Mock = require('mockjs');

Mock.mock('/api/user/message', 'get', {
    code: 200,
    message: "请求成功",
    data : {
        num: 2
    }
})
Mock.mock('/api/auth/user', 'get', {
    code: 200,
    message: "用户请求登录成功",
    data : {
        token: "213123123",
        user: {
            account: "123",
            nickname: "LittleCat",
            className: "17软件2班",
            roleName: "学生",
            permission: [

            ],
            menus: {
                
            }
        }
    }
})
