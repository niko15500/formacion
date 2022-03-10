console.log('Preentrega');

class Materias{
    constructor(materia, nota){
        this.materia= materia
        this.nota= parseInt(nota)
    }
}

let subjects = ['Bonos', 'Analsis Tecnico Inicial', 'Introduccion al Mercado', 'Analisis Tencino Avanzado','Etf','Futuros','Analisis FUndamental']
let Notas = []

for (const subject of subjects) {
    let nota = prompt(`Calificación de ${subject}`)
    Notas.push(new Materias(subject, nota))
}
console.log(Notas);

let total = 0
Notas.forEach( g => {
    total += g.nota
})

console.log('promedio: ', total/Notas.length);