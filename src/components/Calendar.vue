 <template>
    <div class="calendar-container">
        <div class="calendar">
            <FullCalendar :options="calendarOptions"/>
            <input type="text" id="dia">
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
                isSelected:false,
                events:[],
                locale: ptLocale,
                selectable:false,
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
                    addEventButton:{
                        text:'+',
                        click:this.newEvent
                    }
                },
                dateClick: this.dateClick,
                unselect: this.unselect
            }
        }
    },
    methods: {
        dateClick (arg) {
            this.isSelected = true
            console.log(arg)
            let getDay = arg.dateStr
            let splitDay = getDay.split('-') 
            let dd = splitDay[2]
            let mm = splitDay[1]
            let yyyy = splitDay[0]
            document.getElementById('dia').value = `${dd}/${mm}/${yyyy}`
            return getDay
        },
        unselect: () => {
            // document.getElementById('dia').value = ''
        },
        newEvent: function () {
            let getDay = document.getElementById('dia').value
            let splitDay = getDay.split('/') 
            var dd = splitDay[0]
            var mm = splitDay[1]
            var yyyy = splitDay[2]
            this.calendarOptions.events.push({
                title:'teste',
                start:`${yyyy}-${mm}-${dd}`,
                allDay: false
            })
        }
    },
    components:{
        FullCalendar
    },
}

</script>
<style>
    .calendar-container{
        width:100%;
        height:100%;
        display:flex;
        flex-direction:row;
        justify-content: center;
    }

    .calendar{
        width:100%;
        display:flex;
        flex-direction:column;
        padding:10px;
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

    /* FIM FULL CALENDAR */

</style>