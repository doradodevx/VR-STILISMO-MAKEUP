# VR Estilismo & Makeup - Sitio Web

Sitio web completo para VR Estilismo & Makeup, una maqueta funcional que simula todas las funcionalidades descritas en la carta de navegación.

## 📋 Estructura del Proyecto

```
VR-STILISMO-MAKEUP/
├── index.html                          # Página principal
├── servicios.html                       # Listado de servicios
├── servicio-maquillaje.html            # Detalle: Maquillaje
├── servicio-peinado.html               # Detalle: Peinado
├── servicio-tinte.html                 # Detalle: Tinte
├── servicio-manicure-pedicure.html    # Detalle: Manicure & Pedicure
├── servicio-corte.html                 # Detalle: Corte
├── servicio-otros.html                 # Detalle: Otros Servicios
├── galeria.html                        # Galería multimedia
├── reseñas.html                        # Reseñas de clientes
├── nosotros.html                       # Sobre nosotros
├── contacto.html                       # Contacto y reservas
├── login.html                          # Inicio de sesión
├── css/
│   ├── styles.css                      # Estilos principales
│   ├── components.css                  # Componentes reutilizables
│   └── responsive.css                   # Diseño responsive
├── js/
│   ├── main.js                         # Funcionalidad principal
│   ├── carousel.js                     # Carruseles
│   └── forms.js                        # Manejo de formularios
├── images/
│   ├── logo/                           # Logos
│   ├── servicios/                      # Imágenes de servicios
│   ├── galeria/                        # Imágenes de galería
│   └── equipo/                         # Fotos del equipo
└── assets/
    ├── audio/                          # Archivos de audio
    └── videos/                         # Archivos de video
```

## 🚀 Características

### Páginas Implementadas

1. **index.html** - Página principal con:
   - Carrusel de imágenes del banner principal
   - Video promocional incrustado
   - Banner de citas destacadas
   - Reproductor de audio de bienvenida
   - Resumen de misión y visión

2. **servicios.html** - Listado de servicios con:
   - Menú de filtros por categoría
   - Grid de 6 categorías de servicios
   - Enlaces a páginas de detalle

3. **Subpáginas de Servicios** (6 páginas):
   - Detalle completo del servicio
   - Precios y duración
   - Características del servicio
   - Botón para solicitar cita (modal)

4. **galeria.html** - Galería multimedia con:
   - Carrusel de antes/después
   - Grid de trabajos realizados
   - Video de highlights

5. **reseñas.html** - Sistema de reseñas con:
   - Formulario para enviar reseñas
   - Listado de reseñas existentes
   - Gráfico de calificaciones promedio
   - Sistema de estrellas interactivo

6. **nosotros.html** - Información de la empresa con:
   - Misión y visión detalladas
   - Presentación del equipo
   - Foto del equipo principal

7. **contacto.html** - Contacto y reservas con:
   - Formulario de contacto
   - Información de contacto
   - Sistema de reservas integrado
   - Mapa de ubicación

8. **login.html** - Inicio de sesión con:
   - Formulario de login funcional
   - Simulación de autenticación

## 🎨 Diseño

- **Colores principales:**
  - Dorado/Oro: #D4AF37, #F4D03F
  - Negro: #000000, #1A1A1A
  - Gris: #F5F5F5, #E0E0E0
  - Blanco: #FFFFFF

- **Tipografía:**
  - Títulos: Playfair Display (serif elegante)
  - Cuerpo: Montserrat (sans-serif moderna)

- **Características de diseño:**
  - Diseño elegante y profesional
  - Responsive (mobile-first)
  - Animaciones sutiles
  - Navegación consistente

## ⚙️ Funcionalidades Mockeadas

Todas las funcionalidades están implementadas pero simulan el comportamiento real:

1. **Carruseles:** Navegación funcional con transiciones suaves
2. **Formularios:** Validación básica y mensajes de éxito/error simulados
3. **Login:** Simula autenticación usando localStorage
4. **Reseñas:** Agrega nuevas reseñas al DOM (sin persistencia real)
5. **Reservas:** Simula consulta de disponibilidad y confirma reserva
6. **Filtros:** Filtra servicios visualmente
7. **Modales:** Abre/cierra modales para reservas y detalles

## 📱 Responsive Design

El sitio está completamente optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)

## 🛠️ Tecnologías Utilizadas

- **HTML5** semántico
- **CSS3** (Variables, Flexbox, Grid)
- **JavaScript vanilla** (sin frameworks)
- **Font Awesome** (iconos)
- **Google Fonts** (tipografía)

## 📝 Notas Importantes

1. **Imágenes:** Las imágenes utilizan URLs de Unsplash como placeholders. Reemplázalas con imágenes reales en la carpeta `images/`.

2. **Logo:** El logo debe colocarse en `images/logo/logo-vr.jpg`. Actualmente se usa un placeholder.

3. **Audio:** El archivo de audio de bienvenida debe colocarse en `assets/audio/welcome.mp3`.

4. **Videos:** Los videos están incrustados desde YouTube. Reemplázalos con videos reales.

5. **Datos Mockeados:** Todos los datos (reseñas, disponibilidad, etc.) son simulados para la demo.

## 🚀 Cómo Usar

1. Abre `index.html` en tu navegador
2. Navega por todas las páginas usando el menú
3. Prueba las funcionalidades:
   - Carruseles (navegación automática y manual)
   - Formularios (envío simulado)
   - Login (cualquier usuario/contraseña funciona)
   - Reseñas (agrega nuevas reseñas)
   - Reservas (simula disponibilidad)

## 📧 Contacto

Para más información sobre el sitio web, contacta a través del formulario en la página de contacto.

---

**Desarrollado para VR Estilismo & Makeup**  
© 2024 Todos los derechos reservados

