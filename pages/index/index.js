import data from './../../mock/mock'
Page({
  data: {
    value: "",
    movie: []
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载

  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成
    let that = this;

    //手机端无法使用mock
    console.log(data)
    that.setData({
      movie: data.data.data
    })

    //电脑端模拟数据
    //  wx.request({
    //    url: 'https://beta.jwks123.cn',
    //    dataType:"json",
    //    success(res){
    //      that.setData({
    //        movie:res.data
    //      })
    //    }
    //  })
    //微信好像无bind(this)
  },
  onShow: function () {
    // 生命周期函数--监听页面显示

  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏

  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载

  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作

  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数

  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },
  go: function (e) {
    let data = JSON.stringify(this.data.movie[e.currentTarget.dataset['query']])
    console.log(data);
    wx.navigateTo({
      url: '/pages/movie/index?data=' + data,
    })
  }
})