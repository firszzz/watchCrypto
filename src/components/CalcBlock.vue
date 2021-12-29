<template>
  <div class="w-72 h-40 py-5 rounded-2xl bg-red-300 text-center flex flex-col justify-center items-center gap-5">
    <p class="text-xl">{{ nameTag }} - USD</p>
    <p class="text-3xl">{{ fixVal }}</p>
  </div>
</template>

<script>
  export default {
    name: "CalcBlock",
    props: {
      nameTag: String,
      money: Number
    },
    computed: {
      fixVal() {
        return(Math.floor(this.money));
      }
    }
  }
</script>

<style scoped>

</style>