import {Switch,Route,useLocation} from 'react-router-dom'
import {TransitionGroup,CSSTransition} from "react-transition-group";

//main
import Dashbord from '../views/backend/main/dashbord'
import Rating from '../views/backend/main/rating';
import Comment from '../views/backend/main/comment';
import User from '../views/backend/main/user';
import Pricing from '../views/backend/main/pricing';

//App
import UserProfile from '../views/backend/app/usermanagement/userprofile'
import UserPrivacySetting from '../views/backend/app/usermanagement/userprivacysetting'
import UserAccountSettingList from '../views/backend/app/usermanagement/useraccountsetting'
import UserProfileEdit from '../views/backend/app/usermanagement/userprofileedit'

//Form
import Checkbox from '../views/backend/forms/formcontrols/checkbox'
import Elements from '../views/backend/forms/formcontrols/elements'
import Radio from '../views/backend/forms/formcontrols/radio'
import FromSwitch from '../views/backend/forms/formcontrols/switch'
import Validations from '../views/backend/forms/formcontrols/validations'
import Invoiceview from '../views/backend/pages/invoiceview';


//Extrapages
import Timeline1 from '../views/backend/pages/timeline/timeline1'
import Invoice   from '../views/backend/pages/invoice'
import FAQ       from '../views/backend/pages/faq'
import BlankPage from '../views/backend/pages/blankpage'
import TermsOfUse from '../views/backend/pages/extrapages/termsOfUse'
import PrivacyPolicy from  '../views/backend/pages/extrapages/privacyPolicy'

//Table
import  BasicTable from '../views/backend/table/basictable'
import  DataTable  from '../views/backend/table/datatable'
import  EditTable from '../views/backend/table/edittable'

//ui
import UiAlerts from '../views/backend/ui/UiAlerts'
import UiBadges from '../views/backend/ui/UiBadges'
import UiBreadcrumbs  from '../views/backend/ui/UiBreadcrumbs'
import UiButtons from '../views/backend/ui/UiButtons'
import UiCards from '../views/backend/ui/UiCards'
import UiCarousels from '../views/backend/ui/UiCarousels'
import UiColors from '../views/backend/ui/UiColors'
import UiEmbed from '../views/backend/ui/UiEmbed'
import UiGrids from '../views/backend/ui/UiGrids'
import UiImages from '../views/backend/ui/UiImages'
import UiListGroups from '../views/backend/ui/UiListGroups'
import UiMediaObjects from '../views/backend/ui/UiMediaObjects'
import UiModals from '../views/backend/ui/UiModals'
import UiNotifications from '../views/backend/ui/UiNotifications'
import UiPaginations from '../views/backend/ui/UiPaginations'
import UiPopOvers from '../views/backend/ui/UiPopOvers'
import UiProgressBars from  '../views/backend/ui/UiProgressBars'
import UiTabs from '../views/backend/ui/UiTabs'
import UiTooltips from '../views/backend/ui/UiTooltips'
import UiTypography from '../views/backend/ui/UiTypography'

// icon-heroicon
import Heroicons from '../views/backend/Icons/Heroicons ';
import Dripicons from '../views/backend/Icons/dripicons';
import FontAwsome from '../views/backend/Icons/fontawsome';
import LineAwsome from '../views/backend/Icons/lineawsome';
import Remixicons from '../views/backend/Icons/remixicons';
import Unicons from '../views/backend/Icons/unicons'

//Category
import AddCategory from '../views/backend/category/add-category';
import CategoryList from '../views/backend/category/category-list';

//Movie
import AddMovie from '../views/backend/movie/add-movie';
import MovieList from '../views/backend/movie/movie-list';

//Show
import AddShow from '../views/backend/show/add-show';
import ShowList from '../views/backend/show/show-list';

//form-wizard
import SimpleWizard from '../views/backend/form-wizard/simple-wizard';
import ValidateWizard from '../views/backend/form-wizard/validate-wizard';
import VerticalWizard from '../views/backend/form-wizard/vertical-wizard';

const Layout1Route = () => {

    let location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={300}
            >
                <Switch  location={location}>
                    <Route path="/" exact component={Dashbord} />
                    <Route path="/rating" exact component={Rating} />
                    <Route path="/comment" exact component={Comment} />
                    <Route path="/user" exact component={User} />
                    <Route path="/pages-pricing" exact component={Pricing} />

                    {/* App */}
                    <Route path="/user-profile"         component={UserProfile} />
                    <Route path="/user-privacy-setting" component={UserPrivacySetting} />
                    <Route path="/user-account-setting" component={UserAccountSettingList} />
                    <Route path="/user-profile-edit"    component={UserProfileEdit} />

                    {/* Form  */}
                    <Route path="/form-chechbox"      component={Checkbox} />
                    <Route path="/form-layout"        component={Elements} />
                    <Route path="/form-radio"         component={Radio} />
                    <Route path="/form-switch"        component={FromSwitch} />
                    <Route path="/form-validation"    component={Validations} />
                  

                    {/* Icon */}
                    <Route path="/icon-heroicon" component={Heroicons}/>
                    <Route path="/icon-dripicons" component={Dripicons}/>
                    <Route path="/icon-fontawesome-5" component={FontAwsome}/>
                    <Route path="/icon-lineawesome" component={LineAwsome}/>
                    <Route path="/icon-remixicon" component={Remixicons}/>
                    <Route path="/icon-unicons" component={Unicons}/>

                    {/* Extrapages */}
                    <Route path="/pages-timeline"       component={Timeline1} />
                    <Route path="/pages-invoice"    component={Invoice} />
                    <Route path="/pages-faq"        component={FAQ} />
                    <Route path="/blank-page" component={BlankPage} />
                    <Route path="/terms-of-service" component={TermsOfUse} />
                    <Route path="/privacy-policy"   component={PrivacyPolicy} />
                    <Route path="/invoice-view"     component={Invoiceview}/>

                    {/* Table */}
                    <Route path="/tables-basic"    component={BasicTable} />
                    <Route path="/data-table"     component={DataTable} />
                    <Route path="/table-editable" component={EditTable} />

                    {/* Ui */}
                    <Route path="/ui-alerts"         component={UiAlerts}/>
                    <Route path="/ui-badges"         component={UiBadges}/>
                    <Route path="/ui-breadcrumb"     component={UiBreadcrumbs}/>
                    <Route path="/ui-buttons"        component={UiButtons}/>
                    <Route path="/ui-cards"          component={UiCards}/>
                    <Route path="/ui-carousel"       component={UiCarousels}/>
                    <Route path="/ui-colors"         component={UiColors}/>
                    <Route path="/ui-embed-video"    component={UiEmbed}/>
                    <Route path="/ui-grid"           component={UiGrids}/>
                    <Route path="/ui-images"         component={UiImages}/>
                    <Route path="/ui-list-group"     component={UiListGroups}/>
                    <Route path="/ui-media-object"   component={UiMediaObjects}/>
                    <Route path="/ui-modal"          component={UiModals}/>
                    <Route path="/ui-notifications"  component={UiNotifications}/>
                    <Route path="/ui-pagination"     component={UiPaginations}/>
                    <Route path="/ui-popovers"       component={UiPopOvers}/>
                    <Route path="/ui-progressbars"   component={UiProgressBars}/>
                    <Route path="/ui-tabs"           component={UiTabs}/>
                    <Route path="/ui-tooltips"       component={UiTooltips}/>
                    <Route path="/ui-typography"     component={UiTypography}/>

                    {/* Category */}
                    <Route path="/add-category"       component={AddCategory}/>
                    <Route path="/category-list"      component={CategoryList}/>
                    
                    {/* Movie */}
                    <Route path="/add-movie"        component={AddMovie}/>
                    <Route path="/movie-list"       component={MovieList}/>

                    {/* Show */}
                    <Route path="/add-show"        component={AddShow}/>
                    <Route path="/show-list"       component={ShowList}/>

                    {/* Form-wizard */}
                    <Route path="/form-wizard"      component={SimpleWizard}/>
                    <Route path="/form-wizard-validate"    component={ValidateWizard}/>
                    <Route path="/form-wizard-vertical"    component={VerticalWizard}/>

                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default Layout1Route