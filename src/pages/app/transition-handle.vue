<template>
  <div class="page-router">
    <router-view v-slot="{ Component }" class="Viewx">
      <transition :name="dynamicAnimationAssignment">
        <component :is="Component" :goPath="goPath" />
      </transition>
    </router-view>
    <footerbar></footerbar>
  </div>
</template>

<script>
import footerbar from '@/pages/app/components/base-footerbar.vue';

export default {
  components: {footerbar},
  data() {
    return {
      goPath: "",
      fromPath: "",
      footerPathList: [
        '/app/home',
        '/app/myproject',
        '/app/createproject',
        
      ],
    };
  },
  computed: {
    dynamicAnimationAssignment() {
      if (this.footerPathList.includes(this.goPath) && this.footerPathList.includes(this.fromPath)) {
        const goPathNum = this.footerPathList.indexOf(this.goPath);
        const fromPathNum = this.footerPathList.indexOf(this.fromPath);
        console.log(this.goPath, this.fromPath);
        return fromPathNum < goPathNum ? 'RIGHT' : 'LEFT';
      }
      return 'RIGHT';
    },
    dynamicComponent() {
      return this.$route.meta.layout || this.$route.component;
    },
  },
  methods: {
    watchRouteChanges(to, from) {
      this.fromPath = from.fullPath;
      this.goPath = to.fullPath;
      console.log(this.fromPath, this.goPath)
    },
  },
  watch: {
    '$route'(to, from) {
      this.watchRouteChanges(to, from);
    }
  },
  created() {
    this.watchRouteChanges(this.$route, this.$route);
  }
}
</script>

<style lang="scss" scoped>
.Viewx{
  max-height: var(--window-height);
  max-width: var(--window-width);
  overflow: hidden;
  overscroll-behavior-y: none;
  overflow: hidden;
  overscroll-behavior: none;
  overflow-y : auto;
}

.LEFT-enter-active,
.LEFT-leave-active {
  width: 100%;
  position: absolute;
  transition: all 0.5s ease-in-out;
}

.LEFT-enter-from {
  left: -100%;
}

.LEFT-enter-to {
  z-index: 1;
  left: 0%;
}

.LEFT-leave-to {
  z-index: -1;
}

.RIGHT-enter-active,
.RIGHT-leave-active {
  width: 100%;
  position: absolute;
  transition: all 0.5s ease-in-out;
}

.RIGHT-enter-from {
  left: 100%;
}

.RIGHT-enter-to {
  z-index: 1;
  left: 0%;
}

.RIGHT-leave-to {
  z-index: -1;
}

.transitionAnimationOpacity-enter-active,
.transitionAnimationOpacity-leave-active {
  transition: all 15s ease-in-out;
}

.transitionAnimationOpacity-enter-from,
.transitionAnimationOpacity-leave-to {
  opacity: 0;
  position: fixed;
  top: 0;
}
</style>
