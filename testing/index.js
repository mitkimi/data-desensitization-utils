import { mobile, email } from '../src/index.js'
import { testFoo } from './foo.js'

console.log('------------------------------ 自动测试程序 ------------------------------')
console.log('==========================================================================')

const { DesensitizeChinesePhoneNumber } = mobile
const aChineseMobileNumber = '13901234567'
testFoo('中国大陆手机号', aChineseMobileNumber, DesensitizeChinesePhoneNumber)

const { DesensitizeEmailUserName } = email
const anEmail = 'mitkimi@163.com'
testFoo('电子邮箱用户名', anEmail, DesensitizeEmailUserName)

console.log('==========================================================================')
console.log('ok!')

