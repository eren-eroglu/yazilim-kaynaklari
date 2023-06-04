import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faPython, faJava, faSwift } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <div className="container mx-auto h-screen flex flex-col justify-center items-center h-screen  ">
     <div className='flex items-center bg-white rounded-3xl p-16 bg-opacity-25 flex-col mb-44 '>  <div className="text-3xl text-center mb-6 montserrat typewriter">Hangi yazılım dilini <span className='font-bold'>ÜCRETSİZ</span> öğrenmek isterdiniz?<span className="cursor-animation"></span></div>
      <div className="flex space-x-8">
        <FontAwesomeIcon icon={faHtml5} className="text-red-500 text-8xl" />
        <FontAwesomeIcon icon={faCss3} className="text-blue-500 text-8xl" />
        <FontAwesomeIcon icon={faJs} className="text-yellow-500 text-8xl" />
        <FontAwesomeIcon icon={faReact} className="text-blue-300 text-8xl" />
        <FontAwesomeIcon icon={faPython} className="text-yellow-400 text-8xl" />
        <FontAwesomeIcon icon={faJava} className="text-orange-500 text-8xl" />
       
      </div></div>
    </div>
  );
}

export default Home;
