# 用法
[English](./usage.md)

## 手机号脱敏
```javascript
import { mobile as Dmobile } from 'data-desensitization'
```

### 中国大陆 11 位手机号隐藏中间 4 位
使用 `DesensitizeChinesePhoneNumber` 方法，第一个参数为手机号码，字符串，不含 +86 或者 0086，中间没有空格。

```javascript
const { DesensitizeChinesePhoneNumber } = Dmobile
DesensitizeChinesePhoneNumber('13901234567')
```

## 电子邮箱脱敏
```javascript
import { email as Demail } from 'data-desensitization'
```

### 电子邮箱隐藏用户名以及长度
```javascript
const { DesensitizeEmailUserName } = Demail
DesensitizeEmailUserName('mitkimi@163.com')
```