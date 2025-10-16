<template>
  <div>
    <div class="fade-in">FadeIn 애니메이션</div>
    <div class="slide-in">SlideIn 애니메이션</div>
    <div class="pulse">Pulse 애니메이션</div>
  </div>
</template>

<style lang="scss" scoped>
.fade-in { animation: fadeIn 3s ease-in-out; }
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.slide-in { animation: slideIn 2s ease-out; }
@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.pulse { animation: pulse 2s infinite ease-in-out; }
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
</style>
