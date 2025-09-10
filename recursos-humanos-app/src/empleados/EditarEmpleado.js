import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function EditarEmpleado({ id, onClose }) {
    const urlBase = "http://localhost:8085/rh-app/empleados/update";
    const [empleado, setEmpleado] = useState({
        nombre: "",
        departamento: "",
        telefono: "",
        idAreaEmpleado: ""
    });

    const [areas, setAreas] = useState([]);

    useEffect(() => {
        cargarEmpleado();
        cargarAreas();
    }, []);

    const cargarEmpleado = async () => {
        try {
            const resultado = await axios.get(`http://localhost:8085/rh-app/empleados/${id}`);
            setEmpleado({
                nombre: resultado.data.nombre || "",
                departamento: resultado.data.departamento || "",
                telefono: resultado.data.telefono || "",
                idAreaEmpleado: resultado.data.areaEmpleado?.idAreaEmpleado || ""
            });
        } catch (error) {
            console.error("Error al cargar el empleado:", error);
        }
    };

    const cargarAreas = async () => {
        try {
            const resultado = await axios.get("http://localhost:8085/rh-app/area-empleado");
            setAreas(resultado.data);
        } catch (error) {
            console.error("Error al cargar las áreas:", error);
        }
    };

    const onInputChange = (e) => {
        setEmpleado({ ...empleado, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`${urlBase}/${id}`, empleado);
            onClose(); // Cerrar modal al guardar
        } catch (error) {
            console.error("Error al actualizar el empleado:", error);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" className="form-control" name="nombre" value={empleado.nombre} onChange={onInputChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">Departamento</label>
                <input type="text" className="form-control" name="departamento" value={empleado.departamento} onChange={onInputChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">Teléfono</label>
                <input type="text" className="form-control" name="telefono" value={empleado.telefono} onChange={onInputChange} />
            </div>
            <div className="mb-3">
                <label className="form-label">Área</label>
                <select
                    className="form-select"
                    name="idAreaEmpleado"
                    value={empleado.idAreaEmpleado}
                    onChange={onInputChange}
                >
                    <option value="">Seleccione un área</option>
                    {areas.map((area) => (
                        <option key={area.idAreaEmpleado} value={area.idAreaEmpleado}>
                            {area.nombreArea}
                        </option>
                    ))}
                </select>
            </div>
            <div className="text-end">
                <button type="submit" className="btn btn-success me-2">Guardar</button>
                <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
            </div>
        </form>
    );
}
