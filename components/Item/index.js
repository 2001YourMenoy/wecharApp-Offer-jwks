Component({

    behaviors: [],
  
    properties: {
      cover: { // 属性名
        type: String,
        value: ''
      },
      rate:{
        type:Number,
        value:3.5
      },
      age:{
        type:String,
        value:"2021"
      },
      movie:{
        type:String,
        value:"广囧"
      },
      address:{
        type:Array,
        value:[]
      },
      actor:{
        type:Array,
        value:[]
      }
      },
    
    data: {
        
    }, 
  
    lifetimes: {
      // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
      attached: function () { },
      moved: function () { },
      detached: function () { },
    },
  
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { }, // 此处attached的声明会被lifetimes字段中的声明覆盖
    ready: function() { },
  
    pageLifetimes: {
      // 组件所在页面的生命周期函数
      show: function () { },
      hide: function () { },
      resize: function () { },
    },
  
    methods: {

    }
  
  })
