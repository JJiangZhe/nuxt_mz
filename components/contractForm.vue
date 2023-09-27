<template>
  <a-form ref="formRef" layout="inline" :model="form" :rules="rules">
    <a-form-item hide-label field="name">
      <a-input v-model="form.name" placeholder="请输入您的姓名">
        <template #prepend>
          <span text="#ce3640">*</span>
          <span w-40px>姓名</span>
        </template>
      </a-input>
    </a-form-item>
    <a-form-item hide-label field="phone">
      <a-input-number
        v-model="form.phone"
        hide-button
        placeholder="请输入您的手机号"
        :max-length="11"
      >
        <template #prepend>
          <span text="#ce3640">*</span>
          <span w-40px>手机号</span>
        </template>
      </a-input-number>
    </a-form-item>
    <a-form-item hide-label field="email">
      <a-input v-model="form.email" placeholder="请输入您的邮箱">
        <template #prepend>
          <span w-46px>邮箱</span>
        </template>
      </a-input>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import { validPhone, validEmail } from '@/utils/validator'

const formRef = ref()
const form = reactive({
  name: '',
  phone: undefined,
  email: '',
  industryType: 1
})

const rules = reactive({
  name: [{ required: true, message: '请输入姓名' }],
  phone: [
    { required: true, message: '请输入电话号码' },
    { validator: validPhone }
  ],
  email: [{ required: false, message: '请输入邮箱' }, { validator: validEmail }]
})

const validator = async () => {
  const valid = await formRef.value.validate()
  return valid ? Promise.reject('校验错误') : Promise.resolve()
}

const reset = () => {
  form.name = ''
  form.email = ''
  form.phone = undefined
}

defineExpose({ validator, body: form, reset })
</script>
