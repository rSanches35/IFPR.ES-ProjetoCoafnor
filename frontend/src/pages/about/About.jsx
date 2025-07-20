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
                    <h2>Nossa História</h2>
                    <p>
                        A COAFNOR foi fundada com o objetivo de fortalecer a agricultura familiar 
                        na região norte, promovendo o desenvolvimento sustentável e a qualidade 
                        de vida dos cooperados.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Missão</h2>
                    <p>
                        Promover o desenvolvimento da agricultura familiar através da cooperação, 
                        inovação e sustentabilidade, garantindo melhores condições de vida para 
                        nossos cooperados e suas famílias.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Visão</h2>
                    <p>
                        Ser referência em cooperativismo agrícola na região, reconhecida pela 
                        qualidade dos produtos, inovação tecnológica e compromisso com a 
                        sustentabilidade.
                    </p>
                </section>

                <section className="about-section">
                    <h2>Valores</h2>
                    <ul>
                        <li>Cooperação e solidariedade</li>
                        <li>Sustentabilidade ambiental</li>
                        <li>Inovação e tecnologia</li>
                        <li>Transparência e ética</li>
                        <li>Qualidade e excelência</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default About;
