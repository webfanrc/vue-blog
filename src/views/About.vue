<template>
  <div class="about">
    <h1>About</h1>
    <p>
      Had been a front-end web developer for about two years in Bitmain, I am now having great passion of learning border aspects and want to become more influential. In the future, I want to build my own web application the same as notion or transfix, using the most advanced technology and make people work more effectively.
    </p>
    <h2>
      Timeline (in 2019)
    </h2>
    <ul>
      <li>
        2019.2 - 2019.5: TOFEL (85 -> 90 -> 95);
      </li>
      <li>
        2019.6 - 2019.9: PAT (preparing);
      </li>
    </ul>
    <h2>
      Contact me
    </h2>
    <p class="username">Your name: </p><input v-model="user_name"/>
    <p class="useremail">Your email: </p><input v-model="user_email">
    <p class="usermessage">Your message:</p>
    <textarea v-model="user_message" class="user_message"></textarea>
    <button @click="submit" class="send_info" v-show="show_send_button">Send</button>
    <p>{{clients_message}}</p>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data: function() {
      return {
        user_name: "",
        user_email: "",
        user_message: "",
        clients_message: "",
        show_send_button: true,
      }
    },
    methods: {
      async submit() {
        // this.show_send_button = false;
        this.clients_message = "Sending...";
        let that = this;
        // let respons = await axios.post('/sendMessage', {
        //   params: {
        //     user_name: that.user_name,
        //     user_email: that.user_email,
        //     user_message: that.user_message,
        //   }
        // });
        let respons = await axios.get('/blog/sendMessage', {
          params: {
            user_name: that.user_name,
            user_email: that.user_email,
            user_message: that.user_message,
          }
        });
        if (respons.status == 200) {
          this.clients_message = "Send success.";
        } else {
          this.clients_message = "Something went wrong, please contact me though email: xrc_1995@163.com.";
        }
      }
    }
  }
</script>
<style lang="less">
  div.about {
    margin-bottom: 15px;
    p.username,
    p.useremail,
    p.usermessage {
      margin-top: 10px;
      margin-bottom: 5px;
    }
    button.send_info {
      display: block;
    }
    textarea.user_message {
      width: 300px;
      height: 115px;
    }
  }
</style>

