<template>
  <div :class="colorClass">
    <div class="input-title">{{ InputTitle }}</div>
    <input 
      v-if="this.FieldType == 'input'"
      :type="InputType" 
      :placeholder="InputPlaceholder" 
      :value="InputModel"
      @input="updateInputModel($event.target.value)"
      @focus="$emit('focus')"
      @blur="$emit('blur')" 
    >
    <textarea 
      v-if="this.FieldType == 'textarea'"
      :type="InputType" 
      :placeholder="InputPlaceholder" 
      :value="InputModel"
      @input="updateInputModel($event.target.value)"
      @focus="$emit('focus')"
      @blur="$emit('blur')" 
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    InputTitle: String,
    InputPlaceholder: String,
    InputType: String,
    InputModel: String,
    FieldType: {
      default: 'input',
      type: String
    },
    ColorType: {
      type: String,
      default: 'default',
      validator: function (value) {
        return ['default', 'signup'].includes(value);
      }
    }
  },
  computed: {
    colorClass() {
      return {
        'default-theme': this.ColorType === 'default',
        'signup-theme': this.ColorType === 'signup'
      };
    }
  },
  methods: {
    updateInputModel(value) {
      this.$emit('update:InputModel', value);
    }
  }
}
</script>

<style lang="scss" scoped>

.default-theme {
  --primary-color: #FF5500;
  --border-color: #E1E2E4;
  --text-color: #292A2D;
  --placeholder-color: #C2C4C8;
  --input-title-color: #70737C;
}

.signup-theme {
  --primary-color: #a2ff1f;
  --border-color: #E1E2E4;
  --text-color: #ffffff;
  --placeholder-color: #C2C4C8;
  --input-title-color: #c5c5c5;
}

.input-title {
  text-align: left;
  color: var(--input-title-color);
  font-feature-settings: 'ss10' on;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 142.9%; /* 20.006px */
  letter-spacing: 0.203px;
}

input {
  width: 100%;
  -webkit-appearance: none;
  -webkit-border-radius: 0;
  appearance: none;
  border-radius: 0;
  padding: 8px 0;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid var(--border-color);
  transition: 0.25s border ease-in-out;
  color: var(--text-color);
  font-feature-settings: 'ss10' on;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.091px;

  &:focus {
    outline: 0;
    border-bottom-color: var(--primary-color);
    border-bottom: 1.5px solid var(--primary-color);
  }

  &::placeholder {
    color: var(--placeholder-color);
    font-feature-settings: 'ss10' on;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.091px;
  }
}

textarea {
  width: calc(100% - 16px);
  resize: none;
  -webkit-appearance: none;
  -webkit-border-radius: 0;
  appearance: none;
  border-radius: 8px;
  padding: 8px;
  background-color: transparent;
  border: 1px solid var(--border-color);
  transition: 0.25s border ease-in-out;
  color: var(--text-color);
  font-feature-settings: 'ss10' on;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.091px;

  &:focus {
    outline: 0;
    border-color: var(--primary-color);
    border: 1.5px solid var(--primary-color);
  }

  &::placeholder {
    color: var(--placeholder-color);
    font-feature-settings: 'ss10' on;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.091px;
  }
}
</style>
