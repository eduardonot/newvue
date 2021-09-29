import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        events:[],
        eventToEdit: {},
        panelStatus:{
            inputDateStringField : '',
            addTarefaPanel: false,
            addEventForm: false,
            editEventForm: false,
        }
    },
    mutations: {
        addEvent(state, payload){
            state.events.push(payload)
            state.panelStatus.addTarefaPanel = false
            
        },
        editEvent(state, payload){
            state.eventToEdit = payload
            state.panelStatus.addTarefaPanel =  true
            state.panelStatus.addEventForm = false
            state.panelStatus.editEventForm = true
        },
        calendarClickedDate(state, payload){
            state.panelStatus.inputDateStringField = payload
            state.panelStatus.addTarefaPanel =  true
            state.panelStatus.addEventForm = true
            state.panelStatus.editEventForm = false
        },
        cancel(state){
            state.panelStatus.addTarefaPanel = false
            state.panelStatus.addEventForm = false
            state.panelStatus.editEventForm = false
        }
    },
    actions: {
    },
    getters:{
        getEvents(state){
            return state.events
        },
        getPanelStatus(state){
            return state.panelStatus
        },
        getClickedDate(state){
            return state.panelStatus.inputDateStringField
        },
        getEventToEdit(state){
            return state.eventToEdit
        }
    },
    modules: {}
})
