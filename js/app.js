//hago la configuración de vue.js
console.log(Vue);
const app = Vue.createApp({
    //comilla inclinada a la izquierda (backtick)
    template: ` 
    <h1>Hola mundo</h1>
    <p>Con Vue.js</p>
    ` 
})

app.mount('#myApp')