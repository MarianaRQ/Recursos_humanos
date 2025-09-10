import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function EditarArea({id, onClose}){
    const urlBase = "http://localhost:8085/rh-app/area-empleado/update";
    const [area, setArea] = useState({
        nombreArea: ""
    });

    useEffect(() => {
        cargarArea();
    }, []);

    const cargarArea = async () => {
        try {
            const resultado = await axios.get(`http://localhost:8085/rh-app/area-empleado/${id}`);
            setArea({
                nombreArea: resultado.data.nombreArea || "",
            });
        } catch (error) {
            console.error("Error al cargar el area:", error);
        }
    };
    const onInputChange = (e) => {
        setArea({ ...area, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${urlBase}/${id}`, area);
            onClose();
        } catch (error) {
            console.error("Error al actualizar el area:", error);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label className="form-label ">Nombre Area</label>
                <input type="text" className="form-control" name="nombreArea" value={area.nombreArea} onChange={onInputChange} />
            </div>

            <div className="text-end">
                <button type="submit" className="btn me-2">Guardar</button>
            </div>
        </form>
    );

}