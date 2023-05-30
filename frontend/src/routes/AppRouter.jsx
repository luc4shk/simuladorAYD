import React from 'react'
import { Router, Switch, Route, useLocation } from 'wouter'
import PrincipalPage from '../pages/Admin/principal/PrincipalPage'
import Competencias from "../pages/Admin/competencias/Competencias"
import ErrorPage from '../pages/404/ErrorPage'
import SideBar from '../components/SideBar'
import Pruebas from '../pages/Admin/pruebas/Pruebas'
import Categorias from '../pages/Admin/categorias/Categorias'
import Preguntas from '../pages/Admin/preguntas/Preguntas'
import Estudiantes from '../pages/Admin/estudiantes/Estudiantes'
import Convocatorias from '../pages/Admin/convocatorias/Convocatorias'
export default function AppRouter() {
   const [location] = useLocation();

  const showSideBar = location !== '/competencias'; 
  return (
    <Router>
        {showSideBar && <SideBar/>}
        <Switch>
          <Route path="/" component={PrincipalPage}/>
          <Route path="/competencias" component={Competencias} />
          <Route path='/categorias' component={Categorias}/> 
          <Route path="/pruebas" component={Pruebas}/>
          <Route path="/preguntas" component={Preguntas}/>
          <Route path="/estudiantes" component={Estudiantes}/>
          <Route path="/convocatorias" component={Convocatorias}/>
          <Route component={ErrorPage}/>
        </Switch>
      </Router>
    )
}