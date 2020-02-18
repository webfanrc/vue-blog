<template>
  <div class="Statistic">
    <div class="title">
      <h1>Statistic</h1>
    </div>

    <new-table-article></new-table-article>
    <new-table-ip></new-table-ip>

    <p>Your IP: {{userIP}}</p>
  </div>
</template>
<script>
  import axios from 'axios'
  import LoadingComponent from '../components/LoadingComponent'
  export default {
    components: {
      'NewTableArticle': ()=> ({
        component: import('../components/NewTableArticle'),
        loading: LoadingComponent,
        delay: 200,
      }),
      'NewTableIp': ()=> ({
        component: import('../components/NewTableIp'),
        loading: LoadingComponent,
        delay: 200,
      }),
    },
    data: function() {
      return {
        fin: false,
        ipInfoFormat: [],
        articleFormat: [],
        userIP: "",
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        let that = this;

        axios.get('/blog/getUserIP').then(function(response) {
          that.userIP = response.data.userIP;
        })
      }
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

