<template>
  <section class="quiz-wrap">
    <section class="quiz-container">
      <div
        v-for="(quiz, index) in quizList"
        :key="quiz.title"
        class="quiz-item"
        :style="getStyle(index)"
      >
        <div class="quiz-title-wrap">
          <div class="title-header">
            <img src="../assets/shape4.png" alt="icon">
            <span class="jejugothic">{{ getQuestionIndex(index + 1) }} 문항</span>
          </div>
          <div class="question-wrap">
            <span class="jejugothic">{{ quiz.title }}</span>
          </div>
        </div>
        <div class="quiz-answers">
          <ul class="answers-wrap">
            <li
              v-for="(answer, idx) in quiz.answers"
              :key="answer.content"
              @click="saveAnswer(answer.score, index)"
              class="jejugothic"
            >
              {{ idx + 1 }}) {{ answer.content }}
            </li>
          </ul>
        </div>
      </div>
    </section>

<!--    <footer class="footer">-->
<!--      <router-link to="/start" class="btn-nav">돌아가기</router-link>-->
<!--    </footer>-->
  </section>
</template>

<script>
import quizList from "@/data.json";

export default {
  name: "Quiz",

  data() {
    return {
      quizList: quizList.questions,

      currentIdx: 0,
      totalScore: 0,
    };
  },

  methods: {
    getQuestionIndex(idx) {
      let str = "";

      switch (idx) {
        case 1:
          str = "첫번째";
          break;
        case 2:
          str = "두번째";
          break;
        case 3:
          str = "세번째";
          break;
        case 4:
          str = "네번째";
          break;
        case 5:
          str = "다섯번째";
          break;
        case 6:
          str = "여섯번째";
          break;
        case 7:
          str = "일곱번째";
          break;
        case 8:
          str = "여덟번째";
          break;
        case 9:
          str = "아홉번째";
          break;
        case 10:
          str = "열번째";
          break;
      }

      return str;
    },

    saveAnswer(score, idx) {
      this.totalScore += score;

      if (this.quizList.length - 1 === idx) {
        this.$router.replace('/result')
      }

      this.currentIdx += 1;
      this.getStyle(idx);
    },

    getStyle(idx) {
      if (this.currentIdx === idx) {
        return `left: 0vw`;
      } else if (idx < this.currentIdx) {
        return `left: ${idx - this.currentIdx * 100}vw`;
      }

      return `left: ${100 * idx}vw`;
    },
  },
};
</script>

<style lang="scss" scoped>
.quiz-wrap {
  width: 100%;
  height: 100%;
  max-width: 414px;
  overflow: hidden;

  padding: 20px;
}

.quiz-container {
  width: 100%;
  height: 70vh;

  position: relative;
  color: #5F5045;
  letter-spacing: 0.05em;

  .quiz-title-wrap {
    margin-bottom: 30px;

    .title-header {
      display: flex;
      align-items: center;

      & img {
        width: 40px;
        margin-right: 15px;
      }
      & span {
        font-size: 28px;
      }
    }

    .question-wrap {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 65px;
      margin-top: 20px;
      padding: 18px;

      background-image: url("../assets/border.png");
      background-size: 100% 65px;
      background-repeat: no-repeat;

      & span {
        font-size: 18px;
        word-break: keep-all;
      }
    }
  }
}

.quiz-item {
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  transition: 0.3s;
}

.answers-wrap {
  li {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;

    word-break: keep-all;
  }
}

.footer {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;

  .btn-nav {
    padding: 10px;
    border: 1px solid lightcoral;
  }
}
</style>
