import Header from './components/NavigationBar'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import PrivateRoute from './utils/PrivateRoute';
import HomeScreen from './screens/HomeScreen'
import BillScreen from './screens/BillScreen';
import UploadScreen from './screens/UploadScreen';
import consumptionCoefficientScreen from './screens/consumptionCoefficientScreen'
import demandCoefficientScreen from './screens/demandCoefficientScreen'
import barCoefficientScreen from './screens/barCoefficientScreen'
import barAverageCoefficientScreen from './screens/barAverageCoefficientScreen'
import barLimitCoefficientScreen from './screens/barLimitCoefficientScreen'
import barCompensationCoefficientScreen from './screens/barCompensationCoefficientScreen'
import barCompensationCoefficientActiveScreen from './screens/barCompensationCoefficientActiveScreen'
import MaximunDemandScreen from './screens/MaximunDemandScreen'
import UploadWaterScreen from './screens/UploadWaterScreen'
import NavigationBar from './components/NavigationBar'
import FormulaScreen from './screens/FormulaScreen'
function App() {
  return (
    <Router>
       <Routes>
     
      <Route path="/" element={<LoginScreen/>} />
            <Route path="/home" element={ <><NavigationBar/><HomeScreen/></>}/>          
      <Route path="/formulascreen" element={ <><NavigationBar/>
                        <FormulaScreen/></>

                     
                } />
      </Routes>
    </Router>
  );
}

export default App;
