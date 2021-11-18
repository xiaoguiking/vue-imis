<template>
  <div class="sky-shop-car">
    <div class="sky-shop-header d-flex jc-between">
      <a class="sky-shop-image">
        <div class="sky-shop-thumb" style="width: 100%; height: 100%">
          <img :src="thumb" alt="购物图片" class="sky-shop-car-img" />
        </div>
      </a>
      <div class="sky-shop-content font-md">
        <div class="sky-shop-multi-ellipsis--l2 sky-ellipsis">{{ title }}</div>
        <div class="sky-shop-car-desc mt-5">描述:{{ desc }}</div>
        <div class="sky-shop-price mt-10">￥{{ price }}</div>
      </div>
    </div>
    <div class="sky-shop-operate d-flex jc-end">
      <sky-button type="init">售后中</sky-button>
    </div>
    <div class="sky-shop-footer">信息</div>
  </div>
</template>

<script>
export default {
  name: 'SkyShopCard',
  props: {
    price: {
      type: String,
      default: null
    },
    desc: {
      type: String,
      default: null
    },
    title: {
      type: String
    },
    thumb: {
      type: String
    }
  },
  created() {
    console.log(this.$props, 'props')
  }
}
</script>

<style lang="less">
.sky-shop-car {
  margin: 10px;
  border-radius: 5px;
  background-color: #fff;
  .sky-shop-header {
    .sky-shop-image {
      position: relative;
      -webkit-box-flex: 0;
      -webkit-flex: none;
      flex: none;
      width: 88px;
      height: 88px;
      margin-right: 8px;
      .sky-shop-thumb {
        border-radius: 5px;
        .sky-shop-car-img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .sky-shop-content {
      padding: 10px 0;
      flex: 1;
      display: flex;
      flex-direction: column;
      min-width: 0;
      min-height: 88px;

      .sky-shop-multi-ellipsis--l2 {
        font-weight: 500;
      }
      .sky-shop-price {
        font-weight: 700;
      }
    }
  }
  .sky-shop-footer {
  }
}
</style>
