import React, { useEffect, useState } from "react";
import './Products.css';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { Chip } from 'primereact/chip';
import { Accordion, AccordionTab } from 'primereact/accordion';
import coafnorData from '../../data/coafnorData';

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        document.title = "Produtos - COAFNOR";
    }, []);

    const categoryCard = (category) => {
        const productCount = category.products.length;
        
        return (
            <Card 
                className="product-category-card"
                onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
            >
                <div className="category-header">
                    <div className="category-info">
                        <h3>{category.name}</h3>
                        <p className="category-description">{category.description}</p>
                        <Badge value={`${productCount} produtos`} severity="success" />
                    </div>
                    <Button 
                        icon={selectedCategory === category.id ? "pi pi-chevron-up" : "pi pi-chevron-down"}
                        className="p-button-text p-button-rounded"
                    />
                </div>
                
                {selectedCategory === category.id && (
                    <div className="products-list">
                        <div className="products-grid">
                            {category.products.map((product, index) => (
                                <Chip 
                                    key={index} 
                                    label={product} 
                                    className="product-chip"
                                />
                            ))}
                        </div>
                    </div>
                )}
            </Card>
        );
    };

    return (
        <div className="products-container">
            <div className="products-header-section">
                <h1>Nossos Produtos</h1>
                <p>Conheça a diversidade de produtos oferecidos pela COAFNOR</p>
            </div>

            <div className="statistics-section">
                <div className="stats-grid">
                    <Card className="stat-card">
                        <div className="stat-content">
                            <i className="pi pi-shopping-cart stat-icon"></i>
                            <h3>{coafnorData.products.statistics.totalProducts}+</h3>
                            <p>Produtos Disponíveis</p>
                        </div>
                    </Card>
                    
                    <Card className="stat-card">
                        <div className="stat-content">
                            <i className="pi pi-users stat-icon"></i>
                            <h3>{coafnorData.products.statistics.totalCooperatives}</h3>
                            <p>Cooperados Produtores</p>
                        </div>
                    </Card>
                    
                    <Card className="stat-card">
                        <div className="stat-content">
                            <i className="pi pi-map stat-icon"></i>
                            <h3>{coafnorData.products.marketCoverage.length}</h3>
                            <p>Municípios Atendidos</p>
                        </div>
                    </Card>
                    
                    <Card className="stat-card">
                        <div className="stat-content">
                            <i className="pi pi-tag stat-icon"></i>
                            <h3>{coafnorData.products.categories.length}</h3>
                            <p>Categorias</p>
                        </div>
                    </Card>
                </div>
            </div>

            <div className="categories-section">
                <h2>Categorias de Produtos</h2>
                <div className="categories-grid">
                    {coafnorData.products.categories.map(category => (
                        <div key={category.id} className="category-item">
                            {categoryCard(category)}
                        </div>
                    ))}
                </div>
            </div>

            <div className="producers-section">
                <Card className="producers-card">
                    <h3>Nossos Produtores por Categoria</h3>
                    <div className="producers-stats">
                        <div className="producer-stat">
                            <span className="producer-icon">🥛</span>
                            <span className="producer-count">{coafnorData.products.statistics.producers.milk}</span>
                            <span className="producer-label">Produtores de Leite</span>
                        </div>
                        <div className="producer-stat">
                            <span className="producer-icon">🥬</span>
                            <span className="producer-count">{coafnorData.products.statistics.producers.horticulture}</span>
                            <span className="producer-label">Produtores de Hortifrutis</span>
                        </div>
                        <div className="producer-stat">
                            <span className="producer-icon">🍞</span>
                            <span className="producer-count">{coafnorData.products.statistics.producers.bakery}</span>
                            <span className="producer-label">Produtores de Panificados</span>
                        </div>
                        <div className="producer-stat">
                            <span className="producer-icon">🏪</span>
                            <span className="producer-count">{coafnorData.products.statistics.producers.others}</span>
                            <span className="producer-label">Outros Produtos</span>
                        </div>
                    </div>
                </Card>
            </div>

            <div className="coverage-section">
                <Card className="coverage-card">
                    <h3>Cobertura de Mercado</h3>
                    <p>Nossos produtos estão presentes em {coafnorData.products.marketCoverage.length} municípios:</p>
                    <div className="cities-grid">
                        {coafnorData.products.marketCoverage.map((city, index) => (
                            <Chip 
                                key={index} 
                                label={city} 
                                className="city-chip"
                            />
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Products;
