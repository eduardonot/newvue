<template>
    <div class="dashboard-container">
        <div class="header-title">
            <button @click="showuserpanel"><span class="material-icons">list</span></button>
            <div class="panel-logo">
                <img src="./../../public/icons/stanley-icon.png"/>
            </div>
        </div>
        <div ref="left-panel" class="s2 left-side-panel">
            <Panel
                @submitSearch = "searchTask"
            />
        </div>
        <div ref="transparentmodal" @click="unselectDate" class="center-panel-screen"></div>
            <div class="s6 center-panel">
                <Calendar 
                @editarTarefa = "editTarefa" 
                @clickedDate = "calendarClickedDate" 
                @unselect = "unselectDate" 
                :newTask = "novaTarefaData"
                :editConfirm = "sendTaskFieldToEdit"
                :deleteConfirm = "sendTaskFieldToDelete"
                :searchTask = "fieldsToSearch"
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
            fieldsToEdit:{},
            fieldsToSearch:{}
        }
    },
    mounted(){
        if (window.innerWidth < 768){
            this.$refs['left-panel'].style.display = 'none'
            this.$refs['right-panel'].style.display = 'none'
            this.$refs['transparentmodal'].style.display = 'none'
        }
    },
    methods: {
        searchTask: function (criteria){
            this.fieldsToSearch = criteria
        },
        showuserpanel: function(){
            if(this.$refs['left-panel'].style.display !== 'none'){
                this.$refs['left-panel'].style.display = 'flex'
                this.$refs['transparentmodal'].style.display = 'flex'
            }
            if(this.$refs['left-panel'].style.display == 'none'){
                this.$refs['left-panel'].style.display = 'flex'
                this.$refs['transparentmodal'].style.display = 'flex'
            }
        },
        calendarClickedDate: function(date) {
            if(this.$refs['right-panel'].style.display !== 'none'){
                this.$refs['right-panel'].style.display = 'flex'
                this.$refs['transparentmodal'].style.display = 'flex'
            }
            if(this.$refs['right-panel'].style.display == 'none'){
                this.$refs['right-panel'].style.display = 'flex'
                this.$refs['transparentmodal'].style.display = 'flex'
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
            if(this.$refs['right-panel'].style.display !== 'none'){
                this.$refs['right-panel'].style.display = 'flex'
                this.$refs['transparentmodal'].style.display = 'flex'
            }
            if(this.$refs['right-panel'].style.display == 'none'){
                this.$refs['right-panel'].style.display = 'flex'
                this.$refs['transparentmodal'].style.display = 'flex'
            }
            this.addPanel = false,  this.editPanel = false, this.addTaskBtn = false, this.editTaskBtn = true, this.confirmAddTaskBtn = false, this.cancelBtn = false, this.delTaskBtn = true, this.showFinishTaskBtn = false, this.showConfirmEditBtn = false, 
            this.initialTaskFieldToEdit = tarefa
            this.fieldsToEdit = tarefa
        },
        confirmEditTask: function (tarefas) {
            if(window.innerWidth < 768){
                this.$refs['right-panel'].style.display = 'none'
                this.$refs['left-panel'].style.display = 'none'
                this.$refs['transparentmodal'].style.display = 'none'
            }
            this.addPanel = false, this.editPanel = false, this.addTaskBtn = false, this.editTaskBtn = false, this.confirmAddTaskBtn = false, this.cancelBtn = false, this.delTaskBtn = false, this.showFinishTaskBtn = false, this.showConfirmEditBtn = false
            let getInitialTaskValues = this.initialTaskFieldToEdit
            this.sendTaskFieldToEdit = {getInitialTaskValues, tarefas}
        },
        confirmDeleteTask: function() {
            if(window.innerWidth < 768){
                this.$refs['right-panel'].style.display = 'none'
                this.$refs['left-panel'].style.display = 'none'
                this.$refs['transparentmodal'].style.display = 'none'
            }
            let getInitialTaskValues = this.initialTaskFieldToEdit
            getInitialTaskValues.delete = true
            this.sendTaskFieldToDelete = {getInitialTaskValues}
            this.addPanel = false, this.editPanel = false, this.addTaskBtn = false, this.editTaskBtn = false, this.confirmAddTaskBtn = false, this.cancelBtn = false, this.delTaskBtn = false, this.showFinishTaskBtn = false, this.showConfirmEditBtn = false
        },
        markAsFinished: function (){
            if(window.innerWidth < 768){
                this.$refs['right-panel'].style.display = 'none'
                this.$refs['left-panel'].style.display = 'none'
                this.$refs['transparentmodal'].style.display = 'none'
            }
            this.initialTaskFieldToEdit.status = 'Concluído'
            this.addPanel = false, this.editPanel = false, this.addTaskBtn = false, this.editTaskBtn = false, this.confirmAddTaskBtn = false, this.cancelBtn = false, this.delTaskBtn = false, this.showFinishTaskBtn = false, this.showConfirmEditBtn = false
        },
        markAsUnfinished: function (){
            if(window.innerWidth < 768){
                this.$refs['right-panel'].style.display = 'none'
                this.$refs['left-panel'].style.display = 'none'
                this.$refs['transparentmodal'].style.display = 'none'
            }
            this.initialTaskFieldToEdit.status = 'Não Concluído'
            this.addPanel = false, this.editPanel = false, this.addTaskBtn = false, this.editTaskBtn = false, this.confirmAddTaskBtn = false, this.cancelBtn = false, this.delTaskBtn = false, this.showFinishTaskBtn = false, this.showConfirmEditBtn = false
        },
        unselectDate: function(){
            if(window.innerWidth < 768){
                this.$refs['right-panel'].style.display = 'none'
                this.$refs['left-panel'].style.display = 'none'
                this.$refs['transparentmodal'].style.display = 'none'
            }
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
        .center-panel-screen{
            display:none;
            position:fixed;
            right:0;
            height:100%;
            width:100%;
            background-color:rgb(240, 240, 240, 0.7);
            z-index:2;
        }
        .left-side-panel{
            display:none;
            position:absolute;
            left:0;
            height:100%;
            width:80%;
            background-color:rgba(230, 230, 230, 1);
            z-index:3;
            box-shadow: -4px 3px 12px -1px rgba(0,0,0,0.75);
            -webkit-box-shadow: -4px 3px 12px -1px rgba(0,0,0,0.75);
            -moz-box-shadow: -4px 3px 12px -1px rgba(0,0,0,0.75);
        }

        .center-panel{
            width:100% !important;
        }
        .right-side-panel{
            display:none;
            position:absolute;
            right:0;
            height:100%;
            width:80%;
            background-color:rgba(230, 230, 230, 1);
            z-index:3;
            box-shadow: -4px 3px 12px -1px rgba(0,0,0,0.75);
            -webkit-box-shadow: -4px 3px 12px -1px rgba(0,0,0,0.75);
            -moz-box-shadow: -4px 3px 12px -1px rgba(0,0,0,0.75);
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