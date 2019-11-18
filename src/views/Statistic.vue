<template>
  <div class="Statistic">
    <div class="title">
      <h1>Statistic</h1>
    </div>

    <view-table-article :barTableData="articleFormat" v-if="finishCondition.article"></view-table-article>
    <view-table :lineTableData="ipInfoFormat" v-if="finishCondition.userIP"></view-table>

    <p>Your IP: {{userIP}}</p>
  </div>
</template>
<script>
  import axios from 'axios'
  import ViewTable from '../components/ViewTable'
  import ViewTableArticle from '../components/ViewTableArticle'
  export default {
    components: {
      ViewTable,
      ViewTableArticle
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
<style lang="less">
  div.title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>

