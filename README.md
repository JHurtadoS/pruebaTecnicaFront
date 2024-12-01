# Frontend - Películas App

Este es el frontend del proyecto, desarrollado con **Next.js** y desplegado en **Vercel**. Esta aplicación permite a los usuarios navegar por películas, añadir favoritas y consultar recomendaciones. Los datos de las películas se gestionan a través de una API personalizada en el backend, con interacción adicional con la API de **TMDB**.

## **Tecnologías Utilizadas**

- **Next.js**: Framework para React con soporte para renderizado del lado del servidor (SSR) y generación estática (SSG).
- **TailwindCSS**: Framework de CSS para diseño rápido y responsivo.
- **NextUI**: Biblioteca de componentes UI para React.
- **Axios**: Cliente HTTP para interactuar con la API del backend.
- **TypeScript**: Lenguaje utilizado para una experiencia de desarrollo más robusta y segura.

## **Características**

- **Autenticación de Usuarios**: Los usuarios pueden iniciar sesión usando su cuenta.
- **Explorar Películas**: Se pueden ver películas agrupadas por categorías y por géneros.
- **Favoritos**: Los usuarios pueden agregar películas a sus favoritos.
- **Recomendaciones**: Se pueden obtener recomendaciones basadas en películas.
- **Interacción con TMDB**: Los datos de películas populares y detalles se obtienen de la API de TMDB.

## **Variables de Entorno**

Asegúrate de configurar la variable de entorno en tu archivo `.env.local`:

- `NEXT_PUBLIC_API_URL`: URL del backend desplegado (por ejemplo, `https://backend-movies.onrender.com`).

## **Iniciar el Proyecto**

1. Instala las dependencias:
   ```bash
   npm install
   ```

### Instrucciones para usar el archivo:

1. Crea un archivo **`README.md`** en la raíz de tu proyecto frontend.
2. Copia y pega el contenido proporcionado en este archivo.
3. Guarda los cambios.

## **Licencia y Derechos de Autor**

El diseño y la implementación de esta aplicación fueron creados por el equipo de desarrollo como parte de un proyecto personal y educativo. Todo el contenido generado, como el código fuente, los componentes de diseño y la estructura de la aplicación, está sujeto a los derechos de autor del equipo creador, a menos que se indique lo contrario.

### **Licencia**

Este proyecto está licenciado bajo la **Licencia MIT**. Puedes usar, copiar, modificar y distribuir el código de este proyecto, pero se requiere que se incluya la misma licencia en las distribuciones.

### **Uso de APIs**

El proyecto interactúa con **TMDB API**, y el uso de sus datos está sujeto a los términos y condiciones de la **API de TMDB**. Para más detalles sobre el uso de su API, consulta la documentación oficial: [TMDB Terms of Service](https://www.themoviedb.org/terms-of-use).

### **Créditos de Diseño**

El diseño y la experiencia de usuario (UX) están basados en principios comunes de diseño web responsivo y accesible, sin depender de un marco de trabajo propietario.

Este archivo está listo para ser usado y contiene toda la información relevante sobre el frontend. Si necesitas ajustes o algo más específico, ¡avísame! 😊
