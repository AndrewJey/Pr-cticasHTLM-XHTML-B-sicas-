

<!-- local-development:start -->
# Desarrollo local

Puedes abrir este repositorio en VS Code, Antigravity o Sublime Text. El compilador y los servicios necesarios dependen del componente indicado abajo.

## HTML

Para páginas estáticas, inicia un servidor HTTP desde la carpeta de la página. Si usan un backend o una base de datos, hay que preparar ese servicio aparte.

```powershell
py -3.12 -m http.server 8000 --bind 127.0.0.1
```

## Archivos ignorados

`.gitignore` excluye credenciales locales, estado del editor y salidas de las herramientas detectadas. No deja de versionar archivos que ya estaban en Git. Los manifiestos, archivos de bloqueo, recursos fuente y scripts de esquema forman parte del código.
<!-- local-development:end -->

<!-- improvements-20261119:start -->
## Mejoras y verificación funcional (2026-11-19)

- **Mejoras aplicadas:** Corrección y adaptación responsiva de `PracticaBásicaHTML1.1.html`, `PracticaBásicaHTML5.html` y `PrácticaBásicaXHTML.html` (sintaxis XML estricta válida) más portada navegable `index.html`.
- **Pruebas ejecutadas:** `node --test tests/check.test.mjs` (2/2 pruebas aprobadas: 4 páginas responsivas y validación de XHTML estricto).
<!-- improvements-20261119:end -->
