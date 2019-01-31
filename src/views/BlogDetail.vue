<template>
  <div class="blogDetail">
    <h1>{{ blogTitle }}</h1>
  </div>
</template>
<script>
export default {
  name: "blogDetail",
  data: function() {
    return {
      blogTitle: this.$route.query.title
    };
  },
  mounted: function() {
    this.init();
  },
  methods: {
    init() {
      console.log(this.blogTitle);
    }
  }
};
</script>
