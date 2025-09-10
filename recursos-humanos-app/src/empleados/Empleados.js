// src/empleados/Empleados.js
import React from 'react';
import AgregarEmpleado from './AgregarEmpleado';
import BuscarEmpleado from './BuscarEmpleado';
import EditarEmpleado from './EditarEmpleado';
import ListadoEmpleados from './ListadoEmpleados';
import { SkillsEmpleado } from '../components/SkillsEmpleado';

export default function Empleados() {
    return (
        <div>
            <h2 className="text-center mb-4">Gestión de Empleados</h2>

            <div>
                <SkillsEmpleado />
            </div>
            <div className="row mt-4">
                <div className="col-md-12">
                    <ListadoEmpleados />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <AgregarEmpleado />
                </div>
                <div className="col-md-12">
                    <BuscarEmpleado />
                </div>
            </div>



            {/* Si deseas mostrar EditarEmpleado solo cuando se seleccione uno, puedes condicionar esto */}
            {/* <EditarEmpleado /> */}
        </div>
    );
}
