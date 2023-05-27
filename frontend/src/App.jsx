import React from 'react';
import { useState } from 'react';
import './App.css';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import Page from './components/container/Page';
import Login from './components/forms/Login';
import { Router, Route, Switch } from 'wouter';
import PrincipalPage from './pages/Admin/principal/PrincipalPage';
import Competencias from './pages/Admin/competencias/Competencias';
import {AppProvider} from './components/context/AppProvider';
import AppRouter from './routes/AppRouter';

function App() {
  // const [open, setOpen] = useState(false);
  // const change = () => setOpen(!open);

  return (
    <AppProvider>
      {/* <SideBar isOpen={open} /> */}
      <SideBar/>
      <AppRouter/>
    </AppProvider>
  );
}

export default App;
