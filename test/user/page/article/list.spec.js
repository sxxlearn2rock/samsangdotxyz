import list from '../../../../src/user/page/article/list.vue'
import { expect } from 'chai'

const { publishDateFilter } = list.methods
describe('user/page/article/list.vue', () => {
  it('test -> publishDateFilter', () => {
    expect(publishDateFilter('str')).to.be.equal('str')
  })
})