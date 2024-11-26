import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import { ProyectsCard } from './components/ProyectsCard'
import { Button, Modal, Toast, ToastContainer } from 'react-bootstrap';


// import 'bootstrap/dist/css/bootstrap.min.css';

export const AppRouter = () => {
  const [isHovered, setIsHovered] = useState(false);
  // Estado para controlar la apertura y cierre de los modales
  const [showModalPdf, setShowModalPdf] = useState(false);
  const [showModalContact, setShowModalContact] = useState(false);
  const [showFormacion, setShowFormacion] = useState(false);
  const [showToast, setShowToast] = useState(false); // Para mostrar el toast cuando se copie el correo


  const email = "darioarcas@hotmail.com";

  // Función para abrir y cerrar modales
  const handleShowPdf = () => setShowModalPdf(true);
  const handleClosePdf = () => setShowModalPdf(false);
  
  const handleShowContact = () => setShowModalContact(true);
  const handleCloseContact = () => setShowModalContact(false);

  const handleShowFormacion = () => setShowFormacion(true);  // Mostrar tercer modal
  const handleCloseFormacion = () => setShowFormacion(false);  // Cerrar tercer modal

  // Función para copiar el email al portapapeles
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setShowToast(true); // Mostrar el mensaje de éxito al copiar
      setTimeout(() => setShowToast(false), 3000); // Ocultar el Toast después de 3 segundos
    });
  };



  return (
    <div className="app">
      <div className='d-flex justify-content-center mt-5'>

        {/* TARJETA PRESENTACIÓN */}
        <div className='card-morph p-3 mb-5 d-flex justify-content-center overflow-hidden position-relative'>
          <Row 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className='g-4 w-100 d-flex justify-content-center'
          >
            <Col               
              className={`d-flex justify-content-center animate__faster ${isHovered ? 'animate__animated animate__fadeOutLeft' : 'animate__animated animate__fadeInLeft'}`}
              style={{transition: 'all 0.3s', width:"200px"}}
              xs={12} 
              md={6} lg={6}
            >
              <section className='foto-perfil'></section>
            </Col>
            <Col 
              xs={12} 
              md={6} 
              lg={6}
              className={`container-text-card animate__faster ${isHovered ? 'animate__animated animate__fadeOutRight' : 'animate__animated animate__fadeInRight'}`}

            >
              <h3 className='incrustado text-card'>Dario Arcas</h3>
              <h5 className='text-white text-card'>Desarrollador FrontEnd</h5>

            </Col>
            <Col 
              xs={12} 
              md={6} 
              lg={6}
              className={`animate__faster position-absolute w-100 ${isHovered ? 'animate__animated animate__zoomIn' : 'animate__animated animate__zoomOut'}`}

            >
              <h3 className='incrustado text-center mt-5 mb-5 fw-normal'>Información y Contacto</h3>
              {/* FLECHA ABAJO */}
              <div className='d-flex justify-content-center'>
                <svg className='incrustado text-dark opacity-50' width="60" height="60" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.25 5.5V18M12.25 18L6.25 12M12.25 18L18.25 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>

            </Col>

          </Row>
        </div>

          {/* <button className='button-simple-morph p-0' style={{width:"10%", height:"5%", margin:"20px", fontSize:"70%"}}>BOTON</button> */}

      </div>
      
      <div className='d-flex justify-content-center'>
        <div className='d-flex justify-content-between morph mb-5'>

          {/* CV PDF */}
          <div className='w-25'>
            <p>CV</p>
            <button className='btn-morph info-contacto' onClick={handleShowPdf}>
              <svg  className='svg-icon' height="55" viewBox="0 0 50 65" width="55" xmlns="http://www.w3.org/2000/svg"><path d="m5.1 0c-2.8 0-5.1 2.3-5.1 5.1v53.8c0 2.8 2.3 5.1 5.1 5.1h45.8c2.8 0 5.1-2.3 5.1-5.1v-38.6l-18.9-20.3z" fill="#8c181a"/><path d="m56 20.4v1h-12.8s-6.3-1.3-6.1-6.7c0 0 .2 5.7 6 5.7z" fill="#6b0d12"/><g fill="#fff"><path d="m37.1 0v14.6c0 1.7 1.1 5.8 6.1 5.8h12.8z" opacity=".5"/><path d="m14.9 49h-3.3v4.1c0 .4-.3.7-.8.7-.4 0-.7-.3-.7-.7v-10.2c0-.6.5-1.1 1.1-1.1h3.7c2.4 0 3.8 1.7 3.8 3.6 0 2-1.4 3.6-3.8 3.6zm-.1-5.9h-3.2v4.6h3.2c1.4 0 2.4-.9 2.4-2.3s-1-2.3-2.4-2.3zm10.4 10.7h-3c-.6 0-1.1-.5-1.1-1.1v-9.8c0-.6.5-1.1 1.1-1.1h3c3.7 0 6.2 2.6 6.2 6s-2.4 6-6.2 6zm0-10.7h-2.6v9.3h2.6c2.9 0 4.6-2.1 4.6-4.7.1-2.5-1.6-4.6-4.6-4.6zm16.3 0h-5.8v3.9h5.7c.4 0 .6.3.6.7s-.3.6-.6.6h-5.7v4.8c0 .4-.3.7-.8.7-.4 0-.7-.3-.7-.7v-10.2c0-.6.5-1.1 1.1-1.1h6.2c.4 0 .6.3.6.7.1.3-.2.6-.6.6z"/></g></svg>
            </button>
          </div>
          
          
          {/* MAIL */}
          <div className='w-25'>
            <p>Mail</p>
            <button className='btn-morph info-contacto' onClick={handleShowContact}>
            <svg className='svg-icon' fill = "none" height="48" width="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h48v48h-48z" fill="#fff" fill-opacity="0"/><g stroke-linejoin="round" stroke-width="2"><path d="m4 39h40v-15-15h-20-20v15z" fill="#7cafd5" stroke="#000"/><path d="m4 9 20 15 20-15" stroke="#fff" stroke-linecap="round"/><path d="m24 9h-20v15" stroke="#000" stroke-linecap="round"/><path d="m44 24v-15h-20" stroke="#000" stroke-linecap="round"/></g></svg>

            </button>
          </div>


          {/* FORMACION */}
          <div className='w-25'>
            <p>Formación</p>
            <button className='btn-morph info-contacto' onClick={handleShowFormacion}>
              <svg className='svg-icon' height="48" width="48"viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><g transform="translate(0 -1028.4)"><path d="m3 1035.4v2 1 3 1 5 1c0 1.1.8954 2 2 2h14c1.105 0 2-.9 2-2v-1-5-4-3z" fill="#16a085"/><path d="m3 1034.4v2 1 3 1 5 1c0 1.1.8954 2 2 2h14c1.105 0 2-.9 2-2v-1-5-4-3z" fill="#ecf0f1"/><path d="m3 1033.4v2 1 3 1 5 1c0 1.1.8954 2 2 2h14c1.105 0 2-.9 2-2v-1-5-4-3z" fill="#bdc3c7"/><path d="m3 1032.4v2 1 3 1 5 1c0 1.1.8954 2 2 2h14c1.105 0 2-.9 2-2v-1-5-4-3z" fill="#ecf0f1"/><path d="m5 1028.4c-1.1046 0-2 .9-2 2v1 4 2 1 3 1 5 1c0 1.1.8954 2 2 2h2v-1h-1.5c-.8284 0-1.5-.7-1.5-1.5 0-.9.6716-1.5 1.5-1.5h12.5 1c1.105 0 2-.9 2-2v-1-5-4-3-1c0-1.1-.895-2-2-2h-4z" fill="#16a085"/><path d="m8 1028.4v18h1 9 1c1.105 0 2-.9 2-2v-1-5-4-3-1c0-1.1-.895-2-2-2h-4-6z" fill="#1abc9c"/><path d="m7 1048.4v2 2l2.5-2 2.5 2v-2-2z" fill="#e74c3c"/><path d="m7 1047.4h5v1h-5z" fill="#c0392b"/></g></svg>

            </button>
          </div>
        </div>
      </div>

      <p className='text-info opacity-50 fs-2 fw-bold mt-5 mb-5 incrustado2'>PROYECTOS</p>

      <div>
        <ProyectsCard />
      </div>






      {/* Modal de CV */}
      <Modal show={showModalPdf} onHide={handleClosePdf} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Curriculum Dario Arcas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Contenedor scrollable para el PDF */}
          <div style={{height: '500px' }}>
            <iframe
              src="https://drive.google.com/file/d/1e8tHFouCJUDucQpzN4aCSLP70_h7LBvt/preview"  // Cambia este enlace por la URL del PDF
              width="100%"
              height="100%"
              title="Vista PDF"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePdf}>
            Cerrar
          </Button>
          <Button variant="primary" href="https://drive.google.com/file/d/1e8tHFouCJUDucQpzN4aCSLP70_h7LBvt/view?usp=drive_link" download="documento.pdf">
            Descargar PDF
          </Button>
        </Modal.Footer>
      </Modal>




      {/* Modal Email */}
      <Modal show={showModalContact} onHide={handleCloseContact} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contacto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Toast para confirmar que el email fue copiado al portapapeles */}
          <ToastContainer position="bottom-end" className='w-50'>
            <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide>
              <Toast.Body>¡Correo copiado al portapapeles!</Toast.Body>
            </Toast>
          </ToastContainer>

          <p>darioarcas@hotmail.com</p>
          
          <Button
            variant="primary opacity-75"
            href={`mailto:${email}`}
            target="_blank"
            style={{ width: '100%', marginBottom: '10px' }}
          >
            Enviar Email
          </Button>
          <Button
            variant="dark opacity-75"
            onClick={copyToClipboard}
            style={{ width: '100%' }}
          >
            Copiar Dirección de Email
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseContact}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>




      {/* Modal FORMACION Y EXPERIENCIA*/}
      <Modal show={showFormacion} onHide={handleCloseFormacion} centered>
        <Modal.Header closeButton>
          <Modal.Title>Formación y Experiencia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Formación: 
            <h6 className='text-primary fw-normal opacity-75 p-2'>Cursos online de HTML, CSS, JavaScript, React. Universidad Nacional de Córdoba, hasta 2 año de Ingeniería Electrónica.</h6>

            Experiencia laboral: 
            <ul className='text-primary fw-normal opacity-75 py-1'><li>Sin experiencia laboral en Empresas, en el área de programación.</li></ul>
            <ul className='text-primary fw-normal opacity-75 py-1'><li>Trabajos Freelance desarrollando el FontEnd de página web.</li></ul>
          </h6>
          <Button className='bnt btn-primary d-flex justify-content-center p-2 mx-auto' onClick={() => window.open("https://www.academiagroove.com")}>
            <p className='text-white p-0 m-0' >Ir a la Página</p>
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseFormacion}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
