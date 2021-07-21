<template>
  <div class="about">
    <h1>This is an about page11</h1>
    <h2>{{num|toChinesNum}}</h2>
    <h3>{{date|dateFormat('yyyy-MM-dd')}}</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 555,
      date:new Date()
    }
  },
}
</script>
