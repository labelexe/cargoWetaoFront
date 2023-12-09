<template>
  <div v-if="loading" class="loading-page">
    <!-- <p>Loading...</p> -->
    <!-- <img src="~/assets/images/roulete-loading.gif" alt="" style="max-width: 420px; max-height: 420px;"> -->
    <div class="loading_wrapper">
      <div class="loading_logo">
        <img src="~/assets/images/logoapp.png">
      </div>
    </div>


  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    // getProjectName() {
    //
    // },
    disableScrolling() {
      var x = window.scrollX;
      var y = window.scrollY;
      window.onscroll = function () {
        window.scrollTo(x, y);
      };
    },
    enableScrolling() {
      window.onscroll = function () {
      };
    },
    start() {
      this.loading = true;
      this.disableScrolling();
    },
    finish() {
      this.loading = false;
      this.enableScrolling();
    },
  },
  computed: {
    // getProjectName() {
    //   setInterval(function () {
    //     setTimeout(function () {
    //       return this.$nuxt.context.app.head.description;
    //     }, 500);
    //     return "";
    //   }, 1000);
    // }
  }
};
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: #000000f0; */
  background: var(--bg-accent-color);
  opacity: 1;
  text-align: center;
  /* padding-top: 200px; */
  font-size: 30px;
  font-family: sans-serif;
  z-index: 120;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(1px);

  -moz-transition: all 0.8s ease-out; /* FF4+ */
  -o-transition: all 0.8s ease-out; /* Opera 10.5+ */
  -webkit-transition: all 0.8s ease-out; /* Saf3.2+, Chrome */
  -ms-transition: all 0.8s ease-out; /* IE10? */
  transition: all 0.8s ease-out;
}


.loading_wrapper {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.loading-page .loading_logo {
  //margin-bottom: 24px;
}

.loading_text {
  font-size: 20px;
}

.loadingTitle {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 33px;
  color: var(--text-accent-color);
//opacity: 0.2;
}

</style>
