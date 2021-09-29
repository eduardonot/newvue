import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        events:[],
        eventToEdit: {},
        hasEventRegistered: false,
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
            state.panelStatus.addTarefaPanel = false
            state.panelStatus.addEventForm = false
            state.panelStatus.editEventForm = false
        },
        changeEventRegistered(state, payload){
            state.hasEventRegistered = payload
        },
        editEvent(state, payload){
            state.eventToEdit = payload
            state.panelStatus.addTarefaPanel =  true
            state.panelStatus.addEventForm = false
            state.panelStatus.editEventForm = true
        },
        delEvent(state, payload){
            const taskIndex = state.events.indexOf(payload)
            state.events.splice(taskIndex, 1)
            state.hasEventRegistered = false
        },
        confirmEditEvent(state, payload){
            const getIndex = state.events.indexOf(payload.previousTaskData)
            state.events[getIndex].title = payload.title
            state.events[getIndex].hora = payload.hora
            state.events[getIndex].descricao = payload.descricao
        },
        markAsFinished(state, payload){
            state.eventToEdit.status = payload
        },
        markAsUnfinished(state, payload){
            state.eventToEdit.status = payload
        },
        calendarClickedDate(state, payload){
            state.eventToEdit = {payload}
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
        },
        getEventRegistered(state){
            return state.hasEventRegistered
        }
    },
    modules: {}
})
