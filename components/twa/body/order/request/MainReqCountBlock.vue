<template>
  <div class="MainBodyRequestsWidgets">
    <div class="MainBodyRequestsWidgetsWrapper">
      <InfoCntBlockBtn
        :counter="infoBlock.sending_cnt"
        :titleCount="infoBlock.sending_cnt.toString()"
        titleDescCount="Сейчас в пути"
        descInfo="Скоро будут к вам доставлены"
        @callClick="$router.push({name:'order-cargo-me-filter-status',
        params:{
          status: 'delivery'
        }})"
      />
      <InfoCntBlockBtn
        :counter="infoBlock.pending_cnt"
        :titleCount="infoBlock.pending_cnt.toString()"
        titleDescCount="Ожидаются"
        descInfo="Заявки на рассмотрении"
        @callClick="$router.push({name:'order-cargo-me-filter-status',
        params:{
          status: 'pending'
        }})"
      />
    </div>
  </div>
</template>

<script>

import InfoCntBlockBtn from "~/components/twa/body/widget/InfoCntBlockBtn.vue";

export default {
  name: "MainReqCountBlock",
  data() {
    return {
      infoBlock: {
        sending_cnt: 0,
        pending_cnt: 0,
      }
    }
  },
  methods: {
    async fetchCurrencyData() {
      const {result} = await this.$axios.$post("/api/v1/auth/profile");
      //
      if (result.user_orders_info !== null) {
        this.infoBlock = {
          sending_cnt: result.user_orders_info.sending_accepted,
          pending_cnt: result.user_orders_info.pending_count,
        };
      }

    }
  },
  mounted() {
    this.fetchCurrencyData()
  },
  components: {InfoCntBlockBtn}
}
</script>

<style scoped>
.MainBodyRequestsWidgetsWrapper {
  display: flex;
  flex-flow: row;
  gap: 0 12px;
  box-sizing: border-box;
}
</style>
