document.addEventListener('DOMContentLoaded', () => {

  // 1. Toggle de Modo Claro / Modo Oscuro con Persistencia
  const themeToggleBtn = document.querySelector('#dark-mode-toggle');
  const storedTheme = localStorage.getItem('theme');

  // Aplicar tema guardado en localStorage al cargar la página
  if (storedTheme === 'light') {
    document.documentElement.classList.add('light-mode');
    themeToggleBtn.textContent = '☀️';
  } else {
    document.documentElement.classList.remove('light-mode');
    themeToggleBtn.textContent = '🌙';
  }

  // Evento al hacer clic en el botón
  themeToggleBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('light-mode');
    const isLight = document.documentElement.classList.contains('light-mode');
    
    // Guardar preferencia del usuario en localStorage
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    themeToggleBtn.textContent = isLight ? '☀️' : '🌙';
  });

  // 2. Menú Hamburguesa Accesible
  const hamburgerBtn = document.querySelector('#hamburger');
  const navMenu = document.querySelector('#nav-menu');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
    });

    // Cerrar menú responsivo al hacer clic en un enlace de navegación
    document.querySelectorAll('.nav a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. Validación y Envío de Formulario mediante Formspree (AJAX/Fetch)
  const form = document.querySelector('#form-contacto');
  const feedback = document.querySelector('#form-feedback');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      let isValid = true;

      // Limpiar errores previos
      document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
      if (feedback) {
        feedback.textContent = '';
        feedback.className = 'feedback-exito';
      }

      const nombre = document.querySelector('#nombre');
      const email = document.querySelector('#email');
      const mensaje = document.querySelector('#mensaje');

      if (!nombre.value.trim()) {
        document.querySelector('#error-nombre').textContent = 'Por favor ingresa tu nombre.';
        isValid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value.trim())) {
        document.querySelector('#error-email').textContent = 'Ingresa un correo electrónico válido.';
        isValid = false;
      }

      if (!mensaje.value.trim()) {
        document.querySelector('#error-mensaje').textContent = 'El mensaje no puede estar vacío.';
        isValid = false;
      }

      if (isValid) {
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando... ⏳';

        try {
          const data = new FormData(form);
          const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
              'Accept': 'application/json'
            }
          });

          if (response.ok) {
            feedback.textContent = '¡Gracias por tu mensaje! Me llegará directamente a mi correo.';
            form.reset();
          } else {
            feedback.textContent = 'Hubo un problema al enviar el mensaje. Intenta de nuevo más tarde.';
          }
        } catch (error) {
          feedback.textContent = 'Error de conexión. Revisa tu red e intenta nuevamente.';
        } finally {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Enviar Mensaje ✉️';
        }
      }
    });
  }

});