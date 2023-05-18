import './style.css'
//import './clean-code/04-tarea-refactorizar-funciones';
//import './clean-code/05-Dry';
//import './clean-code/06-classes-a';
//import './clean-code/06-classes-b';
//import './clean-code/06-classes-c';
//import './clean-code/07-tarea';
//import './code-smells/01-singleton.js';
//import './code-smells/02-high-coupling';
import './code-smells/02-low-coupling';
const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Curso CleanCode y SOLID</h1>
  <h3>Por: Ing. Leonardo Fabio Mercado Benítez</h3>
  <span>Revisar la consola de JavaScript</span>
`

