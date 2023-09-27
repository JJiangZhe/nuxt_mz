<template>
  <div relative select-none bg="#ecf1f9" lt-md="h-580px">
    <img
      w-full
      lt-md:hidden
      h="490px"
      src="https://cdn4.zleyun.com/manzhi/about/bg.webp"
    />
    <img
      w-full
      md:hidden
      h="330px"
      src="https://cdn4.zleyun.com/manzhi/about/bg-phone.webp"
    />
    <div
      absolute
      max-w-500px
      md="top-110px left-8vw"
      lt-md="top-400px text-center left-0 right-0 w-[calc(100vw-50px)] mx-auto"
    >
      <h1 text-4xl font-600>技术优势</h1>
      <h3 text="#808183 xs lt-md:sm" lt-md:mt-10px leading-loose>
        湖南满枝科技是业内领先的软件产品、解决方案和服务提供商。
      </h3>
      <div text="#808183 xs lt-md:sm" lt-md:mt-10px leading-loose mt-20px>
        <span font-600>我们的愿景是：</span>
        <span>
          通过持续积累地税筹行业技术运营能力，以及海量的行业
          资源，赋能合作伙伴更大的价值。
        </span>
      </div>
    </div>
  </div>

  <div bg="#f5f6fb" md:py-80px lt-md:py-40px>
    <div seciton-content flex="~ justify-between">
      <div
        flex="~ md:items-center lt-md:col"
        rounded-4
        overflow-hidden
        style="box-shadow: 0px 4px 2px 1px #ebeff4"
      >
        <img
          md="w-300px"
          lt-md="w-170px"
          src="https://cdn5.zleyun.com/manzhi/about/t-1.png"
        />
        <div flex="~ col" md:px-24px lt-md="p-12px">
          <img
            w-40px
            h-22px
            src="https://cdn5.zleyun.com/manzhi/about/01.png"
          />
          <h1 text-lg font-600 mt-10px>SAAS服务持续更新</h1>
          <h3 text="#808183 xs">持续享受最新软件服务</h3>
        </div>
      </div>
      <div
        flex="~ md:items-center lt-md:col"
        rounded-4
        overflow-hidden
        style="box-shadow: 0px 4px 2px 1px #ebeff4"
      >
        <img
          md="w-300px"
          lt-md="w-170px"
          src="https://cdn5.zleyun.com/manzhi/about/t-2.png"
        />
        <div flex="~ col" md:px-24px lt-md="p-12px">
          <img
            w-40px
            h-22px
            src="https://cdn5.zleyun.com/manzhi/about/02.png"
          />
          <h1 text-lg font-600 mt-10px>税筹行业技术专家</h1>
          <h3 text="#808183 xs opacity-70">获得税筹行业最优IT方案</h3>
        </div>
      </div>
    </div>
  </div>

  <div
    relative
    flex="~ col items-center"
    text="#fff"
    :style="{
      backgroundImage:
        'url(https://cdn.zleyun.com/soft-zleyun/home/business-banner.png)'
    }"
  >
    <h1 text-3xl md:mt-100px lt-md:mt-50px>极速部署营业</h1>
    <h3 text-sm opacity-80 lt-md:mt-20px>最快当天可展开业务</h3>

    <div flex="~" md:my-60px lt-md:my-30px>
      <div v-for="item in arr1" flex="~ col items-center">
        <img
          :class="
            item.title
              ? 'md:w-120px md:h-120px lt-md:w-45px lt-md:h-45px'
              : 'md:w-133px md:h-3px md:mt-60px md:mx-20px lt-md:w-33px lt-md:h-1px lt-md:mt-25px lt-md:mx-10px'
          "
          :src="item.src"
        />
        <span v-if="item.title" text-sm font-600 md:mt-40px lt-md:mt-10px>{{
          item.title
        }}</span>
      </div>
    </div>
  </div>

  <div bg="#fafaff" md:py-80px lt-md:py-40px>
    <div section-title>多重安全保障</div>
    <div seciton-content grid="~ gap-4 md:cols-3 lt-md:cols-1">
      <div v-for="item in arr2" p-20px text-center rounded-2 bg="#FFF">
        <img w-95px h-99px mx-auto :src="item.src" />
        <h1 text-lg font-600 v-html="item.title" />
        <span leading-loose text="#808183 xs" v-html="item.content" />
      </div>
    </div>
  </div>

  <div section-title md:pt-80px lt-md:pt-40px>技术架构</div>
  <div seciton-content mb-20px leading-relaxed text="#595D60 xs center">
    技术团队来自于微软、甲骨文、中软国际、IBM等知名品牌软件公司，基于核心合作伙伴多年来的业务运营系统经验打造的灵活用工众包服务技术平台，和多家银行合作，系统得到多地税务局认可，完善保障平台客户的四流合一等凭证。
  </div>
  <div seciton-content mb-20 grid="~ gap-4 md:cols-4 lt-md:cols-2">
    <img v-for="item in arr3" :src="item" />
  </div>
</template>

<script setup lang="ts">
const arr1 = [
  {
    src: 'https://cdn2.zleyun.com/soft-zleyun/home/business1.png',
    title: '需求登记'
  },
  { src: 'https://cdn2.zleyun.com/soft-zleyun/home/business-line.png' },
  {
    src: 'https://cdn2.zleyun.com/soft-zleyun/home/business2.png',
    title: '合同签约'
  },
  { src: 'https://cdn2.zleyun.com/soft-zleyun/home/business-line.png' },
  {
    src: 'https://cdn2.zleyun.com/soft-zleyun/home/business3.png',
    title: '系统开通'
  },
  { src: 'https://cdn2.zleyun.com/soft-zleyun/home/business-line.png' },
  {
    src: 'https://cdn2.zleyun.com/soft-zleyun/home/business4.png',
    title: '开展业务'
  }
]

const arr2 = [
  {
    src: 'https://cdn3.zleyun.com/soft-zleyun/home/security1.png',
    title: '流程合法保障',
    content: '系统风控严格审核，凭证完整可查，合法合规，降低客户经营风险'
  },
  {
    src: 'https://cdn3.zleyun.com/soft-zleyun/home/security2.png',
    title: '资金安全保护',
    content:
      '与招商银行、工商银行、网商银行有第三方存管协定 资金交易双重认证，风险控制预警，全面保障合作商资金安全，助力服务商解决企业打款信任机制'
  },
  {
    src: 'https://cdn3.zleyun.com/soft-zleyun/home/security3.png',
    title: '信息安全保护',
    content:
      '注册用户和服务器之间的所有数据交互，无论是浏览器还是移动客户端,全都采用国际标准的SSL安全加切实保障用户数据不受中间人攻击和窃取'
  }
]

const arr3 = [
  'https://cdn.zleyun.com/soft-zleyun/about-us/work1.png',
  'https://cdn.zleyun.com/soft-zleyun/about-us/work2.png',
  'https://cdn.zleyun.com/soft-zleyun/about-us/work3.png',
  'https://cdn.zleyun.com/soft-zleyun/about-us/work4.png'
]
</script>
