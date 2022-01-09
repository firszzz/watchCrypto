<template>
  <div class="
    w-screen
    hidden
    min-h-screen
    grid
    place-content-center
    pb-32
    items-center
    text-center
    bg-purple-400
    sm:gap-16
    gap-10
    "

    id="mainInfo">

    <div class="
      w-full h-full
      relative
      overflow-hidden
      block
      z-10
      sm:font-light
      font-bold
      sm:animate-none
      animate-fadeInUpMob

      sm:before:absolute before:inset-0
      sm:before:z-[10]
      sm:before:block
      sm:before:w-full
      sm:before:h-full
      sm:before:bg-purple-400
      sm:before:animate-typing

      sm:after:absolute after:inset-0
      sm:after:w-1
      sm:after:z-[11]
      sm:after:bg-black
      sm:after:animate-typing
      ">
      <p class="typingText">
        Hello, my name is Andrey.
      </p>
    </div>
    <div class="
      mx-auto
      w-max
      h-full
      relative
      block
      z-10
      sm:text-4xl
      text-2xl
      font-light
      typingText
      opacity-0
      translate-y-12
      sm:animate-fadeInUp
      animate-fadeInUpMob

      before:inset-y-full
      before:inset-x-0
      before:absolute
      before:w-0
      before:h-0.5
      before:bg-black
      before:z-[10]
      sm:before:animate-underline
      before:animate-underlineMob
      before:my-1
      ">
      <p>Welcome to my website.</p>
    </div>

    <img class="mx-auto
      w-0
      rounded-lg
      sm:animate-showImg
      animate-showImgMob
    "
      src="https://avatars.githubusercontent.com/u/87869207?v=4"
    >
  </div>
</template>

<script>
  export default {
    name: "MainInfo",
    data() {
      return {
        source: "src/images/me.jpg"
      }
    }
  }
</script>

<style scoped>

</style>