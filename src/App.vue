<template>
  <nav class="select_tag">
    <router-link to="/">机房demo</router-link> |
    <router-link to="/threejsdemo">threejs demo</router-link>
  </nav>
  <router-view />
</template>

<style>
.select_tag {
  text-align: center;
}
</style>
