import {Switch,Route,useLocation} from 'react-router-dom'
import {TransitionGroup,CSSTransition} from "react-transition-group";

import Pricing from '../views/backend/main/pricing'

//blog
import Blog from '../views/backend/blog/blog';
import BlogDetail from '../views/backend/blog/blog-details';

//App
import UserProfile from '../views/backend/app/usermanagement/userprofile'
import UserAccountSettingList from '../views/backend/app/usermanagement/useraccountsetting'

//Extrapages
import FAQ from '../views/backend/pages/faq'
import TermsOfUse from '../views/backend/pages/extrapages/termsOfUse'
import PrivacyPolicy from  '../views/backend/pages/extrapages/privacyPolicy'
import AboutUs from '../views/backend/pages/about-us'
import Contact from '../views/backend/pages/contact'
import PricingPlan2 from '../views/backend/pages/pricing/pricing2';

//Category
import CategoryList from '../views/backend/category/category-list';

//Movie
import AddMovie from '../views/backend/movie/add-movie';
import MovieList from '../views/backend/movie/movie-list';

//Show
import ShowList from '../views/backend/show/show-list';

// Home
import Homepage from '../views/backend/home/home'

const Layout1Route = () => {

    let location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition
            // key={location.key}
            classNames="fade"
            timeout={300}
            >
                <Switch  location={location}>
                   
                    <Route path="/pricing-plan-1"           component={Pricing} />

                    {/* App */}
                    <Route path="/manage-profile"           component={UserProfile} />
                    <Route path="/setting"                  component={UserAccountSettingList} />
                   
                    {/* Blog */}
                    <Route path="/blog"                     component={Blog} />
                    <Route path="/blog-details"             component={BlogDetail} />
                    
                    {/* Extrapages */}
                    <Route path="/faq"                      component={FAQ} />
                    <Route path="/terms-of-service"         component={TermsOfUse} />
                    <Route path="/privacy-policy"           component={PrivacyPolicy} />
                    <Route path="/about-us"                 component={AboutUs}/>
                    <Route path="/contact"                  component={Contact}/>
                    <Route path="/pricing-plan-2"           component={PricingPlan2}/>
                   
                    {/* Category */}
                    <Route path="/show-category"            component={CategoryList}/>
                    
                    {/* Movie */}
                    <Route path="/movie-details"            component={AddMovie}/>
                    <Route path="/movie-category"           component={MovieList}/>

                    {/* Show */}
                    <Route path="/show-details"             component={ShowList}/>
                
                    {/* homepage */}
                    <Route path="/" exact                   component={Homepage}/>

                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default Layout1Route