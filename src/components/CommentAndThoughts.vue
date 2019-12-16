<template>
  <div class="ComponentAndThoughts">
    <div class="messageList" v-if="messageNumber > 0">
      <h2>{{messageNumber}} thoughts to "About"</h2>

      <div v-for="(message, index) in messageList" :key="index" class="messageBox" :id="'#comment-' + message.id">
        <div>
          <p v-if="message.user_website" class="name">
            <a :href="message.user_website" target="_blank">
              {{message.user_name == "" ? 'Anonymous' : message.user_name}}
            </a>
          </p>
          <p v-else class="name">{{message.user_name == "" ? 'Anonymous' : message.user_name}}</p>

          <a class="sendDate" :href="'#comment' + message.id">{{message.date}}</a>
        </div>

        <p class="message">{{message.user_message}}</p>

      </div>
    </div>
    <div class="replyBox">
      <h3>
        Leave a reply
      </h3>
      <p class="usermessage">Comment</p>
      <textarea v-model="user_message" class="user_message"></textarea>
      <p class="username">Name</p><input v-model="user_name"/>
      <p class="useremail">Email</p><input v-model="user_email"/>
      <p class="userwebsite">Website</p><input v-model="user_website"/>
      <div class="controlPannel">
        <button @click="submit" class="send_info" v-show="show_send_button">Post comment</button>
      </div>
      <p>{{clients_message}}</p>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'ComponentAndThoughts',
    props: [
      'groupArea'
    ],
    data: function() {
      return {
        user_name: "",
        user_email: "",
        user_message: "",
        user_website: "",
        clients_message: "",
        show_send_button: true,

        messageNumber: 0,
        messageList: [],
      }
    },
    mounted() {
      this.init();
    },
    methods: {
      async init() {
        this.user_name = "";
        this.user_email = "";
        this.user_message = "";
        this.user_website = "";

        let cookie = JSON.parse(this.getCookie("userCookie"));

        if (cookie != 0) {
          this.user_name = cookie.user_name;
          this.user_email = cookie.user_email;
          this.user_website = cookie.user_website;
        }

        let that = this;
        let respons = await axios.get('/blog/getMessages', {
          params: {
            message_for: that.groupArea,
          }
        });
        this.messageList = respons.data;
        this.messageNumber = this.messageList.length;
      },
      getCookie(name) {
        let arr = document.cookie.split(";");
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].indexOf(`${name}={`) != -1) {
            return arr[i].split("=")[1];
          }
        }
        return 0;
      },
      async submit() {
        this.clients_message = "Sending...";
        let that = this;
        let respons = await axios.get('/blog/sendMessage', {
          params: {
            user_name: that.user_name,
            user_email: that.user_email,
            user_message: that.user_message,
            user_website: that.user_website,
            message_for: that.groupArea,
          }
        });
        let userCookie = {
          user_name: that.user_name,
          user_email: that.user_email,
          user_website: that.user_website,
        };
        document.cookie = "userCookie=" + JSON.stringify(userCookie);
        if (respons.data != 0) {
          this.clients_message = "Send success.";
          this.init();
        } else {
          this.clients_message = "Something went wrong, please contact me though email: xrc_1995@163.com.";
        }
      },
    }
  }
</script>
<style lang="less">
  .ComponentAndThoughts {
    max-width: 720px;
    margin: 40px auto 0;

    border-top: 1px solid #eee;
  }
  .common-box {
    padding: 6px 12px;
    text-transform: uppercase;
    background-color: white;
    border-radius: 3px;
    &:hover {
      cursor: pointer;
    }
  }
  div.messageList {
    h2 {
      margin-top: 28px;
      margin-bottom: 0;
    }
    div.messageBox {
      border: 1px solid #E8E8E8;
      border-bottom: 1px solid #DADADA;
      border-radius: 4px;


      padding: 25px;
      margin-top: 28px;
      p.name {
        font-size: 14px;
        font-weight: bold;
        padding: 0;
        margin: 0;
        a {
          color: #DA4453;
          &:hover {
            opacity: 0.5;
          }
        }
      }
      .sendDate {
        font-size: 14px;
        color: #DA4453;
        &:hover {
          opacity: 0.5;
        }
      }
      p.message {
        overflow-wrap: break-word;
      }
    }
  }
  div.replyBox {
    input {
      color: #666;
      border: 1px solid #E8E8E8;
      border-radius: 3px;
      padding: 3px;
      width: 218px;
      height: 23px;

      font-size: 14px;
    }
    button.send_info {
      display: block;
    }
    textarea.user_message {
      color: #666;
      border: 1px solid #E8E8E8;
      border-radius: 3px;
      width: 100% - 2px;
      height: 115px;
      padding-left: 5px;

      font-size: 14px;
    }

    p.username,
    p.useremail,
    p.usermessage,
    p.userwebsite{
      margin-top: 10px;
      margin-bottom: 5px;
    }
    div.controlPannel {
      margin-top: 15px;
      .send_info {
        .common-box;
      }
    }
  }
</style>