<template>
  <div class="css-cluster">
    <h1>css 集群</h1>
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
  </div>
</template>

<script>
export default {
  name: 'CssCluster'
}
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
</style>
