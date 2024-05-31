<template>
  <div id="same-favorite-core">
    <div class="header-group">
      <div class="header">나와 비슷한 기질의 사람들</div>
      <div class="more">더보기</div>
    </div>
    <div class="profile-list">
      <baseProfile
        v-for="data in this.profileData"
        :key="data"
        :link="data.link"
        :mbti="data.mbti"
        :name="data.name"
        height="90"
        width="90"
      ></baseProfile>
    </div>
  </div>
</template>

<script>
import baseProfile from '@/pages/app/components/base-profile.vue';
export default {
  components: {baseProfile},
  data(){
    return{
      profileData: [
        {
          link: null,
          mbti: 'SJ',
          name: '이름'
        },
        {
          link: null,
          mbti: 'SJ',
          name: '이름'
        },{
          link: null,
          mbti: 'SJ',
          name: '이름'
        },{
          link: null,
          mbti: 'SJ',
          name: '이름'
        },
      ]
    }
  }
  
}
</script>

<style lang="scss" scoped>
#same-favorite-core{
  margin-top: 16px;
  .header-group{
    margin: 0 20px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    .header{
      color: #1d1d1d;
      font-feature-settings: 'ss10' on;
      font-family: Pretendard;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 135.8%; /* 38.024px */
      letter-spacing: -0.661px;
      text-align: left;
    }
    .more{
      color: #787878;
      font-feature-settings: 'ss10' on;
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: 135.8%; /* 38.024px */
      letter-spacing: -0.661px;
      text-align: left;
    }
  }
  .profile-list{
    padding: 0 20px;
    margin-top: 15px;
    display: flex;
    overflow-x: auto; 
    gap: 8px; 
  }
}
</style>