<template>
    <div class="content">
        <div id="app">
            <div class="container">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<style>
    html, body{
        font-family: 'Roboto', sans-serif;
        padding: 0;
        margin: 0 ;
        height: 100%;
        overflow:hidden !important;
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
        height: 100%;
        margin:0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
