//hago la configuración de vue.js
console.log(Vue);
const app = Vue.createApp({
    //comilla inclinada a la izquierda (backtick)
    //template: ` 
    // <h1>Hola mundo</h1>
    // <p>Con Vue.js</p>
    // <p>{{1+2}}</p>
    // <p>{{[1,2,3,4,5,6,7]}}</p>
    // <p>{{ {nombre: 'Cristina', apellido:'Rivera'} }}</p>
    // <p>{{false? 'Activo':'Inactivo'}}</p>
    // <p>1===1</p>
    // <p>{{1===1}}</p>
    // ` 
    methods:{
        cambiarMensaje(){
            this.mensaje = 'Que tal Cris? :3';
            this.edad = 22;
        },
    },

    data(){
        return {
            mensaje: 'Hola mundo Pweb Uwu',
            edad: 26,
            
        }
    }
})

app.mount('#myApp')