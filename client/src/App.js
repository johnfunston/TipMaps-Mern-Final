import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Error, Landing, Register, ProtectedRoute } from './pages'
import {
  AddShift, 
  Profile, 
  Stats, 
  Analytics, 
  SharedLayout, 
  ShiftLog
} from './pages/dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute><SharedLayout/></ProtectedRoute>}>
          <Route index element={<Stats/>}/>
          <Route path="/add-shift" element={<AddShift/>}/>
          <Route path="/shift-log" element={<ShiftLog/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/analytics" element={<Analytics/>}/>
        </Route>
        <Route path="/register" element={<Register/>}/>
        <Route path="/landing" element={<Landing/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
