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
                selectable:true,
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
            let getDay = arg.dateStr
            let splitDay = getDay.split('-') 
            let dd = splitDay[2]
            let mm = splitDay[1]
            let yyyy = splitDay[0]
            document.getElementById('dia').value = `${dd}/${mm}/${yyyy}`
            return getDay
        },
        unselect: () => {
            this.isSelected = false
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
    }

</style>