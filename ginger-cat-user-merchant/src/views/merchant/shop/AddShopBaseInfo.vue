<template>
  <div style="margin-top: 20px">
    <van-nav-bar title="新增店铺" left-arrow @click-left="goBack"></van-nav-bar>

    <div style="width: 100%">
      <van-steps :active="step" style="margin: 0 auto; width: 200px">
        <van-step>基础信息填写</van-step>
        <van-step>资质信息填写</van-step>
      </van-steps>
    </div>

    <van-card>
      <template #desc>
        <van-cell-group>
          <van-field v-model="shop.shopName" label="店铺名称" placeholder="请输入店铺名称" required/>
          <van-field v-model="shop.shopType" label="店铺类型" placeholder="请选择店铺类型" required/>
        </van-cell-group>
      </template>
    </van-card>

    <van-card>
      <template #desc>
        <van-cell-group>
          <van-field v-model="shop.contactName" label="联系人" placeholder="请输入联系人" required/>
          <van-field v-model="shop.mobile" label="手机号码" placeholder="请输入手机号" required/>
          <van-field v-model="shop.shopLocation.latitude" label="店铺定位" placeholder="请选择定位" required/>
          <van-field v-model="shop.shopAddress" label="店铺地址" placeholder="请输入详细地址" required/>
        </van-cell-group>
      </template>
    </van-card>

    <van-card>
      <template #desc>
        <van-cell-group>
          <van-field v-model="shop.inviteCode" label="商务邀请码" placeholder="请输入邀请码"/>
          <div class="hint">店铺Logo</div>
          <van-uploader
              v-model="shop.logo"
              :after-read="afterRead"
              style="margin-left: 14px"
          />
        </van-cell-group>
      </template>
    </van-card>

    <van-card>
      <template #desc>
        <van-cell-group>
          <van-field v-model="shop.businessHours" label="营业时间" placeholder="请输入营业时间" required/>
        </van-cell-group>
      </template>
    </van-card>

    <van-goods-action>
      <van-goods-action-button
          text="下一步"
          type="warning"
          @click="onClickButton"
      />
    </van-goods-action>

  </div>
</template>

<script>

export default {
  name: 'AddShopBaseInfo',
  data() {
    return {
      step: -1,
      shop: {
        id: '',
        shopName: '',
        shopType: '',
        contactName: '',
        mobile: '',
        email: '',
        intro: '',
        logo: [],
        shopLocation: {
          latitude: 0,
          longitude: 0
        },
        shopAddress: '',
        businessHours: '',
        businessLicense: '',
        mtQr: '',
        elmQr: '',
        status: '',
        inviteCode: ''
      }
    };
  },
  methods: {
    onSearch() {
      this.$toast(this.value);
    },
    onFocus() {
      this.showAction = true;
    },
    onCancel() {
      this.showAction = false;
    },
    goBack() {
      this.$router.go(-1);
    },
    onClickButton() {
      this.$router.push('/merchant/add-shop-qualifications');
    },
    afterRead(files, detail) {
      console.log(files, detail);
      files.forEach(element => {
        // 模拟请求上传图片接口操作
        setTimeout(() => {
          element.status = null; // 上传成功后须将file对象的status属性置为null，否则遮罩不会消失。
        }, 2000);
      });
    }
  }
};
</script>

<style scoped>
.hint {
  margin: 10px 10px 10px 14px;
  color: #646566;
  font-size: 14px;
}
</style>
