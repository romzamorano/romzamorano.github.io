let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Estudiante de Ingeniería en Computación, futura desarrolladora Front-end.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
