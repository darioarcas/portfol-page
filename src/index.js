import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRouter } from './AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'animate.css';
import "./AppRouter.css";
import { tecnologias } from './components/recursos/ArrayTecnologias';
import  vsc  from "./components/recursos/png/visual-studio-code.256x255.png";
import  bootstrap  from "./components/recursos/png/bootstrap.256x256.png";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter/>
    <footer>
      <div className='container-footer w-100 h-100'>
        <p className='text-white'>Página realizada con:</p>
        <div className='iconos-footer'>
          <div>
            {tecnologias[0].svg}
            {tecnologias[1].svg}
            {tecnologias[2].svg}
            {tecnologias[3].svg}
          </div>
          <div>
            {/* <img src={vsc} alt='imagen visual studio code'></img> */}
            <img src={bootstrap} alt='imagen bootstrap'></img>
          </div>
        </div>
        
      </div>

    </footer>

  </React.StrictMode>
);
