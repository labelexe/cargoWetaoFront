<template>
  <TwaMainLt>
    <template #Body>

      <div class="orderCargoMeBody">
        <div class="orderCargoMeBodyTabs">
          <TabList>
            <template #tabItems>
              <TabListItem tabId="1" tabTitle="Активные грузы"
                           :tabSelected="getCurrentTabId === '1'"
                           @callSelectId="selectTab"/>
              <TabListItem tabId="2" tabTitle="Архив"
                           :tabSelected="getCurrentTabId === '2'"
                           @callSelectId="selectTab"
              />
            </template>
          </TabList>
        </div>

        <div class="orderCargoMeBodyTabMain" v-if="getCurrentTabId === '1'">

          <div class="orderCargoMeBodyWrapper">
            <div class="orderCargoMeBodyList">
              <div class="listBlockItem" v-for="orderItem in ordersMeList">
                <div class="listBlockItemHeading">
                  <div class="listBlockItemHeadingWrapper">
                    <div class="listBlockItemHeadingTitle">
                      №: {{ orderItem.idx }}
                    </div>
                    <div class="listBlockItemHeadingStatus">
                      <div class="listBlockItemHeadingStatusBudge" :class="'__'+ getStatus(orderItem.status).type">
                        {{ getStatus(orderItem.status).title }}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="listBlockItemInfo">
                  <div class="listBlockItemInfoWrapper" style="display: flex;">
                    <div class="listBlockItemInfoRoute" style="flex: 1; margin-right: 14px;">
                      <div class="listBlockItemInfoRouteHeading">
                        <div class="infoRouteHeadingTitle">
                          Отправление
                        </div>
                      </div>
                      <div class="listBlockItemInfoRouteMap">

                      </div>
                    </div>
                    <div class="listBlockItemInfoCargo" style="flex: 1">
                      <div class="listBlockItemInfoCargoHeading" style="margin-bottom: 10px">
                        <div class="infoCargoHeadingTitle">
                          Информация
                        </div>
                      </div>
                      <div class="infoCargoBody" style="font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: -0.12px;">
                        <div class="listBlockItemInfoCargoSize" style="margin-bottom: 10px">
                          {{ orderItem.weight_sizes !== null ? orderItem.weight_sizes.name + 'KG' : "" }}
                        </div>
                        <div class="listBlockItemInfoCargoType" style="margin-bottom: 10px">
                          {{ orderItem.cat_id ? orderItem.cat_id : "" }}
                        </div>
                        <div class="listBlockItemInfoCargoPkgType" style="margin-bottom: 10px">
                          {{ orderItem.pkg_id ? orderItem.pkg_id : "" }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--              {{ orderItem }}-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </TwaMainLt>
</template>
<script>
import TwaMainLt from "~/layout/twaMainLt.vue";
import TabList from "~/components/twa/body/widget/Tab/TabList.vue";
import TabListItem from "~/components/twa/body/widget/Tab/TabListItem.vue";

export default {
  name: "orderCargoMe",
  data() {
    return {
      tab: {
        select: {
          id: '0'
        }
      },
      ordersMeList: [
        {
          "idx": "0123 – 1G",
          "user_id": 1248134771,
          "type_buyback": "we_buy",
          "slug": "we_buy_978c41522a5f1173b9ff760115612872c",
          "cat_id": 1,
          "pkg_id": 1,
          "weight_sizes": {
            "name": "100-110",
            "price": 1.3
          },
          "total_amount_price": 1200,
          "product_link_url": "http://product.com.ru/teestw32312/rewwre",
          "status": "sending_accepted",
          "created_at": "2023-12-08T02:12:06.596758Z",
          "updated_at": "2023-12-08T02:12:06.596758Z"
        },
        {
          "idx": "0118 – 1G",
          "user_id": 1248134771,
          "type_buyback": "we_buy",
          "slug": "we_buy_978c41522af1473b9ff760115612872c",
          "cat_id": 1,
          "pkg_id": 1,
          "weight_sizes": {
            "name": "150-180",
            "price": 7.3
          },
          "total_amount_price": 3300,
          "product_link_url": "http://product.com.ru/teestw32312/rewwre",
          "status": "sending_accepted",
          "created_at": "2023-12-08T02:12:06.596758Z",
          "updated_at": "2023-12-08T02:12:06.596758Z"
        },
        {
          "idx": "0104 – 1G",
          "user_id": 1248134771,
          "type_buyback": "we_buy",
          "slug": "we_buy_978c43522af1473b9ff760115312872c",
          "cat_id": 1,
          "pkg_id": 1,
          "weight_sizes": {
            "name": "120-130",
            "price": 3.3
          },
          "total_amount_price": 1500,
          "product_link_url": "http://product.com.ru/teestw32312/rewwre",
          "status": "pending_accepted",
          "created_at": "2023-12-08T02:12:06.596758Z",
          "updated_at": "2023-12-08T02:12:06.596758Z"
        }
      ]
    }
  },
  components: {TabListItem, TabList, TwaMainLt},
  methods: {
    selectTab(Id) {
      this.tab.select.id = Id;
    },
    getStatus(status_type) {

      switch (status_type) {
        case "sending_accepted":
          return {
            title: "В пути",
            type: status_type
          }
        case "pending_accepted":
          return {
            title: "Подтверждается",
            type: status_type
          }

        case "no_payment":
          return {
            title: "Не оплачен",
            type: status_type
          }

        case "canceled":
          return {
            title: "Отменен",
            type: status_type
          }
        default:
          break;
      }
    }
  },
  async asyncData({$axios}) {

    const {result} = await $axios.$post("/api/v1/auth/profile");
    return {ordersMeList: result && result.user_orders != null ? result.user_orders : []}
  },
  async mounted() {
    await this.selectTab('1');
  },
  computed: {
    getCurrentTabId() {
      return this.tab.select.id;
    },
  },
}
</script>


<style scoped>


.orderCargoMeBody .orderCargoMeBodyList .listBlockItem {
  border: 1px solid #EFF3FF;
  background: #FCFCFC;
  border-radius: 10px;
  padding: 14px 24px;
  margin-bottom: 14px;
}

.orderCargoMeBody .orderCargoMeBodyList .listBlockItem .listBlockItemHeading {
  margin-bottom: 12px;
}

.orderCargoMeBody .orderCargoMeBodyList .listBlockItem .listBlockItemHeadingWrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.orderCargoMeBody .orderCargoMeBodyList .listBlockItem .listBlockItemHeadingTitle {
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.18px;
  color: #717171;
}

.orderCargoMeBody .orderCargoMeBodyList .listBlockItem .listBlockItemHeadingStatus {

}

.orderCargoMeBody .orderCargoMeBodyList .listBlockItem .listBlockItemHeadingStatus .listBlockItemHeadingStatusBudge {
  border: solid 1px #eee;
  border-radius: 14px;
  padding: 6px 10px;
  /**/
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.12px;
}


.orderCargoMeBody .orderCargoMeBodyList .listBlockItem .listBlockItemHeadingStatus .listBlockItemHeadingStatusBudge.__sending_accepted {
  border-radius: 14px;
  background: var(--accent-second-color);
  color: var(--text-primary-color);
}

.orderCargoMeBody .orderCargoMeBodyList .listBlockItem .listBlockItemHeadingStatus .listBlockItemHeadingStatusBudge.__pending_accepted {

}

.orderCargoMeBody .orderCargoMeBodyList .listBlockItem .listBlockItemHeadingStatus .listBlockItemHeadingStatusBudge.__canceled {
  color: #000;
  border: 1px solid #000;
}


</style>
