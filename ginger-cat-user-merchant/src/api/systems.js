// api/system.js
import { createAPI } from '@/utils/request';
import store from "@/store";

// 列表
export async function dictionaryAll(params = undefined, body = undefined) {
	const { data } = await createAPI('/system/dictionary/all', 'get', params, body);
	return data;
}

// 从 store 中读取定义
export function getDictByCode(code) {
	return store.getters.getDictItemByCode(code)
}
