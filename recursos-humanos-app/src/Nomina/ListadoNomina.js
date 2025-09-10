import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import EditarNomina from "./EditarNomina";

export default function ListadoNominas() {
    const urlBase = "http://localhost:8085/rh-app/nomina";
    const [nominas, setNomina] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [idEditar, setIdEditar] = useState(null);

    useEffect(() => {
        cargarNominas();
    }, []);

    const cargarNominas = async () => {
        try {
            const resultado = await axios.get(urlBase);
            setNomina(resultado.data);
        } catch (error) {
            console.error("Error al cargar las nominas:", error);
        }
    };

    const eliminarNomina = async (id) => {
        try {
            await axios.delete(`${urlBase}/delete/${id}`);
            cargarNominas();
        } catch (error) {
            console.error("Error al eliminar nomina:", error);
        }
    };

    const abrirModal = (id) => {
        setIdEditar(id);
        setShowModal(true);
    };

    const cerrarModal = () => {
        setShowModal(false);
        cargarNominas(); // Recargar empleados después de editar
    };

    const formatearFecha = (fechaISO) => {
        if (!fechaISO) return "";
        const [anio, mes, dia] = fechaISO.split("T")[0].split("-");
        return `${dia}/${mes}/${anio}`;
    };

    return (
        <div className="container">
            <div className="text-center my-4">
                <h3>Listado de Nominas</h3>
            </div>

            <table className="table table-striped table-responsive">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Sueldo</th>
                    <th>Fecha pago</th>
                    <th>Empleados</th>
                    <th className="text-center">Acciones</th>
                </tr>
                </thead>
                <tbody>
                {nominas.map((nomina, indice) => (
                    <tr key={indice}>
                        <td>{nomina.idNomina}</td>
                        <td>{nomina.sueldo}</td>
                        <td>{formatearFecha(nomina.fechaPago)}</td>
                        <td>{nomina.empleado?.nombre}</td>
                        <td className="text-center">
                            <div className="d-flex justify-content-center gap-2">
                                <button
                                    onClick={() => abrirModal(nomina.idNomina)}
                                    className="btn btn-sm "
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => eliminarNomina(nomina.idNomina)}
                                    className="btn btn-sm "
                                >
                                    Eliminar
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <Modal show={showModal} onHide={cerrarModal} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Nomina</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {idEditar && <EditarNomina id={idEditar} onClose={cerrarModal} />}
                </Modal.Body>
            </Modal>
        </div>
    );
}
