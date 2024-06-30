import {Switch,Route} from 'react-router-dom'

import SignUp from '../views/backend/pages/auth/signup'
import Login from '../views/backend/pages/auth/login'
import Video from '../views/backend/pages/video'
import RecoverPswd from '../views/backend/pages/auth/recover-pswd'

const ExtraPages = () => {
    return (
        <Switch>
            <Route path="/extra-pages/watch-video"      component={Video} />
            <Route path="/extra-pages/sign-up"          component={SignUp} />
            <Route path="/extra-pages/login"            component={Login} />
            <Route path="/extra-pages/recover-pswd"     component={RecoverPswd} />
        </Switch>
    )
}

export default ExtraPages