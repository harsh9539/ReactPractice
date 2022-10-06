import Pagination from "./Components/Pagination/Pagination";
import MainSearch from "./Components/Search/MainSearch";
import ChartJs from "./Components/Chart/Chart";
import Tracks from "./Components/GDSCWork/Tracks";
import FunctionalComp from "./Components/UseContext/FunctionalComp";
import DataProvider from "./Components/UseContext/DataContext";

function App() {
  return (
    <>
      {/* <Pagination/> */}
      {/* <MainSearch/> */}
      {/* <ChartJs/> */}
      {/* <Tracks/> */}
      
      <DataProvider>
        <FunctionalComp />
      </DataProvider>
    </>
  );
}

export default App;
