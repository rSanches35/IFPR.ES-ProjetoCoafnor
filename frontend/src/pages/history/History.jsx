import React, { useEffect } from "react";
import './History.css';
import { Card } from 'primereact/card';
import { Timeline } from 'primereact/timeline';
import { Chip } from 'primereact/chip';
import coafnorData from '../../data/coafnorData';

const History = () => {
    useEffect(() => {
        document.title = "História - COAFNOR";
    }, []);

    const customMarker = (item) => (
        <span className="custom-marker p-shadow-2" style={{ backgroundColor: '#4CAF50' }}>
            <i className="pi pi-calendar"></i>
        </span>
    );

    const customContent = (item) => (
        <Card className="timeline-card">
            <div className="timeline-content">
                <h4 className="timeline-year">{item.year}</h4>
                <h5 className="timeline-title">{item.title}</h5>
                {item.date && <Chip label={item.date} className="timeline-date" />}
                <p className="timeline-description">{item.description}</p>
            </div>
        </Card>
    );

    return (
        <div className="history-container">
            <div className="history-header-section">
                <h1>História da COAFNOR</h1>
                <p>Conheça a trajetória da nossa cooperativa desde suas origens</p>
            </div>

            <div className="history-story">
                <Card className="story-card">
                    <h3>Nossa Jornada</h3>
                    <p>{coafnorData.history.foundingStory}</p>
                </Card>
            </div>

            <div className="timeline-section">
                <h2>Linha do Tempo</h2>
                <Timeline 
                    value={coafnorData.history.timeline} 
                    opposite={(item) => item.year}
                    content={customContent}
                    marker={customMarker}
                />
            </div>

            <div className="achievements-section">
                <Card className="achievements-card">
                    <h3>Principais Conquistas</h3>
                    <ul className="achievements-list">
                        {coafnorData.history.achievements.map((achievement, index) => (
                            <li key={index} className="achievement-item">
                                <i className="pi pi-check-circle"></i>
                                {achievement}
                            </li>
                        ))}
                    </ul>
                </Card>
            </div>

            <div className="infrastructure-section">
                <h2>Nossa Infraestrutura</h2>
                
                <div className="infrastructure-grid">
                    <Card className="infrastructure-card">
                        <div className="infrastructure-header">
                            <i className="pi pi-building infrastructure-icon"></i>
                            <h3>{coafnorData.infrastructure.dairy.name}</h3>
                            <span className="establishment-year">{coafnorData.infrastructure.dairy.established}</span>
                        </div>
                        <p className="infrastructure-location">📍 {coafnorData.infrastructure.dairy.location}</p>
                        <p className="infrastructure-description">{coafnorData.infrastructure.dairy.description}</p>
                        
                        <h4>Instalações:</h4>
                        <ul className="facilities-list">
                            {coafnorData.infrastructure.dairy.facilities.map((facility, index) => (
                                <li key={index}>{facility}</li>
                            ))}
                        </ul>
                        
                        <h4>Produtos:</h4>
                        <div className="products-chips">
                            {coafnorData.infrastructure.dairy.products.map((product, index) => (
                                <Chip key={index} label={product} className="product-chip" />
                            ))}
                        </div>
                    </Card>

                    <Card className="infrastructure-card">
                        <div className="infrastructure-header">
                            <i className="pi pi-home infrastructure-icon"></i>
                            <h3>{coafnorData.infrastructure.bakery.name}</h3>
                            <span className="establishment-year">{coafnorData.infrastructure.bakery.established}</span>
                        </div>
                        <p className="infrastructure-location">📍 {coafnorData.infrastructure.bakery.location}</p>
                        <p className="infrastructure-description">{coafnorData.infrastructure.bakery.description}</p>
                        
                        <div className="investment-info">
                            <h4>Investimento: {coafnorData.infrastructure.bakery.specifications.totalInvestment}</h4>
                            <ul className="funding-list">
                                <li>🏛️ {coafnorData.infrastructure.bakery.specifications.funding.municipal}</li>
                                <li>🏢 {coafnorData.infrastructure.bakery.specifications.funding.state}</li>
                                <li>🤝 {coafnorData.infrastructure.bakery.specifications.funding.cooperative}</li>
                            </ul>
                        </div>
                        
                        <h4>Objetivos:</h4>
                        <ul className="objectives-list">
                            {coafnorData.infrastructure.bakery.objectives.map((objective, index) => (
                                <li key={index}>{objective}</li>
                            ))}
                        </ul>
                    </Card>
                </div>
            </div>

            <div className="mission-section">
                <Card className="mission-card">
                    <h3>Nossa Missão</h3>
                    <p>{coafnorData.history.mission}</p>
                </Card>
            </div>
        </div>
    );
};

export default History;
