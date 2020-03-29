<template>
  <div class="Statistic">
    <div class="title">
      <h1>Statistic</h1>
    </div>

    <new-table-article></new-table-article>
    <new-table-ip></new-table-ip>

  </div>
</template>
<script>
  import axios from 'axios'
  import LoadingComponent from '../components/LoadingComponent'
  import ErrorComponent from '../components/ErrorComponent'
  export default {
    components: {
      'NewTableArticle': ()=> ({
        component: import('../components/NewTableArticle'),
        loading: LoadingComponent,
        error: ErrorComponent,
        delay: 0,
        timeout: 30000,
      }),
      'NewTableIp': ()=> ({
        component: import('../components/NewTableIp'),
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

