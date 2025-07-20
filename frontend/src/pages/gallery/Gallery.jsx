import React, { useEffect, useState } from 'react';
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import './Gallery.css';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [dialogVisible, setDialogVisible] = useState(false);

    useEffect(() => {
        document.title = "Galeria - COAFNOR";
    }, []);

    const allImages = [
        "DSC04198.JPG","DSC04209.JPG","DSC04217.JPG","DSC04225.JPG",
        "DSC04230.JPG","DSC04247.JPG","DSC04250.JPG","DSC04252.JPG",
        "DSC04256.JPG","DSC04260.JPG","DSC04266.JPG","DSC04270.JPG",
        "DSC04277.JPG","DSC04281.JPG","DSC04290.JPG","DSC04291.JPG",
        "DSC04296.JPG",
    ];

    // Lista de vídeos do Google Drive
    // Para cada vídeo: 1. Faça upload no Google Drive, 2. Configure como "Qualquer pessoa com o link", 3. Copie o link de compartilhamento
    const allVideos = [
        {
            name: "DJI_0006.MP4",
            driveUrl: "https://drive.google.com/file/d/SEU_ID_AQUI_1/view?usp=sharing", // Substitua pelo link real
            embedUrl: "https://drive.google.com/file/d/SEU_ID_AQUI_1/preview" // Substitua pelo link real
        },
        {
            name: "DJI_0009.MP4", 
            driveUrl: "https://drive.google.com/file/d/SEU_ID_AQUI_2/view?usp=sharing",
            embedUrl: "https://drive.google.com/file/d/SEU_ID_AQUI_2/preview"
        },
        {
            name: "DJI_0017.MP4",
            driveUrl: "https://drive.google.com/file/d/SEU_ID_AQUI_3/view?usp=sharing",
            embedUrl: "https://drive.google.com/file/d/SEU_ID_AQUI_3/preview"
        },
        {
            name: "DJI_0035.MP4",
            driveUrl: "https://drive.google.com/file/d/SEU_ID_AQUI_4/view?usp=sharing",
            embedUrl: "https://drive.google.com/file/d/SEU_ID_AQUI_4/preview"
        },
        {
            name: "DJI_0037.MP4",
            driveUrl: "https://drive.google.com/file/d/SEU_ID_AQUI_5/view?usp=sharing",
            embedUrl: "https://drive.google.com/file/d/SEU_ID_AQUI_5/preview"
        },
        {
            name: "DJI_0040.MP4",
            driveUrl: "https://drive.google.com/file/d/SEU_ID_AQUI_6/view?usp=sharing",
            embedUrl: "https://drive.google.com/file/d/SEU_ID_AQUI_6/preview"
        },
        {
            name: "DJI_0041.MP4",
            driveUrl: "https://drive.google.com/file/d/SEU_ID_AQUI_7/view?usp=sharing",
            embedUrl: "https://drive.google.com/file/d/SEU_ID_AQUI_7/preview"
        },
        {
            name: "DJI_0042.MP4",
            driveUrl: "https://drive.google.com/file/d/SEU_ID_AQUI_8/view?usp=sharing",
            embedUrl: "https://drive.google.com/file/d/SEU_ID_AQUI_8/preview"
        },
        {
            name: "DJI_0055.MP4",
            driveUrl: "https://drive.google.com/file/d/SEU_ID_AQUI_9/view?usp=sharing",
            embedUrl: "https://drive.google.com/file/d/SEU_ID_AQUI_9/preview"
        },
        {
            name: "DJI_0056.MP4",
            driveUrl: "https://drive.google.com/file/d/SEU_ID_AQUI_10/view?usp=sharing",
            embedUrl: "https://drive.google.com/file/d/SEU_ID_AQUI_10/preview"
        },
        {
            name: "DJI_0062.MP4",
            driveUrl: "https://drive.google.com/file/d/SEU_ID_AQUI_11/view?usp=sharing",
            embedUrl: "https://drive.google.com/file/d/SEU_ID_AQUI_11/preview"
        },
        {
            name: "DJI_0072.MP4",
            driveUrl: "https://drive.google.com/file/d/SEU_ID_AQUI_12/view?usp=sharing",
            embedUrl: "https://drive.google.com/file/d/SEU_ID_AQUI_12/preview"
        },
        {
            name: "DJI_0079.MP4",
            driveUrl: "https://drive.google.com/file/d/SEU_ID_AQUI_13/view?usp=sharing",
            embedUrl: "https://drive.google.com/file/d/SEU_ID_AQUI_13/preview"
        }
    ];

    const openImage = (imageSrc) => {
        setSelectedImage(imageSrc);
        setDialogVisible(true);
    };

    const closeDialog = () => {
        setDialogVisible(false);
        setSelectedImage(null);
    };

    return (
        <div className="gallery-container">
            <div className="gallery-header">
                <h1>Galeria COAFNOR</h1>
                <p>Conheça nossa cooperativa através de imagens da visita técnica</p>
            </div>

            <div className="simple-gallery">
                <h2 className="section-title">📸 Fotos da Visita Técnica</h2>
                <div className="images-grid">
                    {allImages.map((imageName, index) => (
                        <div key={index} className="image-item" onClick={() => openImage(`/images/visitaTecnica/${imageName}`)}>
                            <img 
                                src={`/images/visitaTecnica/${imageName}`}
                                alt={`COAFNOR - Imagem ${index + 1}`}
                                className="gallery-thumbnail"
                                loading="lazy"
                                onError={(e) => {
                                    e.target.style.display = 'none'; 
                                }}
                            />
                            <div className="image-overlay">
                                <i className="pi pi-eye"></i>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Seção de Vídeos */}
                {allVideos.length > 0 && (
                    <>
                        <h2 className="section-title" style={{marginTop: '3rem'}}>🎥 Vídeos da COAFNOR</h2>
                        <div className="videos-grid">
                            {allVideos.map((video, index) => (
                                <div key={index} className="video-item">
                                    <div className="video-container">
                                        <iframe
                                            src={video.embedUrl}
                                            className="gallery-video"
                                            frameBorder="0"
                                            allowFullScreen
                                            title={`Vídeo ${index + 1} - COAFNOR`}
                                        />
                                        <div className="video-overlay">
                                            <a 
                                                href={video.driveUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="video-link"
                                            >
                                                <i className="pi pi-external-link"></i>
                                                <span>Abrir no Drive</span>
                                            </a>
                                        </div>
                                    </div>
                                    <p className="video-caption">{video.name} - COAFNOR</p>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Dialog para visualizar imagem */}
            <Dialog 
                visible={dialogVisible} 
                onHide={closeDialog}
                className="image-dialog"
                modal
                maximizable
            >
                {selectedImage && (
                    <div className="dialog-content">
                        <img 
                            src={selectedImage} 
                            alt="COAFNOR"
                            className="dialog-image"
                        />
                    </div>
                )}
            </Dialog>
        </div>
    );
};

export default Gallery;
