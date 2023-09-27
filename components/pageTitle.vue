<template>
  <div
    flex
    py-40px
    items-center
    select-none
    bg="#F4F6F9"
    md="px-10%"
    lt-md="flex-col text-center justify-center "
  >
    <img
      v-if="!props.reverse"
      w="md:36% lt-md:50%"
      shrink-1
      alt=""
      :src="props.img"
    />
    <div
      lt-md="mt-20px mx-10%"
      md:max-w="35vw"
      :md="props.reverse ? 'mr-10%' : 'ml-10%'"
      flex
      flex-col
    >
      <h1 text-3xl font-500 leading-normal v-html="props.title" />
      <h3 text="lg #595D60 justify" leading-normal v-html="props.desc" />
      <div flex mt-20px lt-md="justify-around">
        <div
          v-for="item in props.icons"
          flex
          flex-col
          items-center
          min-w="100px"
          not-last="mr-30px"
        >
          <img w-10 :src="item.icon" />
          <span mt-10px v-html="item.title" />
        </div>
      </div>
    </div>
    <img v-if="props.reverse" w="md:36% lt-md:50%" shrink-1 :src="props.img" />
  </div>
</template>

<script setup lang="ts">
interface Icon {
  title: string
  icon: string
}

interface Props {
  title: string
  desc: string
  img: string
  icons?: Icon[]
  reverse?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  reverse: false
})
</script>

<style lang="less" scoped></style>
