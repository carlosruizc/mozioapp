import { Route, Routes } from "react-router-dom";
import {ResultsPage} from '../pages/ResultsPage';
import {SearchPage} from '../pages/SearchPage';


export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<SearchPage />}/>
        <Route path="results/*"element={<ResultsPage />} />
      </Routes>
    </>
  );
};

