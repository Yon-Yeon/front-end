<template>
  <div id="select-interest">
    <div class="page-title">특별한 관심사가 있나요?</div>
    <div class="page-subtitle">비슷한 관심사를 가진 팀원을 만날 수 있어요</div>
    
    <!-- 여기에 추가해주세요. -->
    <base-select
      :options="interestOptions"
      placeholder="관심사 1을 선택하세요"
      @input="handleSelectChange1"
    />

    <base-select
      :options="interestOptions"
      placeholder="관심사 2를 선택하세요"
      @input="handleSelectChange2"
    />

    <div class="buttons">
      <base-button 
        :mode="buttonMode" 
        :class="buttonClass" 
        @clickevent="goToNextStep()">다음
      </base-button>
    </div>
  </div>
</template>


<script>
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
import BaseSelect from '@/components/BaseSelect.vue';

export default {
  components: {
    BaseInput,
    BaseButton,
    BaseSelect,
  },
  data() {
    return {  
      inputValues: '',
      isFocused: false,
      inputValided: false,
      selectedInterest1: null,
      selectedInterest2: null,
      interestOptions: ['개발', '디자인', '마케팅', '경영'],
    };
  },
  computed: {
    buttonMode() {
      if (this.isFocused) {
        return (this.selectedInterest1 && this.selectedInterest2) ? 'keyboardActivate' : 'keyboardDeactivate';
      } else {
        return (this.selectedInterest1 && this.selectedInterest2) ? 'main' : 'deactivate';
      }
    },
    buttonClass() {
      return {
        'guard': !this.isFocused
      };
    }
  },
  methods: {
    goToNextStep() {
      if (this.selectedInterest1 && this.selectedInterest2) {
        this.$store.dispatch('signupTempEmail', this.inputValues);
        this.$emit('nextclicked');
      }
    },
    updateInputValues(value) {
      this.inputValues = value;
    },
    handleFocus() {
      this.isFocused = true;
    },
    handleBlur() {
      this.isFocused = false;
    },
    handleSelectChange1(selectedOption) {
      this.selectedInterest1 = selectedOption;
    },
    handleSelectChange2(selectedOption) {
      this.selectedInterest2 = selectedOption;
    }
  },
}
</script>


<style lang="scss" scoped>
#select-interest{
  margin-left: 40px;
  width: calc(var(--window-width) - 80px );
  .page-title{
    display: flex;
    justify-content: center;
    color: #ffffff;
    font-feature-settings: 'ss10' on;
    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 135.8%; /* 38.024px */
    letter-spacing: -0.661px;
  }

  .page-subtitle{
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
    line-height: 135.8%; /* 38.024px */
    letter-spacing: -0.661px;
  }

  .buttons{
    position: fixed;
    bottom: 0;
    left: 0;
    width: var(--window-width);
    .guard{
      margin: 0 40px;
      margin-bottom: max(calc(env(safe-area-inset-bottom) + 0px), 24px);
    }
  }
}
</style>
