//crie uma função que valide com expressão regular a máscara de um CPF com formato "123.123.123.-99"
function validarCPF(CPF){
const regex=/^\ d {3}\.\d{3}\.\d{3}-\d{2}$/;
return regex.text(CPF);
}