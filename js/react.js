const { createElement } = React;
const { render } = ReactDOM;

function App() {
    return createElement('div', null, 
        createElement('h1', null, 'Hola mundo'),
        createElement('p', null, 'Con React.js')
    );
}

render(createElement(App), document.getElementById('root'));
