<template>
    <div class="login-popup" v-if="showLogin">
      <div class="login-content">
        <form class="form" autocomplete="off" @submit.prevent="handleLogin">
          <div class="control">
            <h1>Sign In</h1>
          </div>
          <div class="control block-cube block-input">
            <input type="text" name="username" placeholder="Username" v-model="username" required />
            <div class="bg-top"><div class="bg-inner"></div></div>
            <div class="bg-right"><div class="bg-inner"></div></div>
            <div class="bg"><div class="bg-inner"></div></div>
          </div>
          <div class="control block-cube block-input">
            <input type="password" name="password" placeholder="Password" v-model="password" required />
            <div class="bg-top"><div class="bg-inner"></div></div>
            <div class="bg-right"><div class="bg-inner"></div></div>
            <div class="bg"><div class="bg-inner"></div></div>
          </div>
          <button class="btn block-cube block-cube-hover" type="submit">
            <div class="bg-top"><div class="bg-inner"></div></div>
            <div class="bg-right"><div class="bg-inner"></div></div>
            <div class="bg"><div class="bg-inner"></div></div>
            <div class="text">Log In</div>
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      showLogin: Boolean
    },
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      handleLogin() {
        alert(`Logged in as ${this.username}`);
        this.username = '';
        this.password = '';
        this.$emit('close-login');
      }
    }
  };
  </script>
  
  <style scoped>
  *, ::after, ::before {
    box-sizing: border-box;
  }
  
  body {
    background-color: #212121;
    color: #fff;
    font-family: monospace, serif;
    letter-spacing: 0.05em;
  }
  
  h1 {
    font-size: 23px;
  }
  
  .login-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .login-content {
    background-color: #f0eaea;
    padding: 64px 15px 24px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
  }
  
  .form {
    display: flex;
    flex-direction: column;
  }
  
  .control {
    margin-bottom: 24px;
  }
  
  .block-cube {
    position: relative;
    overflow: hidden;
  }
  
  .block-cube.block-input input {
    width: 100%;
    padding: 14px 16px;
    border: 0;
    background: transparent;
    color: #1b1343;
    font-family: monospace, serif;
    letter-spacing: 0.05em;
    font-size: 16px;
  }
  
  .bg-top,
  .bg-right,
  .bg,
  .bg-inner {
    position: absolute;
  }
  
  .bg-top {
    top: -100%;
    left: 5px;
    right: -5px;
    height: 10px;
    background: rgb(9, 36, 0);
    background: red;
    transform: skew(-45deg, 0);
    transition: top 0.3s ease-out;
  }
  
  .bg-right {
    top: -5px;
    left: 100%;
    bottom: 5px;
    width: 10px;
    background: rgb(16, 17, 17);
    transform: skew(0, -45deg);
    z-index: 0;
  }
  
  .bg {
    top: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(11, 36, 0);
    background: linear-gradient(90deg, rgb(2, 36, 0) 0%, rgb(121, 84, 9) 37%, rgba(0,212,255,1 94%));
    transition: top 0.3s ease-out;
  }
  
  .bg-inner {
    position: absolute;
    left: 2px;
    top: 2px;
    right: 2px;
    bottom: 2px;
    background: #212121;
    transition: all 0.2s ease-in-out;
  }
  
  .block-cube-hover .bg-top {
    top: 0;
  }
  
  .block-cube-hover .bg-right {
    right: 0;
  }
  
  .block-cube-hover .bg {
    top: 0;
  }
  
  .btn {
    position: relative;
    display: block;
    width: 100%;
    padding: 14px 16px;
    background: transparent;
    border: 0;
    color: #fff;
    letter-spacing: 0.1em;
    font-weight: bold;
    font-family: monospace;
    font-size: 16px;
    cursor: pointer;
  }
  
  .btn .text {
    position: relative;
    z-index: 2;
  }
  
  .btn:hover {
    background-color: transparent;
  }
  
  .btn:hover .bg-top {
    top: 0;
  }
  
  .btn:hover .bg-right {
    right: 0;
  }
  
  .btn:hover .bg {
    top: 0;
  }
  
  .credits {
    position: fixed;
    left: 0;
    bottom: 0;
    padding: 15px;
    width: 100%;
    z-index: 111;
    text-align: center;
  }
  
  .credits a {
    color: #fff;
    font-size: 11px;
    text-decoration: none;
    opacity: 0.6;
  }
  
  .credits a:hover {
    opacity: 1;
  }
  </style>
  