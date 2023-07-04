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



//Public router
const publicRouter = [
    {path: config.routes.home, component: Home},
    {path: config.routes.profile, component: Profile},
    {path: config.routes.singleVehicle , component: SingleVehicle},
    {path: config.routes.hireVehiclePage , component: HireVehicle},
    {path: config.routes.changeToStore , component: ChangeToStore},
    {path: config.routes.store , component: ListStore,layout:HeaderOnly},
    {path: config.routes.ManagerStore, component: ManagerStore, layout:HeaderOnly},
    {path: config.routes.StoreInformation, component: StoreInfomation, layout:HeaderOnly},
    {path: config.routes.addVehicle, component: AddVehicle, layout:HeaderOnly},
    {path: config.routes.search, component: Search, layout:HeaderOnly},
    {path: config.routes.history, component: History, layout:HeaderOnly},
    {path: config.routes.revenue, component: Revenue, layout:HeaderOnly}
]
const privateRouter = [] 

export {publicRouter,privateRouter}