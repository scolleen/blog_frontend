<template>
  <article>
    <h2>{{ myName }}</h2>
    <div class="intro">this is my first time useing testing</div>
  </article>
</template>

<script>
export default {
  data () {
    return {
      myName: 'yinxiupei'
    }
  }
}
</script>

<style scoped>
.intro {
  font-size: 14px;
  font-weight: bold;
}
</style>
