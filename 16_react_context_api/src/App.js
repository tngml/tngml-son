import { useState } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import Box from "./components/Box";
import Profile from "./components/profile";
import { AgeContext } from "./contexts/AgeContext";
import AgeProvider from "./components/provider/AgeProvider";
import UserProvider from "./components/provider/UserProvider";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="App">
      <h1>context api</h1>
      <div>
        전역적으로 접근할 수 있는 값이 있을 때 접근을 쉽게 하기 위해 사용
      </div>

      {/* <ThemeContext.Provider value={{ isDark: isDark, setIsDark: setIsDark }}> */}
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        {/* 이 내부에 작성된 컴포넌트만 ThemeContext가 관리하는 값에 접근할 수 있음 */}
        <Box />
      </ThemeContext.Provider>

      {/* 여러개의 context 사용 */}
      <AgeProvider>
        <UserProvider>
          <Profile />
        </UserProvider>
      </AgeProvider>
    </div>
  );
}

export default App;
