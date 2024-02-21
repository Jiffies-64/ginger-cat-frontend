import { createAPI } from '@/utils/request';

// 商家店铺列表
export async function getShopBaseBriefInfo() {
  const { data } = await createAPI('/content/shop-base/all');
  return data;
}

// // 课程列表
// export async function list(params, body) {
//   const { data } = await createAPI('/content/course/list', 'post', params, body);
//   return data;
// }

