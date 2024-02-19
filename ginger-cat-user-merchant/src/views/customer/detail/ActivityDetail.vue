<template>
  <div class="header">
    <van-nav-bar title="活动详情" left-arrow @click-left="goBack"/>

    <!-- Card 1: 商家信息 -->
    <van-card :thumb="goods.thumb">
      <template #title>
        <h3 class="goods-title">{{ goods.title }}</h3>
      </template>
      <template #desc>
        <div class="goods-address">
          <span>{{ goods.address }}</span>
          <span>  |  </span>
          <span>{{ goods.distance }}</span>
        </div>
      </template>
      <template #tags>
        <van-tag plain type="warning">{{ goods.rebate_rules }}</van-tag>
        <van-tag mark type="warning" style="margin-right: 10px">{{ goods.rebate_amount }}</van-tag>
        <van-tag plain type="warning">{{ goods.feedback_requirements }}</van-tag>
      </template>
      <template #footer>
        <van-button size="small" @click="copyKeyword" style="margin-top: 10px">复制关键词</van-button>
        <van-button size="small" @click="checkDelivery">是否可配送</van-button>
        <van-button size="small" @click="reportFailure">失败上报</van-button>
      </template>
    </van-card>

    <!-- Card 2: 活动要求 -->
    <van-card>
      <template #title>
        <div class="small-thin activity-requirements">
          <span class="large-bold">活动要求</span>先抢名额后点餐
        </div>
      </template>
      <template #desc>
        <div class="k-v">
          <span class="normal-thin">平台</span>
          <span class="normal-bold">{{ goods.platform }}</span>
          <span class="normal-bold">剩余名额{{ goods.remain }}份</span>
        </div>
        <div class="k-v">
          <span class="normal-thin">要求</span>
          <span class="normal-bold">{{ goods.requirement_detail }}</span>
        </div>
        <div class="k-v">
          <span class="normal-thin">返利</span>
          <span class="normal-bold">{{ goods.rebate }}</span>
        </div>
      </template>
      <template #bottom>
        <div class="k-v large-bold">
          本次活动需消耗
        </div>
        <div class="k-v">
          <span class="normal-thin">橘猫红包</span>
          <span class="small-thin">{{ goods.red_envelope === 0 ? '暂无可用' : goods.red_envelope }}</span>
        </div>
        <div class="k-v">
          <span class="normal-thin">橘猫卡券</span>
          <span class="small-thin">{{ goods.coupons }}张饭票</span>
        </div>
      </template>
    </van-card>

    <van-card>
      <template #desc>
        <div class="notice">
          <div class="rule">
            <h2>报名须知</h2>
            <h3>参与规则:</h3>
            <ol>
              <li>1.<span class="orange">先抢名额再下单</span>，确认报名成功后再去下单;</li>
              <li>2.<span class="orange">下单前请核对下单店铺和平台</span>，下错店铺或者下错平台不能参与活动;</li>
              <li>3.实付金额需满足满返条件，实付不满扣差后向上取整返豆;</li>
              <li>4.满返活动不叠加、不累计参与，<span class="orange">单笔订单只能参与一次</span>;</li>
              <li>5.同一店铺活动当天仅限参与一次;同一会员账号，当天最多参与5次活动。</li>
              <li>6.抢单时间非店铺营业时间，距离非商家配送范围,仅作为参考，具体以下单平台商家店铺展示信息为准;</li>
            </ol>
          </div>

          <div class="rule">
            <h3>提交规则:</h3>
            <ol>
              <li>1.订单号需在报名成功后<span
                  class="orange">1小时内上传，超时名额取消，点击“领红包并确定报名”可延长2小时</span>;
              </li>
              <li>2.用餐凭证应最晚于抢名额的<span class="orange">次日11点前提交</span>，超时将无法提交，参与失败;</li>
              <li>3.满返活动<span class="orange">应在规定时间完成，超时未提交订单，参与失败</span>;</li>
              <li>4.审核驳回订单可在抢名额的<span
                  class="orange">次日12点前重新上传，超时未上传或上传资料不符合参与失败</span>;
              </li>
              <li>5.<span class="orange">手动取消或超时取消</span>，视为参与活动失败;</li>
            </ol>
          </div>

          <div class="rule">
            <h3>蚕豆扣减规则:</h3>
            <ol>
              <li>
                1.按照活动要求并参照示例图上传凭证，<span class="orange">字图不可拼凑;图文不符或缺少</span>将扣5铃铛/图或/字;<span
                  class="orange">提交非实际收到餐品图，或只提交外包装图等</span>，将扣5铃铛;
              </li>
              <li>
                2.实付不满将扣差后向上取整返豆;<span class="orange">实付金额仅包含购买商家餐品的实际付款金额，不包含购买平台的任何卡券、商品，如购美团会员、美团加量包、代金券、超值优惠券包、准时宝，神券省钱包</span>等;
              </li>
              <li>
                3.经商家申诉订单，被平台判定为异常订单的，相应铃铛收回。如有异议可联系在线客服提供凭证;(铃铛收回将以弹窗告知)
              </li>
            </ol>
          </div>

          <div class="rule">
            <h3>禁止行为说明:</h3>
            <ol>
              <li>1.<span class="orange">禁止多平台返现,禁止预订单，禁止向商家要求返现，禁止虚假P图行为</span>;</li>
              <li>2.<span class="orange">禁止退款订单/理赔订单参与</span>，如因退款或者理赔行为致使实付金额不满的，请将差额部分铃铛退回;
              </li>
            </ol>
          </div>

          <div class="rule">
            <h3>卡券使用说明:</h3>
            <p>所有卡券仅限使用一次，一经使用即失效;卡券不退不换不补;卡券请在有效期内使用，超期失效;</p>
          </div>

          <div class="rule">
            <h3>饮品限制说明:</h3>
            <div>除饮品店外，<span class="orange">单笔订单最多可随主食下单1瓶饮料</span>;单点饮品或者下单多件饮品的，将按照实付不满扣差返豆规则处理;
            </div>
          </div>

          <div class="rule">
            <h3>用餐评价要求:</h3>
            <div>
              真实用餐反馈即可，拒绝<span class="orange">注水，文字敷衍，复制粘贴</span>等行为，建议下单当天及时给到用餐反馈，以免后续遗忘活动参与失败;
            </div>
          </div>

          <div class="rule">
            <h3>温馨提示︰</h3>
            <ol>
              <li>1.注意时间限制，超时订单，无法获取返豆;</li>
              <li>2.注意活动说明备注，仅限公里之内的订单参与活动;</li>
              <li>3.参与活动请诚实守信．遵守规则，提交真实、完整、客观、全面的反馈;</li>
              <li>4.以上规则如有不明可在《平台规则》中查看详情，或资询在线人工客服。</li>
            </ol>
          </div>
        </div>
      </template>
    </van-card>

    <van-goods-action>
      <van-goods-action-icon
          icon="home-o"
          text="首页"
          @click="goBack"
      />
      <van-goods-action-icon
          icon="chat-o"
          text="客服"
          @click="onClickService"
      />
      <van-goods-action-button
          text="立即抢单"
          type="warning"
          @click="onClickButton"
      />
    </van-goods-action>

  </div>
</template>

<script>
export default {
  name: "ActivityDetail",
  data() {
    return {
      goods: {
        thumb: 'https://img01.yzcdn.cn/vant/ipad.jpeg',
        title: 'N多寿司（太原友善美军5117店·种果树寿司）',
        address: '山西省太原市尖草坪区柴村街办和平北路361号优山美郡B区东门47-1005号商铺',
        distance: '1.2 km',
        rebate_rules: '先付后返',
        rebate_amount: '满20返10',
        feedback_requirements: '图文反馈',
        platform: '美团',
        remain: 3,
        requirement_detail: '用餐反馈（需含字含图)﹔多图多字',
        rebate: '实付满20返10(每单最多含1瓶酒水，饮品店除外)',
        red_envelope: 0,
        coupons: 1,
      },
    };
  },
  methods: {
    sorry() {
      alert('Sorry! This feature is not implemented yet.');
    },
    onClickService() {
      alert('Clicked on Service');
    },
    onClickCart() {
      alert('Clicked on Cart');
    },
    onClickButton() {
      alert('Clicked on Button');
    },
    goBack() {
      this.$router.go(-1);
    },

    copyKeyword() {
      // Implement your copy logic here
      alert("Copying keyword...");
    },
    checkDelivery() {
      // Implement delivery check logic here
      alert("Checking delivery...");
    },
    reportFailure() {
      // Implement failure reporting logic here
      alert("Reporting failure...");
    },
  },
};
</script>

<style scoped>
.header {
  margin-top: 20px;
  margin-bottom: 10px;
}

.goods-title {
  margin: 0;
}

.goods-address {
  margin: 0 0 10px;
  color: #888888;
}

.activity-requirements {
  margin-bottom: 10px;
}

.k-v {
  margin-bottom: 10px;
}

.notice {
  margin-bottom: 40px;
}

.large-bold {
  margin-right: 10px;
  font-weight: 600;
  font-size: 16px;
  color: #333333;
}

.normal-bold {
  margin-right: 10px;
  font-weight: 600;
  font-size: 14px;
  color: #333333;
}

.small-bold {
  margin-right: 10px;
  font-weight: 600;
  font-size: 12px;
  color: #333333;
}

.large-thin {
  margin-right: 10px;
  font-weight: 300;
  font-size: 16px;
  color: #888888;
}

.normal-thin {
  margin-right: 10px;
  font-weight: 300;
  font-size: 14px;
  color: #888888;
}

.small-thin {
  margin-right: 10px;
  font-weight: 300;
  font-size: 12px;
  color: #888888;
}

.orange {
  color: orange;
}

li {
  margin-bottom: 3px;
  line-height: 20px;
}

h3 {
  margin-bottom: 2px;
}
</style>
