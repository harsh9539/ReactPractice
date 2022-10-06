// import Pagination from "./Components/Pagination/Pagination";
// import MainSearch from "./Components/Search/MainSearch";
// import ChartJs from "./Components/Chart/Chart";
// import Tracks from "./Components/GDSCWork/Tracks";
// import FunctionalComp from "./Components/UseContext/FunctionalComp";
// import DataProvider from "./Components/UseContext/DataContext";
import CompLogin from "./Components/Login/CompLogin";
import LoginProvider from "./Components/Login/LoginContext";

function App() {
  return (
    <>
      {/* <Pagination/> */}
      {/* <MainSearch/> */}
      {/* <ChartJs/> */}
      {/* <Tracks/> */}
      {/* <DataProvider>
        <FunctionalComp />
      </DataProvider> */}
      <LoginProvider>
        <CompLogin />
      </LoginProvider>
    </>
  );
}

export default App;
