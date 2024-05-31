<template>
  <div id="progressing-project-core">
    <div class="header-group">
      <div class="header">진행중인 프로젝트</div>
      <div class="more">더보기</div>
    </div>
    <div class="project-list">
      <baseProject
        type="small"
        :data="data"
        v-for="data in this.projectData"
        :key="data"
        >
      </baseProject>
    </div>
  </div>
</template>

<script>
import baseProject from '@/pages/app/components/base-project.vue';
export default {
  components: {baseProject},
  data(){
    return{
      projectData: [
          {
            type: '디자인',
            title: '캡스톤디자인해보기',
            sub: '캡스톤디자인을 하기위한 설명을 해볼까요 가나다'
          },
          { 
            type: '디자인',
            title: '캡스톤디자인해보기',
            sub: '캡스톤디자인을 하기위한 설명을 해볼까요 가나다'
          }
        ]
    }
  }
}
</script>

<style lang="scss" scoped>
#progressing-project-core{
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
  .project-list{
    padding: 0 20px;
    margin-top: 15px;
    display: flex;
    overflow-x: auto; 
    gap: 8px; 
  }
}
</style>