<template>
  <div class="flex flex-col">

    <header class="
      px-10
      py-5
      bg-purple-400
      absolute
      w-screen
    ">
      <nav class="
        flex
        justify-between
        items-center
      ">
        <img class="
          w-14
          h-14
          cursor-pointer
          "
          src="data:image/png;base64,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"
        >
        <ul class="flex gap-20 text-xl text-white">
          <li><a class="hover:underline" href="#mainInfo">About Me</a></li>
          <li><a class="hover:underline" href="#projects">Projects</a></li>
          <li><a class="hover:underline" href="#">Contacts</a></li>
        </ul>
      </nav>
    </header>

    <MainInfo></MainInfo>

    <div class="
      flex
      flex-col
      h-screen
      w-screen
      bg-blue-200
      items-center
      justify-center
      px-20
    " id="projects">
      <div class="min-w-full">
        <label class="my-4">Ticker: {{ ticker }}</label>

        <input class="
          block
          w-1/5
          h-10
          pl-2
          border-gray-300
          text-gray-900
          focus:outline-none
          focus:ring-gray-500
          focus:border-gray-500
          sm:text-sm rounded-md
        "
          type="text" placeholder="Example: BTC"
          v-model="ticker"
          @keydown.enter = addTicker
        >

        <button
            type="button"
            class="my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            @click = addTicker
        >
          <svg
              class="-ml-0.5 mr-2 h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="#ffffff"
          >
            <path
                d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            ></path>
          </svg>
          Add ticker
        </button>

        <div class="
          mt-5
          grid
          grid-cols-1
          gap-5
          sm:grid-cols-3
        ">
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
                {{ t.price }}
              </dd>
            </div>
          </div>
        </div>
      </div>

      <CryptoBlock></CryptoBlock>
    </div>

    <ContactsBlock></ContactsBlock>

  </div>
</template>

<script>
  import MainInfo from "./components/MainInfo";
  import ContactsBlock from "./components/ContactsBlock";
  import CryptoBlock from "./components/CryptoBlock"

  export default {
    name: 'App',
    components: {
      ContactsBlock,
      MainInfo,
      CryptoBlock
    },
    data() {
      return {
        ticker: "",
        tickers: []
      }
    },
    created() {
      const tickersData = localStorage.getItem("crypto-list");

      if (tickersData) {
        this.tickers = JSON.parse(tickersData);
      }
    },
    methods: {
      addTicker() {
        const currentTicker = {
          name: this.ticker,
          price: "-"
        };

        this.tickers = [...this.tickers, currentTicker];

        this.ticker = "";
        console.log(this.tickers);
      }
    },
    watch: {
      tickers: function() {
        localStorage.setItem("crypto-list", JSON.stringify(this.tickers));
      },
    }
  }
</script>

<style>

</style>
