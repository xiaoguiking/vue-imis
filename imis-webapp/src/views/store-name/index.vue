<template>
  <div class="store-name-container">
    <div class="user-info">
      <img src="../../assets/img/user.jpeg" alt="" width="50" height="80" class="user-img" />
      <div class="user-info-store">
        <div class="username">店铺名称</div>
        <div class="user-bottom focus">
          <div class="number">
            关注数: <span>{{ focus.focusNumber }}</span>
          </div>
          <div class="add">
            当月新增关注数:<span>{{ focus.focusAdd }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'store-name',
  data() {
    return {
      focus: {
        focusNumber: 2123,
        focusAdd: 232
      }
    }
  }
}
</script>

<style lang="less" scoped>
.store-name-container {
  .user-img {
    margin: 12px;
    border-radius: 15px;
  }
  .user-info {
    width: 100%;
    height: 120px;
    background-color: rgb(148, 96, 24);
    display: flex;

    .username {
      font-size: 18px;
      font-weight: 300;
      color: white;
      padding: 12px;
    }
    .focus {
      color: white;
      font-size: 14px;
      font-weight: 200;
    }
    .user-bottom {
      display: flex;
      flex-direction: column;
      padding-left: 15px;

      .number {
        margin-bottom: 10px;
      }
      span {
        margin-left: 10px;
      }
    }
  }
}
</style>
