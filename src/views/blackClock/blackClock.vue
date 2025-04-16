<script setup>
import {ref} from 'vue'
import dayjs from 'dayjs'
const crtTime = ref('');
const crtSeond = ref('');
;(function getCurrentTime() {
    setInterval(() => {
        crtTime.value = dayjs().format('YYYY-MM-DD');
        crtSeond.value = dayjs().format('HH:mm:ss');
    }, 1000)
})()
</script>
<template>
    <div class="clock_container">
        <div class="clock">{{ crtTime }}</div>
        <div class="second">{{ crtSeond }}</div>
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
    .clock, .second {
        width: 100%;
        height: 100px;
        line-height: 100px;
        text-align: center;
        color: chocolate;
        font-size: 80px;
        font-family:fantasy;
        font-weight: bold;
        letter-spacing: 6px;
    }
    .second {
        font-size: 60px;
    }
}

</style>