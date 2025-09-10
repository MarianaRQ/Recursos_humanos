import { Container, Row, Col } from "react-bootstrap";
import InicioImg from "../assets/img/inicio.svg"; // Usa una imagen relacionada a RRHH
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const InicioRecursosHumanos = () => {
    return (
        <section className="contact" id="inicio-rh">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img
                                    className={isVisible ? "animate__animated animate__zoomIn" : ""}
                                    src={InicioImg}
                                    alt="Sistema de Recursos Humanos"
                                />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Sistema de Recursos Humanos</h2>
                                    <p>
                                        Bienvenido al sistema de gestión de Recursos Humanos. Aquí podrás:
                                    </p>
                                    <ul>
                                        <li>📋 Registrar y administrar empleados</li>
                                        <li>🏢 Asignar y consultar áreas</li>
                                        <li>💰 Gestionar la nómina y los pagos</li>
                                        <li>📈 Visualizar reportes y estadísticas</li>
                                    </ul>
                                    <p>
                                        Comienza navegando por el menú o utilizando las opciones disponibles en la barra lateral.
                                    </p>
                                    <button className="btn btn-info mt-3">Explorar</button>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
