let pronombres = ['el', 'nuestro'];
let adjetivos = ['gran', 'enorme'];
let sustantivos = ['gato', 'ratón'];

for (let p of pronombres) {
  for (let a of adjetivos) {
    for (let s of sustantivos) {
      console.log(p + a + s + ".com");
    }
  }
}
