<template>
  <div class="flex flex-col">

    <header class="
      px-16
      py-8
      bg-purple-400
      relative
      w-screen
    ">
      <nav class="
        flex
        justify-between
        items-center
      ">
        <img class="
          sm:w-14
          sm:h-14
          w-8
          h-8
          cursor-pointer
          "
             src="data:image/png;base64,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"
        >
        <ul class="flex gap-10 sm:gap-20 sm:text-xl text-xs sm:font-normal font-bold text-white">
          <li><a class="hover:underline" href="#mainInfo">ABOUT</a></li>
          <li><a class="hover:underline" href="#projects">CRYPTOTRACKER</a></li>
          <li><a class="hover:underline" href="#contacts">CONTACTS</a></li>
        </ul>
      </nav>
    </header>

    <MainInfo></MainInfo>

    <div class="
      flex
      flex-col
      min-h-screen
      w-screen
      bg-blue-200
      items-center
      justify-center
      px-20
      py-10
    " id="projects">
      <h1 class="mb-10 text-4xl typingText font-bold text-center">Here you can track cryptocurrency price</h1>
      <div class="min-w-full flex flex-col items-center">
        <label class="my-4 typingText text-lg font-bold">Ticker: {{ ticker }}</label>

        <div class="min-w-full flex flex-col items-center">
          <input class="
            block
            w-4/5
            h-10
            pl-2
            border-gray-300
            text-gray-900
            focus:outline-none
            focus:ring-gray-500
            focus:border-gray-500
            sm:w-2/5
            lg:w-3/12
            sm:text-sm
            rounded-md
            font-medium
            truncate
            focus:shadow-md
            "
                 type="text" placeholder="Example: BTC"
                 v-model="ticker"
                 @input="helpTickersMenu"
                 @keydown.enter = "addTicker"
          >
          <div
              class="flex justify-evenly p-1 mt-2 rounded-md w-4/5 sm:w-2/5 lg:w-3/12"
          >
              <div
                  class="inline-flex justify-between items-center px-2 m-1 rounded-md text-xs shadow-sm hover:shadow-md font-medium bg-white text-gray-800 cursor-pointer w-1/5 h-6"
                  v-for="(helpTicker, idx) in tickersMenu"
                  :key="idx"
                  @click="addHelpTicker(helpTicker)"
              >
                <span class="mx-auto">{{ helpTicker }}</span>
              </div>
          </div>
          <label class="mt-2 text-red-500 font-medium" v-if="isHasTicker">
            This ticker has already been added
          </label>
        </div>

        <button
            type="button"
            class="my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm hover:shadow-md text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
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

        <div class="flex gap-5">
          <input @click="tryLast" type="button" class="w-14 h-8 rounded-full bg-gray-600 hover:bg-gray-700 cursor-pointer shadow-sm hover:shadow-md text-white text-center text-xl font-bold duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" value="<-">
          <div class="h-8 w-14 bg-gray-600 flex rounded-full text-white"><p class="m-auto">{{ page }} / {{ pages }}</p></div>
          <input @click="tryNext" type="button" class="w-14 h-8 rounded-full bg-gray-600 hover:bg-gray-700 cursor-pointer shadow-sm hover:shadow-md text-white text-center text-xl font-bold duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" value="->">
        </div>

        <div class="flex-row mx-2 mt-5">
          <span class="text-lg font-bold typingText">Filter: </span><input v-model="filter" class="
          pl-2
          border-gray-300
          text-gray-900
          focus:outline-none
          focus:ring-gray-500
          focus:border-gray-500
          rounded-md
          font-medium
          truncate
          focus:shadow-md
          "
          />
        </div>

        <div class="
          mt-5
          grid
          grid-cols-1
          gap-10
          md:grid-cols-3
        ">
          <div class="
            w-60
            md:w-52
            lg:w-60
            bg-white
            overflow-hidden
            shadow
            rounded-lg
            border-purple-800
            border-solid
            cursor-pointer
            shadow-sm
            hover:shadow-md
          "
            v-for="t in paginatedTickers"
            :key="t.name"
          >
            <div class="px-4 py-5 sm:p-6 text-center">
              <dt class="text-sm font-medium text-gray-500 truncate">
                {{ t.name }} - USD
              </dt>
              <dd class="mt-1 text-3xl text-gray-900 truncate">
                {{ t.price }}
              </dd>
            </div>
            <button
                @click.stop="deleteTicker(t)"
                class="flex
                items-center
                justify-center
                font-medium
                w-full
                bg-gray-100
                px-4
                py-4
                sm:px-6
                text-md
                text-gray-500
                hover:text-gray-600
                hover:bg-gray-200
                hover:opacity-90
                transition-all
                focus:outline-none"
            >
              <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#718096"
                  aria-hidden="true"
              >
                <path
                    fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                ></path></svg
              >Удалить
            </button>
          </div>

        </div>
      </div>

      <CryptoBlock></CryptoBlock>
    </div>

    <ContactsBlock></ContactsBlock>

    <footer class="
      flex
      flex-col
      items-center
      gap-10
      px-10
      py-5
      bg-gray-800
      text-white
      relative
      w-screen">
      <div class="text-center text-lg flex">Copyright&nbsp;<div class="animate-spin">©</div>&nbsp;2021</div>
      <p class="text-center text-xs italic">Все права не защищены</p>
    </footer>
  </div>
</template>

<script>
  import MainInfo from "./components/MainInfo";
  import ContactsBlock from "./components/ContactsBlock";
  import CryptoBlock from "./components/CryptoBlock"
  import { subscribeToTicker, unsubscribeFromTicker } from "./api";

  export default {
    name: 'App',
    components: {
      ContactsBlock,
      MainInfo,
      CryptoBlock,

    },
    data() {
      return {
        ticker: "",
        tickers: [],
        page: 1,
        filter: "",
        isHasTicker: false,
        tickersList: [],
        tickersMenu: []
      }
    },
    created() {
      fetch("https://min-api.cryptocompare.com/data/all/coinlist")
          .then(response => {
            return response.json();
          })
          .then(data => {
            for (let key in data.Data) {
              this.tickersList.push(key);
            }
          });

      const windowData = Object.fromEntries(
          new URL(window.location).searchParams.entries()
      );

      const tickersData = localStorage.getItem("crypto-list");

      if (tickersData) {
        this.tickers = JSON.parse(tickersData);
        this.tickers.forEach(ticker => {
          subscribeToTicker(ticker.name, newPrice =>
              this.updateTicker(ticker.name, newPrice)
          );
        });
      }

      const VALID_KEYS = ["filter", "page"];

      VALID_KEYS.forEach(key => {
        if (windowData[key]) {
          this[key] = windowData[key];
        }
      });
    },
    methods: {
      addTicker() {
        if (this.tickers.find(t => t.name === this.ticker)) {
          this.isHasTicker = true;
        }

        if (this.ticker && !this.isHasTicker) {
          const currentTicker = {
            name: this.ticker.toUpperCase(),
            price: "-"
          };

          this.tickers = [...this.tickers, currentTicker];

          this.ticker = "";
          this.filter = "";

          subscribeToTicker(currentTicker.name, newPrice =>
              this.updateTicker(currentTicker.name, newPrice)
          );
        }
      },

      addHelpTicker(v) {
        this.ticker = v;
        this.addTicker();
        this.tickersMenu = [];
      },

      helpTickersMenu() {
        this.tickersMenu = [];
        let value = this.ticker;

        for (let key of this.tickersList) {
          if (key.startsWith(value) && key.length <= 5) {
            if (this.tickersMenu.length < 4) {
              this.tickersMenu.push(key);
            }
          }
        }

        if (this.ticker === "") {
          this.tickersMenu = [];
        }
      },

      updateTicker(tickerName, price) {
        const tickerToUpdate = this.tickers.find(t => t.name === tickerName);
        tickerToUpdate.price = price;
      },

      deleteTicker(targetTicker) {
        this.tickers = this.tickers.filter(t => t !== targetTicker);
        unsubscribeFromTicker(targetTicker.name);
      },

      tryLast() {
        if (this.page > 1) {
          this.page--;
        }
      },

      tryNext() {
        if (this.hasNextPage) {
          this.page++;
        }
      }
    },
    computed: {
      startIndex() {
        return (this.page - 1) * 3;
      },

      endIndex() {
        return this.page * 3;
      },

      filteredTickers() {
        return this.tickers.filter(ticker => ticker.name.startsWith(this.filter.toUpperCase()));
      },

      paginatedTickers() {
        return this.filteredTickers.slice(this.startIndex, this.endIndex);
      },

      hasNextPage() {
        return this.filteredTickers.length > this.endIndex;
      },

      pages() {
        if (Math.ceil(this.tickers.filter(ticker => ticker.name.includes(this.filter.toUpperCase())).length / 3) === 0) {
          return 1;
        }
        else {
          return Math.ceil(this.tickers.filter(ticker => ticker.name.includes(this.filter.toUpperCase())).length / 3);
        }
      },

      pageStateOptions() {
        return {
          filter: this.filter,
          page: this.page
        };
      }
    },
    watch: {
      tickers: function() {
        localStorage.setItem("crypto-list", JSON.stringify(this.tickers));
      },

      paginatedTickers: function() {
        if (this.paginatedTickers.length === 0 && this.page > 1) {
          this.page -= 1;
        }
      },

      filter: function() {
        this.page = 1;
        this.pages = Math.ceil(this.tickers.length / 3);
        this.filter = this.filter.toUpperCase();
      },

      pageStateOptions: function(value) {
        window.history.pushState(
            null,
            document.title,
            `${window.location.pathname}?filter=${value.filter}&page=${value.page}`
        );
      },

      ticker: function() {
        this.ticker = this.ticker.toUpperCase();
        this.isHasTicker = false;
      }
    }
  }
</script>

<style>

</style>
