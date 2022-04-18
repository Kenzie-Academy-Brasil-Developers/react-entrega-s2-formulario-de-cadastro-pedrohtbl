import { TextField, Box, Typography, Button} from "@mui/material"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import { useHistory} from "react-router-dom";

const Form = () =>{

    const history = useHistory()

    const schema = yup.object().shape({
        nome: yup.string().required('Nome Obrigatório').matches(/^[a-záàâãéèêíïóôõöúçñ ]+$/i, 'apenas letras são permitidas'),
        email: yup.string().required('Email Obrigatório').email('insira um email valido'),
        senha: yup.string().required('Senha Obrigatório').min(8, 'Minimo de 8 caracteres').matches(/(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g , 'Senha deve conter pelo menos 1 letra maiuscula, 1 minuscula, 1 numero e 1 caractere especial'),
        confirmeSenha: yup.string().oneOf([yup.ref("senha")], "Senhas não são iguais")
    })

    const {register,handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    })

    console.log(history)

    const onSubmit = (data) =>{
        history.push(`/login/${data.nome}`)
    }

    return(
    <>
    <Typography variant="h3" color={'#42a5f5'}>
        Cadastro
    </Typography>

    <Box sx={{display:'flex', flexDirection: "column", width:'250px',}} component='form' onSubmit={handleSubmit(onSubmit)}>

        <TextField 
            {...register('nome')}
            sx={{mt: '20px'}} 
            fullWidth
            label='Nome' 
            variant="outlined"
            type='text'
            helperText={errors.nome?.message} // = helperText={errors.nome && errors.nome.message}
            error={!!errors.nome}
        />

        <TextField 
            {...register('email')}
            sx={{mt: '20px'}} 
            fullWidth
            label='Email' 
            variant="outlined"
            type='email'
            helperText={errors.email?.message}
            error={!!errors.email}
        />

        <TextField 
            {...register('senha')}
            sx={{mt: '20px'}}
            fullWidth
            label='Senha' 
            variant="outlined"
            type='password'
            helperText={errors.senha?.message}
            error={!!errors.senha}
        />

        <TextField  
            {...register('confirmeSenha')}
            sx={{mt: '20px'}}
            fullWidth
            label='Confirme Senha' 
            variant="outlined"
            type='password'
            helperText={errors.confirmeSenha?.message}
            error={!!errors.confirmeSenha}
        />

        <Button type="submit" sx={{mt:'20px'}} fullWidth variant="contained" color="secondary">Cadastrar</Button>
    </Box>
    
    </>    
    )
}

export default Form