import { useParams, useHistory } from "react-router-dom"
import { Button ,Typography} from "@mui/material"
import { createTheme, responsiveFontSizes } from '@mui/material';
import { ThemeProvider } from "@mui/material"
import { Box } from "@mui/material";
import hello from '../../hello.gif'
import { ImgStyle } from "./style";

const Login = () =>{
    const {user} = useParams()
    const history = useHistory()

    let theme = createTheme()
    theme = responsiveFontSizes(theme)

    return(
       <>
       <ThemeProvider theme={theme}>
        <Typography variant="h2" mb={'50px'} color='#ab47bc'> Bem-vindo, {user}!!</Typography>
       </ThemeProvider>
        <Box>
            <ImgStyle src={hello} alt='hello'/>
        </Box>
       <Button onClick={()=>{history.push('/')}}  variant='contained'>Voltar</Button>
       </>


    )
}

export default Login