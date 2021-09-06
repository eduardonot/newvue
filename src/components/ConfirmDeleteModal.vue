<template>
    <div class="modal-delete">
        <div class="s4 modal-box">
            <h3>Confirmar exclusão de tarefa?</h3>
            <span>Esta ação é irreversível. A tarefa excluída não poderá ser recuperada.</span>
            <div class="modal-buttons">
                <button @click="confirmDelete" class="btn-verde btn-little">sim</button>
                <button @click="cancelDelete" class="btn-rosa btn-little">não</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ConfirmDeleteModal',
        data() {
            return {
                
            }
        },
        methods:{
            confirmDelete(){
                this.$emit('confirmDelete')
            },
            cancelDelete(){
                this.$emit('cancelDelete')
            }
        }
    }
</script>
<style>
    .modal-delete{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        background-color: rgba(230, 230, 230, 0.90);
        overflow:hidden;
        z-index:100;
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
    }

    .modal-box{
        margin:0;
        padding:15px;
        background-color:rgba(230, 230, 230, 0.9);
        box-shadow: 4px 2px 8px 1px rgba(0,0,0,0.32);
        -webkit-box-shadow: 4px 2px 8px 1px rgba(0,0,0,0.32);
        -moz-box-shadow: 4px 2px 8px 1px rgba(0,0,0,0.32);
    }

    .modal-buttons{
        margin: 15px 5px 15px 5px;
        display:flex;
        justify-content:center;
        flex-direction:row;
    }

    .btn-little{
        max-width:100px !important;
        margin:5px;
    }

    @media (max-width: 767px){
        .modal-box{
            width:100% !important;
            height:100% !important;
            display:flex;
            flex-direction:column;
            justify-content: center;
        }
    }
</style>