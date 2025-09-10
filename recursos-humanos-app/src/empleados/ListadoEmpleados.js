import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import EditarEmpleado from "./EditarEmpleado";

export default function ListadoEmpleados() {
    const urlBase = "http://localhost:8085/rh-app/empleados";
    const [empleados, setEmpleados] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [idEditar, setIdEditar] = useState(null);

    useEffect(() => {
        cargarEmpleados();
    }, []);

    const cargarEmpleados = async () => {
        try {
            const resultado = await axios.get(urlBase);
            setEmpleados(resultado.data);
        } catch (error) {
            console.error("Error al cargar empleados:", error);
        }
    };

    const eliminarEmpleado = async (id) => {
        try {
            await axios.delete(`${urlBase}/delete/${id}`);
            cargarEmpleados();
        } catch (error) {
            console.error("Error al eliminar empleado:", error);
        }
    };

    const abrirModal = (id) => {
        setIdEditar(id);
        setShowModal(true);
    };

    const cerrarModal = () => {
        setShowModal(false);
        cargarEmpleados(); // Recargar empleados después de editar
    };

    return (
        <div className="container">
            <div className="text-center my-4">
                <h3>Listado de Empleados</h3>
            </div>

            <table className="table table-striped table-responsive">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Empleado</th>
                    <th>Departamento</th>
                    <th>Teléfono</th>
                    <th>Área</th>
                    <th className="text-center">Acciones</th>
                </tr>
                </thead>
                <tbody>
                {empleados.map((empleado, indice) => (
                    <tr key={indice}>
                        <td>{empleado.idEmpleado}</td>
                        <td>{empleado.nombre}</td>
                        <td>{empleado.departamento}</td>
                        <td>{empleado.telefono}</td>
                        <td>{empleado.areaEmpleado?.nombreArea}</td>
                        <td className="text-center">
                            <div className="d-flex justify-content-center gap-2">
                                <button
                                    onClick={() => abrirModal(empleado.idEmpleado)}
                                    className="btn btn-sm "
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => eliminarEmpleado(empleado.idEmpleado)}
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
                    <Modal.Title>Editar Empleado</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {idEditar && <EditarEmpleado id={idEditar} onClose={cerrarModal} />}
                </Modal.Body>
            </Modal>
        </div>
    );
}
