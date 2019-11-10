<template>
  <div class="blog">

    <div v-if="fin" v-show="showInfo" class="infoDiv">
      <!--<button @click="showInfo = false" id="showInfo_control">-->
      <!--Dismiss-->
      <!--</button>-->
      <ul>
        <li>yourIP: {{blogInfo.yourIP}}</li>
      </ul>
      <a @click="routerToMoreInfo()">More Info</a>
    </div>

    <div v-for="(blog, index) in blogInfo.blogList" class="blogTag" :key="index" v-if="fin">
      <p class="h1" @click="routerToBlogPage(blog.title)">{{ blog.title }}</p>
      <p class="h2" v-html="blog.blog_brief"></p>
      <p class="readMore" @click="routerToBlogPage(blog.title)">Read More</p>
    </div>

    <div v-if="!fin">
      Loading...
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "blog",
  data: function() {
    return {
      blogInfo: {},
      fin: false,
      showInfo: true,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      let response = await axios.get('/blog');
      this.blogInfo = response.data;
      this.blogInfo.blogList.forEach(function(ele) {
        ele.blog_brief = ele.content.split('</p>')[0];
      });

      this.fin = true;
    },
    routerToBlogPage(title) {
      this.ipAddress(title);
      this.$router.push({ path: "blogDetail", query: { title: title } });
    },
    routerToMoreInfo() {
      this.$router.push({ path: "blogInfo" });
    },
    async ipAddress(title) {
      let that = this;
      let response = await axios.get('/blog/ipAddress', {
        params: {
          user_ip: that.blogInfo.yourIP,
          view_title: title,
        }
      })
    }
  }
};
</script>
<style lang="less">
button.showInfo_control {
  border: 1px solid gray;
  border-radius: 5px;
  height: 10px;
}
div.blog {
}
div.blogTag {
  min-height: 100px;

  padding: 36px 0;

  border-bottom: 1px solid #eee;
  &:nth-last-of-type(1) {
    border-bottom-width: 0;
  }
  p.h1 {
    display: inline-block;
    font-size: 30px;
    margin: 0;
    cursor: pointer;
    &:hover {
      color: #4183c4;
    }
  }
  p.h2 {
    font-size: 18px;
    margin: 15px 0 0 0;
  }
  p.readMore {
    display: inline-block;
    font-size: 15px;
    margin: 15px 0 0 0;
    cursor: pointer;
    &:hover {
      color: #4183c4;
    }
  }
}
  div.infoDiv {
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
