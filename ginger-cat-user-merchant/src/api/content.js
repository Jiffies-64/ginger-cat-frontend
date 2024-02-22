import { createAPI } from '@/utils/request';
import store from "@/store";

// 商家店铺列表
export async function getShopBaseBriefInfo() {
  try {
    const { data } = await createAPI('/content/shop-base/all');

    let result = data.result
    for (let i = 0; i < result.length; i++) {
      result[i]['status'] = store.getters.getDictItemDescByCode(result[i]['status']);
      result[i]['shopType'] = store.getters.getDictItemDescByCode(result[i]['shopType']);
    }
    data.result = result;

    return data;
  } catch (error) {
    console.error('获取店铺信息失败：', error);
    throw error;
  }
}


export async function list(params, body) {
  const { data } = await createAPI('/content/course/list', 'post', params, body);
  return data;
}
