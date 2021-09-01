<template>
    <div class="task-panel-container">
        <!-- DIV ADICIONAR NOVO -->
        <div class="task-panel" v-if="addTarefa">
            <h5 class="painel-caption">Data</h5>
            <input v-model="propGetData" class="form-input" type="text" disabled ref="add-data"/>
            <h5 class="painel-caption">Título</h5>
            <input class="form-input" type="text" placeholder="TITULO" ref="add-titulo"/>
            <h5 class="painel-caption">Hora</h5>
            <input class="form-input" type="time" placeholder="HORA" ref="add-hora"/>
            <h5 class="painel-caption">Descrição</h5>
            <input class="form-input" type="text" placeholder="DESCRIÇÃO" ref="add-descricao"/>
        </div>

        <!-- DIV EDITAR SELECIONADO -->
        <div class="task-panel" v-if="editTarefa">
            <h5 class="painel-caption">Título</h5>
            <input class="form-input" type="text" placeholder="TITULO" ref="edit-titulo"/>
            <h5 class="painel-caption">Hora</h5>
            <input class="form-input" type="time" placeholder="HORA" ref="edit-hora"/>
            <h5 class="painel-caption">Descrição</h5>
            <input class="form-input" type="text" placeholder="DESCRIÇÃO" ref="edit-descricao"/>
        </div>
        
        <div class="task-panel">
        <!-- BOTOES -->
            <div v-if="dateSelected">
                <div class="task-panel">
                    <div v-if="!isMainBtnEnabled">
                        <button @click="() => { addTask() }" class="btn-verde">adicionar novo</button>
                    </div>

                    <div v-if="isAbleToEdit">
                        <button @click="() => { editTask() }" class="btn-azul">editar selecionado</button>
                        <button @click="() => { delTask() }" class="btn-rosa">excluir</button>
                    </div>
                    
                    <div v-if="isAbleToConfirm">
                        <button @click="() => { confirm() }" class="btn-azul">confirmar</button>
                        <div v-if="isEditing">
                            <button @click="() => { concluir() }" class="btn-verde">Marcar como concluída</button>
                        </div>
                        <button @click="() => { cancel() }" class="btn-rosa">cancelar</button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'TaskPanel',
    data() {
        return {
            addTarefa:0,
            editTarefa:0, 
            delTarefa:0,
            isMainBtnEnabled:false, 
            isAbleToConfirm:false, 
            isEditing: false,
            isAbleToEdit:false,
            
        }
    },
    methods: {
        addTask(){
            this.addTarefa = 1, this.editTarefa = 0, this.delTarefa = 0, this.isMainBtnEnabled = true, this.isAbleToConfirm = true, this.isEditing = false
        },
        editTask(){
            this.addTarefa = 0, this.editTarefa = 1, this.delTarefa = 0, this.isMainBtnEnabled = true, this.isAbleToConfirm = true, this.isEditing = true
        },
        delTask(){
            console.log('deleted')
        },
        cancel(){
            
            this.addTarefa = 0, this.editTarefa = 0, this.delTarefa = 0, this.isMainBtnEnabled = false, this.isAbleToConfirm = false, this.isEditing = false
        },
        confirm(){
            let data = this.$refs['add-data'].value
            let titulo = this.$refs['add-titulo'].value
            let hora = this.$refs['add-hora'].value
            let descricao = this.$refs['add-descricao'].value
            if (data !== '' && titulo !== '' && hora !== ''){
                this.$emit('novatarefa', {data, titulo, hora, descricao})
                this.addTarefa = 0, this.editTarefa = 0, this.delTarefa = 0, this.isMainBtnEnabled = false, this.isAbleToConfirm = false, this.isEditing = false
                return
            }
            console.log('nao preenchido')
            },
        concluir(){
            console.log('done!')
        }
    },
    props:{
        propGetData:{
            type: String,
            default: ''
        },
        dateSelected:{
            type: Boolean,
            default: false
        }
    }
}
</script>
<style >
    .task-panel-container{
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        align-items: center;
        padding:10px;
    }

    .task-panel{
        width:100%;
    }

</style>