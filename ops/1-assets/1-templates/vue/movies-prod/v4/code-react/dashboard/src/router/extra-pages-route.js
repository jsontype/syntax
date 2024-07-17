import {Switch,Route} from 'react-router-dom'

//auth pages
import ConfirmMail  from '../views/backend/auth/confirmmail'
import LockScreen  from '../views/backend/auth/lockscreen'
import RecoverPassword  from '../views/backend/auth/recoverpassword'
import SignIn  from '../views/backend/auth/signin'
import SignUp  from '../views/backend/auth/signup'

//ExtarPages
import Maintainance from '../views/backend/pages/maintainance'
import  Error404    from '../views/backend/pages/error/error404'
import  Error500    from '../views/backend/pages/error/error500'
import CommingSoon  from  '../views/backend/pages/commingsoon'

const ExtraPages = () => {
    return (
        <Switch>
            {/* auth */}
            <Route path="/auth/pages-confirm-mail" component={ConfirmMail} />
            <Route path="/auth/pages-lock-screen" component={LockScreen} />
            <Route path="/auth/pages-recoverpw" component={RecoverPassword} />
            <Route path="/auth/sign-in" component={SignIn} />
            <Route path="/auth/sign-up" component={SignUp} />

            {/* ExtraPages */}
            <Route path="/extra-pages/pages-error" component={Error404} />
            <Route path="/extra-pages/pages-error-500" component={Error500} />
            <Route path="/extra-pages/pages-comingsoon" component={CommingSoon} />
            <Route path="/extra-pages/pages-maintenance" component={Maintainance} />
        </Switch>
    )
}

export default ExtraPages