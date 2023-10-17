/**
 * 中国大陆手机号脱敏：隐藏中间四位数
 * e.g. 13901234567 脱敏为 139 **** 4567
 * 注意：入参为字符串，不含 +86 或者 0086，中间不使用空格分开
 */
export function DesensitizeChinesePhoneNumber(phone) {
  return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1 **** $2')
}
