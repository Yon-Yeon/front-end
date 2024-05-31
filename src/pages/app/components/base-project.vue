<template>
  <div id="base-project-core">
    <div class="type-small" v-if="type === 'small'">
      <div class="project-type">{{ data.type }}</div>
      <div class="project-title">{{ data.title }}</div>
      <div class="project-desc">{{ data.sub }}</div>
    </div>
    <div class="type-big" v-if="type === 'big'">
      <div class="project-type">{{ data.type }}</div>
      <div class="project-title">{{ data.title }}</div>
      <div class="project-desc">{{ data.sub }}</div>
      <div class="hr"></div>
      <div class="profile-list">
        <baseProfile
          v-for="profile in data.profiles"
          :key="profile.name"
          :link="profile.link"
          :name="profile.name"
          height="35"
          width="35"
        ></baseProfile>
      </div>
    </div>
  </div>
</template>

<script>
import baseProfile from '@/pages/app/components/base-profile.vue';
export default {
  components: { baseProfile },
  props: {
    type: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      required: true,
    }
  }
};
</script>

<style lang="scss" scoped>
/* 스타일을 추가하여 컴포넌트의 외관을 꾸밀 수 있습니다 */
#base-project-core {
  .type-small{
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 200px;
    border-radius: 12px;
    background: #ddeaff;
    padding: 18px;
    .project-type{
      color: #5f5f5f;
      font-feature-settings: 'ss10' on;
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: 135.8%; /* 38.024px */
    }
    .project-title{
      color: #1b1b1b;
      font-feature-settings: 'ss10' on;
      font-family: Pretendard;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 135.8%; /* 38.024px */
    }
    .project-desc{
      width:200px;
      overflow:hidden;
      text-overflow:ellipsis;
      white-space:nowrap;

      color: #1b1b1b;
      font-feature-settings: 'ss10' on;
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 135.8%; /* 38.024px */
    }
  }
  .type-big {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 12px;
    background: #ddeaff;
    padding: 18px;

    .project-type {
      color: #5f5f5f;
      font-feature-settings: 'ss10' on;
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: 135.8%; /* 38.024px */
    }

    .project-title {
      color: #1b1b1b;
      font-feature-settings: 'ss10' on;
      font-family: Pretendard;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 135.8%; /* 38.024px */
    }

    .project-desc {
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* 최대 줄 수를 2로 설정 */
      -webkit-box-orient: vertical;
      color: #1b1b1b;
      font-feature-settings: 'ss10' on;
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 135.8%; /* 38.024px */
    }

    .hr{
      margin: 15px 0;
      width: 100%;
      height: 1px;
      background: #1b1b1b;
    }
  }

}

.project-type {
  font-weight: bold;
}

.project-title {
  font-size: 1.2em;
  margin: 10px 0;
}

.project-desc {
  color: #666;
}
</style>
