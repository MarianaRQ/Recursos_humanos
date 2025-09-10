import React, { useState } from "react";
import axios from "axios";
import { Col, Row, Alert } from "react-bootstrap";

export default function BuscarNomina() {
    const [id, setId] = useState("");
    const [nomina, setNomina] = useState(null);
    const [error, setError] = useState("");

    const buscarNomina = async () => {
        try {
            const respuesta = await axios.get(`http://localhost:8085/rh-app/nomina/${id}`);
            setNomina(respuesta.data);
            setError("");
        } catch (error) {
            setNomina(null);
            setError("Nómina no encontrada o error de conexión");
        }
    };

    const formatFecha = (fechaISO) => {
        const fecha = new Date(fechaISO);
        return fecha.toLocaleDateString("es-CO", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    };

    return (
        <Col lg={12}>
            <div className="newsletter-bx wow slideInUp">
                <h3>Buscar Nómina por ID</h3>
                <Row className="align-items-center mb-3">
                    <Col md={6}>
                        <div className="new-email-bx d-flex">
                            <input
                                type="number"
                                id="idNomina"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                placeholder="Digite el ID de la nómina"
                                className="form-control me-2"
                            />
                            <button className="btn btn-primary" onClick={buscarNomina}>
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

                    {nomina && (
                        <Col md={6}>
                            <div className="card mt-3 border-info px-4 mb-3">
                                <div className="card-body text-center">
                                    <h3 className="card-title">{nomina.empleado?.nombre || "No asignado"}</h3>
                                    <p className="card-text">
                                        <strong>Fecha de pago:</strong> {formatFecha(nomina.fechaPago)}
                                    </p>
                                    <p className="card-text">
                                        <strong>Sueldo:</strong> $ {nomina.sueldo.toLocaleString("es-CO")}
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
