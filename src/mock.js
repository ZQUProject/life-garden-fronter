const fs = require('fs')
const path = require('path')
const Mock = require('mockjs');
const message = {
    code: 200,
    message: "请求成功",
    data : {
        count: 2
    }
}
const carousel = {
    code: 200,
    message: "请求成功",
    data : {
        carouselList: [ {imageUrl: 'https://www.baidu.com/img/bd_logo1.png', url:'https://www.baidu.com', title:'baidu'}]
    }
}
const menuData = {
    code: 200,
    message: "请求成功",
    data: [
        {id:'1', name:'资源', children:[{id:'2', name:'资源共享',path:'/resource/share'},{id:'3', name:'资源申请',path:'/resource/apply'}]},
        {id:'4', name:'失物招领', children:[{id:'5', name:'失物',path:'/good/lost'},{id:'6', name:'找物',path:'/good/found'}]}
    ]
    
}
module.exports = function(app) {
    app.get('/api/user/message', function(rq, res){
        res.json(message)
    }),
    app.get('/api/show/carousel', function(rq, res){
        res.json(carousel)
    })
    app.get('/api/menu/tree', function(rq, res){
        res.json(menuData)
    })
    app.get('/api/auth/captcha', function(rq, res){
        res.json(capthcaData)
    })
}
// Mock.mock('/api/user/message','get', data)
// export default Mock
const capthcaData = {
    "code": 200,
    "message": "获取验证码成功",
    "data": {
        "uuid": "f730d7917bc04e0fa06190166cae1c6f",
        "captchaImage": "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"
    }
}