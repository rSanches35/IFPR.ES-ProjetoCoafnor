import React, { useEffect } from "react";
import './About.css';

const About = () => {
    useEffect(() => {
        document.title = "Sobre - COAFNOR";
    }, []);

    return (
        <div className="about-container">
            <div className="about-header">
                <h1>Sobre a COAFNOR</h1>
                <p className="about-subtitle">Cooperativa de Agricultores Familiares do Norte</p>
            </div>

            <div className="about-content">

                <section className="about-section">
                    <h2>Missão</h2>
                    <p>
                        Buscar a comercialização de produtos dos cooperados, garantindo a qualidade e 
                        excelência no atendimento aos clientes, possibilitando a igualdade e permanência
                        do agricultor no meio rural, priorizando a Agricultura Familiar
                    </p>
                </section>

                <section className="about-section">
                    <h2>Visão</h2>
                    <p>
                        Ser reconhecida pela diversidade e excelência dos produtos ofertados pelos agricultores,
                        sempre buscando a qualificação do quadro social e colaboradores.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Valores</h2>
                    <ul>
                        <li>Qualidade</li>
                        <li>Cooperação</li>
                        <li>Ética</li>
                        <li>Responsabilidade Social</li>
                        <li>Transparência</li>
                        <li>Inovação</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default About;
