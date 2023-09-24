export const state = {};
//缓存浏览器的数据名称
const cacheNameList = ["userInfo", "webViewUrl"];
let clearTime;
export const mutations = {
  //绑定微信头像昵称弹窗状态
  setBindUserInfoShow(state, data) {
    state.bindUserInfoShow = data;
  },
  //当前地址
  setCurrentAddress(state, data) {
    if (data) {
      state.currentAddress = Object.assign(state.currentAddress, data);
      let addressInfo = {
        provinceId: state.currentAddress.provinceId,
        provinceName: state.currentAddress.provinceName,
        cityId: state.currentAddress.cityId,
        cityName: state.currentAddress.cityName,
        areaId: state.currentAddress.areaId,
        areaName: state.currentAddress.areaName,
      };
      uni.setStorageSync("currentAddress", addressInfo);
    }
  },
};
export const actions = {};
