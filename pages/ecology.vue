<template>
  <page-title
    title="个体户平台系统&nbsp;&nbsp;&nbsp;专业税筹产品解决方案"
    desc="打通客户、服务商、税源地的连接，创新性的将线上线下流程相结合，在线办理业务，多方线上协作，为个体户的注册、注销、开票等业务提供一站式平台服务。"
    img="https://cdn4.zleyun.com/manzhi/purchase/bg.png"
    :icons="[
      {
        icon: 'https://cdn4.zleyun.com/manzhi/individual/top-1.png',
        title: '一站式平台解决方'
      },
      {
        icon: 'https://cdn4.zleyun.com/manzhi/individual/top-2.png',
        title: '强大的降本增效能力'
      },
      {
        icon: 'https://cdn4.zleyun.com/manzhi/individual/top-3.png',
        title: '简便的系统使用流程'
      }
    ]"
  />
  <div py-10 bg="#F7FAFE">
    <div section-title>产品特性</div>
    <div seciton-content grid="~ gap-4 md:cols-4 lt-md:cols-2">
      <div v-for="item in characteristic" p-4 rounded-lg bg="#ffffff">
        <img
          mx-auto
          md="w-160px h-160px"
          lt-md="w-80px h-80px"
          :src="item.src"
        />
        <h1 text-lg text-center font-700 v-html="item.title" />
        <span
          text-justify
          leading-normal
          font-500
          text="#808183"
          v-html="item.desc"
        />
      </div>
    </div>
  </div>
  <div section-title mt-20>价值优势</div>
  <div seciton-content pb-4 grid="~ gap-4 md:cols-3 lt-md:cols-1">
    <div
      v-for="item in advantage"
      relative
      bg-center
      bg-no-repeat
      p="l-6"
      h-128px
      md="max-w-380px bg-contain"
      lt-md="bg-cover"
      flex="~ col"
      :style="{
        backgroundImage: `url(${item.src})`
      }"
    >
      <h1
        left-22px
        font-600
        text="#1A1D24"
        md="text-sm mt-42px leading-none"
        lt-md="text-xl mt-42px"
        v-html="item.title"
      />
      <span
        md="text-xs leading-5"
        lt-md="text-xl leading-relaxed"
        text="#808183 xs"
        v-html="item.desc"
      />
    </div>
  </div>
  <div section-title mt-20>助力发展</div>
  <div seciton-content flex relative mb-60px lt-md:flex-col>
    <div
      flex-1
      rounded-48px
      p="y-10 l-10 r-24"
      from="#25B1FF"
      to="#0078FF"
      lt-md="pr-10 pb-16"
      bg-gradient-to-tr
    >
      <h1 text="xl #FFF" font-500 lt-md:text-center>满枝个体户</h1>
      <div v-for="item in mz" flex not-first="mt-20px">
        <img
          w-32px
          h-32px
          src="https://cdn4.zleyun.com/manzhi/individual/dui.png"
        />
        <span ml-10px text="#FFF sm">{{ item }}</span>
      </div>
    </div>
    <div
      lt-md:hidden
      absolute
      top-30px
      left="50%"
      translate-x="-50%"
      flex="~ col items-center"
    >
      <img
        w-82px
        h-82px
        src="https://cdn4.zleyun.com/manzhi/individual/vs.png"
      />
      <div
        v-for="btn in ['信息采集', '资金交易', '风险抵御']"
        rounded-20px
        font-600
        mt-20px
        text="lg #187FF2"
        p="x-50px y-15px"
        bg="#CADFFF"
      >
        {{ btn }}
      </div>
    </div>
    <img
      md:hidden
      z-9
      w-82px
      h-82px
      m="t--36px b--56px x-auto"
      src="https://cdn4.zleyun.com/manzhi/individual/vs.png"
    />
    <div
      flex-1
      rounded-48px
      p="y-10 l-24 r-10"
      lt-md="pl-10 mt-20px pt-16"
      bg="#E9EDF3"
    >
      <h1 text="xl" font-500 lt-md:text-center>传统方式</h1>
      <div v-for="item in ct" flex not-first="mt-20px">
        <div w-14px h-7px shrink-1 mt-10px rounded="50%" bg="#737377" />
        <span ml-10px text="#808183 sm">{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const characteristic = [
  {
    src: 'https://cdn4.zleyun.com/manzhi/individual/two-1.png',
    title: '一站式平台解决方案',
    desc: '提供一站式的平台系统解决方案，全流程一体化，实现数据统筹管理、业务流程闭环管理，同时将线上和线下流程进行融合，使整体平台具备强大的兼容性和扩展性。'
  },
  {
    src: 'https://cdn4.zleyun.com/manzhi/individual/two-2.png',
    title: '强大的降本增效能力',
    desc: '专注于降本增效，全程可视化，多端协同运作，运用多维度的价格配置、报表分析、信息的集中采集和管理等技术，提升内控水平，提高用户满意度，节省成本，提高效率。'
  },
  {
    src: 'https://cdn4.zleyun.com/manzhi/individual/two-3.png',
    title: '简便的系统使用流程',
    desc: '摒弃传统的表格传递，结合实际业务场景，实现全流程线上一体化，使注册、开票、核税、交税注销快速完成，打破发展桎梏，助力快速发展。'
  },
  {
    src: 'https://cdn4.zleyun.com/manzhi/individual/two-4.png',
    title: '严格的行业标准规范',
    desc: '采用标准化管理平台，实现了行业标准体系在平台内的严格一致与共享，保证了平台的可靠性、规范性、一致性，为业务实现、扩展奠定了基础。'
  }
]

const advantage = [
  {
    src: 'https://cdn5.zleyun.com/manzhi/individual/three-1.png',
    title: '多端协作',
    desc: '微信端、WEB端，方便快捷，提升工作效率，增强用户体验。'
  },
  {
    src: 'https://cdn5.zleyun.com/manzhi/individual/three-2.png',
    title: '功能完备',
    desc: '全面支持注册、注销、开票、支付、归档、价格管理等功能。'
  },
  {
    src: 'https://cdn5.zleyun.com/manzhi/individual/three-3.png',
    title: '全程帮扶',
    desc: '全方位协助服务，优质税源地协助入驻，一站对接。'
  },
  {
    src: 'https://cdn5.zleyun.com/manzhi/individual/three-4.png',
    title: '性能卓越',
    desc: '运用微服务、IMB WAS ND和IMB MQ集群等技术，打造出超高性能系统，可满足各种场景需要。'
  },
  {
    src: 'https://cdn5.zleyun.com/manzhi/individual/three-5.png',
    title: '套餐定制',
    desc: '可根据需要打造独有功能，适应发展需要。'
  },
  {
    src: 'https://cdn5.zleyun.com/manzhi/individual/three-6.png',
    title: '安全可靠',
    desc: '使用国密算法，结合国家等保要求，全方位保障系统安全、稳定、可靠。'
  }
]

const mz = [
  '1. 采用全线上采集信息，运用OCR识别、云存储等技术，方便用户快速填写信息，降低运营商沟通成本，减少出错，专注工作，快速落地业务',
  '2. 支持微信支付、银联支付等支付方式，保证资金安全；支付数据统筹管理，优化现金流，全程可视化，各项报表自动计算、查看，提升内控水平',
  '3. 实行三流合一，将重要数据存储在线上，同时结合国家等保要求，使用国密算法，保护系统数据安全，可有效抵御数据泄露风险，应对各类税务监管'
]

const ct = [
  '1. 采用Excel、Word等方式，人工线下进行注册、开票等信息的采集，效率低、出错率高，客户体验差，无法快速落地业务',
  '2. 使用人工转账、收款，使用Excel表格记录交易信息，易出现资金安全风险，且无法快速处理交易数据，形成数据报表',
  '3. 业务数据、客户信息等通过传统表格、纸张存储，易造成信息泄露、文件丢失，无法有效保护数据安全，不能及时应对税务监管'
]
</script>

<style lang="less" scoped></style>
