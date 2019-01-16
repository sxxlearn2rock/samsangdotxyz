import list from '../../../../src/user/page/article/list.vue'
import util from '../../../../src/common/js/util.js'
import * as CONST from '../../../../src/common/js/constant.js'
import { expect } from 'chai'
window.$CONST = CONST

const { publishDateFilter } = list.filters
describe('user/page/article/list.vue', () => {
  it('test -> publishDateFilter', () => {
    // let nowDate = util.stringToDate('2019-01-02 15:05:35')
    let nowDate = new Date()
    let nowTime = nowDate.getTime()
    // 构建测试输入
    let dateStr_1 =util.dateFormat(new Date(nowTime - 2 * CONST.HOUR))
    let dateStr_2 =util.dateFormat(new Date(nowTime - 1 * CONST.DAY))
    let dateStr_3 =util.dateFormat(new Date(nowTime - 3 * CONST.DAY))
console.log('nowTime', dateStr_1)
    let nowStr = util.dateFormat(nowDate)
    expect('刚刚').to.be.equal(publishDateFilter(dateStr_1))
  })
})