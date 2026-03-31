# Fiori in Gioielli

Sito web statico per **Fiori in Gioielli** — gioielleria artigianale a Siracusa, Sicilia.

Realizzato con [Astro](https://astro.build), ottimizzato per la SEO locale.

## Comandi

| Comando         | Descrizione                          |
| --------------- | ------------------------------------ |
| `npm install`   | Installa le dipendenze               |
| `npm run dev`   | Avvia il server di sviluppo          |
| `npm run build` | Genera il sito statico in `dist/`    |
| `npm run preview` | Anteprima locale del sito generato |

## Struttura del progetto

```
src/
├── components/    # Componenti Astro (Header, Hero, About, ecc.)
├── layouts/       # Layout base con meta tag SEO
├── pages/         # Pagine del sito
└── styles/        # Stili globali CSS
public/
├── images/        # Immagini (logo, galleria, ecc.)
├── favicon.svg
└── robots.txt
```

## Immagini

- **Logo**: caricare in `public/images/logo.png`
- **Galleria**: caricare in `public/images/gallery-1.jpg` ... `gallery-6.jpg`
- **Chi Siamo**: caricare in `public/images/about.jpg`
