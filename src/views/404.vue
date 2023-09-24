<template>
  <div class="page">
    <h1>404</h1>
    <p>Page not found</p>
    <br />
    <p>{{ time }}秒后将自动为您返回上一页</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: 3,
    };
  },
  methods: {
    countDown() {
      this.time--;
      if (this.time === 0) {
        window.history.go(-1);
      }
    },
  },
  mounted() {
    setInterval(this.countDown, 1000);
  },
};
</script>

<style lang="less" scoped>
.page {
  text-align: center;
  padding: 100px 0;
  h1 {
    font-size: 100px;
    font-weight: 700;
    margin: 0;
  }
  p {
    font-size: 20px;
    margin: 0;
  }
}
</style>
