<template>
  <div id="home-core">
    <projectSearch></projectSearch>
    <progressingProject></progressingProject>
    <findMe></findMe>
    <sameFavorite></sameFavorite>
    <sameMBTI></sameMBTI>
    <div class="bin"></div>
  </div>
</template>

<script>
import projectSearch from '@/pages/app/pages/home/components/projectSearch.vue';
import progressingProject from '@/pages/app/pages/home/components/progressingProject.vue';
import findMe from '@/pages/app/pages/home/components/findMe.vue';
import sameMBTI from '@/pages/app/pages/home/components/sameMBTI.vue';
import sameFavorite from '@/pages/app/pages/home/components/sameFavorite.vue';

export default {
  components: {
    projectSearch,
    progressingProject, 
    findMe, 
    sameMBTI, 
    sameFavorite
  },
}
</script>

<style lang="scss" scoped>
#home-core{
  background: #FBFBFB;
  width: var(--window-width);
  min-height: var(--window-height);
  .bin{
    margin-bottom: 80px;
  }
}
</style>