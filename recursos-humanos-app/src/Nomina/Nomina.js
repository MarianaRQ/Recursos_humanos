import React from 'react';
import AgregarNomina from './AgregarNomina';
import BuscarNomina from './BuscarNomina';
import ListadoNomina from './ListadoNomina';

export default function Nominas() {
    return (
        <div>
            <h2 className="text-center mb-4">Gestión de Nominas</h2>
            <div className="row mt-4">
                <div className="col-md-12">
                    <ListadoNomina />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <AgregarNomina />
                </div>
                <div className="col-md-12">
                    <BuscarNomina />
                </div>            </div>
        </div>
    );
}
