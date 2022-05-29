<template>
  <section class="result-wrap jejugothic">
    <div class="background-wrap">
      <div class="main-background-image-box"></div>
      <div class="main-background-image-box"></div>
    </div>

    <h2 class="result-title jejugothic">사상체질 진단 결과</h2>
    <div class="result-box" :class="getResultClass()">
      <span class="result-text">당신은 <span class="result-main jejuhallasan">"{{ getType() }}"</span> 입니다.</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "Result",

  props: {
    type: {
      type: String,
      default: ''
    }
  },

  methods: {
    getType() {
      let typeString = "";

      switch (this.$props.type) {
        case 'tae-yang':
          typeString = "태양인"
          break;
        case 'so-yang':
          typeString = "소양인"
          break;
        case 'tae-eum':
          typeString = "태음인"
          break;
        case 'so-eum':
          typeString = "소음인"
          break;
      }

      return typeString;
    },

    getResultClass() {
      return {
        'tae-yang': this.$props.type === 'tae-yang',
        'so-yang': this.$props.type === 'so-yang',
        'tae-eum': this.$props.type === 'tae-eum',
        'so-eum': this.$props.type === 'so-eum',
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
