<template>
  <div id="myproject-core">
    <div class="page-title">프로젝트 만들기</div>
    <div class="make-form">
      <base-input
        InputTitle="닉네임"
        InputPlaceholder="닉네임 입력"
        InputType="text"
        :InputModel="inputValues"
        ColorType="default"
        @update:InputModel="updateInputValues"
        @focus="handleFocus"
        @blur="handleBlur"
        class="input-box"
      ></base-input>

      <base-input
        InputTitle="닉네임"
        InputPlaceholder="닉네임 입력"
        InputType="text"
        FieldType="textarea"
        :InputModel="inputValues"
        ColorType="default"
        @update:InputModel="updateInputValues"
        @focus="handleFocus"
        @blur="handleBlur"
        class="input-box"
      ></base-input>

      <div class="invite-people-core">
        <div class="title">팀원 초대</div>
        <div class="group">
          <baseProfile
            v-for="(data, index) in invitedPeople"
            :key="index"
            :link="data.link"
            :name="data.name"
            :index="index"
            height="50"
            width="50"
            @profile-click="handleProfileClick"
          ></baseProfile>
          <div class="invite-people" @click="showModal = true">
            <img src="@/pages/app/pages/create/assets/addPeople.svg" alt="">
          </div>
        </div>
      </div>

      <div class="project-group">
        <base-input
          InputTitle="프로젝트 사용 링크 1"
          InputPlaceholder="프로젝트 링크를 입력하세요."
          InputType="text"
          :InputModel="inputValues"
          ColorType="default"
          @update:InputModel="updateInputValues"
          @focus="handleFocus"
          @blur="handleBlur"
          class="input-box"
        ></base-input>

        <base-input
          InputTitle="프로젝트 사용 링크 2"
          InputPlaceholder="프로젝트 링크를 입력하세요."
          InputType="text"
          :InputModel="inputValues"
          ColorType="default"
          @update:InputModel="updateInputValues"
          @focus="handleFocus"
          @blur="handleBlur"
          class="input-box"
        ></base-input>

        <base-input
          InputTitle="프로젝트 사용 링크 3"
          InputPlaceholder="프로젝트 링크를 입력하세요."
          InputType="text"
          :InputModel="inputValues"
          ColorType="default"
          @update:InputModel="updateInputValues"
          @focus="handleFocus"
          @blur="handleBlur"
          class="input-box"
        ></base-input>

        <div class="button-group">

          <baseButton mode="main" class="first">
            <img src="@/pages/app/pages/create/assets/create.svg" alt="">
          </baseButton>

        </div>
      </div>
    </div>
    <baseModal :isVisible="showModal" @close="showModal = false">
      <div class="invite-modal">
        <div class="title">팀원 초대하기</div>
        <base-input
          InputTitle="닉네임"
          InputPlaceholder="닉네임 입력"
          InputType="text"
          :InputModel="inputValues"
          ColorType="default"
          @update:InputModel="updateInputValues"
          @focus="handleFocus"
          @blur="handleBlur"
          class="input-box"
        ></base-input>
        <div class="button-group">
          <baseButton mode="main" class="first">초대하기</baseButton>
          <baseButton mode="white" @click="showModal = false">닫기</baseButton>
        </div>
      </div>
    </baseModal>
  </div>
</template>

<script>
import baseInput from '@/components/BaseInput.vue';
import baseProfile from '@/pages/app/components/base-profile.vue';
import baseModal from '@/components/BaseModal.vue';
import baseButton from '@/components/BaseButton.vue';

export default {
  components: {baseInput, baseProfile, baseModal, baseButton},
  data() {
    return {
      showModal: false,
      inputValues: '',  // 초기화된 inputValues 값
      invitedPeople: [
        {
          link: null,
          name: '바나나'
        },
        {
          link: null,
          name: '홍길동'
        }
      ]
    };
  },
  methods: {
    updateInputValues(value) {
      // this.inputValues = value;
    },
    handleFocus() {
      // 포커스 처리
    },
    handleBlur() {
      // 블러 처리
    },
    handleProfileClick(index) {
      console.log(index + '번째 프로필이 클릭되었습니다.');
      this.invitedPeople.splice(index, 1);
    }
  }
};
</script>


<style lang="scss" scoped>
#myproject-core{
  background: #FBFBFB;
  width: var(--window-width);
  min-height: var(--window-height);
  .make-form{
    width: calc(100% - 50px);
    margin: 0 25px;
  }
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

  .invite-people-core{
    .title{
      margin-bottom: 15px;
      color: #191919;
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.52px;
      text-align: left;
    }
    .group{
      display: flex;
    }
    .invite-people{
      display: inline-block;
    }
  }

  .projetc-group{
    div{
      display: flex;
      justify-content: center;
    }
  }

  .invite-modal{
    z-index: 999;
    .title{
      color: #1d1d1d;
      font-feature-settings: 'ss10' on;
      font-family: Pretendard;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 135.8%; /* 38.024px */
      letter-spacing: -0.661px;
      margin-bottom: 30px;
    }
    .button-group{
      margin-top: 25px;
      .first{
        margin-bottom: 12px;
      }
    }
  }
}
</style>