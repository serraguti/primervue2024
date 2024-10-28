import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

//COMENZAMOS SEPARANDO NUESTRA CREACION DE APLICACION EN UNA 
//VARIABLE.
var app = createApp(App)
app.config.globalProperties.$filters = {
    //CREAMOS DOS METODOS QUE RECIBIRAN PARAMETROS
    //Y DEVOLVERAN UN CODIGO
    mayuscula(dato){
        return dato.toUpperCase();
    },
    getNumeroDoble(numero){
        return numero * 2;
    }
}

app.use(router).mount('#app')
