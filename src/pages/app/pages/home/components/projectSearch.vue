<template>
  <div id="project-search-core">
    <div class="search-container">
      <img src="@/pages/app/pages/home/assets/projectsearch/search.svg">
      <input type="text" class="search-input" placeholder="원하시는 프로젝트를 검색해보세요!">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectSearchCore'
}
</script>

<style lang="scss" scoped>
#project-search-core{
  width: 100%;
  .search-container {
    margin: 30px 25px 0 25px;
    display: flex;
    align-items: center;
    border-radius: 12px;
    background: #F0F0F0;
    padding: 15px;
  } 
}
.search-icon {
  margin-right: 10px;
}

.search-input {
  border: none;
  outline: none;
  flex: 1;
  margin-left: 12px;
  background: none;
  color: #1d1d1d;
  font-feature-settings: 'ss10' on;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 135.8%; /* 38.024px */
  letter-spacing: -0.661px;
}
</style>
