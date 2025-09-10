import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function EditarArea({ id, onClose }) {
    const urlBase = "http://localhost:8085/rh-app/nomina/update";
    const [nomina, setNomina] = useState({
        sueldo : "",
        fechaPago : "",
        idEmpleado : ""
    });

    const [empleados, setEmpleado] = useState([]);

    useEffect(() => {
        cargarNomina();
        cargarEmpleados();
    }, []);

    const cargarNomina = async () => {
        try {
            const resultado = await axios.get(`http://localhost:8085/rh-app/nomina/${id}`);
            const nominaData = resultado.data;

            const fechaFormateada = nominaData.fechaPago
                ? nominaData.fechaPago.split('T')[0]
                : "";


            setNomina({
                sueldo: nominaData.sueldo || "",
                fechaPago: fechaFormateada,
                idEmpleado: nominaData.empleado?.idEmpleado || ""
            });
        } catch (error) {
            console.log("Error al cargar la nomina:", error);
        }
    };


    const cargarEmpleados = async () => {
        try {
            const resultado = await axios.get("http://localhost:8085/rh-app/empleados");
            setEmpleado(resultado.data);
        } catch (error) {
            console.error("Error al cargar los empleados:", error);
        }
    };

    const onInputChange = (e) => {
        setNomina({ ...nomina, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`${urlBase}/${id}`, nomina);
            onClose();
        } catch (error) {
            console.error("Error al actualizar la nomina:", error);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label className="form-label">Sueldo</label>
                <input type="text" className="form-control" name="sueldo" value={nomina.sueldo} onChange={onInputChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">Fecha de pago</label>
                <input type="date" className="form-control" name="fechaPago" value={nomina.fechaPago} onChange={onInputChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">Empleado</label>
                <select
                    className="form-select"
                    name="idEmpleado"
                    value={nomina.idEmpleado}
                    onChange={onInputChange}
                >
                    <option value="">Seleccione un empleado</option>
                    {empleados.map((empleado) => (
                        <option key={empleado.idEmpleado} value={empleado.idEmpleado}>
                            {empleado.nombre}
                        </option>
                    ))}
                </select>
            </div>
            <div className="text-end">
                <button type="submit" className="btn btn-info me-2">Guardar</button>
                <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
            </div>
        </form>
    );
}