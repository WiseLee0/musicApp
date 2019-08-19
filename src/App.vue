<template>
  <div>
    <m-header></m-header>
    <Tab></Tab>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from 'components/m-header/index'
import Tab from 'components/tab/index'
export default {
  components: {
    MHeader,
    Tab
  }
};
</script>

<style lang="stylus"></style>