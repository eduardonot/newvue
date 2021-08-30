<template>
    <v-app>
        <div class="content">
            <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
            <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
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
    </v-app>
</template>

<style>
    html, body{
        padding: 0;
        margin: 0 ;
        height: 100%;
    }

    #app {
        width: 100%;
        height: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .content{
        background-color: rgba(165, 165, 165, 0.301);
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .container{
        width: 100%;
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
        text-decoration: none;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
</style>
