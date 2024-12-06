//arreglo de objetos Frase
const frases = [
    { frase: 'El que se conquista a sí mismo es el guerrero más poderoso', autor: 'Confucio' },
    { frase: 'Un hombre con coraje hace una mayoría', autor: 'Andrew Jackson' },
    { frase: 'El hombre que comete un error y no lo corrige, está cometiendo otro error', autor: 'Confucio' },
    { frase: 'Todo es divertido, siempre y cuando le ocurra a otra persona', autor: 'Armando ' },
    { frase: 'Ojos que no ven... amigas que te lo cuentan todo.', autor: 'Jairo Chiles' },
    { frase: 'La inteligencia me persigue, pero yo soy más rápido', autor: 'Elvis' },
]

const app = Vue.createApp({
    methods: {
        agregarFrase() {
            console.log(this.frase);
            console.log(this.autor);

            const nuevaFrase = {
                frase: this.frase,
                autor: this.autor
            }
            this.listaFrases.unshift(nuevaFrase);
        },
        agregarFraseFin() {
            console.log(this.frase);
            console.log(this.autor);

            const nuevaFrase = {
                frase: this.frase,
                autor: this.autor
            }
            this.listaFrases.push(nuevaFrase);
        },
        eventoKeyPressModificador() {
                console.log('Evento');
                // console.log(event);
                // console.log(charCode);
                // console.log(cancelable);
                // console.log(key);
                // console.log(keyCode);
                // console.log(target.baseURI);
                this.agregarFraseFin();
        }
    },

    data() {
        return {
            listaFrases: frases,
            frase: null,
            //autor: 'sin autor',
            autor: null,
        }
    }
})

app.mount('#myApp')