<template>
    <div class="task-panel-container">
        <!-- DIV ADICIONAR NOVO -->
        <div class="task-panel" v-if="addTarefa">
            <h5 class="painel-caption">Data</h5>
            <input v-model="inputDateStringField" class="form-input" type="text" disabled ref="add-data"/>
            <h5 class="painel-caption">Título</h5>
            <input class="form-input" maxlength="40" type="text" placeholder="TITULO" ref="add-titulo"/>
            <h5 class="painel-caption">Hora</h5>
            <input class="form-input" type="time" placeholder="HORA" ref="add-hora"/>
            <h5 class="painel-caption">Descrição</h5>
            <input class="form-input" maxlength="120" type="text" placeholder="DESCRIÇÃO" ref="add-descricao"/>
        </div>

        <!-- DIV EDITAR SELECIONADO -->
        <div class="task-panel" v-if="editTarefa">
            <h5 class="painel-caption">Título</h5>
            <input class="form-input" maxlength="40" type="text" placeholder="TITULO" ref="edit-titulo"/>
            <h5 class="painel-caption">Hora</h5>
            <input class="form-input" type="time" placeholder="HORA" ref="edit-hora"/>
            <h5 class="painel-caption">Descrição</h5>
            <input class="form-input" maxlength="120" type="text" placeholder="DESCRIÇÃO" ref="edit-descricao"/>
        </div>
        
        <div class="task-panel">
        <!-- BOTOES -->
            <div>
            <!-- TODO ADICIONAR -->
                <button v-if="showAddTaskBtn" @click="() => { addTask() }" class="btn-verde">adicionar novo</button>
                <button v-if="showConfirmAddTaskBtn" @click="() => { confirmAdd() }" class="btn-azul">confirmar</button>
                <button v-if="showCancelBtn" @click="() => { cancel() }" class="btn-rosa">cancelar</button>
            <!-- TODO EDITAR -->
                <button v-if="showEditTaskBtn" @click="() => { editTask() }" class="btn-azul">editar selecionado</button>
                <button v-if="showDelTaskBtn" @click="() => { delTask() }" class="btn-rosa">excluir</button>
                <button v-if="showConfirmEditBtn" @click="() => { confirmEdit() }" class="btn-azul">confirmar edição</button>
                <button v-if="showFishingTaskBtn" @click="() => { markAsFinished() }" class="btn-verde">Marcar como concluída</button>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'TaskPanel',
    data() {
        return {
            
        }
    },
    methods: {
        addTask(){
            // TODO ADD
        },
        editTask(){
            // TODO EDIT
        },
        delTask(){
            // TODO DELETE
        },
        cancel(){
            // TODO CANCEL
        },
        confirmAdd(){
            let data = this.$refs['add-data'].value
            let titulo = this.$refs['add-titulo'].value
            let hora = this.$refs['add-hora'].value
            let descricao = this.$refs['add-descricao'].value
            if (data !== '' && titulo !== '' && hora !== ''){
                this.$emit('novatarefa', {data, titulo, hora, descricao})
                this.addTarefa = false, this.editTarefa = false, this.delTarefa = false, this.addOptions = false, this.editOptions = false
                return
            }
            console.log('nao preenchido')
            },
        concluir(){
            // TODO CONCLUIR
        }
    },
    props:{
        inputDateStringField:{
            type: String,
            default: ''
        },
        isAbleToAdd:{
            type: Boolean,
            default: false
        },
        isAbleToEdit:{
            type: Boolean,
            default: false
        },
        
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