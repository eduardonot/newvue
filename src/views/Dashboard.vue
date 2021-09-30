<template>
    <div class="dashboard-container">
        <div class="header-title">
            <button ><span class="material-icons">list</span></button>
            <div class="panel-logo">
                <img src="./../../public/icons/stanley-icon.png"/>
            </div>
        </div>
        <div ref="left-panel" class="s2 left-side-panel">
            <Panel/>
        </div>
        <div v-if="transparentBackground" @click="this.cancel" ref="transparentmodal" class="center-panel-screen"></div>
            <div class="s6 center-panel">
                <Calendar/>
        </div>
        <div v-if="this.getTaskPanelStatus" ref="right-panel" class="s2 right-side-panel">
            <TaskPanel />
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
            getTaskPanelStatus:false,
            getUserPanelStatus:false,
            transparentBackground: false
        }
    },
    mounted(){
    },
    computed:{
        getPanelStatus: function(){
            return this.$store.getters.getPanelStatus.addTarefaPanel
        }
    },
    watch: {
        "getPanelStatus": function(){
            this.getTaskPanelStatus = this.getPanelStatus
            this.transparentBackground = this.getPanelStatus
        }
    },
    components:{
        Calendar, Panel, TaskPanel
    },
    
    methods: {
        searchTask: async function (criteria){
            this.fieldsToSearch = await criteria
        },
        cancel: function(){
            this.$store.commit('cancel')
        }
    },
}

</script>
<style>
    .dashboard-container{
        width:100%;
        height:100%;
        display:flex;
        flex-direction:row;
        justify-content: flex-start;
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
    .header-title{
        display:none;
    }
    
    @media (max-width: 767px) {
        .dashboard-container{
            flex-direction:column;
            justify-content:flex-start;
            align-items: center;
        }
        .center-panel-screen{
            position:fixed;
            right:0;
            height:100%;
            width:100%;
            background-color:rgb(240, 240, 240, 0.7);
            z-index:2;
        }
        .left-side-panel{
            display:none;
            position:absolute;
            left:0;
            height:100%;
            width:80%;
            background-color:rgba(230, 230, 230, 1);
            z-index:3;
            box-shadow: -4px 3px 12px -1px rgba(0,0,0,0.75);
            -webkit-box-shadow: -4px 3px 12px -1px rgba(0,0,0,0.75);
            -moz-box-shadow: -4px 3px 12px -1px rgba(0,0,0,0.75);
        }

        .center-panel{
            width:100% !important;
        }
        .right-side-panel{
            position:absolute;
            right:0;
            height:100%;
            width:80%;
            background-color:rgba(230, 230, 230, 1);
            z-index:3;
            box-shadow: -4px 3px 12px -1px rgba(0,0,0,0.75);
            -webkit-box-shadow: -4px 3px 12px -1px rgba(0,0,0,0.75);
            -moz-box-shadow: -4px 3px 12px -1px rgba(0,0,0,0.75);
        }
        .header-title{
            width: 100%;
            height: 75px;
            margin: 0px;
            padding: 0px 15px 0px 15px;
            display:flex;
            flex-direction:row;
            top:0;
            left:0;
            visibility: visible !important;
            background-color: rgba(0,0,255, 0.05)
        }
        .header-title > .panel-logo{
            padding: 15px;
            margin:0 auto;
            min-width:auto !important;
            min-height:auto !important;
        }

        .header-title > .panel-logo img{
            max-width:50px;
        }
    }

</style>