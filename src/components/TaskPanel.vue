<template>
    <div class="task-panel-container">
        <!-- DIV ADICIONAR NOVO -->
        <div class="task-panel" v-if="addTarefaPanel">
            <h5 class="painel-caption">Data</h5>
            <input v-model="inputDateStringField" class="form-input" type="text" disabled ref="add-data"/>
            <h5 class="painel-caption">Título</h5>
            <input class="form-input" maxlength="40" type="text" placeholder="TITULO" ref="add-titulo"/>
            <h5 class="painel-caption">Hora</h5>
            <input class="form-input" type="time" placeholder="HORA" ref="add-hora"/>
            <h5 class="painel-caption">Descrição</h5>
            <input class="form-input" maxlength="120" type="text" placeholder="DESCRIÇÃO" ref="add-descricao"/>
            <button @click="() => { confirmAdd() }" class="btn-azul">confirmar</button>
            <button @click="() => { cancel() }" class="btn-rosa">cancelar</button>
        </div>

        <!-- DIV EDITAR SELECIONADO -->
        <div class="task-panel" v-if="editTarefaPanel">
            <h5 class="painel-caption">Título</h5>
            <input class="form-input" maxlength="40" type="text" placeholder="TITULO" ref="edit-titulo"/>
            <h5 class="painel-caption">Hora</h5>
            <input class="form-input" type="time" placeholder="HORA" ref="edit-hora"/>
            <h5 class="painel-caption">Descrição</h5>
            <input class="form-input" maxlength="120" type="text" placeholder="DESCRIÇÃO" ref="edit-descricao"/>
            <button @click="() => { confirmEditBtn() }" class="btn-azul">confirmar edição</button>
            <button @click="() => { markAsFinished() }" class="btn-verde">Marcar como concluída</button>
            <button @click="() => { cancel() }" class="btn-rosa">cancelar</button>  
        </div>
        
        <div class="task-panel">
        <!-- BOTOES -->
            <div>
                <button v-if="showAddTaskBtn" @click="() => { addTask() }" class="btn-verde">adicionar novo</button>
                <button v-if="showEditTaskBtn" @click="() => { editTask() }" class="btn-azul">editar selecionado</button>
                <!-- TODO EXCLUIR -->
                <button v-if= "showDelTaskBtn" @click="() => { delTask() }" class="btn-rosa">excluir</button>
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
            this.$emit('clickedAddTaskBtn')
        },
        editTask(){
            this.$emit('clickedEditTaskBtn')
        },
        confirmEditBtn() {
            let title = this.$refs['edit-titulo'].value
            let hora = this.$refs['edit-hora'].value
            let description = this.$refs['edit-descricao'].value
            if( title !== '' && hora !== ''){
                this.$emit('confirmEdit', {title, hora, description})
            }
        },
        delTask(){
            // TODO DELETE
        },
        cancel(){
            this.$emit('clickedCancelBtn')
        },
        confirmAdd(){
            let data = this.$refs['add-data'].value
            let titulo = this.$refs['add-titulo'].value
            let hora = this.$refs['add-hora'].value
            let descricao = this.$refs['add-descricao'].value
            if (data !== '' && titulo !== '' && hora !== ''){
                this.$emit('novatarefa', {data, titulo, hora, descricao})
                return
            }
            console.log('nao preenchido')
            }
    },
    props:{
        inputDateStringField:{
            type: String,
            default: ''
        },
        addTarefaPanel:{
            type: Boolean,
            default: false
        },
        editTarefaPanel:{
            type: Boolean,
            default: false
        },
        showAddTaskBtn:{
            type: Boolean,
            default: false
        },
        showEditTaskBtn:{
            type: Boolean,
            default: false
        },
        showConfirmAddTaskBtn:{
            type: Boolean,
            default: false
        },
        showCancelBtn:{
            type: Boolean,
            default: false
        },
        showDelTaskBtn:{
            type: Boolean,
            default: false
        },
        showConfirmEditBtn:{
            type: Boolean,
            default: false
        },
        showFinishTaskBtn:{
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