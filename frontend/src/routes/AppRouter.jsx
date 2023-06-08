import React, { useEffect, useState, useContext} from "react";
import { Router, Switch, Route, useLocation, Redirect } from "wouter";
import PrincipalPage from "../pages/Admin/principal/PrincipalPage";
import Competencias from "../pages/Admin/competencias/Competencias";
import ErrorPage from "../pages/404/ErrorPage";
import SideBar from "../components/SideBar";
import Pruebas from "../pages/Admin/pruebas/Pruebas";
import Categorias from "../pages/Admin/categorias/Categorias";
import Preguntas from "../pages/Admin/preguntas/Preguntas";
import Estudiantes from "../pages/Admin/estudiantes/Estudiantes";
import Convocatorias from "../pages/Admin/convocatorias/Convocatorias";
import AgregarCompetencia from "../pages/Admin/competencias/AgregarCompetencia";
import AgregarCategoria from "../pages/Admin/categorias/AgregarCategoria";
import SeleccionarTipoPregunta from "../pages/Admin/preguntas/SeleccionarTipoPregunta";
import PreguntaSimple from "../pages/Admin/preguntas/PreguntaSimple";
import AgregarPrueba from "../pages/Admin/pruebas/AgregarPrueba";
import CambiarContrasenia from "../pages/Admin/principal/CambiarContrasenia";
import PreguntaImagen from "../pages/Admin/preguntas/PreguntaImagen";
import CambiarImagen from "../pages/Admin/principal/CambiarImagen";
import EditarInformacion from "../pages/Admin/principal/EditarInformación";
import EditarCompetencia from "../pages/Admin/competencias/EditarCompetencia";
import EditarCategoria from "../pages/Admin/categorias/EditarCategoria";
import Login from "../pages/Inicios/Login";
import { AppContext } from "../components/context/AppProvider";
import { Toaster } from "react-hot-toast";
export default function AppRouter() {

  const { user, token, setToken} = useContext(AppContext)
  const [location, setLocation] = useLocation(window.location.href)
  // const [token, setToken] = useState()

  // useEffect(() => {
  //   setToken(localStorage.getItem("token"))
  // }, []);


  return (
   <>
    <Router>
      {token ? (
        <>
          <SideBar />
          <Switch>
            <Route path="/" component={PrincipalPage} />
            <Route path="/competencias" component={Competencias} />
            <Route path="/categorias" component={Categorias} />
            <Route path="/pruebas" component={Pruebas} />
            <Route path="/preguntas" component={Preguntas} />
            <Route path="/estudiantes" component={Estudiantes} />
            <Route path="/convocatorias" component={Convocatorias} />
            <Route path="/formularioCompetencia" component={AgregarCompetencia}/>
            <Route path="/formularioCategoria" component={AgregarCategoria} />
            <Route path="/tipoPregunta" component={SeleccionarTipoPregunta} />
            <Route path="/formularioPreguntaSimple" component={PreguntaSimple}/>
            <Route path="/formularioPreguntaImagen" component={PreguntaImagen}/>
            <Route path="/crearPrueba" component={AgregarPrueba} />
            <Route path="/cambiarContrasenia" component={CambiarContrasenia} />
            <Route path="/cambiarImagen" component={CambiarImagen} />
            <Route path="/editarInformacion" component={EditarInformacion} />
            <Route path="/editarCompetencia/:id" component={EditarCompetencia} />
            <Route path="/editarCategoria/:id" component={EditarCategoria} />
            <Route component={ErrorPage} />
          </Switch>
        </>
      ) : (
          <Switch>
          <Route path="/login">
            {token ? 
              <Redirect to="/"/> 
              : 
              <Login/>
            }
          </Route>
          </Switch>
      )}
    </Router>
    </>
  );
}
