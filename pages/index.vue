<template>
  <div
    class="bg absolute bg-#e9f1fa left-0 right-0"
    bg="no-repeat contain"
    md="h-65vh"
    lt-md:="bg-position-center"
  />
  <div
    class="absolute select-none"
    lt-md="w-full px-5% text-center bottom-20vh"
    md="mx-8% top-250px"
  >
    <div md="flex flex-col" font-600 text="4xl" line-height-normal font-500>
      <span>业内领先的软件产品、</span>
      <span>解决方案和服务提供商</span>
    </div>
    <h3 class="mt-20px" text="#595D60 3xl">湖南满枝科技有限公司</h3>
  </div>

  <div
    class="shadow-default"
    m="x-8%"
    left-0
    right-0
    select-none
    lt-md:hidden
    bg="#ffffff"
    pos="absolute top-[calc(65vh+9px)]"
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
    <contract-form ref="formRef1" p="l-50px y-20px" />
    <div flex mx-50px pb-5>
      <a-button :loading="loading" @click="onSubmit">立即咨询</a-button>
      <a-checkbox v-model="formCheck" value="1" ml-20px>
        同意使用我的联系方式，通过电话或短信方式向我发送云创关联方的信息
      </a-checkbox>
    </div>
  </div>

  <div class="page" />

  <!-- 专业级灵活用工系统 -->
  <div
    class="page"
    flex
    items-center
    select-none
    lt-md="flex-col text-center"
    p="md:x-10%"
  >
    <img
      w="md:50% lt-md:80%"
      shrink-1
      src="https://cdn4.zleyun.com/manzhi/index-p2.webp"
      alt=""
    />
    <div lt-md="mt-20px mx-10%" md="ml-10%" flex flex-col>
      <h1 text-3xl font-500>专业级灵活用工系统</h1>
      <h3 text="xl #595D60 justify">
        引进我们，帮您提高100%以上利润，降低99%的风险，护航企业快速落地、稳定运营。
      </h3>
      <div flex my-30px lt-md:justify-around>
        <a-tag
          v-for="item in ['税源地端', '企业端', '销售端', '个人端']"
          size="large"
          color="gray"
          md:mr-20px
        >
          {{ item }}
        </a-tag>
      </div>
      <div class="img-box" lt-md:justify-around>
        <div>
          <img src="~/assets/images/1.png" />
          <span>价格实惠</span>
        </div>
        <div>
          <img src="~/assets/images/2.png" />
          <span>高度自动化</span>
        </div>
        <div>
          <img src="~/assets/images/3.png" />
          <span>功能全面</span>
        </div>
      </div>
      <div class="img-box" lt-md:justify-around>
        <div>
          <img src="~/assets/images/4.png" />
          <span>监管认可</span>
        </div>
        <div>
          <img src="~/assets/images/5.png" />
          <span>多支付通道</span>
        </div>
        <div>
          <img src="~/assets/images/6.png" />
          <span>OEM贴牌</span>
        </div>
      </div>
      <a-button
        lt-md="mt-30px"
        md="mt-40px"
        w="lt-md:full md:100px"
        type="primary"
        size="large"
        href="https://soft.zleyun.com/"
      >
        了解更多
      </a-button>
    </div>
  </div>

  <!-- 个体户平台系统 -->
  <div
    class="page"
    flex
    items-center
    select-none
    lt-md="flex-col text-center"
    p="md:x-10%"
    bg="#f1f1f3"
  >
    <img
      md:hidden
      w="lt-md:80%"
      shrink-1
      src="https://cdn4.zleyun.com/manzhi/index-p5.png"
      alt=""
    />
    <div lt-md="mt-20px mx-10%" md="mr-10%" flex flex-col>
      <h1 text-3xl font-500>个体户平台系统</h1>
      <div class="img-box" lt-md:justify-around>
        <div>
          <img src="https://cdn4.zleyun.com/manzhi/individual/top-1.png" />
          <span>一站式平台解决方</span>
        </div>
        <div>
          <img src="https://cdn4.zleyun.com/manzhi/individual/top-2.png" />
          <span>强大的降本增效能力</span>
        </div>
        <div>
          <img src="https://cdn4.zleyun.com/manzhi/individual/top-3.png" />
          <span>简便的系统使用流程</span>
        </div>
      </div>

      <h3 mt-20px text="xl #595D60 justify">
        打通客户、服务商、税源地的连接，创新性的将线上线下流程相结合，在线办理业务，多方线上协作，为个体户的注册、注销、开票等业务提供一站式平台服务。
      </h3>
    </div>
    <img
      lt-md:hidden
      w="md:50%"
      shrink-1
      src="https://cdn4.zleyun.com/manzhi/index-p5.png"
      alt=""
    />
  </div>

  <!-- 贸易采购电商平台系统 -->
  <div
    class="page"
    flex
    items-center
    select-none
    lt-md="flex-col text-center"
    p="md:x-10%"
  >
    <img
      w="md:50% lt-md:80%"
      shrink-1
      src="https://cdn4.zleyun.com/manzhi/index-p3.png"
      alt=""
    />
    <div lt-md="mt-20px mx-10%" md="ml-10%" flex flex-col>
      <h1 text-3xl font-500>贸易采购电商平台系统</h1>
      <div class="img-box" lt-md:justify-around>
        <div>
          <img src="~/assets/images/9.png" />
          <span>全流程化</span>
        </div>
        <div>
          <img src="~/assets/images/10.png" />
          <span>降本增效</span>
        </div>
        <div>
          <img src="~/assets/images/11.png" />
          <span>合规保障</span>
        </div>
      </div>
      <h3 mt-20px text="xl justify #595D60">
        一站式大型采购平台，简化用户采购流程，商品交易信息化，在系统中体现业务流程完整的合同流、资金流、业务流以及相关凭证展示，为用户提供一个公开、透明、易用的大型贸易采购电商交易平台。
      </h3>
    </div>
  </div>

  <!-- 租赁平台 -->
  <div
    class="page"
    flex
    items-center
    select-none
    lt-md="flex-col text-center"
    p="md:x-10%"
    bg="#f1f1f3"
  >
    <div md="mr-10%" lt-md="mt-20px mx-10%" flex flex-col>
      <h1 text-3xl font-500>租赁平台系统</h1>
      <div class="img-box" lt-md:justify-around>
        <div>
          <img src="~/assets/images/12.png" />
          <span>租赁设备</span>
        </div>
        <div>
          <img src="~/assets/images/7.png" />
          <span>服务灵活</span>
        </div>
        <div>
          <img src="~/assets/images/8.png" />
          <span>运营托管</span>
        </div>
      </div>
      <h3 mt-20px text="xl justify #595D60">
        旗下主营“乐租宝”车辆设备租赁平台、车辆设备数据结算中心、
        “互联网+车辆设备”金融服务、“车主、企业服务端”
        小程序等围绕着私人车主、私人设备主、企业、
        租赁公司打造四位一体的专业化服务生态圈。
      </h3>
    </div>
    <img
      w="md:50% lt-md:80%"
      shrink-1
      src="https://cdn4.zleyun.com/manzhi/index-p4.png"
      alt=""
    />
  </div>

  <!-- 移动端 联系我们 -->
  <div class="notify" md="!hidden" @click="visible = true">
    <icon-notification mb-6px :size="18" />
    <span>获</span>
    <span>取</span>
    <span>方</span>
    <span>案</span>
  </div>

  <a-modal
    v-model:visible="visible"
    width="80%"
    title="数字化解决方案"
    title-align="start"
    :footer="false"
  >
    <div text-2xl font-500 mb-10px>
      请留下您的联系方式，我们将有专人与您联系。
    </div>
    <contract-form ref="formRef2" layout="horizontal" />
    <a-checkbox v-model="formCheck" value="1" mb-20px>
      同意使用我的联系方式，通过电话或短信方式向我发送云创关联方的信息
    </a-checkbox>
    <a-button long type="primary" :loading="loading" @click="onSubmit">
      立即咨询
    </a-button>
  </a-modal>
</template>

<script setup lang="ts">
import { Message } from '@arco-design/web-vue'
const visible = ref(false)

const formRef1 = ref()
const formRef2 = ref()

const formCheck = ref(false)
const loading = ref(false)

const onSubmit = async () => {
  let body = null

  if (visible.value) {
    await formRef2.value.validator()
    body = formRef2.value.body
  } else {
    await formRef1.value.validator()
    body = formRef1.value.body
  }
  if (!formCheck.value) return
  loading.value = true
  const { error } = await useHttpData('/merchants/clue/web/add', {
    method: 'POST',
    body
  })
  visible.value = false
  loading.value = false
  if (!error) {
    visible.value ? formRef1.value.reset() : formRef2.value.reset()
    Message.success('提交成功！')
  }
}
</script>

<style lang="less" scoped>
@screen md {
  .bg {
    top: 80px;
    background-position: 100% 100%;
    background-image: url('https://cdn3.zleyun.com/manzhi/index-bg.webp');
  }

  .page {
    height: calc(100vh - 80px);
  }
}

@screen lt-md {
  .bg {
    top: 56px;
    bottom: 0;
    background-size: 80%;
    background-position: center 30%;
    background-image: url('https://cdn3.zleyun.com/manzhi/index-bg-mb.webp');
  }

  .page {
    justify-content: center;
    height: calc(100vh - 56px);
  }
}

.notify {
  --at-apply: fixed flex flex-col items-center text-xl font-600 select-none
    right-20px bottom-60px;
  padding: 8px 4px;
  border-radius: 34px;
  border: 2px solid #fff;
  background: linear-gradient(180deg, #f4f5f8 0%, #ffffff 100%);
}

.img-box {
  --at-apply: flex text-center;

  & > div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  & > div:nth-child(3n - 1) {
    margin: 0 42px;
  }

  img {
    width: 48px;
  }

  span {
    color: #595d60;
    font-weight: 500;
    margin-top: 10px;
  }

  & + .img-box {
    margin-top: 20px;
  }
}
</style>
