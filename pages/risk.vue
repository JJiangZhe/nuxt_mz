<template>
  <div relative select-none>
    <img
      w-full
      lt-md:hidden
      h="490px"
      src="https://cdn4.zleyun.com/manzhi/risk/bg.png"
    />
    <img
      w-full
      md:hidden
      h="160px"
      src="https://cdn4.zleyun.com/manzhi/risk/bg-phone.png"
    />
    <div
      absolute
      left-0
      right-0
      md="top-110px"
      lt-md="top-40px"
      text="center #FFF"
    >
      <h1 text-4xl font-600>满星风控</h1>
      <h3 text-2xl lt-md:mt-10px>从今天开始，排除99%的业务风险</h3>
    </div>
  </div>
  <div seciton-content my-10 flex="~ items-center lt-md:col">
    <div indent-md text="justify" leading-loose md:mr-20px>
      <span text="2xl" font-600>"满星风控"</span>
      <span text="#808183">
        是满枝科技自主研发的风控系统平台，专注于税筹行业服务业务风险管理，集系统鉴证和流程管理等多种功能于一身。可以保障业务合规性，严防套用灵工政策、虚构业务、电诈洗钱等风险，保证共享经济平台合规性和参与主体合法权益，实现贯彻落实国家关于促进平台经济健康发展的相关政策。
      </span>
      <div flex="~" lt-md:place-content-center indent-0 mt-20px>
        <div
          v-for="item in arr"
          flex="~ col"
          place-items-center
          even-of-type="mx-40px"
        >
          <img w-48px h-48px :src="item.src" />
          <span text="#808183 xs" v-html="item.title" />
        </div>
      </div>
    </div>
    <img
      md:max-w-600px
      lt-md:mt-40px
      src="https://cdn4.zleyun.com/manzhi/risk/top-1.png"
    />
  </div>
  <div seciton-content mt-20>
    <div section-title text-2xl>全面风控经验累积，避开所有风险</div>
    <img src="https://cdn4.zleyun.com/manzhi/risk/one.png" />
  </div>
  <div seciton-content mt-20>
    <div section-title text-2xl>标准化风控流程，风险早预防！</div>
    <img
      md:max-w-960px
      mx-auto
      src="https://cdn4.zleyun.com/manzhi/risk/two.png"
    />
  </div>
  <div seciton-content my-20>
    <div section-title text-2xl>智能风控识别，隐藏风险秒知道！</div>
    <img src="https://cdn4.zleyun.com/manzhi/risk/three.png" />
  </div>
</template>

<script setup lang="ts">
const arr = [
  { src: 'https://cdn4.zleyun.com/manzhi/risk/t-l-1.png', title: '全面' },
  { src: 'https://cdn4.zleyun.com/manzhi/risk/t-l-2.png', title: '标准' },
  { src: 'https://cdn4.zleyun.com/manzhi/risk/t-l-3.png', title: '智能' }
]
</script>
