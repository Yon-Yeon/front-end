<template>
  <div id="signup-done">
    <div class="page-title">지금부터 시작합니다!</div>
    <div class="page-subtitle">
      지금까지 입력된 내용은 언제든지 수정할 수 있습니다.<br>
      당신의 프로젝트를 자유롭게 개발해보세요!
    </div>
  </div>
</template>


<script>
import BaseButton from '@/components/BaseButton.vue';

export default {
  components: {
    BaseButton,
  },
  data() {
    return {  
      selectedMBTI: null,
      inputValided: false,
    };
  },
  computed: {
    buttonMode() {
      return this.inputValided ? 'main' : 'deactivate';
    },
  },
  methods: {
    goToNextStep() {
      if (this.inputValided) {
        this.$emit('nextclicked');
      }
    },
    selectMBTI(type) {
      this.selectedMBTI = type;
      this.inputValided = true;
    },
  },
}
</script>


<style lang="scss" scoped>
#signup-done {
  margin-left: 40px;
  width: calc(var(--window-width) - 80px);
  height: calc(var(--window-height) - 160px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .page-title {
    display: flex;
    justify-content: center;
    color: #ffffff;
    font-feature-settings: 'ss10' on;
    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 135.8%;
    letter-spacing: -0.661px;
  }

  .page-subtitle {
    margin-top: 8px;
    margin-bottom: 60px;
    display: flex;
    justify-content: center;
    color: #ffffffc3;
    font-feature-settings: 'ss10' on;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 135.8%;
    letter-spacing: -0.661px;
  }

  .mbti-select-group {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    
    .select {
      flex: 1 1 45%;
      box-sizing: border-box;
      display: flex;
      border: 2px solid #b1b1b1;
      border-radius: 12px;
      color: #ffffff;
      font-feature-settings: "ss10" on;
      font-family: Pretendard;
      font-size: 28px;
      font-style: normal;
      font-weight: 600;
      line-height: 135.8%;
      letter-spacing: -0.661px;
      justify-content: center;
      align-items: center;
      padding: 16px;
      cursor: pointer;
    }

    .a {
      background: rgb(89, 184, 215);
      background: linear-gradient(151deg, rgba(89, 184, 215, 1) 0%, rgba(34, 90, 170, 1) 100%);
    }

    .b {
      background: rgb(204, 126, 105);
      background: linear-gradient(307deg, rgba(204, 126, 105, 1) 0%, rgba(200, 68, 106, 1) 100%);
    }

    .c {
      background: rgb(48, 147, 170);
      background: linear-gradient(225deg, rgba(48, 147, 170, 1) 0%, rgba(115, 187, 112, 1) 100%);
    }

    .d {
      background: rgb(209, 185, 112);
      background: linear-gradient(68deg, rgba(209, 185, 112, 1) 0%, rgba(209, 136, 105, 1) 100%);
    }

    .select.selected {
      border: 2px solid #ffffff;
    }
  }

  .buttons {
    position: fixed;
    bottom: 0;
    left: 0;
    width: var(--window-width);
    
    .guard {
      margin: 0 40px;
      margin-bottom: max(calc(env(safe-area-inset-bottom) + 0px), 24px);
    }
  }
}
</style>
