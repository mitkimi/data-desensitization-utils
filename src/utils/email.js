/**
 *  邮箱脱敏：用户名部分仅保留第一个字母
 *  e.g. mitkimi@gmail.com 脱敏为 m***@gmail.com
 */

export function DesensitizeEmailUserName(email) {
  const emailArr = email.split('@')
  return `${emailArr[0].split('')[0]}***@${emailArr[1]}`
}
