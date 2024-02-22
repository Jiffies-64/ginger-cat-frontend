// store.js
import Vue from 'vue';
import Vuex from 'vuex';
import { dictionaryAll } from '@/api/systems';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    dicts: [],
  },
  mutations: {
    SET_DICTS(state, dicts) {
      state.dicts = dicts;
    },
  },
  actions: {
    fetchDicts({ commit }) {
      console.log('正在获取');
      dictionaryAll().then(dicts => {
        commit('SET_DICTS', dicts);
      }).catch(error => {
        console.error('获取字典失败：', error);
      });
    },
  },
  getters: {
    getDict: (state) => {
      return state.dicts;
    },
    getDictItemByCode: (state) => (code) => {
      const item = state.dicts.find(dict => dict.code === code) || {};
      return JSON.parse(JSON.stringify(item));
    },
    getDictItemDescByCode: (state) => (code) => {
      // 提取前三位
      const prefix = code.substring(0, 3);
      // 找到对应的字典项
      const item = state.dicts.find(dict => dict.code === prefix) || {};
      // 解析 itemValues
      const itemValues = JSON.parse(item.itemValues) || [];
      // 根据完整的 code 查找匹配的 desc
      const descItem = itemValues.find(item => item.code === code) || {};
      return descItem.desc || '';
    },

  },
});

// 在这里调用你的 action，获取字典数据
store.dispatch('fetchDicts');

export default store;
