<template>
    <div>
        <h1>Métodos Filters</h1>
        <ul>
            <li v-for="num in numeros" :key="num">
                Número: {{num}},
                Doble: {{ $filters.getNumeroDoble(num) }}
            </li>
        </ul>
        <ul>
            <li v-for="name in nombres" :key="name">
                {{ $filters.mayuscula(name) }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MetodosFilters",
        data() {
            return {
                numeros: [2,6,55,77,88,99,102],
                nombres: ["Adrian", "Lucia", "Diana", "Carlos", "Antonia"]
            }   
        } 
            
    }
</script>