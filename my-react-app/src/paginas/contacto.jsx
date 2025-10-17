import React, { useState } from 'react';


const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div className="contacto-container">
      <h1>Contáctanos</h1>
      <p>¿Tienes alguna pregunta o comentario? ¡Escríbenos!</p>
      
      <form onSubmit={handleSubmit} className="contacto-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>
        
        <button type="submit" className="btn-enviar">Enviar Mensaje</button>
      </form>
      
      <div className="info-contacto">
        <h3>Información de Contacto</h3>
        <p>Dirección: [Tu dirección aquí]</p>
        <p>Teléfono: [Tu teléfono]</p>
        <p>Email: [tu@email.com]</p>
        <p>Horario de Atención: Lunes a Viernes de 9:00 a 18:00 hrs</p>
      </div>
    </div>
  );
};

export default Contacto;
