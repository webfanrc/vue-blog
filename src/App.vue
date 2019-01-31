<template>
  <div id="app">
    <div id="header_nav">
      <div id="header">
        <div class="imgContainer">
          <img src="./assets/jekyll-logo.png" />
        </div>
        <div class="description">
          <p class="h1">Xie Ruochen</p>
          <p class="h2">Aiming for Modern Web Development</p>
        </div>
      </div>
      <div id="nav">
        <router-link to="/">Blog</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/experience">Experience</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 720px;
  margin: 0 auto;
}
#header_nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  #header {
    display: flex;
    div.imgContainer {
      border-radius: 5px;
      width: 79px;
      height: 79px;

      overflow: hidden;
    }
    div.description {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 10px;
      p {
        text-align: left;
        margin: 0;
      }
      p.h1 {
        font-size: 28px;
      }
      p.h2 {
        font-size: 16px;
      }
    }
  }
  #nav {
    display: flex;
    align-items: center;
    a {
      display: inline-block;
      text-decoration: none;
      color: black;
      margin-left: 10px;
      &.router-link-exact-active {
        color: #4183c4;
      }
    }
    a:hover {
      color: #4183c4;
    }
  }
}
</style>
