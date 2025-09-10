# Recursos Humanos - Gestión de Empleados

![Home](portada.jpeg)
Aplicación web **full-stack** desarrollada con **React** en el frontend y **Spring Boot** en el backend.  
El sistema permite gestionar empleados, departamentos y registros de recursos humanos de manera eficiente, ofreciendo una interfaz moderna e intuitiva.

---

## 🚀 Tecnologías Utilizadas
- **Frontend**: React, Bootstrap, CSS, JavaScript  
- **Backend**: Spring Boot, Java  
- **Base de datos**: MySQL  
- **Herramientas adicionales**: Git, GitHub, Docker (opcional para despliegue)

---

## 📌 Funcionalidades
- CRUD completo de empleados, departamentos y registros de RRHH.  
- Modales dinámicos para agregar, editar y eliminar información.  
- Tarjetas de empleados con foto y detalles organizados.  
- Formularios responsivos con validaciones.  
- API REST segura construida en **Spring Boot**.  
- Persistencia de datos en **MySQL**.  

---

## 📂 Estructura del Proyecto


Recursos_humanos/

├── RecursosHumanosSpring/ # Backend (Spring Boot)

│ ├── src/main/java/... # Código fuente Java

│ ├── src/main/resources/ # Configuración (application.properties)

│ └── pom.xml # Dependencias Maven

│

├── recursos-humanos-app/ # Frontend (React)

│ ├── public/ # Archivos públicos

│ ├── src/ # Componentes y lógica de React

│ └── package.json # Dependencias del frontend

│
├── BASE DE DATOS/ # Script SQL de la base de datos
│ └── recursos_humanos_db.sql


---

## ⚙️ Instalación y Ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/MarianaRQ/Recursos_humanos.git
cd Recursos_humanos

2️⃣ Backend (Spring Boot)

Abrir la carpeta RecursosHumanosSpring en tu IDE (IntelliJ, Eclipse, VS Code).

Configurar la base de datos en application.properties.

spring.datasource.url=jdbc:mysql://localhost:3306/recursos_humanos_db
spring.datasource.username=tu_usuario
spring.datasource.password=tu_contraseña


Ejecutar la aplicación con:

mvn spring-boot:run


El backend se iniciará en: http://localhost:8080

3️⃣ Frontend (React)

Ir a la carpeta del frontend:

cd recursos-humanos-app


Instalar dependencias:

npm install


Iniciar la aplicación:

npm start


El frontend se iniciará en: http://localhost:3000


📖 Autor

👩‍💻 Desarrollado por Gysel Mariana Rodriguez

Proyecto académico/freelancer como parte del portafolio de Desarrollo Web Full-Stack.
