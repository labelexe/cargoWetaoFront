// store/index.js

import WebApp from '@twa-dev/sdk'

export const state = () => {
  //TgWebState
  return {
    tgWebApp: {
      WebApp: {}
    },
    //formatted data
    app: {
      userData: {},
      initData: null,
    }
  }

}

export const mutations = {
  setTgWebApp(state, tgWebApp) {
    state.tgWebApp = tgWebApp;
    console.log(state);
    //
    // state.app.initData = tgWebApp.webApp.initData;
    //

    //Init data
    try {
      if (localStorage.getItem("tg.initData") !== null || localStorage.getItem("tg.initData").length > 0) {
        state.app.initData = localStorage.getItem("tg.initData");
      } else {
        localStorage.setItem("tg.initData", JSON.stringify(WebApp.initData));
        // WebApp.showAlert("test");
        state.app.initData = localStorage.getItem("tg.initData");
      }
    } catch (e) {
      localStorage.setItem("tg.initData", JSON.stringify(tgWebApp.webApp.initData));
      state.app.initData = localStorage.getItem("tg.initData");
    }

    try {
      if (localStorage.getItem("tg.userData") !== null) {
        state.app.userData = localStorage.getItem("tg.userData");
      } else {
        localStorage.setItem("tg.userData", JSON.stringify(tgWebApp.webApp.initDataUnsafe));
        state.app.userData = localStorage.getItem("tg.userData");
      }
    } catch (e) {
      localStorage.setItem("tg.userData", JSON.stringify(tgWebApp.webApp.initDataUnsafe));
      state.app.userData = localStorage.getItem("tg.userData");
    }

  },
}

export const actions = {}

export const getters = {
  checkTgInitData(state) {
    return state.app.initData !== "";
  },
  getUserData(state) {
    try {
      const webApp = state.tgWebApp.webApp;
      // const user = state.tgWebApp.initDataUnsafe.user;
      return webApp.initDataUnsafe;
    } catch (e) {
      console.error("[ST/TG/DATA] not user data,");
      console.error(e);
      return {};
    }
  },
  getStTgWebApp(state) {
    return state.tgWebApp
  },
  getTgUserInitData(state) {
    const initData = localStorage.getItem("tg.initData");
    return JSON.parse(initData);
    // return JSON.parse(state.app.initData) ? JSON.parse(state.app.initData) : {};
  },
  /**
   * Получение ник
   * @param state
   * @returns {*}
   */
  getUsername(state) {
    try {
      return state.app.userData.username;
    } catch (e) {
      return "null";
    }

  },
  /**
   * Получение полного-имени
   * @param state
   * @returns {*}
   */
  getUserFullName(state, getters) {
    // const user = state.userData;
    return getters.getUserFirstName + " " + getters.getUserLastName;
  },
  /**
   * Получение Имени
   * @param state
   * @returns {*}
   */
  getUserFirstName(state) {
    // const user = state.userData;
    // const last_name = state.userData && state.userData.last_name ? state.userData.last_name : 'nulleded';
    return state.app.userData && state.app.userData.user !== undefined && state.app.userData.user.first_name !== undefined ? state.app.userData.user.first_name : 'Not';
  },
  /**
   * Получение Имени
   * @param state
   * @returns {*}
   */
  getUserLastName(state) {
    // const user = state.userData;
    // const last_name = state.userData && state.userData.last_name ? state.userData.last_name : 'nulleded';
    return state.app.userData && state.app.userData.user !== undefined && state.app.userData.user.last_name !== undefined ? state.app.userData.user.last_name : 'User';
  },
  /**
   * Получение Изображение пользователя
   * @param state
   * @returns {*}
   */
  getUserAvatarImg(state, getters) {
    // const userData = this.state.tgWebApp.userData;
    const first_name = getters.getUserFirstName;
    return state.app.userData && state.app.userData.photo_url !== undefined ? state.app.userData.photo_url : `https://ui-avatars.com/api/?name=${first_name}`;
  },
  getCheckTgUserPremium(state) {
    const user = state.app.userData;
    return user.is_premium ? user.is_premium : false;
  },
}
