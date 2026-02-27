# 🌐 Web Recursos

[![Build Status](https://img.shields.io/badge/actions-view-blue?logo=github-actions)](https://github.com/RogerCiv/web-resources/actions) 
[![Vercel](https://img.shields.io/badge/deploy-vercel-black?logo=vercel)](https://vercel.com/) 
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

> **Directorio visual, tipado y validado de herramientas para desarrolladores web.**

🔗 **Demo en vivo:** [web-recursos.vercel.app](https://web-recursos.vercel.app/)

---

## 🚀 ¿Qué es Web Recursos?

Web Recursos es un directorio curado de herramientas, frameworks, APIs y recursos para desarrolladores. A diferencia de las típicas _"awesome lists"_ en Markdown, aquí cada recurso ofrece una experiencia superior:

- 🗂 **Cards visuales** en lugar de simples enlaces.
- 🖱️ **Acceso directo** en un clic.
- 🏷 **Filtrado dinámico** por categorías.
- 🔍 **Búsqueda integrada** super rápida.
- 🛡️ **Esquema robusto validado** con Zod.
- 🔠 **100% tipado** con TypeScript.
- 💰 **Indicadores de precio** (free, freemium, paid).

💡 *El objetivo no es acumular enlaces infinitos, sino mantener calidad, coherencia y una estructura impecable.*

---

## 🧠 Filosofía del Proyecto

Este proyecto sigue una arquitectura **file-first** extremadamente simple y eficiente:

Cada recurso vive como un JSON versionado en Git dentro de `src/content/<categoria>/`.

🚫 **No hay base de datos.**
🚫 **No hay panel de administración (CMS).**
🚫 **No hay dependencias de terceros para el contenido.**

Solo **datos estructurados, validados y tipados**.

### ¿Por qué este enfoque?

- ✔️ **Transparencia total:** Todo el contenido es público.
- ✔️ **Contribuciones simples:** Añadir un recurso es tan fácil como abrir un Pull Request con un JSON.
- ✔️ **Control absoluto:** El esquema estricto evita errores de formato.
- ✔️ **Despliegue 100% estático:** Menos magia, más velocidad y claridad.

---

## 🏗 Arquitectura y Decisiones Técnicas

Este proyecto no es solo un directorio; es una **demostración de decisiones arquitectónicas deliberadas**.

### 🛠 Stack Tecnológico
- **Framework:** Astro
- **Lenguaje:** TypeScript
- **Datos:** Astro Content Collections
- **Validación:** Zod
- **Estilos:** TailwindCSS
- **Deploy:** Vercel

### ⚡ ¿Por qué Astro y no Next.js/Nuxt?
El proyecto es fundamentalmente contenido estático estructurado. Astro genera HTML hiper optimizado y, por defecto, **no envía JavaScript innecesario al cliente**. Esto se traduce en menor peso, mejor rendimiento, y puntuaciones Lighthouse perfectas. Hidratar todo el árbol de componentes (como harían otros frameworks) sería sobredimensionar la solución.

### 🗂 Content Collections vs Base de Datos
Al no haber backend ni llamadas a APIs externas en tiempo de ejecución, la latencia es inexistente. Los recursos (archivos JSON) se validan en *build time*. Las ventajas incluyen versionado en Git, cero costes de infraestructura y ausencia de errores de *runtime*. Para un catálogo de este tipo, una base de datos aporta una complejidad innecesaria.

### 🛡️ Zod & TypeScript: Seguridad al máximo
Los datos no se confían a la suerte:
- **Validación Zod:** Garantiza estructura consistente, campos obligatorios y enums estrictos `("free" | "freemium" | "paid")`. Si un JSON no cumple el contrato, el build falla al instante. Esto elimina errores silenciosos y mantiene la integridad del contenido.
- **Tipado Fuerte:** Las categorías son tipos literales (ej. `export type CollectionName = 'frameworks' | 'ui-libraries'`). Esto elimina los strings mágicos sueltos por el proyecto, previene errores de indexación (TS7053) y nos da un autocompletado perfecto en los mapas de configuración. El tipado no es decoración, es prevención.

---

## ➕ Cómo añadir un recurso

¡Cualquiera puede contribuir! Solo tienes que crear un archivo JSON en la categoría correspondiente (ej. `src/content/tools/mi-herramienta.json`).

**Ejemplo mínimo de recurso:**

```json
{
  "id": "mi-herramienta",
  "name": "Mi Herramienta",
  "description": "Descripción breve y concisa del recurso.",
  "categories": "tools",
  "tags": ["cli", "productivity"],
  "documentation": "https://example.com/docs",
  "price": "free"
}
```

Luego, simplemente **abre un Pull Request**. Si el formato o el esquema validado por Zod no es correcto, Astro fallará en el build y GitHub Actions te avisará. Cero riesgo de corromper la app y datos introducidos erróneamente.

---

## 🛠 Desarrollo Local

¿Quieres probar el proyecto en tu máquina? Es muy rápido:

1. **Instalar dependencias:**
   ```bash
   pnpm install
   ```

2. **Modo desarrollo:**
   ```bash
   pnpm run dev
   ```

3. **Build para producción:**
   ```bash
   pnpm run build
   pnpm run preview
   ```

---

## 🎯 Objetivos y Roadmap

**Nuestra misión actual:**
- Servir como herramienta del día a día y real para developers.
- Demostrar una arquitectura limpia y sólida en Astro demostrando decisiones técnicas conscientes.
- Mantener el ecosistema abierto a contribuciones constantes.

**� Posible Roadmap:**
- [ ] Búsqueda más avanzada (tags combinables).
- [ ] Filtros múltiples simultáneos.
- [ ] Sistema de "Recursos Destacados".
- [ ] API pública generada automáticamente desde las *collections*.
- [ ] Exportación total del directorio a formato JSON.

---

## � Contribuir

Si conoces una herramienta increíble, ¡añádela mediante un Pull Request! Principalmente buscamos aportes de:

🎨 **Frontend** | ⚙️ **Backend** | ☁️ **DevOps** | 🖌 **Diseño** | 🧪 **Testing** | ⚡ **Performance** | 🤖 **IA Aplicada**

*(Se prioriza la utilidad real y la relevancia actual en la industria).*

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Siéntete libre de adaptarlo, estudiarlo y mejorarlo.
