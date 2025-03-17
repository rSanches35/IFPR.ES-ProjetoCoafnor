import React, { useEffect } from "react";

import './Home.css';

import { Image } from 'primereact/image';

const Home = () => {

    useEffect(() => { document.title = "COAFNOR";}, []);

    return (
        <>
        
        <Image src="/images/home.png" alt="Image Cover" width="100%" />

        <div className="flex items-center mr-5 ml-8 my-8 gap-4">
            <img className="teste" src="/images/farm.webp" alt="Image Cover" width="300px" />
            
            <div className="max-w-md ml-2">
                <h2 className="text-xl font-bold">[TÍTULO DO TÓPICO]</h2>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis dolor nec risus posuere vehicula. In hac habitasse platea dictumst. Maecenas iaculis tortor sed purus elementum ullamcorper. Suspendisse fermentum nunc eu mi eleifend, sed cursus sapien maximus.</p>
            </div>
        </div>

        <div className="flex items-center mr-5 ml-8 my-8 gap-4">
            <img className="teste" src="/images/food.jfif" alt="Image Cover" width="300px" />
            
            <div className="max-w-md ml-2">
                <h2 className="text-xl font-bold">[TÍTULO DO TÓPICO]</h2>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis dolor nec risus posuere vehicula. In hac habitasse platea dictumst. Maecenas iaculis tortor sed purus elementum ullamcorper. Suspendisse fermentum nunc eu mi eleifend, sed cursus sapien maximus.</p>
            </div>
        </div>

        <div className="seçao2 mt-8">

        </div> 

        </>
    );
}; export default Home;