<template>
    <div class="task-panel-container">
        <!-- DIV ADICIONAR NOVO -->
        <div v-if="this.$store.state.panelStatus.addEventForm" class="task-panel">
            <h5 class="painel-caption">Data</h5>
            <input v-model="this.$store.getters.getClickedDate" class="form-input" type="text" disabled ref="add-data"/>
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
        <div v-if="this.$store.state.panelStatus.editEventForm" class="task-panel">
            <h5 class="painel-caption">Título</h5>
            <input v-bind:value="getEventToEdit.title" class="form-input" maxlength="40" type="text" placeholder="TITULO"  @input="() => {}" ref="edit-titulo"/>
            <h5 class="painel-caption">Hora</h5>
            <input v-bind:value="getEventToEdit.hora" class="form-input" type="time" placeholder="HORA" ref="edit-hora"/>
            <h5 class="painel-caption">Descrição</h5>
            <input v-bind:value="getEventToEdit.descricao"  class="form-input" maxlength="120" type="text" placeholder="DESCRIÇÃO" ref="edit-descricao"/>
            <button @click="() => { confirmEditBtn() }" class="btn-azul">confirmar edição</button>
            <button v-if="this.$store.getters.getEventToEdit.status == 'Não Concluído'" @click="() => { markAsFinished(this.$store.getters.getEventToEdit) }" class="btn-verde">Marcar como concluída</button>
            <button v-if="this.$store.getters.getEventToEdit.status == 'Concluído'" @click="() => { markAsUnfinished(this.$store.getters.getEventToEdit) }" class="btn-rosa">Marcar como não concluída</button>
            <button v-if="getEventToEdit.title" @click="() => { delTask() }" class="btn-rosa">excluir</button>
            <button @click="() => { cancel() }" class="btn-rosa">cancelar</button>  
        </div>
        
        <div class="task-panel">
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
            openDeleteModal:false
        }
    },
    methods: {
        addTask(){
            this.$store.commit('calendarClickedDate', this.getEventToEdit)
        },
        confirmEditBtn() {
            const previousTaskData = this.$store.getters.getEventToEdit
            let title = this.$refs['edit-titulo'].value
            let hora = this.$refs['edit-hora'].value
            let descricao = this.$refs['edit-descricao'].value
            if( title !== '' && hora !== ''){
                this.$store.commit('confirmEditEvent', {previousTaskData, title, hora, descricao})
            }
        },
        delTask(){
            this.openDeleteModal = true
        },
        cancel(){
            this.$store.commit('cancel')
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
                return
            }
            return
            },
        markAsFinished() {
            this.$store.commit('markAsFinished', 'Concluído')
        },
        markAsUnfinished(){
            this.$store.commit('markAsFinished', 'Não Concluído')
        },
        cancelDeleteBtn(){
            this.openDeleteModal = false
        },
        confirmDeleteBtn(){
            this.openDeleteModal = false
            this.$store.commit('delEvent', this.getEventToEdit)
        },
    },
    computed:{
        getEventToEdit: function(){
            return this.$store.getters.getEventToEdit
        }
    },
    components:{
        ConfirmDeleteModal
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