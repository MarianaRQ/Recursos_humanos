import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const SkillsEmpleado = () => {
    const [empleados, setEmpleados] = useState([]);
    const urlBase = "http://localhost:8085/rh-app/empleados";

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

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
        mobile: { breakpoint: { max: 768, min: 0 }, items: 1 }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Empleados</h2>
                            <p>Conoce a nuestro equipo de trabajo en tarjetas personalizadas.</p>

                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                arrows={true} // ← muestra flechas
                                autoPlay={false}
                                className="skill-slider"
                            >
                                {empleados.map((empleado, index) => (
                                    <div
                                        className="card bg-dark text-white p-3 m-2 border border-info"
                                        key={index}
                                        style={{
                                            minHeight: "220px",
                                            borderRadius: "15px",
                                            boxShadow: "0 0 10px rgba(0, 183, 255, 0.5)"
                                        }}
                                    >
                                        <h5 className="card-title">{empleado.nombre}</h5>
                                        <p className="card-text mb-1">
                                            <strong>Departamento:</strong> {empleado.departamento}
                                        </p>
                                        <p className="card-text">
                                            <strong>Telefono:</strong> {empleado.telefono}
                                        </p>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="fondo" />
        </section>
    );
};
