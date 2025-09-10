import axios from 'axios';
import { useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import NominaImg from '../assets/img/nomina.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useNavigate } from 'react-router-dom';

export default function AgregarNomina() {
    const navegacion = useNavigate();
    const [mensaje, setMensaje] = useState("");

    const [nomina, setNomina] = useState({
        sueldo: "",
        fechaPago: "",
        idEmpleado: ""


    });

    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        cargarEmpleados();
    }, []);

    const cargarEmpleados = async () => {
        try {
            const resultado = await axios.get("http://localhost:8085/rh-app/empleados");
            setEmpleados(resultado.data);
        } catch (error) {
            console.error("Error al cargar los empleados:", error);
        }
    };

    const {sueldo, fechaPago, idEmpleado} = nomina;

    const onInputChange = (e) => {
        setNomina({...nomina,[e.target.name]:e.target.value});
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const urlBase = "http://localhost:8085/rh-app/nomina/save";
        try {
            await axios.post(urlBase, nomina);
            setMensaje("✅ Nomina Agregada exitosamente ");
            setTimeout(() => {
                setMensaje("");
                navegacion("/nomina");
                window.location.reload();
            },2000);
        }catch(error) {
            console.error("Error al guardar",error);
            setMensaje("Error al guardar la nomina");
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
                                    src={NominaImg}
                                    alt="Agregar Nomina"
                                />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <h2>Agregar Nomina</h2>
                                {mensaje && (
                                    <div className="alert alert-info mt-3" role="alert">
                                        {mensaje}
                                    </div>
                                )}
                                <form onSubmit={onSubmit}>
                                    <Row>
                                        <Col sm={12} md={6}  className="px-1">
                                            <input
                                                type="text"
                                                name="sueldo"
                                                value={sueldo}
                                                placeholder="Sueldo"
                                                onChange={onInputChange}
                                                required
                                            />
                                        </Col>
                                        <Col  size={12} sm={6} className="px-1">
                                            <input
                                            type="date"
                                            name="fechaPago"
                                            value={fechaPago}
                                            placeholder="Fecha pago"
                                            onChange={onInputChange}
                                            required
                                            />
                                        </Col>
                                        <Col  size={12} sm={6} className="px-1">
                                            <select
                                                className="form-select"
                                                name="idEmpleado"
                                                value={nomina.idEmpleado}
                                                onChange={onInputChange}
                                            >
                                                <option value="">Selecione un empleado</option>
                                                {empleados.map((empleado) => (
                                                    <option key={empleado.idEmpleado} value={empleado.idEmpleado}>
                                                        {empleado.nombre}
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