import axios from 'axios';
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import areaImg from "../assets/img/area.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useNavigate } from 'react-router-dom';

export default function AgregarArea() {
    const navigate = useNavigate();
    const [mensaje, setMensaje] = useState('');
    const [area, setArea] = useState({ nombreArea: "" });

    const { nombreArea } = area;

    // Manejar cambios en el input
    const onInputChange = (e) => {
        setArea({ ...area, [e.target.name]: e.target.value });
    };

    // Manejar envío del formulario
    const onSubmit = async (e) => {
        e.preventDefault();
        const urlBase = "http://localhost:8085/rh-app/area-empleado/save";

        try {
            await axios.post(urlBase, area);
            setMensaje("✅ El área ha sido agregada exitosamente");
            setTimeout(() => {
                setMensaje("");
                navigate('/area');
                window.location.reload(); // opcional, según si necesitas actualizar la lista
            }, 2000);
        } catch (error) {
            console.error("Error al guardar:", error);
            setMensaje("❌ Ocurrió un error al agregar el área.");
        }
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">

                    {/* Imagen lateral */}
                    <Col md={6}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <img
                                    className={isVisible ? "animate__animated animate__zoomIn" : ""}
                                    src={areaImg}
                                    alt="Agregar Área"
                                />
                            )}
                        </TrackVisibility>
                    </Col>

                    {/* Formulario */}
                    <Col md={6}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h3>Agregar Área</h3>

                                    {mensaje && (
                                        <div className="alert alert-info mt-3" role="alert">
                                            {mensaje}
                                        </div>
                                    )}

                                    <form onSubmit={onSubmit}>
                                        <Row>
                                            <Col sm={12} className="px-1 mb-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="nombreArea"
                                                    name="nombreArea"
                                                    value={nombreArea}
                                                    placeholder="Nombre del área"
                                                    onChange={onInputChange}
                                                    required
                                                />
                                            </Col>

                                            <Col sm={12} className="px-1">
                                                <button type="submit" className="vvd me-3">
                                                    <span>Agregar</span>
                                                </button>
                                            </Col>
                                        </Row>
                                    </form>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>

                </Row>
            </Container>
        </section>
    );
}
