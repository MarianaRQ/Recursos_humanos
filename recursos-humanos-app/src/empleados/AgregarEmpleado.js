import axios from 'axios';
import { useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import empleadoImg from '../assets/img/empleado.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useNavigate } from 'react-router-dom';

export default function AgregarEmpleado() {
    const navegacion = useNavigate();
    const [mensaje, setMensaje] = useState("");

    const [empleado, setEmpleado] = useState({
        nombre: "",
        departamento: "",
        telefono: "",
        idAreaEmpleado: ""
    });
    const [areas, setAreas] = useState([]);


    useEffect(() => {
        cargarAreas();
    }, []);

    const cargarAreas = async () => {
        try {
            const resultado = await axios.get("http://localhost:8085/rh-app/area-empleado");
            setAreas(resultado.data);
        } catch (error) {
            console.error("Error al cargar las áreas:", error);
        }
    };

    const { nombre, departamento, telefono, idAreaEmpleado } = empleado;

    const onInputChange = (e) => {
        setEmpleado({ ...empleado, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const urlBase = "http://localhost:8085/rh-app/empleados/save";
        try {
            await axios.post(urlBase, empleado);
            setMensaje("✅ Empleado agregado correctamente.");
            setTimeout(() => {
                setMensaje("");
                navegacion('/empleados');
                window.location.reload();
            }, 2000);
        } catch (error) {
            console.error("Error al guardar:", error);
            setMensaje("❌ Ocurrió un error al agregar el empleado.");
        }
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img
                                    className={isVisible ? "animate__animated animate__zoomIn" : ""}
                                    src={empleadoImg}
                                    alt="Agregar Empleado"
                                />
                            }
                        </TrackVisibility>
                    </Col>

                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Agregar Empleado</h2>

                                    {mensaje && (
                                        <div className="alert alert-info mt-3" role="alert">
                                            {mensaje}
                                        </div>
                                    )}

                                    <form onSubmit={onSubmit}>
                                        <Row>
                                            <Col size={12} sm={6} className="px-1">
                                                <input
                                                    type="text"
                                                    name="nombre"
                                                    value={nombre}
                                                    placeholder="Nombre"
                                                    onChange={onInputChange}
                                                    required
                                                />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input
                                                    type="text"
                                                    name="departamento"
                                                    value={departamento}
                                                    placeholder="Departamento"
                                                    onChange={onInputChange}
                                                    required
                                                />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input
                                                    type="tel"
                                                    name="telefono"
                                                    value={telefono}
                                                    placeholder="Teléfono"
                                                    onChange={onInputChange}
                                                    required
                                                />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
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
                                            </Col>
                                            <Col size={12} className="px-1">
                                                <button type="submit" className="vvd me-2">
                                                    <span>Agregar</span>
                                                </button>

                                            </Col>
                                        </Row>
                                    </form>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
