# PokéStore - Tienda de Productos Pokémon

![Logo PokéStore](public/IconoLogo.png)

## 📝 Descripción

PokéStore es una tienda online desarrollada con React y Tailwind CSS que ofrece productos de la franquicia Pokémon. La aplicación cuenta con un diseño responsivo, carrito de compras funcional y soporte para modo claro/oscuro.

## ✨ Características

- **Diseño responsivo**: La aplicación se adapta a todos los tamaños de pantalla
- **Carrito de compras**: Agrega, elimina y actualiza cantidades de productos en tiempo real
- **Cambio de tema**: Alterna fácilmente entre modo claro y oscuro
- **Filtrado de productos**: Filtra productos por categorías (cartas, figuras, etc.)
- **Interfaz intuitiva**: Diseño limpio y fácil de usar

## 🛠️ Tecnologías

- **React**: Biblioteca frontend para construir interfaces de usuario
- **Tailwind CSS**: Framework CSS para diseño rápido y responsive
- **Context API**: Para gestionar el estado global de la aplicación
- **React Hooks**: useState, useContext, useEffect
- **LocalStorage**: Para persistir el tema seleccionado y los items del carrito

## 📸 Capturas de Pantalla

### Modo Claro
![Modo Claro](screenshots/light-mode.png)

### Modo Oscuro
![Modo Oscuro](screenshots/dark-mode.png)

### Carrito de Compras
![Carrito](screenshots/cart.png)

## 🚀 Instalación y Uso

1. Clona este repositorio:
```bash
git clone https://github.com/tuusuario/carrito-de-compras.git
cd pokestore
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre en tu navegador:
```
http://localhost:5173
```

## 📂 Estructura del Proyecto

```
pokestore/
├── public/                # Archivos estáticos
├── src/                   # Código fuente
│   ├── components/        # Componentes reutilizables
│   │   ├── Cart.jsx       # Componente del carrito
│   │   ├── CartItem.jsx   # Item individual del carrito
│   │   ├── Footer.jsx     # Pie de página
│   │   ├── Header.jsx     # Encabezado con navegación
│   │   ├── ProductList.jsx # Lista de productos
│   │   └── ThemeButton.jsx # Botón para cambiar tema
│   ├── context/           # Contextos de React
│   │   ├── CartContext.jsx # Contexto del carrito
│   │   └── ThemeContext.jsx # Contexto del tema
│   ├── data/              # Datos estáticos
│   │   └── product.js     # Información de productos
│   ├── pages/             # Páginas de la aplicación
│   │   └── Home.jsx       # Página principal
│   ├── App.jsx            # Componente principal
│   ├── index.css          # Estilos globales
│   └── main.jsx           # Punto de entrada
├── package.json           # Dependencias y scripts
├── tailwind.config.js     # Configuración de Tailwind
└── README.md              # Documentación
```

## 🌐 Funcionalidades del Carrito

- **Agregar productos**: Añade productos al carrito con un clic
- **Actualizar cantidades**: Incrementa o decrementa cantidades desde el carrito
- **Eliminar productos**: Elimina productos individuales
- **Vaciar carrito**: Elimina todos los productos con un solo clic
- **Cálculo automático**: Actualización en tiempo real del precio total

## 🎨 Personalización del Tema

La aplicación incluye un sistema de temas que permite a los usuarios cambiar entre modo claro y oscuro. El tema seleccionado se guarda en localStorage para mantener la preferencia en futuras visitas.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Contribuciones

Las contribuciones son bienvenidas. Si encuentras un bug o tienes una sugerencia, por favor abre un issue o envía un pull request.

---

Desarrollado con ❤️ y ☕ por [Sofi Martin](https://github.com/SofiMartin)

**Nota**: Este es un proyecto educativo. Pokémon es una marca registrada de Nintendo.