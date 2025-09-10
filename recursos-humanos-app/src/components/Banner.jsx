import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FcRight } from "react-icons/fc";
import headerImg from "../assets/img/header-img.svg"
import TrackVisibility from 'react-on-screen';
import 'animate.css';


export const Banner = ()  => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "al Sistema de Empleados", "al Módulo de Nómina", "a Recursos Humanos" ];
    const [text, setText] = useState('');
    const period = 2000;
    const [index, setIndex] = useState(1);
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <span className="tagline">Gestión del Talento Humano</span>
                                    <h1>{`¡Bienvenido `} <span className="txt-rotate" dataperiod="1000" data-rotate='[ "al Portal", "de Recursos",  "Humanos!" ]'><span className="wrap">{text}</span></span></h1>
                                    <p>Gestionamos de forma eficiente la información de empleados, nómina, áreas y mucho más.
                                        Conectamos personas con propósito.</p>
                                    <button onClick={() => console.log('connect')}>Comenzar <FcRight size={25} /></button>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={headerImg} alt="Header Img"/>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}