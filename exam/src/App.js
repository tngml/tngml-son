// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom' 
import MainComponent from './MainComponent'
import LoginComponent from './LoginComponent'
import ClsComponent from './ClsComponent'
import DivComponent from './DivComponent'
import DataComponent from './DataComponent';
import CmpComponet from './CmpComponent';
import MapTest from './MapTest';
import MyEventComponet from './MyEventComponet';
import StateTest from './StateTest';
import MissionOne from './MissionOne_stu';
import MissionTwo from './MissionTwo_stu';
import MissionThree from './MissionThree_stu';
import MissionFour from './MissionFour_stu';

const App = () => {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<MainComponent/>} />
      <Route path='addMember' element = {<LoginComponent name = "testName"/>} />
      <Route path='classType' element = {<ClsComponent/>} />
      <Route path='div' element = {<DivComponent/>} />
      <Route path='dataTest' element = {<DataComponent/>} />
      <Route path='cmpTest' element = {<CmpComponet/>} />
      <Route path='mapTest' element = {<MapTest/>} />
      <Route path='eventTest' element = {<MyEventComponet/>} />
      <Route path='stateTest' element = {<StateTest/>} />
      <Route path='mission1' element = {<MissionOne/>} />
      <Route path='mission2' element = {<MissionTwo/>} />
      <Route path='mission3' element = {<MissionThree/>} />
      <Route path='mission4' element = {<MissionFour/>} />
    </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;