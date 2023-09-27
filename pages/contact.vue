<template>
  <div relative>
    <img
      lt-md:hidden
      w-full
      h="284px"
      src="https://cdn4.zleyun.com/manzhi/contact-bg.webp"
    />
    <h1 lt-md:hidden absolute left-8vw top-80px text-3xl font-600 select-none>
      联系我们
    </h1>
  </div>
  <div section-title mt-10>公司简介</div>
  <div seciton-content md:pb-20 lt-md:pb-20px flex="~ items-center lt-md:col">
    <div
      indent-lg
      leading-relaxed
      lt-md:leading-loose
      text="#9E9E9E md:xs lt-md:sm"
    >
      <p>
        湖南满枝科技有限公司主要研发税筹行业共享经济平台系统。全国大力发展数字共享经济的背景下，由深圳市联讯惠通科技有限公司等投建成立。自2018年以来，专注于研发灵活用工一站式系统解决方案，助力税源地服务商公司在合规基础上降本增效，规避风险。以及研发有机械设备租赁系统、车辆租赁系统、集采系统、个体户平台系统等多种共享经济平台系统，围绕着个人、客户企业、税源地企业、共享经济平台企业打造四位一体的专业化服务生态圈，构建低成本、高效率、全要素、开放式的服务平台系统。
      </p>
      <p>
        满枝科技满枝科技技术团队来自于微软、甲骨文、中软国际、IBM等知名品牌软件公司，基于核心合作伙伴多年来的业务运营经验打造的各类共享经济服务技术系统平台，和多家银行合作，系统得到多地税务局认可并强烈推荐，完善保障平台客户的四流合一凭证、业务真实、风控规范等。为税源地服务商提供高效安全的系统服务，为平台企业的运营保驾护航。
      </p>
    </div>
    <div
      shrink-1
      bg="#F3FCFF"
      md:ml-22px
      lt-md="w-full mt-10px"
      p="md:x-98px y-72px"
    >
      <img
        md="w-262px max-w-262px h-78px"
        lt-md="mx-auto"
        src="https://cdn4.zleyun.com/manzhi/contact/logo.png"
      />
    </div>
  </div>

  <div bg="#f8f8f8" py-20>
    <div
      class="shadow-default"
      seciton-content
      select-none
      lt-md:hidden
      bg="#ffffff"
    >
      <div
        line-height-70px
        h-70px
        w-226px
        font-600
        bg="#d7eaff"
        text="#006ce5 center lg"
      >
        和我们取得联系
      </div>
      <div m="l-50px t-20px" text-md>
        如果您想采用方案，或有更多税筹行业系统化需求，请留下您的联系方式，我们将有专人与您联系。
      </div>
      <contract-form ref="formRef" p="l-50px y-20px" />
      <div flex mx-50px pb-5>
        <a-button type="primary" @click="onSubmit">立即咨询</a-button>
        <a-checkbox v-model="formCheck" value="1" ml-20px>
          同意使用我的联系方式，通过电话或短信方式向我发送云创关联方的信息
        </a-checkbox>
      </div>
    </div>
    <div section-title text-sm md:mt-10 mb-10px>或通过以下方式联系我们</div>
    <div select-none mb-20px text="lg center #727272">
      工作日 (9:00 - 18:00)
    </div>
    <div
      seciton-content
      md:bg="#FFF"
      md:py-32px
      flex="~ items-center lt-md:col"
    >
      <div flex="~ col 1" place-items-center>
        <span font-600 text-lg mb-10px>通过微信扫码</span>
        <img
          w-147px
          h-147px
          src="https://cdn4.zleyun.com/manzhi/contact/code.png"
        />
      </div>
      <div lt-md:hidden w-1px h-191px bg="#DCDCDC" />
      <div
        flex="~ col 1 md:items-start lt-md:items-center"
        md:ml-10
        lt-md="mt-20px w-full"
      >
        <span font-600 text-lg>通过电话/邮箱</span>
        <div
          mt-20px
          flex="~ items-center"
          lt-md="bg-#fff w-full py-16px px-40px rounded-4"
        >
          <img
            w-56px
            h-56px
            mr-20px
            src="https://cdn4.zleyun.com/manzhi/contact/phone.png"
          />
          <div flex="~ items-center" lt-md:flex="col items-start">
            <span font-600 md:text-xs lt-md:text-xl>联系电话</span>
            <span text="#808183" md:ml-10px lt-md:mt-5px select-text>
              400-1515-610
            </span>
          </div>
        </div>
        <div
          mt-20px
          flex="~ items-center"
          lt-md="bg-#fff w-full py-16px px-40px rounded-4"
        >
          <img
            w-56px
            h-56px
            mr-20px
            src="https://cdn4.zleyun.com/manzhi/contact/email.png"
          />
          <div flex="~ items-center" lt-md:flex="col items-start">
            <span font-600 md:text-xs lt-md:text-xl>联系邮箱</span>
            <span text="#808183" md:ml-10px lt-md:mt-5px select-text>
              service@imanzhi.com
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div section-title mt-20>企业文化</div>
  <div
    seciton-content
    mb-20
    md:mt-10
    lt-md:mt-10px
    grid="~ md:cols-3 lt-md:cols-1"
    lt-md:grid="gap-y-4 gap-x-6"
  >
    <div v-for="item in arr" flex="~ md:col lt-md:items-center">
      <img md="w-380px" lt-md="w-164px" :src="item.src" />
      <div flex="~ md:items-center col" md:text-center lt-md:ml-20px>
        <span md:mt-20px text="sm lt-md:xl" font-600 v-html="item.title" />
        <div mt-10px text="xs #808183 lt-md:lg" v-html="item.content" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Message } from '@arco-design/web-vue'
const formRef = ref()
const formCheck = ref(false)
const loading = ref(false)

const onSubmit = async () => {
  await formRef.value.validator()
  if (!formCheck.value) return
  loading.value = true
  const { error } = await useHttpData('/merchants/clue/web/add', {
    method: 'POST',
    body: formRef.value.body
  })
  loading.value = false
  if (error) return
  formRef.value.reset()
  Message.success('提交成功！')
}
const arr = [
  {
    src: 'https://cdn5.zleyun.com/manzhi/culture-1.webp',
    title: '企业使命',
    content: '以信息化建设推动“数字中国”的实现'
  },
  {
    src: 'https://cdn5.zleyun.com/manzhi/culture-2.webp',
    title: '企业价值观',
    content: '诚信、担当、敬业、创新、专注、共享'
  },
  {
    src: 'https://cdn5.zleyun.com/manzhi/culture-3.webp',
    title: '企业愿景',
    content: '致力数字科技，攀登科技顶峰'
  }
]
</script>
