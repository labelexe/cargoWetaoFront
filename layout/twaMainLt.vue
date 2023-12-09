<template>
  <div class="AppLw">
    <div class="AppLwWrapper">
      <div class="AppHeader" style="padding-bottom:6px; margin-bottom: 8px; border-bottom: 1px solid #F4F4F4; min-height: 36px;">
        <div class="AppHeaderWrapper" style="display: flex; align-items: center; justify-content: space-between">
          <!--          <div class="AppHeaderLogo" @click="$router.push({name: 'index'})">-->
          <!--            <img src="~/assets/images/logodd.png" style="max-width: 36px">-->
          <!--          </div>-->
          <!--          <div class="AppHeaderOther" @click="$router.push({name: 'settings'})"-->
          <!--               :class="{_Active:this.$route.name === 'settings'}">-->
          <!--            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
          <!--              <path d="M12 8.04V3M15.5 10L20 7.5M15.5 14L20 16.5M12 15.96V21M8.5 14L4 16.5M8.5 10L4 7.495"-->
          <!--                    stroke="#0A84FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>-->
          <!--            </svg>-->
          <!--            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
          <!--              <path-->
          <!--                d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z"-->
          <!--                stroke="#676D75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>-->
          <!--              <path-->
          <!--                d="M9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12Z"-->
          <!--                stroke="#676D75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>-->
          <!--            </svg>-->
          <!--          </div>-->
        </div>
      </div>
      <slot name="Navbar">
        <div class="AppNavbar">
          <div class="NavbarWrapper">
            <div class="NavbarCompanyInfo"
                 style="display: flex; align-items: center; justify-content: center; width: 100%;">
              <div class="NavbarCompanyInfoWrapper" style="text-align: center">
                <div class="NavbarCompanyInfoImg">
                  <img src="~/assets/images/logoapp.png">
                </div>
                <div class="NavbarCompanyInfoSlug">
                  Надежный партнер по доставке из Китая
                </div>
              </div>
            </div>
            <!--            <div class="NavbarUserAccount">-->
            <!--              <div class="NavbarUserAccountWrapper">-->
            <!--                <NavbarUserBtn/>-->
            <!--              </div>-->
            <!--            </div>-->

            <!--            <div class="NavbarConnect">-->
            <!--              <div class="NavbarConnectWrapper">-->
            <!--                <NavbarConnectBtn/>-->
            <!--              </div>-->
            <!--            </div>-->
          </div>
        </div>
      </slot>
      <div class="AppLwBody">
        <slot name="Body">
          <Nuxt/>
        </slot>
      </div>

      <div class="AppLwBottomNav">
        <FooterNavMobileFixed/>
      </div>

    </div>
  </div>
</template>

<script>
import NavbarConnectBtn from "~/components/twa/navbar/navbarConnectBtn.vue";
import NavbarUserBtn from "~/components/twa/navbar/navbarUserBtn.vue";
import FooterNavMobileFixed from "~/components/twa/footer_nav/footerNavMobileFixed.vue";

export default {
  name: "twaMainLt",
  data() {
    return {
      // tgInfo: null,
      user: {
        fullname: "",
        // fullname: this.tgInfo ?? this.tgInfo.initDataUnsafe !== null ?? this.tgInfo.initDataUnsafe.user.username,
        role: {
          name: "Покупатель"
        },
        avatar_src: ""
      }
    }
  },
  methods: {
    async initTelegramUserData() {
      // const tgUser = this.$store.state.tgWebApp.userData;
      // const {WdTg, WApp} = this.$TgTwa;
      //
      // try {
      //   // if(tgUser !== undefined){
      //   this.user.fullname = WApp.userData.first_name ? WApp.userData.first_name : new Error("[App][Tg] Not User Firstname");
      //   //
      //   if (WApp.userData.photo_url !== undefined && WApp.userData.photo_url !== null) {
      //     this.user.avatar_src = tgUser.photo_url;
      //     this.user.avatar_src = `https://ui-avatars.com/api/?name=${this.user.fullname}`
      //   } else {
      //     this.user.avatar_src = `https://ui-avatars.com/api/?name=${this.user.fullname}`
      //   }
      //   // }
      // } catch (e) {
      //   this.user.fullname = "Nulled";
      //   this.user.avatar_src = `https://ui-avatars.com/api/?name=${this.user.fullname}`
      // }

      console.log(this.$store.getters);
      //
      // this.user.avatar_src = this.$store.getters['getUserAvatarImg'];
      // this.user.fullname = this.$store.getters['getUserFirstName'];

    },
    async fetchClientUserData() {
      await this.$store.dispatch("user/account/fetchUserAccountByTgId", {
        tgId: this.$store.state.tgWebApp.userData.id,
        initData: this.$store.state.tgWebApp.initData
      });
      // await this.$axios.$post("/api/auth/checkUser", {
      //   tg: "rewrn23j432j"
      // })
    },
  },
  async mounted() {

    await this.$nextTick(() => {
      this.$nuxt.$loading.start();
    });

    await new Promise((resolve, reject) => {
      this.$nextTick(() => {
        this.$nuxt.$loading.start();
      });
      // Check if Telegram SDK is available
      if (window.Telegram) {
        const tgWindow = window.Telegram;
        const tgWebApp = tgWindow.WebApp;

        if (tgWebApp.initDataUnsafe !== null) {
          // Вызываем метод вашего предзагруженного скрипта
          // Ваш остальной код...
          this.$nextTick(() => {
            this.$nuxt.$loading.finish()
          });
          resolve();
        }
      } else {
        console.error('Telegram SDK is not available.');
        reject(); // Resolve to continue execution even if there's an error
      }
    });

  },
  computed: {},
  components: {FooterNavMobileFixed, NavbarUserBtn, NavbarConnectBtn}
}
</script>
<style>
@import url("~/assets/css/telegram.css");
</style>
<style scoped>
.AppLw {

}

.AppLw .AppLwWrapper {
  padding: 1.8vh 2.4vw;
}


.AppLw .AppNavbar {
  margin-bottom: 36px;
}

.AppLwBody{
  margin-bottom: 180px;
}

.AppLw .AppNavbar .NavbarWrapper {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
}

.AppLw .AppNavbar .NavbarUser {

}


/**/

.AppLw .AppNavbar .NavbarConnect {
  display: flex;
}


.AppHeaderLogo {
  cursor: pointer;
}

.AppHeaderOther {
  cursor: pointer;
}

.AppHeaderOther._Active {

}


.AppHeaderOther._Active svg > path {
  stroke: #0A84FF;
}
</style>
