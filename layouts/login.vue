<template>
  <div class="page-enter-active page-leave-active">
    <Nuxt />
  </div>
</template>

<style>
.bounce-enter-active {
  transform-origin: top;
  animation: bounce-in 0.8s;
}

.bounce-leave-active {
  transform-origin: top;
  animation: bounce-out 0.5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(0);
  }
}
</style>
