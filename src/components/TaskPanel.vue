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
            <input v-model="getTitleToEdit" class="form-input" maxlength="40" type="text" placeholder="TITULO" ref="edit-titulo"/>
            <h5 class="painel-caption">Hora</h5>
            <input v-model="getHoraToEdit" class="form-input" type="time" placeholder="HORA" ref="edit-hora"/>
            <h5 class="painel-caption">Descrição</h5>
            <input v-model="getDescricaoToEdit" class="form-input" maxlength="120" type="text" placeholder="DESCRIÇÃO" ref="edit-descricao"/>
            <button @click="() => { confirmEditBtn() }" class="btn-azul">confirmar edição</button>
            <button v-if="!showFinishTaskBtn" @click="() => { markAsFinished() }" class="btn-verde">Marcar como concluída</button>
            <button v-if="showFinishTaskBtn" @click="() => { markAsUnfinished() }" class="btn-rosa">Marcar como não concluída</button>
            <button @click="() => { cancel() }" class="btn-rosa">cancelar</button>  
        </div>
        
        <div class="task-panel">
        <!-- BOTOES -->
            <div>
                <button v-if="showAddTaskBtn" @click="() => { addTask() }" class="btn-verde">adicionar novo</button>
                <button v-if="showAddTaskBtn" @click="() => { cancel() }" class="btn-rosa">cancelar</button>
                <button v-if="showEditTaskBtn" @click="() => { editTask() }" class="btn-azul">editar selecionado</button>
                <button v-if="showDelTaskBtn" @click="() => { delTask() }" class="btn-rosa">excluir</button>
            </div>
        </div>

        <!-- DELETE MODAL -->
        <ConfirmDeleteModal
            v-if = "openDeleteModal"
            @cancelDelete = "cancelDeleteBtn"
            @confirmDelete = "confirmDeleteBtn"
        />
        
    </div>
</template>
<script>
import ConfirmDeleteModal from './ConfirmDeleteModal.vue'
export default {
    name:'TaskPanel',
    data() {
        return {
            openDeleteModal:false,
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
            this.openDeleteModal = true
        },
        cancel(){
            this.$emit('clickedCancelBtn')
        },
        confirmAdd(){
            let data = this.$refs['add-data'].value
            let titulo = this.$refs['add-titulo'].value
            let hora = this.$refs['add-hora'].value
            let descricao = this.$refs['add-descricao'].value
            let splitDay = data.split('/')
            if (data !== '' && titulo !== '' && hora !== ''){
                this.$store.commit('addEvent', {
                    title: titulo,
                    hora: hora,
                    status: 'Não Concluído',
                    descricao: descricao,
                    start: `${splitDay[2]}-${splitDay[1]}-${splitDay[0]}`,
                    allDay: true,
                    color: '#f45858',
                })
                //  this.$emit('novatarefa', {data, titulo, hora, descricao})
                return
            }
            return
            },
        markAsFinished() {
            this.$emit('clickedMarkAsFinishedBtn')
        },
        markAsUnfinished(){
            this.$emit('clickedMarkAsUnninishedBtn')
        },
        cancelDeleteBtn(){
            this.openDeleteModal = false
        },
        confirmDeleteBtn(){
            this.openDeleteModal = false
            this.$emit('clickedConfirmDeleteBtn')
        },
    },

    components:{
        ConfirmDeleteModal
        },

    computed:{
        getTitleToEdit:{
            get (){
                return this.initialTaskFieldToEdit.title
            },
            set(){
                this.initialTaskFieldToEdit.title
            }
        },
        getHoraToEdit:{
            get (){
                return this.initialTaskFieldToEdit.hora
            },
            set(){
                this.initialTaskFieldToEdit.hora
            }
        },
        getDescricaoToEdit:{
            get (){
                return this.initialTaskFieldToEdit.descricao
            },
            set(){
                this.initialTaskFieldToEdit.descricao
            }
        }
    },

    props:{
        initialTaskFieldToEdit:{
            type: Object
        },
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
        showUnfinishTaskBtn:{
            type: Boolean,
            default: false  
        },
    },

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
        overflow:hidden;
    }

    .task-panel{
        width:100%;
    }

</style>