<template>
    <div>
        <h1>Mi primera App de Vue, que ilusion!!!</h1>
        <h2>Su nombre es {{nombre}}</h2>
        <h2>El número es {{numero}}</h2>
        <img src="./../assets/images/batman.jpg"/>
    </div>
</template>

<script>
    //ESTO ES CODIGO JS (ESPECIAL)
    //CADA COMPONENT QUE CREEMOS SIEMPRE DEBEMOS EXPORTARLO
    //CON UN name
    export default {
        name: "HolaMundo",
        data() {
            //AQUI DEBEMOS DECLARAR LAS VARIABLES PARA EL DIBUJO
            //LAS VARIABLES SON DECLARADAS CON FORMATO JSON DENTRO DE 
            //UN return
            return {
                nombre: "Alumno", 
                numero: 14,
                miArray: [],
                objeto: {}
            }
        }
    }
</script>

<style>
    h1 {color:fuchsia}
    @import './../assets/css/estilos.css'
</style>