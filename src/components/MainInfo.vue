<template>
  <div class="
    w-screen
    min-h-screen
    grid
    place-content-center
    justify-center
    items-center
    text-center
    bg-purple-400
    gap-16"

    id="mainInfo">

    <div class="
      w-full h-full
      relative
      overflow-hidden
      block
      z-10

      before:absolute before:inset-0
      before:z-[10]
      before:block
      before:w-full
      before:h-full
      before:bg-purple-400
      before:animate-typing

      after:absolute after:inset-0
      after:w-1
      after:z-[11]
      after:bg-black
      after:animate-typing
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
      text-4xl
      font-light
      typingText
      opacity-0
      translate-y-12
      animate-fadeInUp

      before:inset-y-full
      before:inset-x-0
      before:absolute
      before:w-0
      before:h-0.5
      before:bg-black
      before:z-[10]
      before:animate-underline
      before:my-1
      ">
      <p>Welcome to my website.</p>
    </div>

    <img class="mx-auto
      w-0
      rounded-lg
      animate-showImg
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