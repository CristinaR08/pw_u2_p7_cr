// Asegurándonos de que Angular está disponible en window.ng
const ng = window.ng;

if (ng) {
    // Accediendo a los objetos directamente desde window.ng
    const { NgModule, Component, platformBrowserDynamic } = ng;

    // Componente principal
    class AppComponent {
        constructor() {
            this.template = '<h1>¡Hola, Angular!</h1>';
        }
    }

    // Módulo principal
    class AppModule {}

    AppComponent.annotations = [
        new ng.Component({
            selector: 'app-root',
            template: new AppComponent().template
        })
    ];

    AppModule.annotations = [
        new ng.NgModule({
            declarations: [AppComponent],
            imports: [],
            bootstrap: [AppComponent]
        })
    ];

    // Arrancar la aplicación
    platformBrowserDynamic().bootstrapModule(AppModule);
} else {
    console.error('Angular no está cargado correctamente.');
}
