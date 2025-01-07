
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AOS from 'aos';
import { useEffect } from 'react';
function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación (ms)
      once: false,     // Ejecutar la animación solo una vez
      offset: 100,    // Distancia para activar la animación
    });
  }, []);
  // Define el número de teléfono y el mensaje
  let phoneNumber = "+593963200325"; // Reemplaza con el número de WhatsApp al que quieras enviar el mensaje
  let message = "¡Hola! Me gustaría agendar una tarjeta.";
 
  // Función que genera el enlace de WhatsApp
  const sendMessage = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank"); // Abre el enlace en una nueva pestaña
  };
  return (
    <>
     <div className="landing-page">
      {/* Header Section */}
      <header className="header">
        <img className='logoimg' src="https://res.cloudinary.com/db8e98ggo/image/upload/v1731124196/Que_esperas_._dqfhgg.png" alt="" />
        <h1 className="title">Tu Membresía Exclusiva</h1>
        <p className="subtitle2">Se parte de nuestra familia </p>
        <img src="" alt="" />
        <p className="subtitle">Accede a beneficios únicos y mejora tu vida </p>
        <div className="cta-container">
        <a href="#benefits" className="cta-button2">Descubre los Beneficios</a>
        </div>
      </header>

      {/* Benefits Section */}
      <section id="benefits" className="benefits-section">
        <h2 className="section-title">Beneficios Únicos</h2>
        <div className="benefits-container">
            
            <div   data-aos="fade-up"  className="benefit-card">
           <img className='imgitemdec' src="https://res.cloudinary.com/db8e98ggo/image/upload/v1735948412/PROSESANDO_4_rdguoq.gif" alt="" />

            <h3 className='titloitem'  >Descuentos Exclusivos</h3>
            <p>Aprovecha descuentos en todos nuestros productos y servicios.</p>
          </div>
        
          <div   data-aos="fade-down" className="benefit-card">
          <img className='imgitemdec' src="https://res.cloudinary.com/db8e98ggo/image/upload/v1735948964/PROSESANDO_5_dtun5r.gif" alt="" />
            <h3 className='titloitem' >Acceso Prioritario</h3>
            <p>Accede  promociones antes que nadie.</p>
          </div>
        
          <div data-aos="fade-right" className="benefit-card">
          <img className='imgitemdec' src="https://res.cloudinary.com/db8e98ggo/image/upload/v1735949983/PROSESANDO_9_oaatim.gif" alt="" />
            <h3  className='titloitem' >Regalos Sorpresa</h3>
            <p>Recibe regalos especiales en fechas importantes.</p>
          </div>
        
          <div  data-aos="fade-left" className="benefit-card">
          <img className='imgitemdec' src="https://res.cloudinary.com/db8e98ggo/image/upload/v1735995406/PROSESANDO_10_gcxtaz.gif" alt="" />
            <h3 className='titloitem' >Refill gratis de bebidas</h3>
            <p>Recarga completamente gratis tus bebidas.</p>
          </div>
        
          <div data-aos="fade-up-right" className="benefit-card">
          <img className='imgitemdec' src="https://res.cloudinary.com/db8e98ggo/image/upload/v1735996017/PROSESANDO_11_tdu7dl.gif" alt="" />
             <h3 className='titloitem'  >2X3 EN TODO EL MENU</h3>
            <p>Accede a tener 3 platos de moritas por el precio de 2.</p>
          </div>
        
          <div data-aos="fade-up-left" className="benefit-card">
          <img className='imgitemdec' src="https://res.cloudinary.com/db8e98ggo/image/upload/v1735997330/PROSESANDO_12_xjsila.gif" alt="" />
            <h3 className='titloitem' >Eventos y fiestas </h3>
            <p>Recibe invitaciones a eventos especiales de la marca.</p>
          </div>
        
          <div data-aos="fade-down-right" className="benefit-card">
          <img className='imgitemdec' src="https://res.cloudinary.com/db8e98ggo/image/upload/v1735998680/PROSESANDO_13_faheei.gif" alt="" />
            <h3 className='titloitem' >Postre mensual</h3>
            <p>Recibe un postre único cada mes.</p>
          </div>
        
        </div>
      </section>



      {/* Call to Action Section */}
      <section className="cta-section">
        <h2 className="cta-title">Adquiere tu Membresía Hoy</h2>
        <p className="cta-text">Consíguela en el mostrador y comienza a disfrutar de tus beneficios exclusivos.</p>
        <div className="cta-container">
          <a onClick={sendMessage}  className="cta-button-secondary">PIDELA AHORA</a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2025 Moritas.Corp Todos los derechos reservados.</p>
      </footer>
    </div>
    </>
  )
}

export default App
