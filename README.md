# povinpuglia

Link-in-bio ufficiale di **povinpuglia** — vita normale in Puglia, ripresa in prima persona. Nessuno script, nessuna voce fuori campo: una pizza, due birre, un tramonto, un pieno di GPL. Sottotitoli in inglese per farla arrivare fuori dai confini di casa.

🔗 **[povinpuglia.com](https://povinpuglia.com)**

📷 [Instagram](https://www.instagram.com/povinpuglia/) · 🎵 [TikTok](https://www.tiktok.com/@povinpuglia) · ▶️ [YouTube](https://www.youtube.com/@povinpuglia)

---

## Cos'è

Una singola pagina "link-in-bio" costruita da zero (niente Linktree, niente template) per raccogliere tutti i canali social in un unico posto, con un design coerente con l'estetica del progetto: sabbia, calce, espresso, e un richiamo diretto ai sottotitoli burned-in dei reel — l'elemento che rende il format riconoscibile.

**Stack:** Next.js 14 (App Router) · React · TypeScript · CSS puro (nessun framework CSS)

**SEO:** metadata completi (title, description, Open Graph, Twitter Card, canonical) + JSON-LD (`ProfilePage`, `Person`, `WebSite`) per una corretta indicizzazione su Google e la corretta anteprima quando il link viene condiviso.

---

## Struttura del progetto

```
povinpuglia/
├── app/
│   ├── layout.tsx      # metadata SEO, font, JSON-LD
│   ├── page.tsx         # la pagina: logo, link social, drawer "Il progetto"
│   └── globals.css      # design system: palette, animazioni, componenti
├── public/
│   └── logo.png          # logo del profilo
├── next.config.js        # export statico (per hosting senza Node, es. IONOS)
├── global.d.ts            # dichiarazione tipi per import CSS
└── package.json
```

---

## Sviluppo locale

Richiede [Node.js](https://nodejs.org) (versione 18 o superiore).

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

---

## Deploy

### Opzione A — Vercel (consigliata)

```bash
npm install -g vercel
vercel
```

Poi collega il dominio `povinpuglia.com` dal pannello Vercel. Se il DNS è gestito altrove (es. Cloudflare), punta il record verso Vercel in modalità **"DNS only"** (nuvola grigia, non proxied) per evitare conflitti SSL.

### Opzione B — Hosting condiviso (es. IONOS, via FTP)

Il progetto è già configurato per l'**export statico** (`output: "export"` in `next.config.js`), quindi non serve un server Node:

```bash
npm run build
```

Questo genera una cartella `out/` con solo file HTML/CSS/JS statici. Carica **il contenuto** di `out/` (non la cartella stessa) nella root pubblica del tuo hosting (`htdocs`, `httpdocs` o `public_html` a seconda del piano).

---

## Personalizzazione

| Cosa | Dove |
|---|---|
| Logo | `public/logo.png` |
| Testi del drawer "Il progetto" | `app/page.tsx` |
| Link social ed email | array `LINKS` e costante `MAIL` in `app/page.tsx` |
| Colori e font | variabili CSS in `app/globals.css` (`:root`) |
| Meta tag / JSON-LD | `app/layout.tsx` |
| Anteprima social (Open Graph) | aggiungi `public/og.png` (1200×630) |

---

## Licenza

Progetto privato — © povinpuglia.
