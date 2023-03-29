// class FormSubmit {
//     constructor(settings) {
//         this.settings = settings;
//         this.form = document.querySelector(settings.form);
//         this.formButton = document.querySelector(settings.button);
//         if (this.form) {
//             this.url = this.form.getAtribute("action");
//         }
 
//     }

//   displaySucess() {
//     this.form.innerHTML = this.settings.success;

//     }

//   displayError() {
//     this.form.innerHTML = this.settings.error;
    
//     }
    
//   init() {
//     if (this.form) this.formButton.addEventListener("click", () => this.displaySucess());
//     return this;
//   }
// }

// const formSubmit = new FormSubmit({
//     form: "[data-form]",
//     button: "[data-button]",
//     sucess: "<h1 class= 'sucess'>Mensagem enviada!</h1>",
//     error: "<h1 class= 'error'>Não foi possivel enviar mensagem</h1>",
// });
// formSubmit.init();
