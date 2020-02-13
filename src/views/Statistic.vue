<template>
  <div class="Statistic">
    <div class="title">
      <h1>Statistic</h1>
    </div>

    <new-table-article :barTableData="articleFormat"></new-table-article>
    <new-table-ip :lineTableData="ipInfoFormat"></new-table-ip>

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
      }),
      'NewTableIp': ()=> ({
        component: import('../components/NewTableIp'),
        loading: LoadingComponent,
      }),
    },
    data: function() {
      return {
        fin: false,
        ipInfoFormat: [],
        articleFormat: [],

        finishCondition: {
          article: false,
          userIP: false,
        },
        userIP: "",
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        let that = this;
        axios.get('/blog/getArticleFormat').then(function(response) {
          that.articleFormat = response.data.articleListFormat;
          that.finishCondition.article = true;
        });

        axios.get('/blog/getUserIPFormat').then(function(response) {
          that.ipInfoFormat = response.data.ipListFormat;
          that.finishCondition.userIP = true;
        });

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

