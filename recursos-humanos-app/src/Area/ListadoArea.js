import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import EditarArea from "./EditarArea";


export default function ListadoArea() {
    const urlBase = "http://localhost:8085/rh-app/area-empleado";
    const [ areas, setArea] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [idEditar, setIdEditar] = useState(null);


    useEffect(() => {
        cargarArea();
    }, []);

    const cargarArea = async () => {
        try {
            const resultado = await axios.get(urlBase);
            setArea(resultado.data);
        } catch (error) {
            console.error("Error al cargar area:", error);
        }
    };

    const eliminarArea = async (id) => {
        try {
            await axios.delete(`${urlBase}/delete/${id}`);
            cargarArea();
        } catch (error) {
            console.error("Error al eliminar area:", error);
        }
    };

    const abrirModal = (id) => {
        setIdEditar(id);
        setShowModal(true);
    };

    const cerrarModal = () => {
        setShowModal(false);
        cargarArea();
    };

    return (
        <div className="container">
            <div className="text-center my-4">
                <h3>Listado de Areas</h3>
            </div>

            <table className="table table-striped table-responsive">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Area</th>
                    <th className="text-center">Acciones</th>
                </tr>
                </thead>
                <tbody>
                {areas.map((area, indice) => (
                    <tr key={indice}>
                        <td>{area.idAreaEmpleado}</td>
                        <td>{area.nombreArea}</td>
                        <td className="text-center">
                            <div className="d-flex justify-content-center gap-2">
                                <button
                                    onClick={() => abrirModal(area.idAreaEmpleado)}
                                    className="btn btn-sm "
                                >
                                    Editar
                                </button>
                                <button
                                    onClick={() => eliminarArea(area.idAreaEmpleado)}
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
                    <Modal.Title>Editar Area</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {idEditar && <EditarArea id={idEditar} onClose={cerrarModal} />}
                </Modal.Body>
            </Modal>
        </div>
    );

}
