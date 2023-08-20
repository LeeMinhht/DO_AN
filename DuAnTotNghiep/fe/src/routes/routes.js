import config from '~/config'

//Layouts
import {HeaderOnly} from '~/layouts'


//pages
import Home from '~/pages/Home'
// import Search from '~/pages/Search'
import Profile from '~/pages/Profile'
import SingleVehicle from '~/pages/SingleVehicle/SingleVehicle'
import HireVehicle from '~/pages/HireVehicle/HireVehicle'
import ChangeToStore from '~/pages/Profile/ChageToStore'
import ListStore from '~/pages/Store/ListStore'
import ManagerStore from '~/pages/Store/ManagerStore/ManageStore'
import AddVehicle from '~/pages/Store/StoreVehicle/AddVehicle'
import StoreInfomation from '~/pages/Store/StoreInformation/StoreInfomation'
import Search from '~/pages/Search/SearchByAddressAndPrice'
import History from '~/pages/History/History'
import Revenue from '~/pages/Store/Revenue/Revenue'
import AllVehicle from '~/pages/AllVehicle/Allvehicle'
import Payment from '~/layouts/components/Payment/Payment'
import LoginComponent from '~/pages/Login/Login'
import EditProfile from '~/pages/Profile/Edit/EditProfile'
import HireRequired from '~/pages/Store/HireRequired/HireRequired'
import Register from '~/pages/Register/Register'



//Public router
const publicRouter = [
    {path: config.routes.home, component: Home},
    {path: config.routes.profile, component: Profile,layout:HeaderOnly},
    {path: config.routes.singleVehicle , component: SingleVehicle},
    {path: config.routes.hireVehiclePage , component: HireVehicle},
    {path: config.routes.changeToStore , component: ChangeToStore},
    {path: config.routes.store , component: ListStore,layout:HeaderOnly},
    {path: config.routes.ManagerStore, component: ManagerStore, layout:HeaderOnly},
    {path: config.routes.HireRequired, component: HireRequired, layout:HeaderOnly},
    {path: config.routes.StoreInformation, component: StoreInfomation, layout:HeaderOnly},
    {path: config.routes.addVehicle, component: AddVehicle, layout:HeaderOnly},
    {path: config.routes.search, component: Search, layout:HeaderOnly},
    {path: config.routes.history, component: History, layout:HeaderOnly},
    {path: config.routes.revenue, component: Revenue, layout:HeaderOnly},
    {path: config.routes.allVehicle, component: AllVehicle, layout:HeaderOnly},
    {path: config.routes.payment, component: Payment, layout:HeaderOnly},
    {path: config.routes.login, component: LoginComponent, layout:HeaderOnly},
    {path: config.routes.register, component: Register, layout:HeaderOnly},

    {path: config.routes.editProfile, component: EditProfile, layout:HeaderOnly},
]
const privateRouter = [] 

export {publicRouter,privateRouter}