<template>
  <div
    class="page-header"
    z-9999
    lg="px-8vw"
    md="h-80px px-4"
    lt-md="h-56px px-20px"
  >
    <img
      h="md:49px lt-md:29px"
      w="md:162px lt-md:96px"
      md="mr-30px"
      src="https://cdn5.zleyun.com/manzhi/logo.webp"
    />
    <template display="md:block lt-md:hidden">
      <NuxtLink v-for="item in routes" :to="item.path" :key="item.path">
        {{ item.title }}
      </NuxtLink>
    </template>
    <template display="md:hidden lt-md:block">
      <div :class="menuVisible && 'active'" @click="menuVisible = !menuVisible">
        <div class="menu-item" transform="origin-top-left"></div>
        <div class="menu-item"></div>
        <div class="menu-item" transform="origin-bottom-left"></div>
      </div>
    </template>
  </div>

  <a-drawer
    placement="top"
    unmountOnClose
    :render-to-body="false"
    :header="false"
    :footer="false"
    :height="392"
    :visible="menuVisible"
    @cancel="menuVisible = false"
  >
    <div class="popup-container" flex="~ col">
      <NuxtLink
        v-for="item in routes"
        :to="item.path"
        :key="item.path"
        flex="~ items-center"
      >
        <i text="24px" class="iconfont" :class="item.icon" />
        <span ml-3 text-lg font-500>{{ item.title }}</span>
      </NuxtLink>
    </div>
  </a-drawer>
</template>

<script setup lang="ts">
const routes = [
  { path: '/', title: '首页', icon: 'icon-shouye' },
  { path: '/ecology', title: '个体户生态', icon: 'icon-guanyumanzhi1' },
  { path: '/lease', title: '租赁平台', icon: 'icon-guanyumanzhi1' },
  { path: '/purchase', title: '集采平台', icon: 'icon-guanyumanzhi1' },
  { path: '/risk', title: '满星风控', icon: 'icon-guanyumanzhi1' },
  { path: '/about', title: '技术优势', icon: 'icon-guanyumanzhi1' },
  { path: '/contact', title: '联系我们', icon: 'icon-lianxiwomen' }
]

const route = useRoute()
const menuVisible = ref(false)

watch(
  () => route.fullPath,
  () => {
    menuVisible.value = false
  }
)
</script>

<style scoped lang="less">
.page-header {
  --at-apply: flex justify-between items-center position-sticky top-0 left-0
    right-0 bg-white border-b border-[#eee] flex-nowrap text-truncate;

  a {
    --at-apply: position-relative font-400 cursor-pointer color-main;
  }

  @screen md {
    a {
      --at-apply: px-6;
    }
  }
  @screen lt-md {
    & > a {
      --at-apply: px-4;
    }
  }

  a:hover {
    --at-apply: color-primary;
  }

  .router-link-active {
    --at-apply: color-primary font-500;
  }

  .router-link-active::after {
    --at-apply: position-absolute content-empty top-30px w-64px text-center
      h-3px bg-primary;
    left: 50%;
    transform: translateX(-50%);
  }
}

.menu-item {
  width: 21px;
  height: 3px;
  transition: all 0.3s;
  background-color: #1a1f24;
}

.menu-item + .menu-item {
  margin-top: 4px;
}

.active .menu-item:nth-child(1) {
  left: 0;
  transform: rotate(45deg);
}

.active .menu-item:nth-child(2) {
  width: 0px;
}

.active .menu-item:nth-child(3) {
  transform: rotate(-45deg);
}

.popup-container {
  padding: 0;

  a {
    padding: 0 20px;
    height: 56px;
  }

  .router-link-active {
    color: #006ce5;
    background-color: #f2f7fe;
  }
}
</style>
