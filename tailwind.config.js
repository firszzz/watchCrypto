module.exports = {
  mode: 'jit',
  purge: [
      './src/App.vue',
      './src/components/ContactsBlock.vue',
      './src/components/MainInfo.vue',
      './src/components/CryptoBlock.vue'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        backgroundImage: {
            "me": "url('/src/images/me.jpg')"
        },
        colors: {

        },
        keyframes: {
            typing: {
                to: {left: "100%"}
            },
            underline: {
              to: {width: "100%"}
            },
            underlineMob: {
                to: {width: "100%"}
            },
            fadeInUp: {
                to: {opacity: "1", transform: "translateY(0)"}
            },
            fadeInUpMob: {
                to: {opacity: "1", transform: "translateY(0)"}
            },
            showImg: {
                to: {width: "16rem"}
            },
            showImgMob: {
                to: {width: "16rem"}
            }
        },
        animation: {
            typing: "typing 4.5s steps(25) 1s forwards",
            underline: "underline 2s 6.5s ease-in-out forwards",
            underlineMob: "underlineMob 2s ease-in-out forwards",
            fadeInUp: "fadeInUp 2s ease 6.5s forwards",
            fadeInUpMob: "fadeInUpMob 2s ease forwards",
            showImg: "showImg 2s ease 6.5s forwards",
            showImgMob:  "showImg 2s ease forwards"
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
