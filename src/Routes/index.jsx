import {Switch, Route} from 'react-router-dom'
import Form from '../components/Form'
import Login from '../components/Login'

const Routes = () =>{
    return (
        <>
        <Switch>
            <Route exact path='/'>
                <Form/>
            </Route>
            <Route exact path='/login/:user'>
                <Login/>
            </Route>
        </Switch>
        </>
    )
}

export default Routes