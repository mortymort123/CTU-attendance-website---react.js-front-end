import Nav from './components/Nav.js';
import Home from './components/Home.js';
import UserData from './components/UserData.js';
import Registration from './components/Registration.js';
import ReadTagID from './components/ReadTagID.js';
import AllAttendanceLog from './components/AllAttendanceLog.js';
import UserDataUpdate from './components/UserDataUpdate.js';
import UserDataDelete from './components/UserDataDelete.js';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Nav />} >
          <Route index element={<Home />} />
            <Route path="UserDataUpdate" element={<UserDataUpdate />} />
            <Route path="UserDataDelete" element={<UserDataDelete />} />
            <Route path="UserData" element={<UserData />} />
            <Route path="Registration" element={<Registration />} />
            <Route path="ReadTagID" element={<ReadTagID />} />
            <Route path="AllAttendanceLog" element={<AllAttendanceLog />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
