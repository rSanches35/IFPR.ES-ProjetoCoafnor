import React, { useEffect } from "react";

import './Home.css';

import { Image } from 'primereact/image';

const Home = () => {

    useEffect(() => { document.title = "COAFNOR";}, []);

    return (
        <>
        
        <Image src="/images/visitaTecnica/DSC04252.JPG" alt="Image Cover" width="100%" />

        <div className="flex items-center mr-5 ml-8 my-8 gap-4">
            <img className="teste" src="/images/visitaTecnica/DSC04256.JPG" alt="Agricultura Familiar" width="300px" />
            
            <div className="max-w-md ml-2">
                <h2 className="text-xl font-bold">Agricultura Familiar Sustentável</h2>
                <p className="text-gray-700">A COAFNOR promove práticas agrícolas sustentáveis que respeitam o meio ambiente e garantem a qualidade dos alimentos produzidos pelos nossos cooperados. Nosso compromisso é com a terra e com as futuras gerações.</p>
            </div>
        </div>

        <div className="flex items-center mr-5 ml-8 my-8 gap-4">
            <img className="teste" src="/images/visitaTecnica/DSC04277.JPG" alt="Produtos de Qualidade" width="300px" />
            
            <div className="max-w-md ml-2">
                <h2 className="text-xl font-bold">Produtos de Qualidade Superior</h2>
                <p className="text-gray-700">Oferecemos uma ampla variedade de produtos frescos e orgânicos, desde grãos até hortaliças e frutas. Todos os produtos passam por rigoroso controle de qualidade e são cultivados com técnicas modernas e sustentáveis.</p>
            </div>
        </div>

        <div className="secao2 mt-8">

        </div> 

        </>
    );
}; export default Home;