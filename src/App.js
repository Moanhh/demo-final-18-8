
// // import Starter from "../src/views/Starter";
// // import { Link } from "react-router-dom";
// import React from 'react';
import Registration from "./loginApp/Registration";
// import Login from "./loginApp/Login"
// // import Dashboard from "./PageNew/Dashboard";
// import CreateNewStudySet from '../src/Component/FullWebPage/CreateNewStudySet'
// import StudySet from '../src/Component/FullWebPage/StudySet'
import Starter from "./views/Starter";
import Update from "./PageNew/Update";
// // import { AuthProvider } from "./loginApp/other/AuthContext";
// import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

// import PrivateRoute from './routes/PrivateRoute';
import FullLayout from './layouts/FullLayout';
import QuickCardApp from './views/QuickCard/qApp'

// function App() {
//   return (
    
//      <>
   
//     <Routes>
//     <Route  path='/' element={<FullLayout/>}/>
//        <Route path="/" element={<PrivateRoute>
//         <FullLayout/>
//        </PrivateRoute>} />

       
//        <Route  path='/dashboard' element={<FullLayout/>}/>
     
          
//           <Route  path='/signup' element={<Registration/>}/>
//           <Route  path='/login' element={<Login/>}/>
//           <Route  path='/starter' element={<Starter/>}/>
//           <Route  path='/create-set' element={<CreateNewStudySet/>}/>
//           <Route  path='/study-set' element={<StudySet/>}/>
//           <Route   path='/update' element={<Update/>}/>
       
//       </Routes>
    
//      </>
   
//   )
// }

// export default App




import { Routes,  Route } from 'react-router-dom'


import PrivateRoute from './routes/PrivateRoute';
// import Dashboard from '../src/PageNew/Dashboard';
import Login from '../src/loginApp/Login';
// import MobileLogin from './Components/FullWebpages/MobileLogin';
import CreateNewStudySet from './Component/FullWebPage/CreateNewStudySet';
import StudySet from './Component/FullWebPage/StudySet'
// import { AuthProvider } from './context/auth-context';

function App() {
  return (
   
<>
      {/* Browser Pages */}
      
      <Routes>
      <Route  path='/' element={<Starter/>}/>
      {/* <Route path='/dashboard' element={<PrivateRoute> 
        <FullLayout/> 
      </PrivateRoute>} /> */}

       
      <Route  path='/home' element={<FullLayout/>}/>
     
          
         <Route  path='/signup' element={<Registration/>}/>
          <Route  path='/login' element={<Login/>}/>
          
        <Route  path='/create-set' element={<CreateNewStudySet/>}/>
        <Route path='/:studySetID/edit' element={CreateNewStudySet} />
          <Route path='/:studySetID' element={<StudySet/>}/>
        <Route   path='/update' element={<Update/>}/>
        <Route   path='/quickcard' element={<QuickCardApp/>}/>

       
      </Routes>
       
     

   </>
  );
}

export default App;
