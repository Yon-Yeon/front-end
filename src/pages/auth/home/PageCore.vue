<template>
  <div id="auth-home">
    <div class="header">
      <div class="mini">연세인의 연결,</div>
      <div class="logo">Yon<br>Yeon</div>
    </div>
    <div class="buttons-group">
      <BaseButton mode="main" class="first">로그인하기</BaseButton>
      <BaseButton mode="white" @click="gotosignup()">회원가입</BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue';
export default {
  components: { BaseButton },
  methods: {
    gotosignup(){
      this.$router.push('/auth/signup');
    }
  }
}
</script>

<style lang="scss" scoped>
#auth-home{
  top: 0;
  margin-top: var(--sat);
  width: var(--window-width);
  height: 1px;
  height: calc(var(--window-height) - var(--sat));
  .header{
    margin-top: 40%;
    .mini{
      font-weight: 600;
      font-size: 16px;
      font-family: "Noto Serif KR", serif;
      color: white;
      margin-bottom: 18px;
    }
    .logo{
      text-shadow: 0px 11px 15px rgb(0 0 0 / 50%);  
      font-size: 75px;
      color: white;
      font-family: "Taviraj", serif;
      font-weight: 800;
    }
  }
  .buttons-group{
    margin: 0 20px 20px 20px;
    position: fixed;
    bottom: 0;
    width: calc(var(--window-width) - 40px);
    .first{
      margin-bottom: 15px;
    }
  }
}
</style>