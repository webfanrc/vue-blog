<template>
  <div class="Statistic">
    <div class="title">
      <h1>Statistic</h1>
    </div>

    <table-article></table-article>
    <table-ip></table-ip>
    <table-pv></table-pv>

  </div>
</template>
<script>
  import axios from 'axios'
  import LoadingComponent from '../components/LoadingComponent'
  import ErrorComponent from '../components/ErrorComponent'
  export default {
    components: {
      'TableArticle': ()=> ({
        component: import('../components/TableArticle'),
        loading: LoadingComponent,
        error: ErrorComponent,
        delay: 0,
        timeout: 30000,
      }),
      'TableIp': ()=> ({
        component: import('../components/TableIp'),
        loading: LoadingComponent,
        error: ErrorComponent,
        delay: 0,
        timeout: 30000,
      }),
      'TablePv': ()=> ({
        component: import('../components/TablePv'),
        loading: LoadingComponent,
        error: ErrorComponent,
        delay: 0,
        timeout: 30000,
      }),
    },
    data: function() {
      return {
      }
    },
    mounted() {
    },
    methods: {
    }
  }
</script>
<style lang="less" scoped>
  div.title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>

