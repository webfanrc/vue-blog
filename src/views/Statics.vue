<template>
  <div class="moreInfo">
    <table>
      <thead>
        <tr>
          <td>user_ip</td>
          <td>view_date</td>
          <td>view_title</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(info, index) in ipInfo.ipList" :key="index">
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
  export default {
    data: function() {
      return {
        fin: false,
        ipInfo: {},
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      async init() {
        let response = await axios.get('/getUserIP');
        this.ipInfo = response.data;

        console.log(this.ipInfo);

        this.fin = true;
      }
    }
  }
</script>
<style lang="less">
</style>

