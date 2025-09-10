// src/empleados/Empleados.js
import React from 'react';
import AgregarArea from './AgregarArea';
import BuscarArea from './BuscarArea';
import EditarArea from './EditarArea';
import ListadoArea from './ListadoArea';
import { SkillsEmpleado } from '../components/SkillsEmpleado';

export default function Empleados() {
    return (
        <div>
            <h1 className="text-center mb-4 px-4 py-4">Gestión de Areas</h1>

            <div className="row mt-4">
                <div className="col-md-12">
                    <ListadoArea />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <AgregarArea />
                </div>
                <div className="col-md-12">
                    <BuscarArea />
                </div>
            </div>



            {/* Si deseas mostrar EditarEmpleado solo cuando se seleccione uno, puedes condicionar esto */}
            {/* <EditarEmpleado /> */}
        </div>
    );
}
