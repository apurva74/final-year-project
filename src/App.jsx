import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './homee/Home';
import Login from './component/Login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Register from './component/Register';
import College from './College/College';
import Company from './Company/Company';
import FacultyList from './component/FacultyList';  // ✅ Import FacultyList component

function App() {
  return (
    <GoogleOAuthProvider clientId="546382094367-lhpic4vltc3k7hlfo30pvkni5jl3e9vl.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/college" element={<College />} />
          <Route path="/company" element={<Company />} />
          <Route path="/faculty-list" element={<FacultyList />} />  {/* ✅ New Route */}
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
