# PLAN DE DESARROLLO - VR ESTILISMO & MAKEUP

## OBJETIVO
Crear una maqueta funcional (mockup) del sitio web completo que simule todas las funcionalidades descritas, sin backend real pero con interacciones visuales y datos mockeados.

---

## ESTRUCTURA DE PÁGINAS

### 1. **index.html** (Página Principal / Inicio)
**Componentes:**
- **Header:**
  - Logo "VR Estilismo & Makeup" (circular con VR dorado, como en las imágenes)
  - Menú de navegación: Inicio, Servicios, Galería, Reseñas, Contacto
  - Iconos: carrito de compras y perfil de usuario

- **Banner Principal:**
  - Carrusel de imágenes (3-4 imágenes) mostrando diferentes servicios
  - Navegación con puntos indicadores
  - Transiciones suaves

- **Video Promocional:**
  - Video incrustado (YouTube/Vimeo o placeholder)
  - Duración aproximada: 60 segundos
  - Controles de reproducción

- **Banner de Citas Destacadas:**
  - Módulo llamativo que invita a iniciar sesión
  - Botón "Solicitar Cita" que redirige a login o formulario de reserva
  - Diseño atractivo con CTA claro

- **Audio de Bienvenida:**
  - Reproductor de audio pequeño
  - Locución sobre misión y visión
  - Controles: play, pause, volumen

- **Resumen de Misión y Visión:**
  - Texto breve y elegante
  - Diseño destacado pero no intrusivo

- **Footer:**
  - Información de contacto (teléfono, email, dirección)
  - Enlaces a redes sociales (Facebook, Instagram, WhatsApp)
  - Iconos de métodos de pago (Visa, Mastercard, etc.)

---

### 2. **servicios.html** (Página de Servicios)
**Componentes:**
- **Header:** Igual que index.html (navegación consistente)

- **Menú Secundario/Filtro:**
  - Dropdown "Menú" con opciones de filtrado
  - Botones de categorías (opcional)

- **Listado de Categorías:**
  - Grid de 6 tarjetas de servicios:
    1. Maquillaje
    2. Peinado
    3. Tinte
    4. Manicure & Pedicure
    5. Corte
    6. Otros Servicios
  - Cada tarjeta: imagen, título, botón "Ver"
  - Al hacer clic en "Ver" → abre página de detalle del servicio

- **Páginas de Detalle de Servicio** (servicio-maquillaje.html, servicio-peinado.html, etc.):
  - Imagen destacada del servicio
  - Descripción detallada
  - Precios (mockeados)
  - Duración estimada
  - Botón "Solicitar Cita/Servicio"
  - Al hacer clic → muestra modal o redirige a formulario de reserva

- **Modal/Formulario de Reserva:**
  - Formulario con: nombre, email, teléfono, fecha, hora, servicio
  - Simulación de consulta de disponibilidad (mensaje de éxito/error mockeado)
  - Botón "Confirmar Reserva"

- **Footer:** Igual que index.html

---

### 3. **galeria.html** (Galería Multimedia)
**Componentes:**
- **Header:** Navegación consistente

- **Fotos Antes y Después:**
  - Carrusel o grid de imágenes
  - Cada elemento muestra: imagen "Antes" e imagen "Después" lado a lado
  - Navegación con puntos indicadores
  - Botones "Ver más" (simula cargar más imágenes)

- **Video de Highlights:**
  - Video incrustado con montaje dinámico
  - Controles de reproducción

- **Footer:** Igual que index.html

---

### 4. **reseñas.html** (Reseñas de Clientes)
**Componentes:**
- **Header:** Navegación consistente

- **Formulario de Envío:**
  - Campos: Nombre completo, Opinión (textarea)
  - Sistema de calificación con estrellas (1-5)
  - Botón "Enviar"
  - Al enviar → muestra mensaje de éxito y agrega la reseña a la lista (mockeado)

- **Listado de Reseñas:**
  - Tarjetas de reseñas existentes (datos mockeados)
  - Cada reseña muestra: nombre/alias, fecha, calificación (estrellas), comentario
  - Scroll infinito o paginación (simulada)

- **Resumen de Calificación:**
  - Gráfico de barras o visualización de estrellas
  - Promedio general de calificaciones
  - Desglose por cantidad de reseñas

- **Footer:** Igual que index.html

---

### 5. **nosotros.html** (Sobre Nosotros)
**Componentes:**
- **Header:** Navegación consistente

- **Misión y Visión:**
  - Sección destacada con texto completo
  - Diseño elegante y profesional

- **Nuestro Equipo:**
  - Grid de tarjetas de equipo
  - Cada tarjeta: foto, nombre, título/cargo, breve reseña, certificaciones
  - Foto del Equipo Principal (imagen grupal)

- **Footer:** Igual que index.html

---

### 6. **contacto.html** (Contacto y Reservas)
**Componentes:**
- **Header:** Navegación consistente

- **Formulario de Contacto:**
  - Campos: Nombre completo, Teléfono, Correo electrónico, Mensaje
  - Botón "Enviar solicitud"
  - Al enviar → muestra mensaje de confirmación (mockeado)

- **Información de Contacto:**
  - Número de teléfono (clickeable)
  - Correo electrónico (clickeable)
  - Dirección física
  - Mapa (opcional, puede ser imagen estática o Google Maps embed)

- **Sistema de Reservas:**
  - Widget o sección destacada
  - Botón "Reservar Ahora" que abre modal/formulario
  - O enlace a formulario de reservas

- **Footer:** Igual que index.html

---

### 7. **login.html** (Inicio de Sesión)
**Componentes:**
- **Formulario de Login:**
  - Logo VR Estilismo & Makeup
  - Campo: Usuario
  - Campo: Contraseña
  - Botón "Ingresar"
  - Enlace "Olvidé mi contraseña"
  - Al hacer login → simula autenticación y redirige (mockeado)

- **Diseño:** Centrado, limpio, con el logo prominente

---

## TECNOLOGÍAS Y RECURSOS

### Frontend:
- **HTML5** semántico
- **CSS3** (con variables, flexbox, grid)
- **JavaScript vanilla** (sin frameworks pesados, para simplicidad)
- **Responsive Design** (mobile-first)

### Librerías/Plugins (opcionales):
- Carruseles: Swiper.js o implementación propia
- Iconos: Font Awesome o similar
- Fuentes: Google Fonts (elegante, profesional)

### Estructura de Archivos:
```
/
├── index.html
├── servicios.html
├── servicio-maquillaje.html
├── servicio-peinado.html
├── servicio-tinte.html
├── servicio-manicure-pedicure.html
├── servicio-corte.html
├── servicio-otros.html
├── galeria.html
├── reseñas.html
├── nosotros.html
├── contacto.html
├── login.html
├── css/
│   ├── styles.css (estilos principales)
│   ├── components.css (componentes reutilizables)
│   └── responsive.css (media queries)
├── js/
│   ├── main.js (funcionalidad principal)
│   ├── carousel.js (carruseles)
│   └── forms.js (manejo de formularios)
├── images/
│   ├── logo/
│   ├── servicios/
│   ├── galeria/
│   └── equipo/
└── assets/
    ├── audio/
    └── videos/
```

---

## FUNCIONALIDADES MOCKEADAS

1. **Carruseles:** Transiciones suaves, navegación funcional
2. **Formularios:** Validación básica, mensajes de éxito/error simulados
3. **Login:** Simula autenticación, guarda estado en localStorage
4. **Reseñas:** Agrega nuevas reseñas al DOM (sin persistencia real)
5. **Reservas:** Muestra disponibilidad simulada, confirma reserva
6. **Filtros:** Filtra servicios visualmente
7. **Modales:** Abre/cierra modales para reservas y detalles

---

## DISEÑO Y ESTILO

### Paleta de Colores (basada en las imágenes):
- **Dorado/Oro:** #D4AF37, #F4D03F (logo, acentos)
- **Negro:** #000000, #1A1A1A (fondos, texto)
- **Gris:** #F5F5F5, #E0E0E0 (fondos claros)
- **Blanco:** #FFFFFF (fondos, texto sobre oscuro)

### Tipografía:
- Títulos: Fuente elegante, serif o sans-serif moderna
- Cuerpo: Fuente legible, sans-serif

### Estilo General:
- Elegante y profesional
- Espacios amplios
- Imágenes de alta calidad
- Animaciones sutiles

---

## CARACTERÍSTICAS ESPECIALES

1. **Navegación Consistente:** Header y footer en todas las páginas
2. **Responsive:** Adaptable a móvil, tablet y desktop
3. **Interactividad:** Hovers, transiciones, efectos visuales
4. **Accesibilidad:** Etiquetas semánticas, alt text en imágenes
5. **Performance:** Imágenes optimizadas, código limpio

---

## ORDEN DE DESARROLLO

1. ✅ Estructura base (HTML de todas las páginas)
2. ✅ Estilos globales y componentes reutilizables
3. ✅ Header y Footer
4. ✅ Página principal (index.html) con todos sus componentes
5. ✅ Página de servicios y subpáginas
6. ✅ Galería con carrusel
7. ✅ Reseñas con formulario y listado
8. ✅ Nosotros con equipo
9. ✅ Contacto y reservas
10. ✅ Login
11. ✅ JavaScript para interactividad
12. ✅ Responsive design
13. ✅ Ajustes finales y pulido

---

## NOTAS IMPORTANTES

- Todos los datos serán mockeados (reseñas, disponibilidad, etc.)
- Los formularios mostrarán mensajes de confirmación pero no enviarán datos reales
- Las imágenes serán placeholders o imágenes de ejemplo
- El video puede ser un embed de YouTube o placeholder
- El audio puede ser un archivo de ejemplo o placeholder
- Todo debe verse y sentirse funcional para una demo

---

¿Este plan cubre todos tus requerimientos? ¿Hay algo que quieras modificar o agregar antes de comenzar el desarrollo?

