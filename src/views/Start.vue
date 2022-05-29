<template>
  <section class="start-wrap">
    <div class="start-title">
      <h1 class="main-title jejugothic">한의학</h1>
      <h1 class="sub-title jejugothic">사상체질 진단 10문항</h1>

      <router-link to="/quiz" class="sub-title txt-link jejugothic">진단하기</router-link>
    </div>

    <div class="background-wrap">
      <div class="main-background-image-box"></div>
      <div class="main-background-image-box"></div>
      <div class="main-background-image-box"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Start",
};
</script>

<style lang="scss" scoped>
  .start-wrap {
    width: 100%;
    //height: 100%;

    position: relative;
    overflow: hidden;
  }

  .start-title {
    padding-top: 30%;

    .main-title {
      font-size: 36px;
      letter-spacing: 0.05em;
      text-align: right;
      color: #5F5045;
      padding-right: 58px;
      margin-bottom: 5px;
    }

    .sub-title {
      font-size: 28px;
      color: #5F5045;
      letter-spacing: 0.05em;
    }

    .txt-link {
      display: inline-block;
      margin-top: 20px;
      border-bottom: 1px solid black;
      position: relative;
      left: 57%;
      text-decoration: none;
    }
  }

  .background-wrap {
    margin-top: 50px;

    .main-background-image-box {
      width: 100%;
      height: 120px;
      background-size: 120px;

      &:first-child {
        background-image: url("../assets/shape4.png");
      }
      &:nth-child(2) {
        background-image: url("../assets/shape3.png");
      }
      &:nth-child(3) {
        background-image: url("../assets/shape2.png");
      }
    }
  }


</style>
