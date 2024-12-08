const app = Vue.createApp({
    data() {
        return {
            nombre: '',
            apellido: '',
            hobby: '',
            lugar: '',
            datos: [
                { nombre: 'Cristina', apellido: 'Rivera', hobby: 'Canto', lugar: 'Magdalena' }
            ]
        };
    },
    methods: {
        agregarDatos() {
            const nuevoDato = {
                nombre: this.nombre,
                apellido: this.apellido,
                hobby: this.hobby,
                lugar: this.lugar

            };
            this.datos.unshift(nuevoDato);

            this.nombre = '';
            this.apellido = '';
            this.hobby = '';
            this.lugar = '';
        },
    },
})

app.mount('#myApp')