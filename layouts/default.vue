<template>
    <div class="wrapper">
        <slot />
    </div>
  </template>
  
  
  <style scoped>
  .wrapper {
    -webkit-overflow-scrolling: touch;
    height: 100%;
    overflow: auto;
    width: 100%;
  }
  </style>
  