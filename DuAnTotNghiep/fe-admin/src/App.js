// import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
 Outlet
} from "react-router-dom";
import Users from './page/Users/Users';
import Vehicles from './page/Vehicle/Vehicle';
import Home from './page/home/Home';
import Navbar from './Component/navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Menu from './Component/menu/Menu';
import Login from './page/login/Login';
import Store from './page/store/Store';
import classnames from "classnames/bind";
import styles from '../src/styles/Global.module.scss'
import ListStore from './page/store/ListStore';
import Hirevehicle from './page/hireVehicle/Hirevehicle';

const cx = classnames.bind(styles)

function App() {

  const Layout =()=>{
    return (
      <div className={cx('main')}>
        <Navbar/>
        <div className={cx('container')}>
          <div className={cx('menuContainer')}>
            <Menu/>
          </div>
          <div className={cx('contentContainer')}>
            <Outlet />
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
  const LoginLayout =()=>{
    return (
      <div className={cx('main')}>
       <Login></Login>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/admin",
      element: <Layout/>,
      children:[
        {
          path: "/admin",
          element: (
            <Home></Home>
          ),
        },
        {
          path: "user",
          element: <Users/>,
        },{
          path: "vehicle",
          element: <Vehicles/>,
        },{
          path:"store",
          element:<ListStore/>
        },
        {
          path:"hire",
          element:<Hirevehicle/>
        }
      ]
    },
    {
      path: "/",
      element: <LoginLayout/>
    }
  ]);
  return (
   <RouterProvider router={router} />
  );
}

export default App;
