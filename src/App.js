import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Rootlayout from './components/Rootlayoutpage/Rootlayout';
import Home from './components/Homepage/Home';
import Register from './components/Registerpage/Register';
import Aboutus from './components/Aboutuspage/Aboutus';
import Contactus from './components/Contactuspage/Contactus';
import Adminlogin from './components/Adminloginpage/Adminlogin';
import Userlogin from './components/Userloginpage/Userlogin';
import Userform1 from './components/Userforms/Userform1/Userform1';
import Userform2 from './components/Userforms/Userform2/Userform2';
import Schemes from './components/Schemespage/Schemes';
import Eligibleschemes from './components/Eligibleschemes/Eligibleschemes';
import Displaypersonaldetails from './components/Displaypersonaldetails/Displaypersonaldetails';
import Fulluserdetails from './Fulluserdetails/Fulluserdetails';
import Profile from './components/Profilepage/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';

let router=createBrowserRouter([
   {
    path:"/",
    element:<Rootlayout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/aboutus',
        element:<Aboutus/>
      },
      {
        path:'/contactus',
        element:<Contactus/>
      },
      {
        path:'/adminlogin',
        element:<Adminlogin/>
      },
      {
         path:'/userlogin',
         element:<Userlogin/>
      },
      {
        path:'/userform1',
        element:<Userform1/>
      },
      {
        path:'/userform2',
        element:<Userform2/>
      },
      {
        path:'/schemes',
        element:<Schemes/>
      },
      {
        path:'/eligibleschemes',
        element:<Eligibleschemes/>
      },
      {
        path:'/userpersonaldetails',
        element:<Displaypersonaldetails/>
      },
      {
        path:'/fulluserdetails',
        element:<Fulluserdetails/>
      },
      {
        path:'/userprofile',
        element:<Profile/>
      }
    ]
   }

])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
