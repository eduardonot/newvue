 <template>
    <div class="dashboard-container">
        <div class="s2">
            <Panel/>
        </div>
        <div class="s6">
            <Calendar 
            @editarTarefa = "editTarefa" 
            @clickedDate = "calendarClickedDate" 
            @unselect = "unselectDate" 
            :newTask = "novaTarefaData"
            :editConfirm = "sendTaskFieldToEdit"/>
        </div>
        <div class="s2">
            <TaskPanel 
            @novatarefa = "addTarefa" 
            @confirmEdit = "confirmEditTask"
            @clickedAddTaskBtn = "clickedAddTask"
            @clickedEditTaskBtn = "clickedEditTask"
            @clickedConfirmAddBtn = "clickedConfirmAdd"
            @clickedCancelBtn = "unselectDate"
            :addTarefaPanel = "addPanel"
            :editTarefaPanel = "editPanel"
            :showAddTaskBtn = "addTaskBtn" 
            :showEditTaskBtn = "editTaskBtn" 
            :showConfirmAddTaskBtn = "confirmAddTaskBtn"
            :showCancelBtn = "cancelBtn"
            :showDelTaskBtn = "delTaskBtn"
            :showConfirmEditBtn = "showConfirmEditBtn"
            :showFinishTaskBtn = "showConfirmEditBtn"
            :inputDateStringField = 'dateToString' 
            :inputTaskField = "sendTaskFieldToEdit"
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
            dateToString:'', addPanel: false, editPanel: false, addTaskBtn: false, editTaskBtn: false, confirmAddTaskBtn: false, cancelBtn: false, delTaskBtn: false, showFinishTaskBtn: false, showConfirmEditBtn: false, novaTarefaData: {},initialTaskFieldToEdit: {}, sendTaskFieldToEdit: {}
        }
    },
    methods: {
        calendarClickedDate: function(date) {
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
            this.addPanel = false, this.editPanel = true, this.addTaskBtn = false, this.editTaskBtn = false, this.showEditTaskBtn = false, this.delTaskBtn = false
        },
        editTarefa: function(tarefa){
            this.addPanel = false,  this.editPanel = false, this.addTaskBtn = false, this.editTaskBtn = true, this.confirmAddTaskBtn = false, this.cancelBtn = false, this.delTaskBtn = true, this.showFinishTaskBtn = false, this.showConfirmEditBtn = false, this.initialTaskFieldToEdit = tarefa
        },
        confirmEditTask: function (tarefas) {
            this.addPanel = false, this.editPanel = false, this.addTaskBtn = false, this.editTaskBtn = false, this.confirmAddTaskBtn = false, this.cancelBtn = false, this.delTaskBtn = false, this.showFinishTaskBtn = false, this.showConfirmEditBtn = false
            let getInitialTaskValues = this.initialTaskFieldToEdit
            this.sendTaskFieldToEdit = {getInitialTaskValues, tarefas}
        },
        unselectDate: function(){
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
</style>