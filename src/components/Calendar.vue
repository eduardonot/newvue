 <template>
    <div class="calendar-container">
        <div class="calendar">
            <FullCalendar :options="calendarOptions"/>
            <div v-if="hasEventRegistered"> <!-- TODO EXIBIR CADASTRADOS APÓS CLIQUE -->
                <div class="task-list">
                    <div class="list-display">
                        <h5>Horário</h5>
                    </div>
                    <div class="list-display">
                        <h5>Título</h5>
                    </div>
                    <div class="list-display">
                        <h5>Status</h5>
                    </div>
                    <div class="list-display">
                        <h5>Descrição</h5>
                    </div>
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
                
            },
        }
    },
    methods: {
        dateClick (arg) {
            // TODO ENVIAR DADOS PARA A DIV hasEventRegistered
            let getDay = arg.dateStr
            let splitDay = getDay.split('-') 
            let dd = splitDay[2]
            let mm = splitDay[1]
            let yyyy = splitDay[0]
            let dia = `${dd}/${mm}/${yyyy}`
            this.$emit('getdate', dia)
        },

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
                        start:`${splitDay[2]}-${splitDay[1]}-${splitDay[0]}`,
                        allDay: true
                    })
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
        flex-direction:row;
        justify-content: center;
        overflow:hidden;
    }

    .calendar{
        width:100%;
        display:flex;
        flex-direction:column;
        padding:10px;
        overflow:hidden;
    }

    .task-list{
        width:100%;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
    }

    .list-display{
        width:100%;
        text-align:left;
        display: flex;
        flex-direction:column;
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

    .fc-daygrid-day-events{
        font-size:10px;
        max-height:40px;
        overflow-x: hidden !important;
        overflow-y: auto !important;
        text-align: center !important;
    }
    .fc-day:active{
        background-color: rgba(0, 0, 0, 0.05);
    }

    .fc-day:hover{
        background-color: rgba(0, 0, 0, 0.05);
    }

    .fc-sticky{
        font-size:9px;
        font-weight:normal;
    }

    /* FIM FULL CALENDAR */

</style>