<template>
  <div id="select-mbti">
    <div class="page-title">MBTI를 알고있나요?</div>
    <div class="page-subtitle">같은 기질의 팀원과 편안하게 협력할 수 있어요</div>
    
    <div class="mbti-select-group">
      <div 
        class="select a" 
        :class="{ 'selected': selectedMBTI === '_S_J' }"
        @click="selectMBTI('_S_J')">_S_J
      </div>
      <div 
        class="select b" 
        :class="{ 'selected': selectedMBTI === '_S_P' }"
        @click="selectMBTI('_S_P')">_S_P
      </div>
      <div 
        class="select c" 
        :class="{ 'selected': selectedMBTI === '_NF_' }"
        @click="selectMBTI('_NF_')">_NF_
      </div>
      <div 
        class="select d" 
        :class="{ 'selected': selectedMBTI === '_NT_' }"
        @click="selectMBTI('_NT_')">_NT_
      </div>
    </div>

    <div class="buttons">
      <base-button 
        :mode="buttonMode"
        class="guard"
        @clickevent="goToNextStep()">다음
      </base-button>
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
#select-mbti {
  margin-left: 40px;
  width: calc(var(--window-width) - 80px);
  
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
