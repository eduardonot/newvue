<template>
    <div class="calendar-container">
        <div class="calendar">
            <FullCalendar ref="fullCalendar" :options="calendarOptions"/>
        </div>
        <!-- <button @click="testar">aperte aqui para testar</button> -->
        <div v-if="hasEventRegistered">
            <div class="task-list">
                <div class="list-display">
                    <h5>Horário</h5>
                    <ul>
                    <li @click="() => {editSelectedTask(tarefas)}" class="event-list-display" v-for="tarefas in this.newEventRegistered" :key="tarefas.id" >
                        {{ tarefas.hora }}
                    </li>
                    </ul>
                </div>
                <div class="list-display">
                    <h5>Título</h5>
                    <ul>
                    <li @click="() => {editSelectedTask(tarefas)}" class="event-list-display" v-for="tarefas in this.newEventRegistered" :key="tarefas.id" >
                        {{ tarefas.title}}
                    </li>
                    </ul>
                </div>
                <div class="list-display">
                    <h5>Status</h5>
                    <ul>
                    <li @click="() => {editSelectedTask(tarefas)}" class="event-list-display" v-for="tarefas in this.newEventRegistered" :key="tarefas.id" >
                        {{ tarefas.status}}
                    </li>
                    </ul>
                </div>
                <div class="list-display">
                    <h5>Descrição</h5>
                    <ul>
                    <li @click="() => {editSelectedTask(tarefas)}" class="event-list-display" v-for="tarefas in this.newEventRegistered" :key="tarefas.id" >
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
import {apiService} from './../plugins/api'

export default {
    name:'Calendar',
    data() {
        return {
            hasEventRegistered: false,
            eventRegistered:[],
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
                customButtons:{
                },
                dateClick: this.dateClick,
                select: this.dateClick,
                
            },
        }
    },
    created(){
       // return this.calendarOptions.events = JSON.parse(localStorage.getItem('eventList'))
    },
    mounted(){
        if (window.innerWidth > 767){
            console.warn(`%cA largura da sua tela ao final do ciclo Mounted é ${window.innerWidth} pixels.`, 'color: white; font-weight:700; font-size:18px;')
            console.warn(`%cCaso queira, reajuste a dimensão de exibição e pressione F5 para recarregar a página.`, 'color: white; font-weight:700; font-size:16px;') 
            return this.calendarOptions.height = 500
        }
        console.warn(`%cA largura da sua tela ao final do ciclo Mounted é ${window.innerWidth} pixels.`, 'color: white; font-weight:700; font-size:18px;')
        console.warn(`%cCaso queira, reajuste a dimensão de exibição e pressione F5 para recarregar a página.`, 'color: white; font-weight:700; font-size:16px;')   
        return this.calendarOptions.height = 350
    },
    methods: {
        testar() {
            apiService.post('/user', {
                name: 'Usuario1',
                telegram_ID: 12312,
                email:'eduardo@not.com',
                pass1:'Admin123!',
                pass2:'Admin123!'
            })
        },
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
        editSelectedTask: function(tarefa){
            this.$emit('editarTarefa', tarefa)
        }
    },
    computed:{
        newEventRegistered: function(){
            let sortByHour = this.eventRegistered
            sortByHour.sort(function (a, b){
                if (a.hora > b.hora){
                    return 1
                }
                if (b.hora > a.hora){
                    return -1
                }
                return 0
            })
            return sortByHour
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
        },
        editConfirm:{
            type: Object,
        },
        deleteConfirm:{
            type: Object
        },
        changeStatus:{
            type: String,
        },
        searchTask:{
            type: Object
        }
    },
    watch:{
        newTask: {
            handler: function (data) {
                if (data !== {} ){
                    let getDay = data.data
                    let splitDay = getDay.split('/')
                    this.calendarOptions.events.push({
                        title: data.titulo.trim(),
                        hora:data.hora,
                        status: 'Não Concluído',
                        descricao: data.descricao.trim(),
                        start:`${splitDay[2]}-${splitDay[1]}-${splitDay[0]}`,
                        allDay: true,
                        color:'#f45858'
                    })
                    localStorage.setItem('eventList', JSON.stringify(this.calendarOptions.events))
                    this.unselect()
                }
            }
        },
        editConfirm: {
            handler: function (tarefa) {
                if(tarefa) {
                    let getDay = this.calendarOptions.events.find(x => x == tarefa.getInitialTaskValues)
                    getDay.title = tarefa.tarefas.title
                    getDay.hora = tarefa.tarefas.hora
                    getDay.descricao = tarefa.tarefas.description
                    
                }
            }
        },
        changeStatus: {
            handler: function (tarefa) {
                if(tarefa) {
                    let getDay = this.calendarOptions.events.find(x => x == tarefa.getInitialTaskValues)
                    getDay.status = tarefa.tarefas.status
                    
                }
            }
        },
        deleteConfirm: {
            handler: function (tarefa) {
                if(tarefa) {
                    let getDay = this.calendarOptions.events.find(x => x == tarefa.getInitialTaskValues)
                    let taskIndex = this.calendarOptions.events.indexOf(getDay)
                    this.calendarOptions.events.splice(taskIndex, 1)
                    this.unselect()
                }
            }
        },
        searchTask: {
            handler: async function(criteria){
                if(criteria){
                    let searchTitle = await this.calendarOptions.events.filter(task => task.title.toLowerCase().includes(criteria.title))
                    let getSearchTitleStatus = await searchTitle.filter(search => search.status == criteria.status)
                    let getDate = await getSearchTitleStatus.find(date => date.start >= criteria.initialDate && date.start <= criteria.finalDate)
                    if (!getDate){
                        return alert('Não foi possível encontrar tarefa com os dados informados.')
                    }
                    let calendarApi = this.$refs.fullCalendar.getApi()
                    calendarApi.gotoDate(getDate.start)
                    calendarApi.select(getDate.start)
                }
                return
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
        display:flex;
        align-items: center;
        list-style-type: none;
        height: 35px;
        padding:3px 0px 3px 0px;
        font-size: 14px;
        margin-bottom:3px;
        background-color:rgba(93, 131, 255, 0.1);
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
        background-color: rgba(0, 0, 255, 0.15);
    }
    .fc-day:hover{
        background-color: rgba(0, 0, 255, 0.15);
    }
    .fc-sticky{
        font-family: 'Roboto', sans-serif;
        font-size:10px;
        font-weight:normal;
        letter-spacing: 0.3px;
    }

    /* FIM FULL CALENDAR */

    /* MEDIA QUERY MOBILE E TABLET */
    @media (max-width: 767px){
        .fc-toolbar-title{
            font-size:18px !important;
        }
        .task-list{
            margin: 0 auto;
            width:100%;
            padding:5px 10px 5px 10px;
            max-height: 150px;
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            overflow-x: hidden !important;
            overflow-y: auto !important;
        }
        .list-display li{
            font-size:12px;
        }
    }

    @media (max-height: 640px){
        .task-list{
            max-height: 185px !important;
        }
    }
    @media (max-height: 812px){
        .task-list{
            max-height: 355px;
        }
    }
</style>