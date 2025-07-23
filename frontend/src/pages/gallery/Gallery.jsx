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
            name: "Video 1 - COAFNOR.mp4",
            driveUrl: "https://drive.google.com/file/d/1gTAp6yJVP-Bja_h04Ea-5cAoYPYZLcJc/view?usp=sharing",
            embedUrl: "https://drive.google.com/file/d/1gTAp6yJVP-Bja_h04Ea-5cAoYPYZLcJc/preview"
        },
        {
            name: "Video 2 - COAFNOR.mp4",
            driveUrl: "https://drive.google.com/file/d/1KMDjBl0ZUJftaG2_Vb-tvCF9NCToeKTI/view?usp=drive_link",
            embedUrl: "https://drive.google.com/file/d/1KMDjBl0ZUJftaG2_Vb-tvCF9NCToeKTI/preview"
        },
        {
            name: "Video 3 - COAFNOR.mp4",
            driveUrl: "https://drive.google.com/file/d/1rQi2jlmq03WUh-QssuguGGbdCjxKlTCZ/view?usp=sharing",
            embedUrl: "https://drive.google.com/file/d/1rQi2jlmq03WUh-QssuguGGbdCjxKlTCZ/preview"
        },
        {
            name: "Video 4 - COAFNOR.mp4",
            driveUrl: "https://drive.google.com/file/d/1gKvu1I18ezWM8sQWiilvKbvNyWZZRLQG/view?usp=sharing",
            embedUrl: "https://drive.google.com/file/d/1gKvu1I18ezWM8sQWiilvKbvNyWZZRLQG/preview"
        },
        {
            name: "Video 5 - COAFNOR.mp4",
            driveUrl: "https://drive.google.com/file/d/1ixOw-U0kAHroLEK_q3x-RrdqJwODD82l/view?usp=sharing",
            embedUrl: "https://drive.google.com/file/d/1ixOw-U0kAHroLEK_q3x-RrdqJwODD82l/preview"
        },
        {
            name: "Video 6 - COAFNOR.mp4",
            driveUrl: "https://drive.google.com/file/d/1TtS7ZzNZMTAI4U8HKHOohIFPSsE4fVr4/view?usp=sharing",
            embedUrl: "https://drive.google.com/file/d/1TtS7ZzNZMTAI4U8HKHOohIFPSsE4fVr4/preview"
        },
        {
            name: "Video 7 - COAFNOR.mp4",
            driveUrl: "https://drive.google.com/file/d/1jUKNIll-jbC7EPWADOzlzm5P1I1c_Xl-/view?usp=sharing",
            embedUrl: "https://drive.google.com/file/d/1jUKNIll-jbC7EPWADOzlzm5P1I1c_Xl-/preview"
        },
        {
            name: "Video 8 - COAFNOR.mp4",
            driveUrl: "https://drive.google.com/file/d/1EKcc3rHzd5abd0huM5J5uZZks2LXEEpP/view?usp=sharing",
            embedUrl: "https://drive.google.com/file/d/1EKcc3rHzd5abd0huM5J5uZZks2LXEEpP/preview"
        },
        {
            name: "Video 9 - COAFNOR.mp4",
            driveUrl: "https://drive.google.com/file/d/18i4a28IpCZKp0a4s1z5o8e9XsU2gNoXv/view?usp=sharing",
            embedUrl: "https://drive.google.com/file/d/18i4a28IpCZKp0a4s1z5o8e9XsU2gNoXv/preview"
        },
        {
            name: "Video 10 - COAFNOR.mp4",
            driveUrl: "https://drive.google.com/file/d/1jRcOA2sjPQtvCRA6_kGa44MJrwMww2Gi/view?usp=sharing",
            embedUrl: "https://drive.google.com/file/d/1jRcOA2sjPQtvCRA6_kGa44MJrwMww2Gi/preview"
        },
        {
            name: "Video 11 - COAFNOR.mp4",
            driveUrl: "https://drive.google.com/file/d/1O3Z5JaLKxhinoTnM0bhi0GcmL4hA1FrY/view?usp=sharing",
            embedUrl: "https://drive.google.com/file/d/1O3Z5JaLKxhinoTnM0bhi0GcmL4hA1FrY/preview"
        },
        {
            name: "Video 12 - COAFNOR.mp4",
            driveUrl: "https://drive.google.com/file/d/1Bpk06cnuoBg34M2sy5gvnQDYRo_5LNJO/view?usp=sharing",
            embedUrl: "https://drive.google.com/file/d/1Bpk06cnuoBg34M2sy5gvnQDYRo_5LNJO/preview"
        },
        {
            name: "Video 13 - COAFNOR.mp4",
            driveUrl: "https://drive.google.com/file/d/1UMZj6E7TrqlF3vTLKgACyJSVM4KCN6mg/view?usp=sharing",
            embedUrl: "https://drive.google.com/file/d/1UMZj6E7TrqlF3vTLKgACyJSVM4KCN6mg/preview"
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
