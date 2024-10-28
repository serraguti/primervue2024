<template>
    <div>
        <h1>Ejemplo directivas VUE</h1>
        <h1>
            <!-- EL SIMBOLO DOLAR NOS PERMITE ACCEDER A ELEMENTOS DENTRO DE VUE -->
            {{$data}}
        </h1>
        <label>Introduzca número</label>
        <input type="number" v-model="numero"/>
        <h3 v-if="numero > 0" style="color:green">
            POSITIVO
        </h3>
        <h3 v-else-if="numero < 0" style="color:red">
            NEGATIVO
        </h3>
        <h3 v-else style="color:blue">
            CERO
        </h3>
        <ul v-if="series.length > 0">
            <li v-for="serie in series" :key="serie">
                {{serie}}
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: "DirectivasComponent",
        data() {
            return {
                series: ["Futurama", "Suits", "The Boys", "Stranger Things"],
                numero: 0,
                nombre: "Alumno",
                edad: 25
            }
        }
    }
</script>