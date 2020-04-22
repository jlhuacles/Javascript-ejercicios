var contador = 0;

const llover = () => Math.random() < 0.25;

do {
    contador++;
} while(!llover());

console.log(`Fui a ver si llovía ${contador} veces`);
