<template>
  <div class="Statics" v-if="fin">

    <view-table :lineTableData="ipInfoFormat"></view-table>

    <button @click="showRawData = true" v-if="showRawData == false">Show raw data</button>
    <button @click="showRawData = false" v-if="showRawData == true">Hide raw data</button>
    <table v-if="showRawData">
      <thead>
        <tr>
          <td>user_ip</td>
          <td>view_date</td>
          <td>view_title</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(info, index) in ipInfo" :key="index">
          <td>{{info.user_ip}}</td>
          <td>{{info.view_date}}</td>
          <td>{{info.view_title}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import axios from 'axios'
  import ViewTable from '../components/ViewTable'
  export default {
    components: {
      ViewTable
    },
    data: function() {
      return {
        fin: false,
        ipInfo: [],
        ipInfoFormat: [],
        showRawData: false,
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      async init() {
        let response = await axios.get('/blog/getUserIP');
        this.ipInfo = response.data.ipList;

        response = await axios.get('/blog/getUserIPFormat');
        this.ipInfoFormat = response.data.ipListFormat;

        console.log(this.ipInfo);
        console.log(this.ipInfoFormat);

        this.fin = true;
      }
    }
  }
</script>
<style lang="less">
</style>

