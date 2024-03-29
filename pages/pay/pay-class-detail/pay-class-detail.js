var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    option: {
      dot: true
    },
    nodes: '<p>新中国第一次全国教育工作会议、大规模扫盲运动、恢复高考、“普九”、“双一流”建设、新高考改革……这些标志性教育事件，如珍珠般串缀在共和国70年的历史轴线上，讲述着中华民族从站起来、富起来到强起来的伟大飞跃。</p><br/><p>正在北京展览馆举行的“伟大历程 辉煌成就——庆祝中华人民共和国成立70周年大型成就展”，采用编年体形式，以时间为轴，事件为点，全方位回顾了从1949年到2019年共和国走过的光辉历程。</p><br/><p>在这条漫长的“时光隧道”里，头发花白、端坐在轮椅上的傅君昭，久久端详着墙上一张黑白照片。那是1950年夏天，包括傅君昭在内的100多名中国留美学生、学者及子女，在旧金山登上了驶向中国的“威尔逊总统号”邮轮。在甲板上，他们留下了这珍贵的历史瞬间，也开启了海外赤子大批返回新中国参加建设的历史序幕。</p><br/><p>“我是中国人，就得回中国来。”就这样，年轻的冶金专家傅君昭，回到了祖国。</p><br/><p>站在浩瀚时光的两头，两个自己静静对视，年近百岁的傅君昭感慨无限：“共和国从一穷二白起步，发展到今天的繁荣富强，真是沧海巨变。”</p>',
    detail: {}
  },
  goPay() {
    let detail = JSON.stringify(this.data.detail)
    wx.navigateTo({
      url: '../signUp/signUp?detail=' + detail,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let data = JSON.parse(options.data)
    console.log(data)
    this.setData({
      detail: data
    })
    wx.setNavigationBarTitle({
      title: '课程详情'
    })
  },
  onShow: function (options) {
  }
})