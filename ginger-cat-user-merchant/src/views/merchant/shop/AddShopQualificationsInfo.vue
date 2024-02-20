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
          <div class="hint">营业执照</div>
          <van-uploader
              v-model="shop.businessLicense"
              :after-read="afterRead"
              style="margin-left: 14px"
          />
        </van-cell-group>
      </template>
    </van-card>

    <van-card>
      <template #desc>
        <van-cell-group>
          <div class="hint">店铺小程序QR</div>
          <van-uploader
              v-model="shop.mtQr"
              :after-read="afterRead"
              style="margin-left: 14px"
          />
          <van-uploader
              v-model="shop.elmQr"
              :after-read="afterRead"
              style="margin-left: 14px"
          />
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
  name: 'AddShopQualificationsInfo',
  data() {
    return {
      step: 0,
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
        businessLicense: [],
        mtQr: [],
        elmQr: [],
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
      this.$router.push('/merchant/add-shop-success');
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
