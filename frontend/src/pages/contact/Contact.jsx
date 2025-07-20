import React, { useEffect } from "react";
import './Contact.css';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const Contact = () => {
    useEffect(() => {
        document.title = "Contato - COAFNOR";
    }, []);

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Entre em Contato</h1>
                <p>Estamos aqui para atender você e esclarecer suas dúvidas</p>
            </div>

            <div className="contact-grid">
                <Card className="contact-card">
                    <div className="contact-info">
                        <i className="pi pi-map-marker contact-icon"></i>
                        <h3>Endereço</h3>
                        <p>Rua Estados Unidos, 44<br/>
                        Conjunto Lago Leste<br/>
                        Paraíso do Norte-PR<br/>
                        CEP: 87.780-000</p>
                    </div>
                </Card>

                <Card className="contact-card">
                    <div className="contact-info">
                        <i className="pi pi-phone contact-icon"></i>
                        <h3>Telefone</h3>
                        <p>(44) 3431-1981<br/>
                        WhatsApp: (44) 99182-4474</p>
                    </div>
                </Card>

                <Card className="contact-card">
                    <div className="contact-info">
                        <i className="pi pi-envelope contact-icon"></i>
                        <h3>E-mail</h3>
                        <p>coafnor@hotmail.com</p>
                    </div>
                </Card>

                <Card className="contact-card">
                    <div className="contact-info">
                        <i className="pi pi-clock contact-icon"></i>
                        <h3>Horário de Funcionamento</h3>
                        <p>Segunda a Sexta: 8h às 18h<br/>
                        Sábado: 8h às 12h<br/>
                        Domingo: Fechado</p>
                    </div>
                </Card>
            </div>

            <div className="contact-form-section">
                <Card className="contact-form-card">
                    <h2>Envie sua Mensagem</h2>
                    <form className="contact-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Nome Completo</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">E-mail</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Assunto</label>
                            <input type="text" id="subject" name="subject" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensagem</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <Button label="Enviar Mensagem" className="p-button-success contact-submit" />
                    </form>
                </Card>
            </div>

            <div className="management-section">
                <div className="management-header">
                    <h2>Gestão COAFNOR 2024/2026</h2>
                    <p>Conheça nossa atual gestão e equipe administrativa</p>
                </div>

                <div className="management-grid">
                    <Card className="management-card">
                        <div className="management-info">
                            <i className="pi pi-users management-icon"></i>
                            <h3>Diretoria Executiva</h3>
                            <div className="management-list">
                                <p><strong>Presidenta:</strong> Tânia Magna Voroniak</p>
                                <p><strong>Vice Presidente:</strong> Paulo Mariano</p>
                            </div>
                        </div>
                    </Card>

                    <Card className="management-card">
                        <div className="management-info">
                            <i className="pi pi-briefcase management-icon"></i>
                            <h3>Conselho Diretor</h3>
                            <div className="management-list">
                                <p>• Marcia de Freitas</p>
                                <p>• Aparecido Leva</p>
                                <p>• Francisco Pinto da Fonseca</p>
                                <p>• João Aparecido Esperança</p>
                                <p>• Jose Carlos da Fonseca</p>
                                <p>• Marcio Antonio da Silva</p>
                                <p>• Marcio Bandini</p>
                            </div>
                        </div>
                    </Card>

                    <Card className="management-card">
                        <div className="management-info">
                            <i className="pi pi-shield management-icon"></i>
                            <h3>Conselho Fiscal</h3>
                            <div className="management-list">
                                <p>• Antonio Giosa Junior</p>
                                <p>• Beatriz Crescencio da Silva</p>
                                <p>• Neuza Tuler Forlani</p>
                                <p>• Sueli de Freitas Colauto</p>
                                <p>• Regiane Biscola Sanches</p>
                            </div>
                        </div>
                    </Card>

                    <Card className="management-card">
                        <div className="management-info">
                            <i className="pi pi-cog management-icon"></i>
                            <h3>Equipe Administrativa</h3>
                            <div className="management-list">
                                <p><strong>Assistente Administrativo:</strong><br/>
                                Juliana Aparecida Candido Lopes</p>
                                <p><strong>Auxiliares Administrativos:</strong><br/>
                                Juliana da Silva, Julliane Gonçalves,<br/>
                                Jaqueline Schuwarts Lima Aguiar,<br/>
                                Allane de Souza Silva</p>
                            </div>
                        </div>
                    </Card>

                    <Card className="management-card">
                        <div className="management-info">
                            <i className="pi pi-heart management-icon"></i>
                            <h3>Equipe Técnica</h3>
                            <div className="management-list">
                                <p><strong>Nutricionista:</strong><br/>
                                Vanuza Neres Pacheco Carluccio</p>
                                <p><strong>Veterinária:</strong><br/>
                                Yasmim Camillo Leone</p>
                            </div>
                        </div>
                    </Card>

                    <Card className="management-card">
                        <div className="management-info">
                            <i className="pi pi-wrench management-icon"></i>
                            <h3>Equipe Operacional</h3>
                            <div className="management-list">
                                <p><strong>Laticínio e Padaria:</strong><br/>
                                Claudinei dos Santos Peres (Operador),<br/>
                                Daniele do Nascimento (Padeira),<br/>
                                Marcia Regina do Nascimento,<br/>
                                Camila Magoci da Silva,<br/>
                                Maria Aparecida Lopo do Nascimento</p>
                                <p><strong>Logística:</strong><br/>
                                Edson Dantas da Silva (Motorista),<br/>
                                Felipe Simplicio Campaner,<br/>
                                Juliano Aparecido Gonçalves Pires</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Contact;
