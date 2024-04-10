import * as Yup from "yup";

export const userValidationSchema = Yup.object().shape({
    fullname: Yup.string().min(3, 'O nome precisa ter no minimo 3 caracteres').required('O nome é obrigatorio'),
    username: Yup.string().required('Username é Obrigatório!'),
    cpf: Yup.string('Não é um numero').min(11, 'O cpf precisa ter 11 digitos falta digitos').max(11, 'O cpf precisa ter 11 digitos sobra digitos').required('CPF é Pgrigatório'),
    email: Yup.string().email().required('email é obrigatório'),
    password: Yup.string().min(6, 'O minimo são 6 caracteres').required('Password é Obrigatório'),
    password_confirm: Yup.string().required('Confirmação do Password é obrigatório').oneOf([Yup.ref('password'), null], 'As senhas náo sao iguais'),
    checkbox: Yup.bool().oneOf([true], 'É preciso aceitar os termos'),
})