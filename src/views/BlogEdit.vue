<template>
  <div class="blogEdit" v-if="finish">
    <textarea v-model="blogData.content">
    </textarea>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data: function() {
      return {
        blog_id: this.$route.query.id,
        blogData: {},
        finish: false,
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        let that = this;
        axios.get(`/blog/detail?id=${this.blog_id}`)
          .then(function (response) {
            that.blogData = response.data;
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
            that.finish = true;
          });
      },
    }
  }
</script>