import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FormReceipt from './components/FormReceipt';
import ResultReceipt from './components/ResultReceipt';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FormReceipt />}></Route>
        <Route path='/receipt' element={<ResultReceipt />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
