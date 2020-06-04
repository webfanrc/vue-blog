<template>
  <div class="blog">
    <!--<h1>-->
      <!--Blog-->
    <!--</h1>-->
    <template v-if="fin">
      <div v-for="(blog, index) in blogInfo" class="blogTag" :key="index">
        <p class="h1" @click="routerToBlogPage(blog.id)">{{ blog.title }}</p>
        <p class="date">{{blog.date}}</p>
      </div>



      <!--<?xml version="1.0" ?>-->
      <!--<rss version="2.0">-->
        <!--<channel>-->
          <!--<title>Ruochen's Space</title>-->
          <!--<link>http://xieruochen.me/</link>-->

          <!--<item v-for="(blog, index) in blogInfo" class="blogTag" :key="index">-->
            <!--<title>{{ blog.title }}</title>-->
            <!--<link class="date">{{'http://xieruochen.me/blogDetail?id=' + blog.id}}</link>-->
          <!--</item>-->
        <!--</channel>-->
      <!--</rss>-->
    </template>

  </div>
</template>

<script>
import service from '../utils/http';
export default {
  name: "blog",
  data: function() {
    return {
      blogInfo: {},
      fin: false,
      showInfo: true,

      messageList: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {

      let response = await service.get('/blog/lists');
      this.blogInfo = response.data;

      this.fin = true;
    },
    routerToBlogPage(id) {
      this.$router.push({ path: "blogDetail", query: { id: id } });
    },
  }
};
</script>
<style lang="less" scoped>
button.showInfo_control {
  border: 1px solid gray;
  border-radius: 5px;
  height: 10px;
}
div.blog {
}
div.blogTag {
  min-height: 90px;

  padding: 16px 0;

  border-bottom: 1px solid #eee;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  &:nth-last-of-type(1) {
    border-bottom-width: 0;
  }
  p.h1 {
    display: inline-block;
    font-size: 26px;
    margin: 0;
    cursor: pointer;
    &:hover {
      color: #4183c4;
    }
  }
  p.date {
    font-size: 14px;
    margin: 0;
  }
}
  div.infoDiv {
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  div#loading {
    width: 100%;
    margin-top: 10px;
    text-align: center;
  }

  div.commentsList {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 100px;
    margin-right: 20px;
    border: 1px solid #eee;
    width: 250px;

    display: none;
    padding: 10px;
    p {
      word-break: break-all;
    }
    p.content {
      line-height: 20px;
    }
  }

  @media screen and (min-width: 1300px) {

    div.commentsList {

      display: block;
    }
  }
</style>
