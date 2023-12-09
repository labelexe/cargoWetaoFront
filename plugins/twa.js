import Vue from 'vue'

//
export default ({app, store}, inject) => {
  if (window.Telegram) {
    const tgWindow = window.Telegram
    const tgWebApp = tgWindow.WebApp;
    //Initial Store
    store.commit('setTgWebApp', {
      userData: tgWebApp.initDataUnsafe.user,
      webApp: tgWebApp,
    })
    //
    inject('TgTwa', Vue.observable({
      WdTg: tgWindow,
      WApp: tgWebApp
    }));
    // console.log({
    //   userData: tgWebApp.initDataUnsafe.user,
    //   webApp: tgWebApp,
    // });
  } else {
    console.error('Telegram SDK is not available.');
  }
}


