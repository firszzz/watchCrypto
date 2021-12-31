<template>
  <div class="
    flex
    flex-col
    min-h-screen
    w-screen
    bg-gray-400
    items-center
    justify-center
    px-20
    py-10
  " id="contacts">

    <h1 class="mb-10 ms:text-4xl text-2xl font-bold text-center">
      Information about me and ways to contact with me
    </h1>

    <div class="flex flex-col gap-10 typingText">
      <div class="flex gap-5 items-center">
        <svg height="64" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="64" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
          <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
        <p class="text-lg font-bold">github.com/firszzz</p>
      </div>

      <div class="flex gap-5 items-center">
        <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/50px-Telegram_logo.svg.png" width="64" height="64">
        <p class="text-lg font-bold">@n696n</p>
      </div>

      <div class="flex gap-5 items-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/512px-Gmail_icon_%282020%29.svg.png" width="64">
        <p class="text-lg font-bold">firsov.work3.14</p>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "ContactsBlock"
  }
</script>

<style scoped>

</style>