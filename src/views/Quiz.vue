<template>
  <section class="quiz-wrap">
    <div class="progress-wrap">
      <span class="progress-bar" :style="{ width: getProgressPercent }"></span>
    </div>

    <section class="quiz-container">
      <div
        v-for="(quiz, index) in quizList"
        :key="quiz.title"
        class="quiz-item"
        :style="getStyle(index)"
      >
        <div class="quiz-title">
          <h2>{{ quiz.title }}</h2>
        </div>
        <div class="quiz-answers">
          <ul class="answers-wrap">
            <li
              v-for="answer in quiz.answers"
              :key="answer.content"
              @click="saveAnswer(answer.score, index)"
            >
              {{ answer.content }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <footer class="footer">
      <router-link to="/start" class="btn-nav">돌아가기</router-link>
    </footer>
  </section>
</template>

<script>
import quizList from "@/data.json";

export default {
  name: "Quiz",

  computed: {
    getProgressPercent() {
      const progress = (100 * this.currentIdx) / this.quizList.length;

      if (!progress) {
        return `2%`;
      } else if (this.currentIdx === this.quizList.length - 1) {
        return `100%`;
      } else {
        return `${progress}%`;
      }
    },
  },

  data() {
    return {
      quizList: quizList.questions,

      currentIdx: 0,
      totalScore: 0,
    };
  },

  methods: {
    saveAnswer(score, idx) {
      this.totalScore += score;

      if (this.quizList.length - 1 === idx) {
        alert("문제 다 풀었다. 총 점수는 :: " + this.totalScore);
        return;
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
.progress-wrap {
  width: 100%;
  height: 30px;

  border: 1px solid lightblue;

  .progress-bar {
    display: inline-block;
    height: 100%;

    background-color: lightblue;

    transition: 0.3s;
  }
}

.quiz-wrap {
  max-width: 414px;
  overflow: hidden;

  padding: 20px;
}

.quiz-container {
  width: 100%;
  height: 70vh;

  position: relative;
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
    border: 2px solid #dedede;
    border-radius: 15px;

    padding: 10px;
    margin-bottom: 15px;
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
