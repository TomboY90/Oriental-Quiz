<template>
  <section class="result-wrap jejugothic">
    <div class="background-wrap">
      <div class="main-background-image-box"></div>
      <div class="main-background-image-box"></div>
    </div>

    <h2 class="result-title jejugothic">사상체질 진단 결과</h2>
    <div class="result-box" :class="getResultClass()">
      <span class="result-text">당신은 <span class="result-main jejuhallasan">"태양인"</span> 입니다.</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "Result",

  methods: {
    getResultClass() {
      return {
        'tae-yang': true,
        'so-yang': false,
        'tae-eum': false,
        'so-eum': false,
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.result-wrap {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;
  overflow: hidden;

  background-image: url("../assets/result_background.png");

  .result-box {
    width: 100%;
    height: 100%;
    max-height: 291px;

    display: flex;
    align-items: center;
    justify-content: center;

    &.tae-yang {
      background-color: #E5882B;
    }
    &.so-yang {
      background-color: #B6BE8F;
    }
    &.tae-eum {
      background-color: #5C6478;
    }
    &.so-eum {
      background-color: #D8B7AD;
    }

    .result-text {
      font-size: 24px;
    }
    .result-main {
      font-size: 34px;
    }
  }

  .background-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    column-gap: 10px;
    position: absolute;
    flex-direction: row-reverse;
    z-index: -1;

    .main-background-image-box {
      width: 80px;
      height: 100%;
      background-size: 80px;

      &:first-child {
        background-image: url("../assets/shape3.png");
      }
      &:nth-child(2) {
        background-image: url("../assets/shape4.png");
      }
    }
  }
}
</style>
