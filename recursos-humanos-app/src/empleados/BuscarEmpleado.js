import React, { useState } from "react";
import axios from "axios";
import { Col, Row, Alert } from "react-bootstrap";

export default function BuscarEmpleado() {
    const [id, setId] = useState("");
    const [empleado, setEmpleado] = useState(null);
    const [error, setError] = useState("");

    const buscarEmpleado = async () => {
        try {
            const respuesta = await axios.get(`http://localhost:8085/rh-app/empleados/${id}`);
            setEmpleado(respuesta.data);
            setError("");
        } catch (error) {
            setEmpleado(null);
            setError("Empleado no encontrado o error de conexión.");
        }
    };

    return (
        <Col lg={12}>
            <div className="newsletter-bx wow slideInUp">
                <h3>Buscar Empleado por ID</h3>

                <Row className="align-items-center mb-3">
                    <Col md={6}>
                        <div className="new-email-bx d-flex">
                            <input
                                type="number"
                                id="idEmpleado"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                placeholder="Digite el id del empleado"
                                className="form-control me-2"
                            />
                            <button className="btn btn-primary" onClick={buscarEmpleado}>
                                Buscar
                            </button>
                        </div>
                    </Col>

                {error && (
                    <Row className="mb-3">
                        <Col md={6}>
                            <Alert variant="danger">{error}</Alert>
                        </Col>
                    </Row>
                )}

                {empleado && (
                        <Col md={6}>
                            <div className="card mt-3 border-info px-4 mb-3">
                                <div className="card-body text-center">
                                    <h5 className="card-title">{empleado.nombre}</h5>
                                    <p className="card-text">
                                        <strong>Departamento:</strong> {empleado.departamento}
                                    </p>
                                    <p className="card-text">
                                        <strong>Teléfono:</strong> {empleado.telefono}
                                    </p>
                                </div>
                            </div>
                        </Col>
                )}
                </Row>

            </div>
        </Col>
    );
}
