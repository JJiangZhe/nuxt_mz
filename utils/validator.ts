/**
 * 手机号验证(最宽松, 只要是1开头即可)
 * @param value
 * @param callBack
 * @returns
 */
export function validPhone(value: any, callBack?: Function) {
  if (value == null && callBack) return callBack()
  if (value == null) return false
  const valid = /^(?:(?:\+|00)86)?1\d{10}$/.test(value)
  if (callBack) return valid ? callBack() : callBack('请输入正确的手机号')
  return valid
}

/**
 * email(邮箱)
 * @param value
 * @param callBack
 * @returns
 */
export function validEmail(value: any, callBack?: Function) {
  if (value == null && callBack) return callBack()
  if (value == null) return false
  const valid =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
    )
  if (callBack) return valid ? callBack() : callBack('请输入正确的邮箱')
  return valid
}
