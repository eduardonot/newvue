<template>
    <div>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/login">Login </router-link> |
            <router-link to="/calendar">Calendar </router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <div id="app">
            <div class="container">
                <router-view/>
            </div>
        </div>
    </div>
    
</template>

<style>
    html, body{
        padding: 0;
        margin: 0 ;
        height: 100%;
        background-color:pink;
    }

    #app {
        width: 100%;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        background-color:blue;
    }

    .container{
        width: 100%;
        background-color:red;
        margin:0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
