import {Switch,Route} from 'react-router-dom'
import Layout1 from '../layouts/backend/layout1'
import BlankLayout from '../layouts/blanklayout';

const LayoutsRoute = props => {
    return (
        <Switch>
            <Route path="/extra-pages" component={BlankLayout} />
            <Route path="/" component={Layout1} />
        </Switch>
    )
}

export default LayoutsRoute