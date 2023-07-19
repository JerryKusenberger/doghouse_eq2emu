<template>
  <div class="wrapper bg-slate-100">

    <div class="bg-cyan-950 h-14 w-full mb-8 flex items-center pl-10 text-white">
      <div>
        <NuxtLink to="/" class="hover:underline pr-5 text-gray-400 active:text-white">
          Dashboard
        </NuxtLink>
        <NuxtLink to="/debug" class="hover:underline text-gray-400 active:text-white">
          Debug
        </NuxtLink>
      </div>
    </div>

    <slot />
  </div>
</template>
  
  
<style scoped>
.wrapper {
  -webkit-overflow-scrolling: touch;
  height: 100%;
  height: 100vh;
  overflow: auto;
  width: 100%;
}

.router-link-active {
  @apply text-white font-bold;
}

.router-link-active:hover {
  @apply text-white font-medium;
}
</style>

