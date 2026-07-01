# povinpuglia — link-in-bio

Pagina "linktree" in Next.js (App Router) da mettere su povinpuglia.com.

## Come avviarla
1. Assicurati di avere Node.js installato.
2. Metti il tuo logo (marrone su sabbia) in `public/logo.png`. (Ne ho già copiato uno.)
3. Dal terminale, nella cartella del progetto:
   ```
   npm install
   npm run dev
   ```
   Apri http://localhost:3000
4. Per pubblicare su Vercel: `vercel` (o collega la repo). Poi in Cloudflare
   aggiungi il record DNS verso Vercel in modalità "DNS only" (nuvola grigia).

## Struttura
- `app/layout.tsx` — SEO (metadata + Open Graph) e JSON-LD (ProfilePage + Person + WebSite).
- `app/page.tsx` — la pagina: logo, wordmark, sottotitolo, i 3 social + email, drawer "Il progetto".
- `app/globals.css` — palette calda (sabbia/espresso) e stili.
- `public/logo.png` — il tuo logo.

## Da personalizzare
- `public/og.png` (1200×630) per l'anteprima social — opzionale ma consigliato.
- Testi del drawer in `app/page.tsx`.
