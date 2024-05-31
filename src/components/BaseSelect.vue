<!-- BaseSelect.vue -->
<template>
  <div class="base-select">
    <div class="select-label" @click="toggleDropdown">
      {{ selectedOption || placeholder }}
    </div>
    <div v-if="isOpen" class="options">
      <div v-for="option in options" :key="option" @click="selectOption(option)">
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: 'Select an option',
    },
  },
  data() {
    return {
      isOpen: false,
      selectedOption: null,
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isOpen = false;
      this.$emit('input', option);
    },
  },
};
</script>

<style lang="scss" scoped>
.base-select {
  position: relative;
  .select-label {
    margin-top: 14px;
    border-radius: 14px;
    cursor: pointer;
    padding: 11px;
    background-color: #ffffff6b;
    border: 2px solid #ccc5da;

    font-feature-settings: 'ss10' on;
    font-family: Pretendard;
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: 135.8%; /* 38.024px */
    letter-spacing: -0.661px;
    color: rgb(238, 238, 238);

  }
  .options {
    position: absolute;
    background-color: #f8f8f8;
    border: 1px solid #ccc;
    width: 100%;
    z-index: 10;
  }
  .options div {
    padding: 8px;
    cursor: pointer;
    border-bottom: 1px solid #ccc;
    font-feature-settings: 'ss10' on;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 135.8%; /* 38.024px */
    letter-spacing: -0.661px;
  }
  .options div:hover {
    background-color: #f0f0f0;
  }
}
</style>
