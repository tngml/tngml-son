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
import LifeCycleTest from './test/LifeCycleTest';
import StateTest01 from './test/StateTest01';
import EffectTest from './test/EffectTest';
import AjaxTest from './test/AjaxTest.js';
import MemberInsertComponent from './test/MemberInsertComponent.js';
import MemberListComponent from './test/MemberListComponent.js';
import MemberDetailComponent from './test/MemberDetailComponent.js';
import Mission1 from './Mission1.js';
import AjaxTest1 from './test/AjaxTest1.js'

const App = () => {
  
  return (
    <>
    {/* <LifeCycleTest/> */}
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' element = {<MainComponent/>} />
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
      <Route path='lifeCycle' element = {<LifeCycleTest/>} />
      <Route path='state' element = {<StateTest01/>} />
      <Route path='effect' element = {<EffectTest/>} />
      <Route path='ajax' element = {<AjaxTest/>} /> */}
      <Route path='memberInsertForm' element = {<MemberInsertComponent/>} />
      <Route path='memberList' element = {<MemberListComponent/>} />
      <Route path='memberDetail/:id' element = {<MemberDetailComponent/>} />
      <Route path='mission1' element = {<Mission1/>} />
      <Route path='missiona4' element = {<MissionFour/>}/>
      <Route path='ajax' element = {<AjaxTest/>}/>
    </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;