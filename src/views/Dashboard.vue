<template>
    <div class="dashboard-container">
        <div class="header-title">
            <button><span class="material-icons">list</span></button>
            <div class="panel-logo">
                <img src="./../../public/icons/stanley-icon.png"/>
            </div>
        </div>
        <div class="s2 left-side-panel">
            <Panel/>
        </div>
        <div class="s6 center-panel">
            <Calendar 
            @editarTarefa = "editTarefa" 
            @clickedDate = "calendarClickedDate" 
            @unselect = "unselectDate" 
            :newTask = "novaTarefaData"
            :editConfirm = "sendTaskFieldToEdit"
            :deleteConfirm = "sendTaskFieldToDelete"
            />
        </div>
        <div ref="right-panel" class="s2 right-side-panel">
            <TaskPanel 
            @novatarefa = "addTarefa" 
            @confirmEdit = "confirmEditTask"
            @clickedAddTaskBtn = "clickedAddTask"
            @clickedEditTaskBtn = "clickedEditTask"
            @clickedConfirmAddBtn = "clickedConfirmAdd"
            @clickedCancelBtn = "unselectDate"
            @clickedMarkAsFinishedBtn = "markAsFinished"
            @clickedMarkAsUnninishedBtn = "markAsUnfinished"
            @clickedConfirmDeleteBtn = "confirmDeleteTask"
            :addTarefaPanel = "addPanel"
            :editTarefaPanel = "editPanel"
            :showAddTaskBtn = "addTaskBtn" 
            :showEditTaskBtn = "editTaskBtn" 
            :showConfirmAddTaskBtn = "confirmAddTaskBtn"
            :showCancelBtn = "cancelBtn"
            :showDelTaskBtn = "delTaskBtn"
            :showConfirmEditBtn = "showConfirmEditBtn"
            :showFinishTaskBtn = "showConfirmEditBtn"
            :showUnfinishTaskBtn = "showUnfinishTaskBtn"
            :inputDateStringField = "dateToString"
            :initialTaskFieldToEdit = "fieldsToEdit"
            />
        </div>
    </div>
</template>
<script>
import Calendar from './../components/Calendar.vue'
import Panel from '../components/UserPanel.vue'
import TaskPanel from './../components/TaskPanel.vue'

export default {
    name:'Dashboard',
    data() {
        return {
            dateToString:'', 
            addPanel: false, 
            editPanel: false, 
            addTaskBtn: false, 
            editTaskBtn: false, 
            confirmAddTaskBtn: false, 
            cancelBtn: false, 
            delTaskBtn: false, 
            showFinishTaskBtn: false, 
            showUnfinishTaskBtn:false, 
            showConfirmEditBtn: false, 
            novaTarefaData: {},
            initialTaskFieldToEdit: {}, 
            sendTaskFieldToEdit: {},
            sendTaskFieldToDelete: {},
            fieldsToEdit:{}
        }
    },
    methods: {
        calendarClickedDate: function(date) {
            if(this.$refs['right-panel'].style.display !== 'none'){
                this.$refs['right-panel'].style.display = 'flex'
            }
            this.dateToString = date, this.addPanel = false, this.editPanel = false, this.addTaskBtn = true, this.editTaskBtn = false, this.confirmAddTaskBtn = false, this.cancelBtn = false, this.delTaskBtn = false, this.showFinishTaskBtn = false, this.showConfirmEditBtn = false
        },
        clickedAddTask: function() {
            this.addPanel = true, this.editPanel = false, this.addTaskBtn = false, this.editTaskBtn = false, this.delTaskBtn = false
        },
        addTarefa: function(tarefa){
            this.novaTarefaData = tarefa, this.addPanel = false, this.editPanel = false, this.addTaskBtn = false, this.editTaskBtn = false, this.confirmAddTaskBtn = false, this.cancelBtn = false, this.delTaskBtn = false, this.showFinishTaskBtn = false, this.showConfirmEditBtn = false
        },
        clickedConfirmAdd: function (){
            this.addPanel = false, this.editPanel = false, this.addTaskBtn = false, this.editTaskBtn = false, this.confirmAddTaskBtn = false, this.cancelBtn = false, this.delTaskBtn = false, this.showFinishTaskBtn = false, this.showConfirmEditBtn = false
        },
        clickedEditTask: function() {
            if(this.initialTaskFieldToEdit.status == 'Concluído'){
                this.showConfirmEditBtn = true
            }
            if(this.initialTaskFieldToEdit.status !== 'Concluído'){
                this.showConfirmEditBtn = false
            }
            this.addPanel = false, this.editPanel = true, this.addTaskBtn = false, this.editTaskBtn = false, this.showEditTaskBtn = false, this.delTaskBtn = false
        },
        editTarefa: function(tarefa){
            this.addPanel = false,  this.editPanel = false, this.addTaskBtn = false, this.editTaskBtn = true, this.confirmAddTaskBtn = false, this.cancelBtn = false, this.delTaskBtn = true, this.showFinishTaskBtn = false, this.showConfirmEditBtn = false, 
            this.initialTaskFieldToEdit = tarefa
            this.fieldsToEdit = tarefa
        },
        confirmEditTask: function (tarefas) {
            this.addPanel = false, this.editPanel = false, this.addTaskBtn = false, this.editTaskBtn = false, this.confirmAddTaskBtn = false, this.cancelBtn = false, this.delTaskBtn = false, this.showFinishTaskBtn = false, this.showConfirmEditBtn = false
            let getInitialTaskValues = this.initialTaskFieldToEdit
            this.sendTaskFieldToEdit = {getInitialTaskValues, tarefas}
        },
        confirmDeleteTask: function() {
            let getInitialTaskValues = this.initialTaskFieldToEdit
            getInitialTaskValues.delete = true
            this.sendTaskFieldToDelete = {getInitialTaskValues}
            this.addPanel = false, this.editPanel = false, this.addTaskBtn = false, this.editTaskBtn = false, this.confirmAddTaskBtn = false, this.cancelBtn = false, this.delTaskBtn = false, this.showFinishTaskBtn = false, this.showConfirmEditBtn = false
        },
        markAsFinished: function (){
            this.initialTaskFieldToEdit.status = 'Concluído'
            this.addPanel = false, this.editPanel = false, this.addTaskBtn = false, this.editTaskBtn = false, this.confirmAddTaskBtn = false, this.cancelBtn = false, this.delTaskBtn = false, this.showFinishTaskBtn = false, this.showConfirmEditBtn = false
        },
        markAsUnfinished: function (){
            this.initialTaskFieldToEdit.status = 'Não Concluído'
            this.addPanel = false, this.editPanel = false, this.addTaskBtn = false, this.editTaskBtn = false, this.confirmAddTaskBtn = false, this.cancelBtn = false, this.delTaskBtn = false, this.showFinishTaskBtn = false, this.showConfirmEditBtn = false
        },
        unselectDate: function(){
            this.$refs['right-panel'].style.display = 'none'
            this.addPanel = false, this.editPanel = false, this.addTaskBtn = false, this.editTaskBtn = false, this.confirmAddTaskBtn = false, this.cancelBtn = false, this.delTaskBtn = false, this.showFinishTaskBtn = false, this.showConfirmEditBtn = false
        }
    },
    components:{
        Calendar, Panel, TaskPanel
    },
}

</script>
<style>
    .dashboard-container{
        width:100%;
        height:100%;
        display:flex;
        flex-direction:row;
        justify-content: center;
    }
    .btn-azul{
        padding: 10px;
        margin-bottom: 10px;
        width: 100%;
        color: white;
        background-color: rgba(107,179,246,1);
        text-transform: uppercase;
    }

    .btn-rosa{
        padding: 10px;
        margin-bottom: 10px;
        width: 100%;
        color: white;
        background-color: rgba(245,88,88,1);
        text-transform: uppercase;
    }

    .btn-verde{
        padding: 10px;
        margin-bottom: 10px;
        width: 100%;
        color: white;
        background-color: rgba(40,170,84,1);
        text-transform: uppercase;
    }

    .col{
        display:flex;
        flex-direction:column;
    }

    .row{
        display:flex;
        flex-direction:row;
    }

    .s1{
        width:10%;
    }
    .s2{
        width:20%;
    }
    .s3{
        width:30%;
    }
    .s4{
        width:40%;
    }
    .s5{
        width:50%;
    }
    .s6{
        width:60%;
    }
    .s7{
        width:70%;
    }
    .s8{
        width:80%;
    }
    .s9{
        width:90%;
    }
    .s10{
        width:100%;
    }
    .header-title{
        display:none;
    }
    @media (max-width: 767px) {
        .dashboard-container{
            flex-direction:column;
            justify-content:flex-start;
            align-items: center;
        }
        .center-panel{
            width:100% !important;
        }
        .left-side-panel{
            display:none;
        }
        .right-side-panel{
            display:none;
        }
        .header-title{
            width: 100%;
            height: 75px;
            margin: 0px;
            padding: 0px 15px 0px 15px;
            display:flex;
            flex-direction:row;
            top:0;
            left:0;
            visibility: visible !important;
            background-color: rgba(0,0,255, 0.05)
        }
        .header-title > .panel-logo{
            padding: 15px;
            margin:0 auto;
            min-width:auto !important;
            min-height:auto !important;
        }

        .header-title > .panel-logo img{
            max-width:50px;
        }
    }

</style>