<template>
  <div class="
            bg-white
            overflow-hidden
            shadow
            rounded-lg
            border-purple-800
            border-solid
            cursor-pointer
            py-5
          "
       v-for="t in tickers"
       :key="t.name"
  >
    <div class="px-4 py-5 sm:p-6 text-center">
      <dt class="text-sm font-medium text-gray-500 truncate">
        {{ t.name }} - USD
      </dt>
      <dd class="mt-1 text-3xl text-gray-900">
        {{ proc }}
      </dd>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CryptoBlock",
    props: {
      name: String,
      price: String
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