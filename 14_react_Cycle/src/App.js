import PracContainer from "./components/PracContainer";
import PracFakePost from "./components/PracFakePost";
import ClassLifeCycle from "./components/ClassLifeCycle";
import FuncLifeCycle from "./components/FunLifeCyde";

function App() {
  return (
    <div className="App">
      <ClassLifeCycle />
      <FuncLifeCycle />

      <PracContainer>
        <PracFakePost />
      </PracContainer>
    </div>
  );
}

export default App;
