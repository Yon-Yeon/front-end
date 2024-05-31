<template>
  <div id="signup-page">
    <div class="viewer">
      <transition name="RIGHT">
        <component 
          :is="currentStepComponent" 
          @nextclicked="goPathfunc()" 
          @syncfunc="syncSignupData"
          :syncObject="{
            userEmail: this.signupUserEmail,
            userPassword: this.signupUserPassword
          }"
        />
      </transition>
    </div>
    <div 
      class="white-overlay" 
      :class="{ visible: showOverlay }"
      v-if="this.currentStep >= 6"
    ></div>
  </div>
</template>


<script>
import InputEamil from '@/pages/auth/signup/pages/1_InputEmail.vue';
import inputPassword from '@/pages/auth/signup/pages/2_InputPassword.vue';
import InputNickname from '@/pages/auth/signup/pages/3_InputNickname.vue';
import SelectInterest from '@/pages/auth/signup/pages/4_SelectInterest.vue';
import SelectMBTI from '@/pages/auth/signup/pages/5_SelectMBTI.vue';
import SignupDone from '@/pages/auth/signup/pages/6_SignupDone.vue';

export default {
  components: {
    InputEamil,
    inputPassword,
    InputNickname,
    SelectInterest,
    SelectMBTI,
    SignupDone
  },
  data() {
    return {
      currentStep: 4,
      steps: [
        InputEamil,
        inputPassword,
        InputNickname,
        SelectInterest,
        SelectMBTI,
        SignupDone
      ],
      signupUserEmail: '',
      signupUserPassword: '',
      isHidden: false,
      showOverlay: false
    };
  },
  computed: {
    currentStepComponent() {
      return this.steps[this.currentStep - 1];
    }
  },
  methods: {
    goPathfunc() {
      this.currentStep++;
      if (this.currentStep >= 6) {
        setTimeout(() => {
          this.showOverlay = true;
        }, 1500);
        setTimeout(() => {this.$router.push('/app/home');},4501);
      }
    },
    syncSignupData(func, data) {
      if (func == 'writeEmail') {
        this.signupUserEmail = data;
      } else if (func == 'writePassword') {
        return this.signupUserPassword;
      }
    },
    backPath() {
      this.currentStep--;
    },
  }
};
</script>

<style lang="scss" scoped>
#signup-page {
  display: flex;
  top: 0;
  margin-top: var(--sat);
  width: var(--window-width);
  .viewer {
    margin-top: 80px;
    width: var(--window-width);
    height: calc(var(--window-height) - 80);
  }
  .white-overlay {
    position: absolute;
    background: #ffffff;
    width: var(--window-width);
    height: var(--window-height);
    opacity: 0;
    transition: opacity 3s ease-in-out;
    &.visible {
      opacity: 1;
    }
  }
}

.RIGHT-enter-active,
.RIGHT-leave-active {
  z-index: 1;
  position: absolute;
  transition: all 0.3s ease-in-out;
}

.RIGHT-enter-from {
  opacity: 0;
  left: 10%;
}

.RIGHT-enter-to {
  opacity: 1;
  left: 0%;
}

.RIGHT-leave-from {
  opacity: 1;
  left: 0%;
}

.RIGHT-leave-to {
  opacity: 0;
  left: -10%;
}

.LEFT-enter-active,
.LEFT-leave-active {
  position: absolute;
  transition: all 0.3s ease-in-out;
}

.LEFT-enter-from {
  opacity: 0;
  left: -10%;
}

.LEFT-enter-to {
  opacity: 1;
  left: 0%;
}

.LEFT-leave-from {
  opacity: 1;
  left: 0%;
}

.LEFT-leave-to {
  opacity: 0;
  left: 10%;
}
</style>
