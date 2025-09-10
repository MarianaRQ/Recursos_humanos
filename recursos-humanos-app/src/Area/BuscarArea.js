import React, { useState } from "react";
import axios from "axios";
import { Col, Row, Alert } from "react-bootstrap";

export default function BuscarArea () {
    const [id, setId] = useState("");
    const [area, setArea] = useState(null);
    const [error, setError] = useState("");

    const buscarArea = async () => {
        try {
            const respuesta = await axios.get(`http://localhost:8085/rh-app/area-empleado/${id}`);
            setArea(respuesta.data);
            setError("");
        } catch (err) {
            setArea(null);
            setError("Empleado no encontrado o error de conexión.");
        }
    };

    return (
        <Col lg={12}>

            <div className="newsletter-bx wow slideInUp">
                <h3>Buscar Area por ID</h3>
                <Row>
                    <Col md={6}>
                         <div className="new-email-bx">
                                <input
                                    type="number"
                                    id="idEmpleado"
                                    value={id}
                                    onChange={(e) => setId(e.target.value)}
                                    placeholder="Digite el id del área"
                                />
                             <button className="btn btn-primary mt-2" onClick={buscarArea}>Buscar
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

                    {area && (
                        <Col md={6}>
                            <div className="card mt-3 border-info px-4 mb-3">
                                <div className="card-body text-center">

                                <h5 className="card-title">{area.nombreArea}</h5>
                            </div>
                        </div>
                        </Col>
                    )}
                </Row>
            </div>
        </Col>
    );
}