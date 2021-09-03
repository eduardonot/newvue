 <template>
    <div class="calendar-container">
        <div class="calendar">
            <FullCalendar :options="calendarOptions"/>
        </div>
        <div v-if="hasEventRegistered">
                <div class="task-list">
                    <div class="list-display">
                        <h5>Horário</h5>
                        <ul>
                        <li @click="() => {editarTarefaSelecionada(tarefas)}" class="event-list-display" v-for="tarefas in this.eventRegistered" :key="tarefas.title" >
                            {{ tarefas.hora }}
                        </li>
                        </ul>
                    </div>
                    <div class="list-display">
                        <h5>Título</h5>
                        <ul>
                        <li @click="() => {editarTarefaSelecionada(tarefas)}" class="event-list-display" v-for="tarefas in this.eventRegistered" :key="tarefas.title" >
                            {{ tarefas.title}}
                        </li>
                        </ul>
                    </div>
                    <div class="list-display">
                        <h5>Status</h5>
                        <ul>
                        <li @click="() => {editarTarefaSelecionada(tarefas)}" class="event-list-display" v-for="tarefas in this.eventRegistered" :key="tarefas.title" >
                            {{ tarefas.status}}
                        </li>
                        </ul>
                    </div>
                    <div class="list-display">
                        <h5>Descrição</h5>
                        <ul>
                        <li @click="() => {editarTarefaSelecionada(tarefas)}" class="event-list-display" v-for="tarefas in this.eventRegistered" :key="tarefas.title" >
                            {{ tarefas.descricao}}
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
import '@fullcalendar/core/vdom'
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import ptLocale from '@fullcalendar/core/locales/pt-br'

export default {
    data() {
        return {
            hasEventRegistered: false,
            eventRegistered:{},
            calendarOptions: {
                events:[],
                locale: ptLocale,
                selectable:false,
                unselectAuto: true,
                plugins: [ dayGridPlugin, interactionPlugin ],
                initialView: 'dayGridMonth',
                height:500,
                headerToolbar: {
                    left: 'prev',
                    center: 'title',
                    right: 'next'
                },
                footerToolbar:{center:'addEventButton'},
                customButtons:{
                    // addEventButton:{
                    //     text:'Clique',
                    //     click:this.newEvent
                    // }
                },
                dateClick: this.dateClick,
                select: this.dateClick,
                
            },
        }
    },
    methods: {
        unselect (){
            this.$emit('unselect')
            this.hasEventRegistered = false
            
        },
        dateClick (arg) {
            let checkExists = this.calendarOptions.events.filter(x => x.start === arg.dateStr)
            let getDay = arg.dateStr
            let splitDay = getDay.split('-') 
            let dd = splitDay[2]
            let mm = splitDay[1]
            let yyyy = splitDay[0]
            let dia = `${dd}/${mm}/${yyyy}`
            this.$emit('clickedDate', dia)
            if (checkExists.length === 0) {
                this.hasEventRegistered = false
                return
                 
            } else {
                this.hasEventRegistered = true
                this.eventRegistered = checkExists
            }
        },
        editarTarefaSelecionada: function(tarefa){
            // TODO mostrar painel de edição
            this.$emit('editarTarefa', tarefa)
        }

    },
    components:{
        FullCalendar
    },
    props: {
        newTask:{
            type: Object,
            required: true,
            default: () => {}
        }
    },
    watch:{
        newTask: {
            handler: function (data) {
                if (data !== {} ){
                    let getDay = data.data
                    let splitDay = getDay.split('/')
                    this.calendarOptions.events.push({
                        title: data.titulo,
                        hora:data.hora,
                        status: 'Não Concluído',
                        descricao: data.descricao,
                        start:`${splitDay[2]}-${splitDay[1]}-${splitDay[0]}`,
                        allDay: true,
                    })
                    this.unselect()
                }
            }
        }
    }
}

</script>
<style>
    .calendar-container{
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
        overflow:hidden;
    }

    .calendar{
        width:100%;
        padding:10px;
        overflow:hidden !important;
    }

    .task-list{
        width:100%;
        max-height: 250px;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        overflow-x: hidden !important;
        overflow-y: auto !important;
    }

    .list-display{
        width:100%;
        text-align:left;
        display: flex;
        flex-direction:column;
        
    }

    .event-list-display{
        list-style-type: none;
        height: 25px;
        padding:3px 0px 3px 0px;
        font-size: 14px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        overflow-x: hidden !important;
        overflow-y: auto !important;
    }

    /* EXCLUSIVO FULL CALENDAR*/
    .fc-toolbar-title{
        text-transform: uppercase;
        font-weight: 400;
    }

    .fc-prev-button, .fc-button, .fc-button-primary{
        padding:10px !important;
    }

    .fc-toolbar-chunk button{
        background-color: rgba(255, 255, 255, 0) !important;
        border: none !important;
        display:flex;
        text-align: center;
        justify-content: center;
        align-items: center;
    }

    .fc-daygrid-bg-harness{
        background-color:rgba(93, 131, 255, 0.164) !important;
    }

    .fc-toolbar-chunk span {
        text-align: center;
        font-size: 25px !important;
        color:black !important;
    }

    .fc-addEventButton-button{
        color:black !important;
        font-size: 14px !important;
    }
    .fc-daygrid-day-top{
        background-color: rgba(0, 0, 255, 0.02);
    }
    
    .fc-daygrid-day-events{
        font-size:10px;
        max-height:40px;
        overflow-x: hidden !important;
        overflow-y: auto !important;
        text-align: center !important;
    }
    .fc-day:active{
        background-color: rgba(0, 0, 255, 0.05);
    }

    .fc-day:hover{
        background-color: rgba(0, 0, 255, 0.05);
    }

    

    .fc-sticky{
        font-size:9px;
        font-weight:normal;
    }

    /* FIM FULL CALENDAR */

</style>