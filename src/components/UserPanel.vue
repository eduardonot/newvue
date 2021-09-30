<template lang="">
    <div class="panel-container">
        <div class="panel-logo">
            <img src="./../../public/icons/stanley-icon.png"/>
        </div>
        <div class="panel-buttons">
            <button @click="() => {showSearch()}"><span class="material-icons-outlined">search</span></button>
            <button @click="() => {showSettings()}"><span class="material-icons-outlined">settings</span></button>
            <button @click="() => {showQuestion()}"><span class="material-icons-outlined">quiz</span></button>
            <button @click="() => {showInfo()}"><span class="material-icons-outlined">info</span></button>
        </div>
        <div class="horizontal-separator"></div>

        <!-- PAINEL DE PESQUISA -->
        <div v-if="search" class="painel">
            <h5 class="painel-caption">Digite o título</h5>
            <div class="search-field"><input ref="search-titulo"  class="form-input" type="text" placeholder="TITULO"/></div>
            <h5 class="painel-caption">Intervalo | Data Inicial</h5>
            <div class="search-field"><input ref="search-data-inicial" class="form-input" type="date"/></div>
            <h5 class="painel-caption">Intervalo | Data Final</h5>
            <div class="search-field"><input ref="search-data-final" class="form-input" type="date"/></div>
            <h5 class="painel-caption">Status</h5>
            <div class="search-field dropdown">
                <select ref="status-option" id="status-option" class="form-input">
                    <option disabled hidden value='' selected>SELECIONE</option>
                    <option ref="search-concluido" value="Concluído">Concluído</option>
                    <option ref="search-nao-concluido" value="Não Concluído">Não Concluído</option>
                </select>
            </div>
            <button @click="newSearch" class="btn-select btn-submit">PESQUISAR</button>
        </div>

        <!-- PAINEL DE CONFIGURACOES -->
        <div v-if="settings"  class="painel">
            <div class="profile-pic" ></div>
            <h5 class="painel-caption">Nome de Exibição</h5>
            <div ref="settings-nome" class="search-field"><input class="form-input" type="text" placeholder="NOME"/></div>
            <h5 class="painel-caption">Alterar Senha</h5>
            <div ref="settings-senha-antiga" class="search-field"><input class="form-input" type="password" placeholder="Senha Antiga"/></div>
            <div ref="settings-nova-senha" class="search-field"><input class="form-input" type="password" placeholder="Nova senha"/></div>
            <div ref="settings-repita-senha" class="search-field"><input class="form-input" type="password" placeholder="repita nova senha"/></div>
            <button ref="save" class="btn-select btn-submit">salvar dados</button>
            <button ref="telegram" class="btn-select btn-submit">vincular ao telegram</button>
        </div>

        <!-- PAINEL DE FAQ -->
        <div v-if="question" class="painel">
            <a class="question-btn">como cadastrar tarefas</a>
            <a class="question-btn">como excluir tarefas</a>
            <a class="question-btn">como realizar buscas</a>
        </div>

        <!-- PAINEL DE INFO -->
        <div v-if="info" class="panel-info">
            <div class="info-app-name">
                <h3>Task Manager</h3>
                <p>Ver. 1.0</p>
            </div>
            <div clas="info-dev-name">
                <h3>DESENVOLVEDOR</h3>
                <p>Eduardo Vinicius Lourenço dos Santos</p>
            </div>
            <div class="social">
                <a href="https://github.com/eduardonot"><img src="./../../public/icons/github-logo.png"/></a>
                <a href="mailto:eduardo_not@hotmail.com"><img src="./../../public/icons/email-logo.png"/></a>
                <a href="https://facebook.com/EduardoVLourenco"><img src="./../../public/icons/facebook-logo.png"/></a>
            </div>
            <p>Task Manager - 2021 - ALL RIGHTS RESERVED</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Panel',
    data() {
        return {
            search:0, 
            settings:0, 
            question:0, 
            info:0,
            searchCriteria:{},
        }
    },
    methods:{
        showSearch() {
            this.search=1, this.settings=0, this.question=0, this.info=0 
        },
        showSettings() {
            this.search=0, this.settings=1, this.question=0, this.info=0 
        },
        showQuestion() {
            this.search=0, this.settings=0, this.question=1, this.info=0 
        },
        showInfo() {
            this.search=0, this.settings=0, this.question=0, this.info=1 
        },
        newSearch(){
            this.searchCriteria = {
                title: this.$refs['search-titulo'].value.toLowerCase(),
                initialDate: this.$refs['search-data-inicial'].value,
                finalDate: this.$refs['search-data-final'].value,
                status: this.$refs['status-option'].value
            }
            if(!this.searchCriteria.title || !this.searchCriteria.initialDate || !this.searchCriteria.finalDate || !this.searchCriteria.status){
                return alert('Preencha todos os campos!')
            }
            
            if(new Date(this.searchCriteria.initialDate) > new Date(this.searchCriteria.finalDate)){
                return alert('ATENÇÃO\n\n Intervalo entre Data Inicial e Final não é válido. Favor corrigir.')
            }
            // this.$emit('submitSearch', this.searchCriteria)
        }
    },
    
}
</script>

<style >
    h3{
        font-weight: normal;
        margin: 0px 0px 15px 0px;
        padding:0;
    }


    .panel-container{
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        align-items: center;
        padding:10px;
    }

    .painel{
        width:100% ;
        height:100%;
    }

    .panel-logo{
        min-width: 150px;
        min-height: 150px;
        margin-bottom: 30px;
        margin-top: 10px;
    }

    .panel-logo img{
        max-width: 150px;
        margin:0;
    }

    .panel-buttons{
        width:100%;
        margin:5px;
        padding: 5px 5px 5px 5px;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
    }

    .horizontal-separator{
        width:100%;
        margin:5px 0px 15px 0px;
        border: 0;
        border-top: 1px solid #CCC;
    }

    .painel-caption{
        text-align:left;
        font-weight:300;
    }

    .question-btn{
        width:100%;
        font-size:12px;
        font-weight:400;
        margin:5px;
        padding:10px 20px 10px 20px;
        display:block;
        border: 1px solid rgba(0, 0, 0, 0.5);
        background-color:rgba(0, 0, 0, 0.05)
    }

    .panel-info{
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
    }

    .panel-info h3{
        margin:0;
    }
    .panel-info p{
        font-size:10px;
    }

    .social{
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
    }

    .social > a > img{
        max-width:35px;
    }

    @media (max-width: 1024px) {
        .form-input{
            font-size:12px;
            width:100%;
            height:auto;
            padding:5px 10px 5px 10px;
        }

        .question-btn{
            font-size:10px;
            padding:5px 10px 5px 10px;
        }
    }
</style>
