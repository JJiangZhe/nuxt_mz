<template>
  <page-title
    reverse
    title="贸易采购电商平台系统&nbsp;&nbsp;&nbsp;专业税筹产品解决方案"
    desc="一站式大型采购平台，简化用户采购流程，商品交易信息化，在系统中体现业务流程完整的合同流、资金流、业务流以及相关凭证展示，为用户提供一个公开、透明、易用的大型贸易采购电商交易平台。"
    img="https://cdn4.zleyun.com/manzhi/purchase/bg.png"
  />
  <div
    seciton-content
    flex="~ items-center"
    md="my-40px"
    lt-md="flex-col mt-40px"
  >
    <div flex="~ col">
      <h1 font-600 text-2xl lt-md:text-center mb-20px>什么是集采平台？</h1>
      <span indent-md text="justify #808183 sm">
        集采平台——满枝旗下专业税筹产品解决方案，通过集采平台，企业无须再设立专门
        的物资采购部门。集采平台完全独立于客户单位，但不同于一般的采购中介商，它是站在
        客户的立场上，专营某一类或相关的几类物资的采购代理，拥有自己的仓库和专业化的物
        资配送队伍，能够在接到客户采购指令后及时准确地把物资送达客户指定的地点。
      </span>
      <span indent-md text="justify #808183 sm" mt-20px>
        物资采购代理企业通过这种专业的采购方式和高效的物资配送队伍，来代替原来由客
        户单位采购部门进行的工作，能够在自身发展的同时，帮助客户单位达到降低采购成本的
        目的。
      </span>
    </div>
    <img
      max-w-600px
      lt-md:w-full
      src="https://cdn4.zleyun.com/manzhi/purchase/one-r.png"
    />
  </div>
  <div section-title mt-20>业务流程</div>
  <div seciton-content>
    <div section-title text-lg lt-md:text="#727272">采购方流程</div>
    <img src="https://cdn4.zleyun.com/manzhi/purchase/flow-one.png" />
    <div grid="~ cols-5 gap-x-4">
      <span
        v-for="item in [
          '01 在线选购,提交订单',
          '02 在线支付',
          '03 订单管理',
          '04 等待收货',
          '05 收货申请发票'
        ]"
        mt-10px
        text="center #727272 font-600 sm"
      >
        {{ item }}
      </span>
    </div>
    <div section-title text-lg lt-md:text="#727272" mt="md:80px lt-md:40px">
      服务商流程
    </div>
    <div md:max-w-1000px mx-auto>
      <img w-full src="https://cdn4.zleyun.com/manzhi/purchase/flow-two.png" />
      <div grid="~ cols-3 gap-x-4">
        <span
          v-for="item in [
            '01 订单管理,核对订单',
            '02 发货',
            '03 开具发票并寄出'
          ]"
          mt-10px
          text="center #727272 font-600 sm"
        >
          {{ item }}
        </span>
      </div>
    </div>
  </div>
  <div section-title mt-20>平台优势</div>
  <div
    seciton-content
    mt-6
    pb-10
    grid="~ gap-x-2 gap-y-4 md:cols-4 lt-md:cols-2"
  >
    <div
      v-for="item in arr"
      text-center
      style="box-shadow: 0px 4px 20px 0px rgba(207, 207, 207, 0.39)"
    >
      <img md="w-160px h-160px" lt-md="w-80px h-80px" mx-auto :src="item.src" />
      <h3 font-600 text-lg my-2>{{ item.title }}</h3>
      <div leading-relaxed p="x-15px b-8px" text="#808183 justify xs">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const arr = [
  {
    src: 'https://cdn4.zleyun.com/manzhi/purchase/sh.png',
    title: '实惠',
    content:
      '专营某一类或几类物资的采购，可以同时为多家客户提供服务，因而在运作中通常是大宗采购，大宗采购在价格上往往有更大的优惠，能够享受比一般客户更为优惠的折扣。'
  },
  {
    src: 'https://cdn4.zleyun.com/manzhi/purchase/zy.png',
    title: '质优',
    content:
      '采购代理企业比客户本身的采购部门更具有责任感和危机感，更有动力去寻求质优价廉的物资。'
  },
  {
    src: 'https://cdn4.zleyun.com/manzhi/purchase/bj.png',
    title: '便捷',
    content:
      '拥有专业化的物资配送队伍，具备在较短时间内将客户所需物资送到客户指定地点的能力。且长期从事物资的配送，对所配送物资的性能、运输要求更为了解，从而减少物资在装卸以及运输过程中的损耗，节约了成本。'
  },
  {
    src: 'https://cdn4.zleyun.com/manzhi/purchase/cx.png',
    title: '诚信',
    content:
      '采购代理企业必须具有高度的社会责任感、高度职业化的物资配送队伍和高度专业化的管理手段，要依靠高效率的管理，高素质的人才，建立良好的社会信誉。'
  }
]
</script>
