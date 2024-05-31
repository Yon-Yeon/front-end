<template>
  <div id="base-footer-bar">
    <router-link
      :to="{ name: 'app-home' }"
      @click.native="changeBarValue(1)"
    >
      <div class="menu-item">
        <img src="@/pages/app/components/assets/footerbar/home_off.svg" class="off">
        <img src="@/pages/app/components/assets/footerbar/home_on.svg" class="on" :class="{ 'show': footerbarValue == 1 }">
        <span :class="{ 'show': footerbarValue == 1 }">홈</span>
      </div>
    </router-link>
    
    <router-link
      :to="{ name: 'app-myproject' }"
      @click.native="changeBarValue(2)"
    >
      <div class="menu-item">
        <img src="@/pages/app/components/assets/footerbar/myProject_off.svg" class="off">
        <img src="@/pages/app/components/assets/footerbar/myProject_on.svg" class="on" :class="{ 'show': footerbarValue == 2 }">
        <span :class="{ 'show': footerbarValue == 2 }">내 프로젝트</span>
      </div>
    </router-link>
    
    <router-link
      :to="{ name: 'app-createproject' }"
      @click.native="changeBarValue(3)"
    >
      <div class="menu-item">
        <img src="@/pages/app/components/assets/footerbar/createProject_off.svg" class="off">
        <img src="@/pages/app/components/assets/footerbar/createProject_on.svg" class="on" :class="{ 'show': footerbarValue == 3 }">
        <span :class="{ 'show': footerbarValue == 3 }">생성하기</span>
      </div>
    </router-link>

    <router-link
      :to="{ name: 'app-home' }"
      @click.native="changeBarValue(4)"
    >
      <div class="menu-item">
        <img src="@/pages/app/components/assets/footerbar/chatting_off.svg" class="off">
        <img src="@/pages/app/components/assets/footerbar/chatting_on.svg" class="on" :class="{ 'show': footerbarValue == 4 }">
        <span :class="{ 'show': footerbarValue == 4 }">채팅</span>
      </div>
    </router-link>

    <router-link
      :to="{ name: 'app-home' }"
      @click.native="changeBarValue(5)"
    >
      <div class="menu-item">
        <img src="@/pages/app/components/assets/footerbar/myPage_off.svg" class="off">
        <img src="@/pages/app/components/assets/footerbar/myPage_on.svg" class="on" :class="{ 'show': footerbarValue == 5 }">
        <span :class="{ 'show': footerbarValue == 5 }">마이페이지</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data(){
    return{
      footerbarValue: 1,
    }
  },
  methods:{
    changeBarValue(value){
      this.footerbarValue = value;
    }
  }
}
</script>

<style lang="scss" scoped>
#base-footer-bar{
  z-index: 10;
  padding-top: 12px;
  display: flex;
  align-items: flex-start;;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0%;
  left: 0;
  height: max(calc(var(--sab) + 60px), 60px);
  width: var(--window-width);
  background: #5978A6;
  a{
    text-decoration: none;
  }
  .menu-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    .on{
      position: absolute;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;
    }
    .show{
      opacity: 1;
      color: #D1E0FF;
    }
    span{
      text-decoration: none;
      transition: all 0.2s ease-in-out;
      margin-top: 7px;
      color: #ffffff;
      font-feature-settings: "ss10" on;
      font-family: Pretendard;
      font-size: 10px;
      font-style: normal;
      font-weight: 600;
      line-height: 135.8%;
      letter-spacing: 1.5px;
    }
  }
}
</style>