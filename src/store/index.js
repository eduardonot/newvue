import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        events:[],
        panelStatus:{
            // DASHBOARD
            dateToString:'', 
            addPanel: false, 
            editPanel: false, 
            addTaskBtn: false, 
            editTaskBtn: false, 
            confirmAddTaskBtn: false, 
            cancelBtn: false, 
            delTaskBtn: false, 
            novaTarefaData: {},
            sendTaskFieldToEdit: {},
            sendTaskFieldToDelete: {},
            fieldsToEdit:{},
            fieldsToSearch:{},

            // TASK PANEL
            initialTaskFieldToEdit: {},
            inputDateStringField : '',
            addTarefaPanel: false,
            editTarefaPanel: false,
            showAddTaskBtn: false,
            showEditTaskBtn: false,
            showConfirmAddTaskBtn: false,
            showCancelBtn: false,
            showDelTaskBtn: false,
            showConfirmEditBtn: false,
            showFinishTaskBtn: false,
            showUnfinishTaskBtn: false,

            // CALENDAR
            newTask: {},
            editConfirm: {},
            deleteConfirm: {},
            changeStatus: '',
            searchTask: {},
        }
    },
    mutations: {
        addEvent(state, payload){
            state.events.push(payload)
        },
        unselect(state){
            state.panelStatus.addTarefaPanel = false
            state.panelStatus.editTarefaPanel =  false
            state.panelStatus.showAddTaskBtn =  false
            state.panelStatus.showEditTaskBtn =  false
            state.panelStatus.showConfirmAddTaskBtn =  false
            state.panelStatus.showCancelBtn =  false
            state.panelStatus.showDelTaskBtn =  false
            state.panelStatus.showConfirmEditBtn =  false
            state.panelStatus.showFinishTaskBtn =  false
        },
        calendarClickedDate(state, payload){
            this.unselect
            state.panelStatus.dateToString = payload
            state.panelStatus.addTaskBtn =  true
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
        }
    }
})
