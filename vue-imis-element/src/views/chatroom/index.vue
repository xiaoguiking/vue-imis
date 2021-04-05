<template>
  <div class="chatroom">
    <div class="message-list">
      <ul class="message-ul">
        <li v-for="item of messageList" :key="item.id">
          <span class="message-time">{{ new Date(item.dateTime) }} </span>
          <span class="message-user">{{ item.username }}:</span>
          <p>{{ item.message }}</p>
        </li>
      </ul>
    </div>
    <div class="message">
      <el-input v-model="message" placeholder="输入聊天信息"></el-input>
      <el-button type="primary" @click="handelClickMessage">点击提交</el-button>
    </div>
  </div>
</template>

<script>
let url = "ws:localhost:9999";
const ws = new WebSocket(url);
export default {
  name: "chatroom",
  data() {
    return {
      message: "",
      username: "",
      messageList: [],
    };
  },
  mounted() {
    this.username = localStorage.getItem("username");
    if (!this.username) {
      this.$router.push("/logincopy");
      return;
    }
    ws.addEventListener("open", this.handleOpen, false);
    ws.addEventListener("error", this.handleError, false);
    ws.addEventListener("close", this.handleClose, false);
    ws.addEventListener("message", this.handleMessage, false);
  },
  methods: {
    handelClickMessage() {
      const message = this.message.trim();
      console.log(message, "message");
      if (!this.message.length) {
        this.$message({
          message: "没有信息不能提交",
          type: "warning",
        });
        return;
      }
      ws.send(
        JSON.stringify({
          id: new Date().getTime(),
          username: this.username,
          message: this.message,
          dateTime: new Date().getTime(),
        })
      );
      this.$message({
        message: "提交成功",
        type: "success",
      });
    },
    handleOpen(e) {
      console.log("message open", e);
    },
    handleError() {
      console.log("message error");
    },
    handleClose() {
      console.log("message close");
    },
    handleMessage(e) {
      console.log("msessage send", e.data);
      const msgData = JSON.parse(e.data);
      this.messageList.push(msgData);
      console.log(msgData);
    },
  },
};
</script>

<style lang="less" scoped>
.chatroom {
  width: 600px;

  .message-ul {
    li:nth-child(2n) {
      .message-user {
        color: goldenrod;
      }
      .message-time {
        color: greenyellow;
      }
    }
  }
  .message {
    display: flex;
  }
}
</style>
