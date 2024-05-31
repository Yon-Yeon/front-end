<template>
  <div id="myproject-core">
    <div class="page-title">내 프로젝트</div>
    <div class="project-list">
      <baseProject
        v-for="data in projectList"
        :key="data.title"
        type="big"
        :data="data"
      ></baseProject>
    </div>
  </div>
</template>

<script>
import baseProject from '@/pages/app/components/base-project.vue';
export default {
  components: { baseProject },
  data() {
    return {
      projectList: [
        {
          type: '프로그래밍',
          title: '마우스프로그램 만들기',
          sub: '우리 모두 마우스를 만들아봐요. 우리 모두 마우스를 만들아봐요. 우리 모두 마우스를 만들아봐요. 우리 모두 마우스를 만들아봐요.',
          profiles: [
            {
              link: null,
            },
            {
              link: null,
            },
            {
              link: null,
            }
          ]
        },
        {
          type: '프로그래밍',
          title: '마우스프로그램 만들기',
          sub: '우리 모두 마우스를 만들아봐요. 우리 모두 마우스를 만들아봐요. 우리 모두 마우스를 만들아봐요. 우리 모두 마우스를 만들아봐요.',
          profiles: [
            {
              link: null,
            },
            {
              link: null,
            },
            {
              link: null,
            }
          ]
        },
        {
          type: '프로그래밍',
          title: '마우스프로그램 만들기',
          sub: '우리 모두 마우스를 만들아봐요. 우리 모두 마우스를 만들아봐요. 우리 모두 마우스를 만들아봐요. 우리 모두 마우스를 만들아봐요.',
          profiles: [
            {
              link: null,
            },
            {
              link: null,
            },
            {
              link: null,
            }
          ]
        },
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#myproject-core{
  background: #FBFBFB;
  width: var(--window-width);
  min-height: var(--window-height);
  .page-title{
    margin: 20px 24px;
    color: #191919;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.52px;
    text-align: left;
  }
  .project-list{
    margin: 20px 20px 90px 20px;
    display: flex;
    gap: 13px;
    flex-direction: column;
  }
}
</style>