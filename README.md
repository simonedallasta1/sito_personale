# Sito Portfolio Personale — Simone Dall'Asta

> File di inizializzazione e "conoscenza di base" del progetto.
> Da tenere alla radice del repository. Serve sia come documentazione per gli sviluppatori
> sia come contesto da fornire a un assistente AI (es. Claude / Claude Code) prima di iniziare.

---

## 1. Obiettivo

Realizzare un sito personale (portfolio) che:

- parli di me e della mia figura professionale;
- mostri i miei **progetti** (sezione portfolio dedicata);
- elenchi le mie **competenze** (skill);
- racconti le mie **esperienze** lavorative e formative;
- sia **bello e accattivante** dal punto di vista grafico;
- sia **responsive** (perfettamente usabile su mobile);
- sia **veloce** in caricamento;
- sia **conforme al GDPR**: privacy policy, cookie policy, cookie banner e **blocco preventivo dei cookie/script non essenziali** finché non c'è il consenso.

---

## 2. Chi sono

**Simone Dall'Asta** — Software Developer
Cremona, Lombardia, Italia

Nato a Parma, ho vissuto per molti anni a Casaltone (frazione di Sorbolo) e oggi vivo a Cremona.
Appassionato di tecnologie, web e software development, sempre incuriosito dalle novità.

### Esperienza
- **Custom Group / Custom S.p.A.** — 7 anni 2 mesi
  - *Software Development Supervisor* — lug 2024 → presente
  - *Software Developer* — mag 2019 → lug 2024
- **Advantage Srl** — *Computer Engineer* — ott 2017 → mag 2019
- **University of Parma** — *Studente, Ingegneria Informatica* — set 2009 → ott 2017
- **Elettronica In** (rivista) — *Autore collaboratore* — gen 2016 → mar 2017
  Realizzazione dei progetti "L'acquario connesso" e "Riconoscitore di targhe per cancelli automatici", con relativi articoli pubblicati.

### Formazione
- **Laurea Magistrale in Ingegneria Informatica** — Università di Parma (2014–2017) — voto 107
- **Laurea Triennale in Ingegneria Informatica** — Università di Parma (2009–2014) — voto 91/110
- **Diploma Liceo Scientifico G. Marconi** — sperimentale "Brocca" (2004–2009)

### Lingue
- Italiano (madrelingua)
- Inglese

---

## 3. Competenze (Skill)

Da organizzare in categorie nel sito (esempio di raggruppamento):

- **Linguaggi**: C, C++, Java, Python, Go (Golang), JavaScript, Pascal, Assembly
- **Web**: HTML, CSS, jQuery, AJAX, XML, Sviluppo Web, WordPress, CMS, Dreamweaver
- **Dati & ML**: MySQL, OpenCV, Keras
- **Grafica/Computer Vision**: OpenGL, Processing
- **IoT / Hardware**: Arduino, IoT (Internet of Things)
- **Strumenti & SO**: GitHub, Linux, Microsoft Windows, Microsoft Office (Word, Excel, PowerPoint)
- **Altro**: Programmazione, Sviluppo di software, Ricerca

> Suggerimento UX: mostrare le skill principali con indicatori visivi (badge, barre o livelli),
> evitando di elencarle tutte in modo piatto.

---

## 4. Progetti (per la sezione Portfolio)

| Progetto | Periodo | Area |
|---|---|---|
| Sviluppo e valutazione di un algoritmo per la ricerca di UAV in immagini | 2016 | Computer Vision |
| Software per robot Pioneer 3DX con laser scanner Sick LMS100 | 2016 | Robotica |
| L'acquario connesso | 2015–2016 | IoT |
| Sito web aziendale per "Metal Valley" | 2014–2015 | Web |
| Riconoscitore di targhe per cancelli automatici | 2016 | Computer Vision / IoT |
| Sistema IoT sicuro orientato al Cloud | 2017 | IoT / Cloud Security |

### Pubblicazioni
- **IoTChain: a Blockchain Security Architecture for the Internet of Things**
  IEEE Wireless Communications and Networking Conference (WCNC), Barcellona — apr 2018

> Per ogni progetto prevedere: titolo, breve descrizione, tecnologie usate, anno, link (articolo/repo/demo) e immagine di anteprima.

---

## 5. Requisiti non funzionali

- **Responsive / Mobile-first**: layout fluido, breakpoint testati, immagini adattive.
- **Performance**: obiettivo Lighthouse ≥ 90 su Performance/Best Practices/SEO/Accessibility.
  - Immagini in formato moderno (WebP/AVIF), lazy-loading, dimensioni corrette.
  - CSS/JS minimi; evitare librerie pesanti non necessarie.
  - Font self-hosted o `font-display: swap` (vedi nota GDPR sui font).
- **Accessibilità**: contrasti adeguati, testo alternativo sulle immagini, navigazione da tastiera.
- **SEO**: meta tag, Open Graph, sitemap, titoli semantici.

---

## 6. Stack tecnologico consigliato

L'obiettivo "veloce + bello + ospitabile su GitHub" si sposa bene con un **sito statico**.

Opzioni (in ordine di consiglio):

1. **Astro** — eccellente per performance (zero JS di default), ottimo per portfolio. ✅ consigliato
2. **HTML + CSS + JS "vanilla"** — massima leggerezza e controllo, nessun build complesso.
3. **Next.js (export statico)** — se preferisci React.

**Hosting**: GitHub Pages, Netlify o Vercel (tutti con HTTPS gratuito e deploy automatico dal repo).

> Nota: un sito statico semplifica privacy e performance, ma il **blocco dei cookie** va comunque
> gestito lato client (vedi sezione 7).

---

## 7. Conformità GDPR / Cookie / Privacy

### 7.1 Principio di base
- I **cookie tecnici/essenziali** (necessari al funzionamento) **non richiedono consenso**.
- I cookie/script di **analisi, marketing e profilazione** richiedono **consenso preventivo**:
  vanno **bloccati finché l'utente non accetta**.

### 7.2 Cookie banner — requisiti
- Compare al primo accesso.
- Pulsanti **"Accetta"** e **"Rifiuta"** con **pari evidenza** (no "dark pattern").
- Possibilità di **personalizzare** le scelte per categoria.
- Riapribile in qualsiasi momento (es. link "Gestisci cookie" nel footer).
- Nessun cookie non essenziale prima della scelta.

### 7.3 Blocco preventivo (tecnico)
Implementare un Consent Management con blocco script. Soluzioni adatte a un sito statico:
- **Klaro!** (open source, self-hosted, leggero) ✅
- **tarteaucitron.js** (open source)
- **Cookiebot** / **iubenda** (servizi gestiti, anche generatori di policy)

> Regola d'oro: gli script di terze parti (es. analytics, font esterni, embed) devono essere
> caricati **solo dopo** il consenso, non in `<head>` in modo incondizionato.

### 7.4 Documenti richiesti
- **Privacy Policy**: chi è il titolare, quali dati raccogli, perché, basi giuridiche, durata di conservazione, destinatari/terze parti, diritti dell'utente (accesso, rettifica, cancellazione, ecc.) e contatti.
- **Cookie Policy**: elenco dei cookie per categoria, finalità, durata, e come gestirli/disabilitarli.
- Entrambi raggiungibili **dal banner** e dal **footer** di ogni pagina.

### 7.5 Inventario dei servizi — stack proposto (privacy-first)
Di seguito uno **stack consigliato di default**, scelto per minimizzare cookie e obblighi di consenso.
È una proposta: puoi confermarlo o sostituire singole voci. Su questa base finalizzo i documenti.

| Servizio | Funzione | Cookie/Dati | Consenso | Note |
|---|---|---|---|---|
| **GitHub Pages** | Hosting del sito | Log di accesso (IP) per sicurezza | No (tecnico/leg. interesse) | Microsoft/USA: citare trasferimento extra-UE nella privacy policy |
| **Cloudflare** (opz., via Pages/CDN) | CDN, HTTPS, anti-DDoS | Solo cookie tecnici/sicurezza | No (tecnico) | Opzionale; migliora velocità e protezione |
| **Umami** (self-hosted) *oppure* **Plausible** | Statistiche di visita | **Cookieless**, dati aggregati/anonimi | No, ma da dichiarare in privacy policy | Alternativa cookieless a Google Analytics |
| **Font self-hosted** (Fontsource) | Tipografia | Nessuno | No | Sostituisce Google Fonts → niente IP a Google |
| **Web3Forms** *oppure* **Formspree** | Form contatti → email | Dati personali (nome, email, messaggio) | Checkbox privacy + link policy | Niente cookie; aggiungere campo honeypot anti-spam |
| **Cloudflare Turnstile** (opz.) | Anti-spam form | Cookie tecnico/sicurezza | No (tecnico) | Alternativa privacy-friendly a reCAPTCHA |
| **YouTube-nocookie** (solo se servono video) | Embed video | Cookie solo dopo interazione | **Sì**, caricare dopo consenso | Da bloccare con il consent manager |

**Conseguenze pratiche di questo stack:**
- Con analytics cookieless + font self-hosted + form senza cookie, **non servono cookie di consenso**:
  resta un banner minimale e, soprattutto, una **privacy policy chiara**.
- L'unico elemento che richiede consenso esplicito è un eventuale **embed YouTube** (da bloccare finché l'utente non accetta).
- Il form contatti raccoglie dati personali: serve **informativa + checkbox di consenso** prima dell'invio.

> Se in futuro aggiungi Google Analytics, social embed o pixel di marketing, quei servizi
> richiederanno consenso preventivo e blocco fino all'accettazione (vedi 7.3).

### 7.6 Disclaimer
Questi sono modelli/checklist tecniche, **non consulenza legale**. Per un sito pubblico è
consigliata una verifica da parte di un professionista, soprattutto sui testi della policy.

---

## 7.bis Foto profilo (asset)

- **Self-hosting obbligatorio**: la foto va salvata nel repo (es. `public/img/profilo.webp`), **non** linkata da URL esterni.
  - L'URL del CDN di Facebook è **temporaneo** (firmato, scade) → si romperebbe dopo poche ore/giorni.
  - Hot-linkare da `fbcdn.net` invierebbe l'IP di ogni visitatore a **Meta** → trasferimento a terzi che richiederebbe consenso e contraddirebbe l'impostazione privacy-first.
- **Ottimizzazione**: esportare in **WebP/AVIF**, formato quadrato, più dimensioni (es. 160/320/640 px) con `srcset`, `loading="lazy"` se non è above-the-fold.
- **Immagine scelta**: l'**headshot professionale di LinkedIn** (blazer blu), coerente con un portfolio da Software Developer.
- **File pronti** (in `public/img/`, sorgente 288×288):

  | File | Dim. | Peso |
  |---|---|---|
  | `profilo-288.webp` | 288px | ~21 KB |
  | `profilo-192.webp` | 192px | ~10 KB |
  | `profilo-96.webp` | 96px | ~3 KB |
  | `profilo-288.jpg` | 288px | ~24 KB | fallback |

- **Snippet HTML** (responsive + fallback):

  ```html
  <picture>
    <source
      type="image/webp"
      srcset="/img/profilo-96.webp 96w, /img/profilo-192.webp 192w, /img/profilo-288.webp 288w"
      sizes="(max-width: 600px) 96px, 192px">
    <img src="/img/profilo-288.jpg" alt="Simone Dall'Asta" width="288" height="288" loading="lazy">
  </picture>
  ```

> Nota: la sorgente è 288×288. Se in futuro vuoi mostrarla più grande (hero), recupera da LinkedIn un originale a risoluzione maggiore e rigenero i tagli.

---

## 8. Struttura del repository (proposta)

```
/
├── README.md                ← questo file
├── public/                  ← asset statici (immagini, favicon, font self-hosted)
├── src/
│   ├── pages/               ← home, about, portfolio, contatti
│   ├── components/          ← header, footer, card progetto, cookie banner
│   ├── data/                ← progetti.json, skill.json, esperienze.json
│   └── styles/
├── legal/
│   ├── privacy-policy.md
│   └── cookie-policy.md
└── ...
```

---

## 9. Roadmap

- [ ] Definire stack e inizializzare il progetto
- [ ] Layout responsive + design system (colori, tipografia)
- [ ] Sezioni: Home / Chi sono / Esperienze / Skill / Portfolio / Contatti
- [ ] Popolare i dati (progetti, skill, esperienze) dai file in `src/data`
- [ ] Ottimizzazione immagini e performance (Lighthouse ≥ 90)
- [ ] Cookie banner + blocco preventivo (Klaro! o equivalente)
- [ ] Privacy Policy + Cookie Policy (basate sullo stack della sezione 7.5)
- [ ] Deploy + dominio + HTTPS
