document.getElementById('miFormulario').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(e.target.action, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        alert("✅ Mensaje enviado. ¡Te responderé pronto!");
        e.target.reset(); // Limpia todos los campos
      } else {
        alert("⚠️ Hubo un error. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      alert("🚨 Error de conexión. Verifica tu internet.");
    }
  });