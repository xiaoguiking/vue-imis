<template>
  <div class="css-cluster">
    <h1>css flex</h1>
    <div class="box">
      <div class="item">盒子1</div>
      <div class="item">盒子2</div>
      <div class="item">盒子3</div>
    </div>
    <div class="box2">
      控制宽高占比比例aspect-ratio
      <div class="item1 common-item">宽高比例</div>
      <div class="item2 common-item">宽高比例</div>
    </div>
    <hr />
    <!-- flex布局 -->
    <div class="container">
      <!-- 九宫格 flex -->
      <div class="flex-box9 common-box">
        <span class="flex-box-item">1</span>
        <span class="flex-box-item">2</span>
        <span class="flex-box-item">3</span>
        <span class="flex-box-item">4</span>
        <span class="flex-box-item">5</span>
        <span class="flex-box-item">6</span>
        <span class="flex-box-item">7</span>
        <span class="flex-box-item">8</span>
        <span class="flex-box-item">9</span>
      </div>

      <!--九宫格 grid  -->
      <div class="flex-grid common-box">
        <span class="flex-box-item">1</span>
        <span class="flex-box-item">2</span>
        <span class="flex-box-item">3</span>
        <span class="flex-box-item">4</span>
        <span class="flex-box-item">5</span>
        <span class="flex-box-item">6</span>
        <span class="flex-box-item">7</span>
        <span class="flex-box-item">8</span>
        <span class="flex-box-item">9</span>
      </div>

      <!-- 六宫格 -->
      <div class="flex-box6 common-box">
        <div class="row">
          <span class="flex-box-item">1</span>
          <span class="flex-box-item">2</span>
          <span class="flex-box-item">3</span>
        </div>
        <div class="row">
          <span class="flex-box-item">4</span>
        </div>
        <div class="row">
          <span class="flex-box-item">5</span>
          <span class="flex-box-item">6</span>
        </div>
      </div>

      <!-- 六宫格 -->
      <div class="flex-box6-2 common-box">
        <div class="row6">
          <span class="flex-box-item">1</span>
          <span class="flex-box-item">2</span>
          <span class="flex-box-item">3</span>
        </div>
        <div class="row6">
          <span class="flex-box-item">4</span>
          <span class="flex-box-item">5</span>
          <span class="flex-box-item">6</span>
        </div>
      </div>

      <!-- 六宫格 -->
      <div class="flex-box6-3 common-box">
        <div class="row6-3">
          <span class="flex-box-item">1</span>
          <span class="flex-box-item">2</span>
          <span class="flex-box-item">3</span>
        </div>
        <div class="row6-3">
          <span class="flex-box-item">4</span>
          <span class="flex-box-item">5</span>
          <span class="flex-box-item">6</span>
        </div>
      </div>

      <!-- 四宫格 -->
      <div class="flex-box4 common-box">
        <div class="column">
          <span class="flex-box-item">1</span>
          <span class="flex-box-item">2</span>
        </div>
        <div class="column">
          <span class="flex-box-item">3</span>
          <span class="flex-box-item">4</span>
        </div>
      </div>
      <!-- 四宫格 -->
      <div class="flex-box4-1 common-box">
        <span class="flex-box-item">1</span>
        <span class="flex-box-item">2</span>
        <span class="flex-box-item">3</span>
        <span class="flex-box-item flex-box4-item">4</span>
      </div>

      <!-- 三宫格 -->
      <div class="flex-box3 common-box">
        <span class="flex-box-item">1</span>
        <span class="flex-box-item">2</span>
        <span class="flex-box-item">3</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CssCluster",
};
</script>

<style lang="less" scoped>
.box {
  width: 100vw;
  height: 200px;
  border: 1px solid springgreen;
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;

  .item {
    width: 280px;
    background: tomato;
    // 新增分隔间隙属性
  }
  div:nth-child(2) {
    background: blue;
  }
  div:nth-child(3) {
    background: purple;
  }
}

.box2 {
  margin-top: 20px;
  background: rebeccapurple;
  .common-item {
    aspect-ratio: 1/1;
  }
  .item1 {
    width: 200px;
  }
  .item2 {
    height: 100px;
  }
}

.container {
  display: flex;
  flex-wrap: wrap;
}
.common-box {
  margin: 10px;
  width: 350px;
  height: 350px;
  border: 1px solid cadetblue;
  border-radius: 5px;
  .flex-box-item {
    display: block;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    background: chartreuse;
    border: 1px solid #fff;
    text-align: center;
    line-height: 100px;
    font-size: 30px;
  }

  &.flex-box9 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &.flex-grid {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-template-columns: 1fr 1fr 1fr;
    // grid-template-rows: 100px 100px 100px;
    grid-template-rows: 1fr 1fr 1fr;
    // gap: 10px;
    justify-content: space-between;
  }

  &.flex-box6 {
    display: flex;
    flex-wrap: wrap;
    .row {
      flex-basis: 100%;
      display: flex;
    }
    .row:nth-child(1) {
      justify-content: space-between;
    }
    .row:nth-child(2) {
      justify-content: center;
    }
    .row:nth-child(3) {
      justify-content: space-between;
    }
  }

  &.flex-box6-2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .row6 {
      // flex-basis: 100%;
    }
  }

  &.flex-box6-3 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-between;
    .row6-3 {
      display: flex;
      flex-basis: 100%;
      justify-content: space-between;
    }
  }

  &.flex-box4 {
    display: flex;
    align-content: space-between;
    flex-wrap: wrap;
    .column {
      flex-basis: 100%;
      display: flex;
      justify-content: space-between;
    }
    .column:nth-child(1) {
      // justify-content: space-between;
    }
  }

  &.flex-box4-1 {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: flex-end;
  }

  &.flex-box3 {
    display: flex;
    .flex-box-item:nth-child(2) {
      align-self: center;
    }
    .flex-box-item:nth-child(3) {
      align-self: flex-end;
    }
  }
}
</style>
