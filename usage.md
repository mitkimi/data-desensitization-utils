# Usage
[中文](./usage.zh-cn.md)

## Mobile Number
```javascript
import { mobile as Dmobile } from 'data-desensitization'
```
### The Chinese 11 digits Mobile Number, hide 4 digits in the middle

Using `DesensitizeChinesePhoneNumber` function, param 0 should be the Mobile Number(String), not including +86, 0086 or spaces.
```javascript
const { DesensitizeChinesePhoneNumber } = Dmobile
DesensitizeChinesePhoneNumber('13901234567')
```

## Email
```javascript
import { email as Demail } from 'data-desensitization'
```

### Hide email username and username length

```javascript
const { DesensitizeEmailUserName } = Demail
DesensitizeEmailUserName('mitkimi@163.com')
```