import React from "react";
import './Footer.css';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-grid">
                    <div className="footer-section">
                        <h3>COAFNOR</h3>
                        <p>Cooperativa Agropecuária e Agroindustrial dos Agricultores Familiares do Território Noroeste</p>
                        <div className="contact-info">
                            <p><i className="pi pi-map-marker"></i> Rua Estados Unidos, 44 - Paraíso do Norte/PR</p>
                            <p><i className="pi pi-phone"></i> (44) 3431-1981</p>
                            <p><i className="pi pi-envelope"></i> coafnor@hotmail.com</p>
                        </div>
                    </div>
                    
                    <div className="footer-section">
                        <h3>Projeto de Extensão</h3>
                        <div className="project-info">
                            <h4>"Do Campo à Mesa"</h4>
                            <p>Extensão Universitária para Fortalecer a Sustentabilidade Ambiental, Econômica, Social e Higiênico-Sanitária de Leite e Queijo da Agricultura Familiar no Noroeste do Paraná</p>
                        </div>
                    </div>
                    
                    <div className="footer-section">
                        <h3>Parceria Institucional</h3>
                        <div className="institution-info">
                            <p><strong>Professor Responsável:</strong></p>
                            <p>Fernando Sanches de Lima</p>
                            <p><i className="pi pi-envelope"></i> fernando.lima@ifpr.edu.br</p>
                            <div className="institution-logo">
                                <p><strong>Instituição:</strong></p>
                                <p>Instituto Federal do Paraná (IFPR)</p>
                                <p>Campus Paranavaí</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Divider />
                
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p>&copy; 2024 COAFNOR - Todos os direitos reservados</p>
                        <p>Desenvolvido em parceria com IFPR - Campus Paranavaí</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
