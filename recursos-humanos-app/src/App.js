import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoEmpleados from "./empleados/ListadoEmpleados";
import EditarEmpleado from "./empleados/EditarEmpleado";
import AgregarEmpleado from "./empleados/AgregarEmpleado";
import BuscarEmpleado from './empleados/BuscarEmpleado';
import Empleados from './empleados/Empleados'
import { Banner} from "./components/Banner";
import {Footer} from "./components/Footer";
import './App.css'
import { NavBar } from './components/NavBar';
import BuscarArea  from './Area/BuscarArea'
import listadoArea from './Area/ListadoArea'
import EditarArea from './Area/EditarArea'
import AgregarArea from './Area/AgregarArea'
import Area from './Area/Area'
import Nomina from './Nomina/Nomina'
import { InicioRecursosHumanos } from './components/Index';

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <NavBar />
                <Banner />
                <Routes>
                    <Route exact path='/' element={<InicioRecursosHumanos/>}/>
                    <Route exact path='/editar/:id' element={<EditarEmpleado/>}/>
                    <Route exact path='/agregar' element={<AgregarEmpleado/>}/>
                    <Route path="/buscar-empleado" element={<BuscarEmpleado />} />
                    <Route path="/empleados" element={<Empleados />} />
                    <Route exact path='/editar-area/:id' element={<EditarArea/>}/>
                    <Route exact path='/agregar-area' element={<AgregarArea/>}/>
                    <Route path="/buscar-area" element={<BuscarArea />} />
                    <Route path="/area" element={<Area />} />
                    <Route path="/nomina" element={<Nomina />} />
                    <Route path='/listo-area' element={<listadoArea />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
