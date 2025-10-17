import React, { useState } from "react";

// Componente para mostrar los comentarios y guardarlos en un array
const CommentSection = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  //Maneja el envío del formulario y lo agrega a la lista de comentarios
  const handleSubmit = (e) => {
    e.preventDefault();
    const n = name.trim();
    const m = message.trim();
    if (!n || !m) return;
    const newComment = { id: Date.now(), name: n, message: m, image: imagePreview || null };
    setComments((prev) => [newComment, ...prev]);
    setMessage("");
    setImageFile(null);
    setImagePreview(null);
  };

  //Maneja el cambio de la imagen y hace una vista previa de ella
  const handleImageChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) {
      setImageFile(null);
      setImagePreview(null);
      return;
    }
    // Validación simple de tipo que sea imagen
    if (!file.type.startsWith("image/")) {
      setImageFile(null);
      setImagePreview(null);
      return;
    }
    
    //guarda la imagen y crea la URl para mostrarla
    setImageFile(file);
    const url = URL.createObjectURL(file);
    setImagePreview(url);
  };

  //Maneja la eliminación de un comentario a traves de la busqueda del id en este caso el nombre
  const handleDelete = (id) => { 
    setComments((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <section className="py-5">
      <div className="container" style={{ maxWidth: "800px" }}>
        <h3 className="text-center mb-4">Comentarios</h3>

        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={40}
            />
          </div>
          <div className="mb-2">
            <textarea
              className="form-control"
              rows={2}
              placeholder="Escribe tu comentario..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={400}
            />
          </div>
          <div className="mb-3">
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={handleImageChange}
            />
            {imagePreview && (
              <div className="mt-2">
                <img src={imagePreview} alt="Vista previa" className="img-fluid rounded" style={{ maxHeight: 200 }} />
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-primary" disabled={!name.trim() || !message.trim()}>
            Publicar
          </button>
        </form>

        {comments.length === 0 ? (
          <p className="text-center text-muted">Aún no hay comentarios.</p>
        ) : (
          <ul className="list-unstyled">
            {comments.map((c) => (
              <li key={c.id} className="mb-3 p-3 bg-white rounded shadow-sm">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <strong>{c.name}</strong>
                    <div className="mt-1">{c.message}</div>
                    {c.image && (
                      <div className="mt-2">
                        <img src={c.image} alt="Comentario" className="img-fluid rounded" style={{ maxHeight: 240 }} />
                      </div>
                    )}
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleDelete(c.id)}
                    aria-label="Eliminar comentario"
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default CommentSection;
