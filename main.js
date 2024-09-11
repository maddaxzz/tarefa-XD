let nota1 = 75;
let nota2 = 100;
let nota3 = 95;
let freq = 80;

function calcularMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    return media;
}

function verificarAprovacao(media, freq) {
    if (freq < 0 || freq > 100) {
        return "Erro: A frequência deve estar entre 0 e 100.";
    }
    if (media >= 7.0 && freq >= 75) {
        return "Aprovado";
    } else if (media >= 5.0 && media < 7.0 && freq >= 75) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

function classificarAluno(nota1, nota2, nota3, freq) {
    let media = calcularMedia(nota1, nota2, nota3);
    let status = verificarAprovacao(media, freq);

    return `Média: ${media.toFixed(2)}, Frequência: ${freq}%. Status: ${status}`;
}

console.log(classificarAluno(nota1, nota2, nota3, freq));
