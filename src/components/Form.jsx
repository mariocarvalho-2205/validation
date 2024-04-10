import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userValidationSchema } from "./userValidation";

// 6 criar schema no arquivo separado
// 7 depois de criar o schema, fazera importação do yupResover e do schema
// 8 depois adicionar o resolver e o formState a const de captura dos elementos

const Form = () => {
    // 1 capturar os elementos
    const { register, handleSubmit, reset, formState: { errors }  } = useForm({
        resolver: yupResolver(userValidationSchema)
    })

    // 2 recebe os dados do formulario, aqui ele envia para o axios, fetch
    const onSubmit = data => {
        console.log(data)
    }

    return (
        <div className="form_container">
            <h1>Form</h1>
            {/* 3 Aqui no form, é criado evento onSubmit que recere a
            função do hook form handleSubmit que chama a função onSubmit
             */}
            <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form_group">
                    <label htmlFor="fullname">Nome Completo</label>
                    <input
                        id="fullname"
                        name="fullname"
                        type="text"
                        className="form_control"
                        // 4 aqui utilizamos o register para registrar os dados do input
                        {...register('fullname')}
                    />
                    <div>{errors.fullname?.message}</div>
                </div>
                <div className="form_group">
                    <label htmlFor="username">Usuario</label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        className="form_control"
                        {...register('username')}
                        />
                        <div>{errors.username?.message}</div>
                </div>
                <div className="form_group">
                    <label htmlFor="cpf">CPF</label>
                    <input
                        id="cpf"
                        name="cpf"
                        type="text"
                        className="form_control"
                        {...register('cpf')}
                        />
                        <div>{errors.cpf?.message}</div>
                </div>
                <div className="form_group">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        className="form_control"
                        {...register('email')}
                        />
                        <div>{errors.email?.message}</div>
                </div>
                <div className="form_group">
                    <label htmlFor="password">Senha</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        className="form_control"
                        {...register('password')}
                        />
                        <div>{errors.password?.message}</div>
                </div>
                <div className="form_group">
                    <label htmlFor="password_confirm">Confirme a senha</label>
                    <input
                        id="password_confirm"
                        name="password_confirm"
                        type="password"
                        className="form_control"
                        {...register('password_confirm')}
                        />
                        <div>{errors.password_confirm?.message}</div>
                </div>
                <div className="form_group">
                    <input
                        id="checkbox"
                        name="checkbox"
                        type="checkbox"
                        className="form_control"
                        {...register('checkbox')}
                        />
                    <label htmlFor="checkbox">Eu li e aceito os termos</label>
                    <div>{errors.checkbox?.message}</div>
                </div>

                <div className="form_group button_group">
                    {/* 5 para submit naõ precisa mudar nada, somente para resetar o form
                    chamanmos o reset do hook
                    */}
                    <button type="submit" className="submit_button">Registrar</button>
                    <button type="reset" className="reset_button" onClick={reset}>Resetar</button>
                </div>






            </form>

        </div>


    )
}

export default Form