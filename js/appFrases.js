//arreglo de objetos Frase
const frases = [
    {frase: 'El que se conquista a sí mismo es el guerrero más poderoso' ,autor: 'Confucio'},
    {frase: 'Un hombre con coraje hace una mayoría' ,autor: 'Andrew Jackson'},
    {frase: 'El hombre que comete un error y no lo corrige, está cometiendo otro error' ,autor: 'Confucio'},
    {frase: 'Todo es divertido, siempre y cuando le ocurra a otra persona' ,autor: 'Armando '},
    {frase: 'Ojos que no ven... amigas que te lo cuentan todo.' ,autor: 'Jairo Chiles'},
    {frase: 'La inteligencia me persigue, pero yo soy más rápido' ,autor: 'Elvis'},
]

const app = Vue.createApp({
    methods: {

    },

    data() {
        return {
            listaFrases:frases

        }
    }
})

app.mount('#myApp')