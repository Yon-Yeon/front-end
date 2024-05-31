<template>
  <div class="auth-router">
    <background class="background"></background>
    <router-view v-slot="{ Component }" class="Viewx">
      <transition :name="dynamicAnimationAssignment">
        <component :is="Component" :goPath="goPath" />
      </transition>
    </router-view>
  </div>

</template>

<script>
import background from '@/pages/auth/components/Background.vue';
export default {
  components: { background },
  data() {
    return {
      goPath: "",
      fromPath: "",
      footerPathList: [
        '/auth/home',
      ],
    };
  },
  computed: {
    dynamicAnimationAssignment() {
      if (this.footerPathList.includes(this.goPath) && this.footerPathList.includes(this.fromPath)) {
        const goPathNum = this.footerPathList.indexOf(this.goPath);
        const fromPathNum = this.footerPathList.indexOf(this.fromPath);
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
.background{
  
}

.Viewx {
  top: 0;
  z-index: 1;
  position: absolute;
  max-height: var(--window-height);
  max-width: var(--window-width);
}

.LEFT-enter-active,
.LEFT-leave-active,
.RIGHT-enter-active,
.RIGHT-leave-active {
  width: 100%;
  position: absolute;
  transition: all 0.3s ease-in-out;
  z-index: 999999999;
}

.LEFT-enter-from {
  left: -100%;
}

.LEFT-enter-to,
.RIGHT-enter-from {
  left: 0%;
}

.RIGHT-enter-from {
  left: 100%;
}

.transitionAnimationOpacity-enter-active,
.transitionAnimationOpacity-leave-active {
  transition: all 0.3s ease-in-out;
}

.transitionAnimationOpacity-enter-from,
.transitionAnimationOpacity-leave-to {
  opacity: 0;
  position: fixed;
  top: 0;
}
</style>
