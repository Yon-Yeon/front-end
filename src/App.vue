<template>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css">
  <link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Taviraj:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200..900&family=Taviraj:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
  <router-view class="core-viewer"></router-view>
  <splashScreen></splashScreen>
</template>

<script>


export default {
  mounted() {
    this.$nextTick(() => {
      const { innerWidth: windowWidth, innerHeight: windowHeight } = window;

      document.documentElement.style.setProperty('--window-width', `${windowWidth}px`);
      document.documentElement.style.setProperty('--window-height', `${windowHeight}px`);

      if (windowWidth === 0 || windowHeight === 0) {
        location.reload();
      }
    });
  }
}
</script>

<style>
input, textarea {
  appearance: none; 
  border-radius: 0; 
  -webkit-appearance: none; 
  -webkit-border-radius: 0; 
}

select { 
  appearance: none; 
  -moz-appearance: none; 
  -webkit-appearance: none; 
}

select::-ms-expand {
  display: none; 
}

html, body {
  position: fixed;
  background: #FFF;
}

.core-viewer {
  width: 100vw;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}

#app {
  -webkit-tap-highlight-color: transparent;
  font-family: Pretendard, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#viewport {
  padding-top: 48px;
}

::-webkit-scrollbar {
  display: none;
}

:root {
  --sat: env(safe-area-inset-top);
  --sar: env(safe-area-inset-right);
  --sab: env(safe-area-inset-bottom);
  --sal: env(safe-area-inset-left);
}

* {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  user-select: none;
  -webkit-touch-callout: none;
}
</style>
