<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login </router-link> |
      <router-link to="/calendar">Calendar </router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="container">
        <router-view class="container"/>
    </div>
  </div>
</template>

<style>
    html, body{
        padding: 0 !important;
        margin: 0 !important;
        height: 100% !important;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        padding: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .container{
        width: 100%;
        margin:0;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
