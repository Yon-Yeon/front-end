<template>
  <div id="base-profile-core" @click="handleClick">
    <div class="profile">
      <img :src="imageSrc" :width="width" :height="height" :alt="mbti">
      <div :class="mbtiClass">{{ mbti }}</div>
    </div>
    <div class="name" :style="{ width: width + 'px' }">{{ name }}</div>
    <div class="favorite" :style="{ width: width + 'px' }">{{ favorite }}</div>
  </div>
</template>

<script>
import defaultProfile from '@/pages/app/components/assets/default-profile.svg';

export default {
  props: {
    link: {
      type: String,
      default: null
    },
    mbti: {
      type: String,
      validator(value) {
        return ['SJ', 'SP', 'NF', 'NT'].includes(value);
      }
    },
    width: {
      type: [String, Number],
      default: '100'
    },
    height: {
      type: [String, Number],
      default: '100'
    },
    name: {
      type: String
    },
    favorite: {
      type: String
    },
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    imageSrc() {
      return this.link ? this.link : defaultProfile;
    },
    mbtiClass() {
      return this.mbti;
    }
  },
  methods: {
    handleClick() {
      this.$emit('profile-click', this.index);
    }
  }
};
</script>

<style lang="scss" scoped>
#base-profile-core{
  display: inline-block;
  .profile{
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    div{
      transform: translateX(-30px);
      color: #ffffff;
      font-feature-settings: "ss10" on;
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: 135.8%;
      letter-spacing: 1.5px;
      justify-content: center;
      align-items: center;
      padding: 8px;
      border-radius: 12px;
    }
    .SJ {
      background: linear-gradient(151deg, rgba(89, 184, 215, 1) 0%, rgba(34, 90, 170, 1) 100%);
    }
    .SP {
      /* SP 관련 스타일 */
    }
    .NF {
      /* NF 관련 스타일 */
    }
    .NT {
      /* NT 관련 스타일 */
    }
  }
  .name{
    width:200px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    margin-top: 15px;
    color: #1d1d1d;
    font-feature-settings: "ss10" on;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 135.8%;
    letter-spacing: -0.661px;
  }
  .favorite{
    color: #787878;
    font-feature-settings: "ss10" on;
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 135.8%;
    letter-spacing: -0.661px;
  }
}

</style>
