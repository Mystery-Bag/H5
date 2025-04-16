<script setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
const crtTime = ref('');
const meet = ref('');
const together = ref('');
crtTime.value = dayjs().format('YYYY-MM-DD HH:mm:ss');
meet.value = dayjs().diff('2023-02-23', "day")
together.value = dayjs().diff('2023-03-19', "day")
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
    <div class="title">一年四季周而复始</div>
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
.title {
  position: fixed;
  top: 100px;
  left: 100px;
  font-size: 80px;
  font-family: 'Comic Sans MS', cursive;
  // font-family: Tahoma, Geneva, sans-serif;
  font-weight: bold;
  color: #ffffff;
  letter-spacing: 10px;
}

.clock_container {
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  // background: #000000;
  background-image: url('@/assets/img/bg.jpg');
  background-repeat: no-repeat;
  background-position: center center;

  .clock {
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    color: chocolate;
    font-size: 80px;
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
      background: #ff99ac;
      height: 250px;
      width: 250px;
      position: relative;
      transform: rotate(45deg);
      margin: 0px 100px;

      .second {
        color: #ffffff;
        font-size: 100px;
        font-weight: bold;
        position: relative;
        z-index: 100;
        transform: rotate(-45deg);
        left: -40px;
        top: 70px;
      }
    }

    .tag:before,
    .tag:after {
      content: '';
      width: 250px;
      height: 250px;
      border-radius: 50%;
      border-radius: 50%;
      position: absolute;
      left: -125px;
      background-color: #ff99ac;
    }

    //ff99ac
    .tag:after {
      left: 0;
      top: -125px;
    }
  }

  .clock_box {
    margin-top: 80px;
  }
}

@media only screen and (max-device-width: 480px) {
.title {
  position: fixed;
  top: 60px;
  left: 50px;
  font-size: 28px;
  // font-family: Tahoma, Geneva, sans-serif;
  font-family: 'Comic Sans MS', cursive;
  font-weight: bold;
  color: #ffffff;
  letter-spacing: 10px;
}

.clock_container {
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  // background: #000000;
  background-image: url('@/assets/img/bg.jpg');
  background-repeat: no-repeat;
  background-position: center center;

  .clock {
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: chocolate;
    font-size: 32px;
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
      background: #ff99ac;
      height: 100px;
      width: 100px;
      position: relative;
      transform: rotate(45deg);
      margin: 0px 50px;

      .second {
        color: #ffffff;
        font-size: 50px;
        font-weight: bold;
        position: relative;
        z-index: 100;
        transform: rotate(-45deg);
        left: -16px;
        top: 26px;
      }
    }

    .tag:before,
    .tag:after {
      content: '';
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border-radius: 50%;
      position: absolute;
      left: -50px;
      background-color: #ff99ac;
    }

    //ff99ac
    .tag:after {
      left: 0;
      top: -50px;
    }
  }

  .clock_box {
    margin-top: 80px;
  }
}
}
</style>