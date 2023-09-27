<template>
  <div
    flex="~ items-center justify-between"
    bg="#171E30"
    md="px-10% py-60px"
    lt-md="flex-col"
  >
    <div md:hidden lt-md="flex flex-col items-center pt-20px pb-10px">
      <img w-120px h-37px src="https://cdn4.zleyun.com/manzhi/logo-w.webp" />
    </div>

    <div lt-md:hidden>
      <img w-120px h-37px src="https://cdn4.zleyun.com/manzhi/logo-w.webp" />
      <div mt-30px text="#FFF">
        <span opacity-45>联系邮箱：</span>
        <span>service@imanzhi.com</span>
      </div>
      <div mt-10px text="#FFF">
        <span opacity-45>联系地址：</span>
        <span>湖南长沙市天心区保利国际广场B3栋804室</span>
      </div>
    </div>

    <div
      flex
      md:h-134px
      lt-md="flex-col items-center"
      md:b="l-1 #FFF opacity-31"
    >
      <div flex>
        <div w-130px flex="~ col lt-md:items-center" md:ml-24px>
          <span lt-md:hidden text="#FFF" font-600>关注公众号：</span>
          <img
            w-106px
            h-106px
            mt-10px
            src="https://cdn4.zleyun.com/manzhi/footer-gzh.png"
          />
          <span md:hidden text="#FFF" mt-10px font-600>关注公众号</span>
        </div>
        <div w-130px flex="~ col lt-md:items-center">
          <span lt-md:hidden text="#FFF" font-600>联系客服：</span>
          <img
            w-106px
            h-106px
            mt-10px
            src="https://cdn5.zleyun.com/manzhi/footer-kf.png"
          />
          <span md:hidden text="#FFF" mt-10px font-600>联系客服</span>
        </div>
      </div>

      <div flex="~ col" lt-md="items-center my-20px" md:ml-20 select-none>
        <span lt-md:hidden text="#FFF" font-600 mb-15px>热线电话：</span>
        <div flex items-center>
          <img
            w-54px
            h-54px
            mr-10px
            src="https://cdn4.zleyun.com/manzhi/ft-phone.webp"
          />
          <div h-54px flex="~ 1 col justify-around" text="#FFF">
            <span font-600 text-2xl>400-1515-610</span>
            <span opacity-45>工作日 (9:00 - 18:00)</span>
          </div>
        </div>
      </div>

      <div md:hidden mb-10px text="#FFF">
        <span opacity-45>联系邮箱：</span>
        <span>service@imanzhi.com</span>
      </div>
      <div md:hidden mb-20px text="#FFF">
        <span opacity-45>联系地址：</span>
        <span>湖南长沙市天心区保利国际广场B3栋804室</span>
      </div>
    </div>
  </div>
  <div
    leading-normal
    b="t-1 #FFF opacity-31"
    py="md:28px lt-md:18px"
    text="#FFF center lt-md:opacity-40"
    bg="#171E30"
  >
    © 2021 湖南满枝科技有限公司 版权所有 . 湘ICP备2021016866号
  </div>
</template>
