<template>
    <div class="main">
        <div id="login-form">
            <div id="login-logo">
            </div>
            <div class="btn-select btn-login">login</div>
            <div class="btn-select btn-cadastrar">cadastrar</div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                
            }
        },
    }
</script>

<style>
    .main{
        width: 100%;
        height: 100%;
        padding: 10px;
        background-color:gray;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .btn-select{
        padding: 10px;
        margin-bottom: 10px;
        width: 80%;
    }

    .btn-login{
        background-color: rgba(107,179,246,1);
        text-transform: uppercase;
    }

    .btn-cadastrar{
        text-transform: uppercase;
        background-color: rgba(245,88,88,1);
    }
    
    #login-form{
        width: 15%;
        margin:0;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 2px 4px 10px 0px rgba(0,0,0,0.45);
        -webkit-box-shadow: 2px 4px 10px 0px rgba(0,0,0,0.45);
        -moz-box-shadow: 2px 4px 10px 0px rgba(0,0,0,0.45);
        background-color:white;
    }

    #login-logo{
        background-color: rgba(245,88,88,1);
        width: 150px;
        height: 150px;
        margin-bottom: 100px;
        margin-top: 10px;
    }
</style>