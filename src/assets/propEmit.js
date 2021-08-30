// Prop - Pai envia para o filho

    // No arquivo.vue Pai:
        // <template>
            // <filho :propName="propAqui">  </filho>
        // </template>

        // <script>
        //     export default {
        //         data () {
        //             return {
        //                 propAqui: [
        //                     {
        //                         Dados
        //                     }
        //                 ]
        //             }
        //         }
        //     }
        // </script>
        
    // No arquivo.vue Filho:

        // <script>
        //     export default {
        //         props: {
        //             propName:{
        //                 type: Array, String, etc,
        //                 required: true,
        //                 default: 
        //             }
        //         }
        //     }   
        // </script>

// Emit - Filho envia para o pai

    //No arquivo.vue Filho:
        // <script>
            // methods: {
            //     enviarPai () {
            //         this.$emit('paiName', /*Dados Aqui*/)
            //     }
            // }
        //</script>
        

    // No arquivo.vue Pai:
        // <template>
            // <filho @paiName="paiMethod">   </filho>
        // </template>        

        //<script>
            // methods:{
                // paiMethod (parametros) { Dados aqui }
            // }
        //</script>