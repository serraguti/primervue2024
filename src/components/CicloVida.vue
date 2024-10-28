<template>
    <div>
        <h1>Ciclo Vida Events</h1>
        <button @click="cambiarSaludo()">
            Cambiar saludo
        </button>
        <h2 style="color:blue">{{saludo}}</h2>
    </div>
</template>

<script>
    export default {
        name: "CicloVida",
        data() {
            return {
                saludo: "Hoy es lunes..."
            }
        },
        methods: {
            //EN ESTA ZONA INCLUIREMOS NUESTROS MEDODOS PERSONALIZADOS
            cambiarSaludo() {
                //SE UTILIZA LA PALABRA CLAVE this PARA LLAMAR A LAS 
                //VARIABLES DE data()
                this.saludo = "Y mañana martes...";
            }
        },
        mounted() {
            console.log("Component Montado");
        }, unmounted() {
            console.log("Component destruido");
        }, updated() {
            console.log("Component modificado");
        }, created() {
            console.log("Component Creado");
        }
    }
</script>

