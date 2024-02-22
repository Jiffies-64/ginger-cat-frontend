import { getDictByCode } from './systems';

// 公共属性类型 000
export const PUBLIC_STATUS = getDictByCode('000');

// 资源类型状态 001
export const RESOURCE_STATUS = getDictByCode('001');

// 对象的审核状态 002
export const MEDIA_AUDIT_STATUS = getDictByCode('002');

// 课程审核状态 202
export const AUDIT_STATUS = getDictByCode('202');

// 课程模式状态 200
export const COUSE_TYPE_STATUS = getDictByCode('200');

// 课程计划发布状态 203
export const COUSE_PUBLIC_STATUS = getDictByCode('203');

// 课程等级 204
export const COUSE_GRADE_STATUS = getDictByCode('204');

// 订单交易类型状态 600
export const ORDER_TYPE_STATUS = getDictByCode('600');

// 课程作业记录审批状态 306
export const COURSE_WORK_STATUS = getDictByCode('306');

// 课程收费情况 201
export const COURSE_CHARGE_TYPE_STATUS = getDictByCode('201');
