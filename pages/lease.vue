<template>
  <page-title
    title="提升车辆设备资源配置&nbsp;&nbsp;&nbsp;促进共享经济高质发展"
    desc="共享车辆设备租赁交易结算中心，为个人车主、设备主、企业全面赋能。"
    img="https://cdn4.zleyun.com/manzhi/lease/bg.png"
    :icons="[
      {
        icon: 'https://cdn4.zleyun.com/manzhi/lease/sbzl.png',
        title: '设备租赁'
      },
      {
        icon: 'https://cdn4.zleyun.com/manzhi/lease/fwlh.png',
        title: '服务灵活'
      },
      {
        icon: 'https://cdn4.zleyun.com/manzhi/lease/yytg.png',
        title: '运营托管'
      }
    ]"
  />
  <div seciton-content py-16 flex="~ items-center lt-md:col">
    <div md:mr-20 lt-md:mb-4 flex-1>
      <h1 text="2xl lt-md:center" font-600>平台介绍</h1>
      <div indent-md text="justify">
        <span text="xl " font-600>"乐租宝"</span>
        <span text="#808183">
          车辆设备租赁平台、车辆设备数据结算中心、“互联网+车辆设备”金融服务、“车主、企业服务端”
          小程序等围绕着私人车主、私人设备主、企业、租赁公司打造四位一体的专业化服务生态圈。
        </span>
      </div>
    </div>
    <img h-70 src="https://cdn4.zleyun.com/manzhi/lease/one-r.png" />
  </div>
  <div section-title>业务介绍</div>
  <div section-title text-xl lt-md:text="#727272">机械设备平台租赁</div>
  <div seciton-content mb-20>
    <img src="https://cdn4.zleyun.com/manzhi/lease/two.png" />
    <div mt-4 grid="~ gap-2 md:cols-3 lt-md:cols-1">
      <div
        v-for="item in arr1"
        p-20px
        style="box-shadow: 0px 4px 20px 0px rgba(207, 207, 207, 0.39)"
      >
        <h3 font-600 text-lg mb-2>{{ item.title }}</h3>
        <div
          v-for="content in item.content"
          leading-relaxed
          text="#808183 justify xs"
        >
          <span mr-1>·</span>
          <span>{{ content }}</span>
        </div>
      </div>
    </div>
  </div>
  <div section-title text-xl lt-md:text="#727272">车辆租赁</div>
  <div seciton-content>
    <img src="https://cdn4.zleyun.com/manzhi/lease/three.png" />
    <div mt-6 grid="~ gap-x-2 gap-y-4 md:cols-4 lt-md:cols-2">
      <div
        v-for="item in arr2"
        text-center
        style="box-shadow: 0px 4px 20px 0px rgba(207, 207, 207, 0.39)"
      >
        <img :src="item.src" />
        <h3 font-600 text-lg my-2>{{ item.title }}</h3>
        <div
          v-for="content in item.content"
          leading-relaxed
          p="x-15px b-8px"
          text="#808183 justify xs"
        >
          <span mr-1>·</span>
          <span>{{ content }}</span>
        </div>
      </div>
    </div>
  </div>
  <div section-title mt-20 text-xl lt-md:text="#727272">
    车辆设备平台数据结算中心
  </div>
  <div seciton-content pb-10>
    <img src="https://cdn4.zleyun.com/manzhi/lease/five.png" />
  </div>
  <div pt-10 bg="#f8f8f8">
    <div section-title text-xl lt-md:text="#727272">业务范围</div>
    <div
      seciton-content
      place-content-center
      grid="~ gap-x-2 gap-y-4 md:cols-5 lt-md:cols-3"
    >
      <div
        v-for="(item, index) in arr3"
        m-auto
        md="w-138px h-220px text-xs"
        lt-md="w-94px h-140px text-sm"
        :class="index === 1 ? 'lt-md:row-span-3' : ''"
      >
        <img w-full md:h-138px lt-md:h-94px :src="item.src" />
        <h3 mt-10px text="center" v-html="item.title" />
      </div>
    </div>
  </div>
  <div section-title mt-10>企业优势</div>
  <div seciton-content flex="~ items-center lt-md:col">
    <img md:w-595px src="https://cdn4.zleyun.com/manzhi/lease/seven.png" />
    <div md:ml-20px flex="~ col">
      <h1 lt-md:hidden text-xl font-600>企业资质</h1>
      <div mt-24px mb-10px flex="~ items-center">
        <div w-4px h-4px bg="#326BFF"></div>
        <span ml-4px text-sm font-500>国资企业成员投资</span>
      </div>
      <span text="#808183 xs">平台由国资企业成员投资，具有国企背景；</span>

      <div mt-24px mb-10px flex="~ items-center">
        <div w-4px h-4px bg="#326BFF"></div>
        <span ml-4px text-sm font-500>税务合规</span>
      </div>
      <span text="#808183 xs">
        平台将集合个人车主、设备主的信息，帮助个人统一在税局代理开具发票；
      </span>

      <div mt-24px mb-10px flex="~ items-center">
        <div w-4px h-4px bg="#326BFF"></div>
        <span ml-4px text-sm font-500>资金安全</span>
      </div>
      <span text="#808183 xs">
        依托国有背景企业、委托银行及第三方支付机构资金
        监管，项目款项即收即付，资金流向实时监控可查。
      </span>
    </div>
  </div>
  <div
    seciton-content
    mt-10
    grid="~ md:cols-3 lt-md:cols-2"
    lt-md:grid="gap-y-4 gap-x-6"
  >
    <div v-for="item in arr4" md:p-50px class="border-item">
      <img w-80px h-80px mx-auto :src="item.src" />
      <h3 mt-5px text="sm center" v-html="item.title" />
      <div mt-10px text="xs #808183 center" v-html="item.content" />
    </div>
  </div>
  <div section-title mt-10>合作企业</div>
  <div seciton-content mb-10>
    <img src="https://cdn4.zleyun.com/manzhi/lease/nine.png" />
  </div>
</template>

<script setup lang="ts">
const arr1 = [
  {
    title: '承租方',
    content: [
      '到平台机械设备租赁公司（转租方) 租赁机械设备并签订租赁合同；',
      '按合同要求按时支付租赁服务费用, 获取租赁服务专用发票13%。'
    ]
  },
  {
    title: '转租方',
    content: [
      '入住平台，承接机械设备租赁业务;',
      '将出租方的机械设备转租给承租方 , 并提供租赁业务相关的服务，收取承租方租金和服务费用；',
      '开具对应租赁及服务费用发票。'
    ]
  },
  {
    title: '出租方',
    content: [
      '在平台上注册账户;',
      '并将个人机械设备租赁给入住平台的机械设备租赁公司；',
      '确认租赁关系后，按合同要求按时收取租赁费用并开具发票。'
    ]
  }
]

const arr2 = [
  {
    title: '平台',
    src: 'https://cdn4.zleyun.com/manzhi/lease/four-1.png',
    content: [
      '为入驻平台的租赁公司及车主提供服务；',
      '平台收取租赁公司服务费；',
      '开具服务发票给租赁公司。'
    ]
  },
  {
    title: '车主',
    src: 'https://cdn4.zleyun.com/manzhi/lease/four-2.png',
    content: [
      '将车辆租赁给入驻易租宝平台的租赁公司；',
      '与平台入驻租赁公司签约，开具发票给平台租赁公司后按期收取租金。'
    ]
  },
  {
    title: '平台租赁公司',
    src: 'https://cdn4.zleyun.com/manzhi/lease/four-3.png',
    content: [
      '承租车主的车辆并签订租赁合约，按期支付租金；',
      '搭平台车辆转租企业客户，并签订租赁合约；',
      '按期收取租金并开具租赁专业发票；',
      '同时支付平台服务费用，索取服务发票。'
    ]
  },
  {
    title: '企业',
    src: 'https://cdn4.zleyun.com/manzhi/lease/four-4.png',
    content: [
      '与平台入驻租赁公司签约；',
      '从平台租赁公司租用车辆；',
      '按期支付租金给平台租赁公司并获取租赁专用发票。'
    ]
  }
]

const arr3 = [
  {
    src: 'https://cdn4.zleyun.com/manzhi/lease/six-1.png',
    title: '车辆/设备信息化管理'
  },
  {
    src: 'https://cdn4.zleyun.com/manzhi/lease/six-2.png',
    title: '车辆/设备数据结算服务'
  },
  {
    src: 'https://cdn4.zleyun.com/manzhi/lease/six-3.png',
    title: '大数据解析及人工智能AI服务'
  },
  {
    src: 'https://cdn4.zleyun.com/manzhi/lease/six-4.png',
    title: '物联网服务云平台'
  },
  {
    src: 'https://cdn4.zleyun.com/manzhi/lease/six-5.png',
    title: '商务智能BI服务'
  }
]

const arr4 = [
  {
    src: 'https://cdn4.zleyun.com/manzhi/lease/eight-1.png',
    title: '7*12小时',
    content: '官方客服，全年无休'
  },
  {
    src: 'https://cdn4.zleyun.com/manzhi/lease/eight-2.png',
    title: '技术平台',
    content: '独立自主研发云结算系统，可实现自动化的佣金计算、下发、对账、统计'
  },
  {
    src: 'https://cdn4.zleyun.com/manzhi/lease/eight-3.png',
    title: '资金安全',
    content: '稳定安全的银行存管系统；每日五百万笔交易处理；实时到账、实时查'
  },
  {
    src: 'https://cdn4.zleyun.com/manzhi/lease/eight-4.png',
    title: '专业顾问',
    content: '数量庞大的专业税务咨询师团队，服务流程标准化、规范化'
  },
  {
    src: 'https://cdn4.zleyun.com/manzhi/lease/eight-5.png',
    title: '公司分布',
    content:
      '分公司遍布杭州、湖南、广州、江西、深圳等地，售后服务响应更快，服务质量更优'
  },
  {
    src: 'https://cdn4.zleyun.com/manzhi/lease/eight-6.png',
    title: '服务灵活',
    content:
      '商务专员和客服专员以电话、微信、现场等多样化形式向客户提供服务，更快捷响应客户需求'
  }
]
</script>

<style lang="less" scoped>
@screen md {
  .border-item:nth-child(1),
  .border-item:nth-child(3) {
    border-bottom: 1px solid #e6e6e6;
  }

  .border-item:nth-child(3n - 1) {
    border: 1px solid #e6e6e6;
    border-top: none;
  }
}
</style>
