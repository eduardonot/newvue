<template>
    <div class="main">
        <div id="login-form">
            <div id="login-logo">
            </div>
            <div class="action">
                <div>
                    <form class="form-user" v-if="login">
                        <input class="form-input" type="email" placeholder="EMAIL" ref="login-email"/>
                        <input class="form-input" type="password" placeholder="SENHA" ref="login-senha"/>
                        <button @click="logar()" class="btn-select btn-submit">CONFIRMAR</button>
                        <a @click="() => {login=0, register=1, btnInput=0}">não possui cadastro? clique aqui para se cadastrar.</a>
                    </form>
                    <div v-if="btnInput">
                        <button @click="()=>{ login=1, register=0, btnInput=0 }" class="btn-select btn-submit">LOGIN</button>
                    </div>
                </div>
                <div>
                    <form class="form-user" v-if="register">
                        <input class="form-input" type="text" placeholder="NOME" ref="register-nome"/>
                        <input class="form-input" type="text" placeholder="USUARIO" ref="register-user"/>
                        <input class="form-input" type="email" placeholder="EMAIL" ref="register-email"/>
                        <input class="form-input" type="password" placeholder="SENHA" ref="register-pass"/>
                        <input class="form-input" type="password" placeholder="CONFIRMAR SENHA" ref="register-repass"/>
                        <button class="btn-select btn-submit">CONFIRMAR</button>
                        <a @click="() => {login=1, register=0, btnInput=0}">já é cadastrado? clique aqui para entrar.</a>
                    </form>
                    <div v-if="btnInput">
                        <button @click="()=>{ login=0, register=1, btnInput=0}" class="btn-select btn-cadastrar">CADASTRAR</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Login',
        data() {
            return {
                login: 0,
                register: 0,
                btnInput: 1,
            }
        },
        methods: {
            logar () {
                if (this.$refs['login-email'].value === `teste@teste.com` && this.$refs['login-senha'].value === `123`) {
                    this.$router.push('/dashboard')
                }
                
            }
        }
    }
</script>

<style>
    a{
        font-size: 10px;
        font-weight:700;
        text-decoration:none;
        text-align:center;
        text-transform:uppercase;
        letter-spacing: -0.1px;
        margin:5px;
        padding: 0px;
    }

    .form-input{
        width:100%;
        height:auto;
        border:solid 1px #eeeeee;
        margin-bottom:6px;
        padding:10px 20px 10px 20px;
        background-color:white;
    }

    .form-input::placeholder {
        text-transform:uppercase;
    }
    .form-input::-webkit-input-placeholder{
        text-transform:uppercase;
    } 
    
    .form-input::-moz-placeholder{
        text-transform:uppercase;
    }

    .main{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
    }

    .btn-select{
        padding: 10px;
        margin-bottom: 10px;
        width: 100%;
        color: white;
    }

    .btn-submit{
        background-color: rgba(107,179,246,1);
        text-transform: uppercase;
    }

    .btn-cadastrar{
        text-transform: uppercase;
        background-color: rgba(245,88,88,1);
    }

    .action{
        width:100%;
    }
    
    #login-form{
        width: 240px;
        margin:0;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 1px 1px 10px 0px rgba(0,0,0,0.45);
        -webkit-box-shadow: 1px 1px 10px 0px rgba(0,0,0,0.45);
        -moz-box-shadow: 1px 1px 10px 0px rgba(0,0,0,0.45);
    }

    #login-logo{
        background-color: rgba(245,88,88,1);
        width: 150px;
        height: 150px;
        margin-bottom: 50px;
        margin-top: 10px;
    }
    @media (max-width: 480px) {
        a{
            font-size: 12px;
        }
       #login-form{
           width: 100%;
           height: 100%;
       }
    }

    @media (max-width: 768px) {
        a{
            font-size: 11px;
        }
       #login-form{
           width: 100%;
           height: 100%;
       }
    }
</style>