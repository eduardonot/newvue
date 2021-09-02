 <template>
    <div class="dashboard-container">
        <div class="s2">
            <Panel/>
        </div>
        <div class="s6">
            <Calendar @getdate="getDate" @unselect="unselectDate" :newTask="novaTarefaData"/>
        </div>
        <div class="s2">
            <TaskPanel @novatarefa="addTarefa" :propGetData="dateString" :dateSelected="isDateSelected"/>
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
            dateString:'',
            isDateSelected:false,
            novaTarefaData: {},
        }
    },
    methods: {
        getDate: function(dados) {
            this.dateString = dados
            this.isDateSelected=true
        },
        addTarefa: function(dados){
            this.novaTarefaData = dados
        },
        unselectDate: function(){
            this.isDateSelected=false
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