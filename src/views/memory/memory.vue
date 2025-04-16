<script setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
const crtTime = ref('');
const meet = ref('');
const together = ref('');
; (function getCurrentTime() {
  setInterval(() => {
    crtTime.value = dayjs().format('YYYY-MM-DD HH:mm:ss');
    meet.value = dayjs().diff('2023-02-23', "day")
    together.value = dayjs().diff('2023-03-19', "day")
  }, 1000)
})()
</script>
<template>
  <div class="clock_container">
    <div class="remenber">
      <div class="tag">
        <div class="second">{{ together }}</div>
      </div>
      <div class="tag">
        <div class="second">{{ meet }}</div>
      </div>
    </div>
    <div class="clock_box">
      <div class="clock">{{ crtTime }}</div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.clock_container {
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: #000000;
  .clock {
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    color: chocolate;
    font-size: 40px;
    font-family: fantasy;
    font-weight: bold;
    letter-spacing: 6px;
  }
  .remenber {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .tag {
      background: #ffffff;
      height: 200px;
      width: 140px;
      border-radius: 12px;
      text-align: center;
      line-height: 200px;
      margin: 0px 60px;
      .second {
        color: #ff99ac;
        font-size: 80px;
        font-weight: bold;
      }
    }
  }
}
</style>