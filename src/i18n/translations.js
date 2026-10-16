// -----------------------------------------------------------------------
// All site copy lives here, in one place, keyed by language.
// To edit any text on the site: find the key below and change the string.
// To add a new language: duplicate the "fr" object, rename the key,
// and add it to the LANGUAGES array in LanguageContext.jsx.
// Demo logs are [nodeIndex, text] pairs: nodeIndex lights up that node.
// -----------------------------------------------------------------------

export const translations = {
  fr: {
    nav: {
      services: "Solutions",
      roi: "Calculateur",
      process: "Méthode",
      about: "À propos",
      faq: "FAQ",
      contact: "Contact",
      cta: "Réserver un appel",
    },
    hero: {
      eyebrow: "Automatisation IA · Agents · n8n",
      title: "Vous gérez l'essentiel.\nL'IA s'occupe du répétitif.",
      subtitle:
        "Je conçois des agents IA et des workflows sur mesure (n8n, Claude, OpenAI) qui répondent à vos clients, traitent vos documents et relient vos outils — pour vous rendre des heures chaque semaine.",
      ctaPrimary: "Réservez un appel",
      ctaSecondary: "Calculer mes gains",
      badge: "Disponible pour de nouveaux projets",
      stats: [
        { value: "24/7", label: "Workflows toujours actifs" },
        { value: "FR / EN", label: "Service bilingue natif" },
        { value: "100 %", label: "Sur mesure, sans verrouillage" },
      ],
    },
    demo: {
      windowTitle: "workflow · en production",
      running: "En cours",
      done: "Terminé",
      tabsLabel: "Choisir un scénario",
      hint: "Choisissez un scénario : c'est exactement le genre de système que je construis.",
      doneLine: "Terminé en {s} s — aucune intervention humaine",
      scenarios: [
        {
          tab: "Support client",
          total: "4,2",
          nodes: [
            { label: "Déclencheur", text: "Courriel reçu" },
            { label: "Agent IA", text: "Comprend et rédige" },
            { label: "Action", text: "Répond + CRM" },
          ],
          logs: [
            [0, "Courriel reçu : « Où en est ma commande #4821? »"],
            [1, "Intention détectée : suivi de commande (96 %)"],
            [1, "Commande #4821 trouvée — expédiée le 14 oct."],
            [1, "Réponse personnalisée rédigée en français"],
            [2, "Réponse envoyée · fiche client mise à jour"],
          ],
        },
        {
          tab: "Prospects",
          total: "3,8",
          nodes: [
            { label: "Déclencheur", text: "Formulaire web" },
            { label: "Agent IA", text: "Qualifie le prospect" },
            { label: "Action", text: "Alerte + rendez-vous" },
          ],
          logs: [
            [0, "Nouveau formulaire : PME, 25 employés"],
            [1, "Besoin analysé : automatiser la facturation"],
            [1, "Score de qualification : 82/100 — prospect chaud"],
            [2, "Courriel de suivi personnalisé envoyé"],
            [2, "Alerte Slack · lien de rendez-vous proposé"],
          ],
        },
        {
          tab: "Factures",
          total: "2,9",
          nodes: [
            { label: "Déclencheur", text: "PDF reçu" },
            { label: "Agent IA", text: "Extrait les données" },
            { label: "Action", text: "Comptabilité" },
          ],
          logs: [
            [0, "Facture PDF reçue — Fournisseur ABC inc."],
            [1, "Montant : 1 248,50 $ · échéance : 30 nov."],
            [1, "TPS/TVQ extraites · aucun doublon détecté"],
            [2, "Ligne ajoutée dans Google Sheets"],
            [2, "Rappel de paiement planifié"],
          ],
        },
      ],
    },
    services: {
      eyebrow: "Ce que j'automatise",
      title: "Des agents IA qui travaillent pour vous",
      subtitle:
        "Un seul métier, maîtrisé à fond : transformer vos tâches répétitives en systèmes intelligents fiables.",
      items: [
        {
          title: "Agents IA conversationnels",
          description:
            "Assistants basés sur Claude ou OpenAI qui répondent à vos clients, qualifient vos prospects et ne vous sollicitent que lorsque c'est nécessaire.",
        },
        {
          title: "Workflows n8n sur mesure",
          description:
            "Des scénarios complets qui enchaînent vos étapes manuelles : courriels, formulaires, factures, notifications — conçus, testés et documentés.",
        },
        {
          title: "Traitement de documents par IA",
          description:
            "Extraction, classement et résumé automatiques de factures, contrats ou courriels, avec envoi des résultats directement dans vos outils.",
        },
        {
          title: "Intégrations entre vos outils",
          description:
            "Google Workspace, CRM, Slack, Notion, Airtable, API personnalisées : vos applications se parlent enfin, sans copier-coller.",
        },
      ],
      stackTitle: "Outils maîtrisés",
      stack: ["n8n", "Claude API", "OpenAI API", "Make", "Zapier", "Webhooks & API REST"],
    },
    roi: {
      eyebrow: "Calculateur",
      title: "Combien de temps l'automatisation peut-elle vous rendre?",
      subtitle: "Ajustez les curseurs selon votre réalité. Le calcul se met à jour en direct.",
      hoursLabel: "Heures par semaine sur des tâches répétitives",
      rateLabel: "Coût horaire de ce temps",
      shareLabel: "Part automatisable (estimation)",
      resultHours: "heures récupérées par année",
      resultValue: "de valeur libérée par année",
      weeks: "≈ {n} semaines de travail à temps plein",
      disclaimer:
        "Estimation indicative sur 48 semaines. Le potentiel réel est évalué gratuitement lors de l'appel de cadrage.",
      cta: "Discutons de ces gains",
    },
    process: {
      eyebrow: "Méthode",
      title: "Du besoin au système en production",
      subtitle: "Un processus simple, transparent et sans surprise.",
      steps: [
        {
          title: "Appel de cadrage",
          description:
            "On identifie les tâches qui vous coûtent le plus de temps et on définit ce qui vaut la peine d'être automatisé.",
        },
        {
          title: "Conception et construction",
          description:
            "Je construis le workflow ou l'agent IA, avec des tests sur vos vrais cas d'usage avant toute mise en ligne.",
        },
        {
          title: "Livraison et suivi",
          description:
            "Mise en production, documentation claire et ajustements après lancement pour que le système reste fiable.",
        },
      ],
    },
    about: {
      eyebrow: "À propos",
      title: "Frank Laro — spécialiste en automatisation IA",
      paragraph1:
        "Basé au Canada, je me consacre à une seule chose : construire des systèmes d'automatisation et des agents IA qui fonctionnent vraiment en production. Rigueur technique, livrables documentés et communication claire du début à la fin.",
      paragraph2:
        "Bilingue natif (français canadien et anglais), je travaille aussi bien avec des entreprises francophones qu'anglophones, sans perte de nuance dans la compréhension de vos besoins.",
      highlights: [
        { label: "Spécialité", value: "Automatisation IA" },
        { label: "Outils", value: "n8n, Claude API, OpenAI API" },
        { label: "Langues", value: "FR-CA / EN" },
        { label: "Plateformes", value: "Upwork, Fiverr" },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions fréquentes",
      items: [
        {
          q: "Combien coûte un projet d'automatisation?",
          a: "Chaque projet est chiffré après l'appel de cadrage, selon sa complexité. Vous recevez un prix fixe et un périmètre clair avant le début du travail — pas de mauvaise surprise.",
        },
        {
          q: "Combien de temps faut-il pour livrer?",
          a: "Une automatisation simple est souvent livrée en quelques jours. Un agent IA plus complet, avec plusieurs intégrations, demande généralement une à trois semaines.",
        },
        {
          q: "Mes données sont-elles en sécurité?",
          a: "Les workflows peuvent tourner sur votre propre compte ou une instance n8n auto-hébergée : vos accès restent les vôtres. Seules les données nécessaires transitent par les API d'IA, et rien n'est conservé de mon côté après la livraison.",
        },
        {
          q: "Dois-je avoir des compétences techniques?",
          a: "Non. Je m'occupe de toute la partie technique et je vous remets une documentation claire, en français ou en anglais, pour utiliser et comprendre votre système.",
        },
        {
          q: "Que se passe-t-il si quelque chose brise?",
          a: "Les workflows incluent des alertes d'erreur pour que rien ne passe inaperçu. Un suivi est prévu après la livraison, et un forfait de maintenance est possible si vous le souhaitez.",
        },
        {
          q: "Je ne sais pas encore quoi automatiser. Est-ce un problème?",
          a: "Pas du tout — c'est justement le but de l'appel de cadrage. On passe en revue vos tâches répétitives et je vous indique celles qui ont le meilleur retour sur investissement.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Parlons de votre automatisation",
      subtitle:
        "Décrivez la tâche que vous aimeriez ne plus faire à la main — je vous réponds rapidement avec une première piste.",
      form: {
        name: "Nom",
        namePlaceholder: "Votre nom complet",
        email: "Courriel",
        emailPlaceholder: "vous@exemple.com",
        message: "Message",
        messagePlaceholder: "Quelle tâche voulez-vous automatiser?",
        submit: "Envoyer le message",
        submitting: "Envoi en cours...",
        success: "Merci! Votre message a été envoyé. Je vous réponds sous peu.",
        mailto: "Votre application courriel s'est ouverte avec votre message — il ne reste qu'à l'envoyer.",
        error: "Une erreur est survenue. Veuillez réessayer ou m'écrire directement.",
      },
      platformsTitle: "Vous préférez une plateforme freelance?",
      platformsText: "Consultez mon profil, mes avis clients et contactez-moi directement.",
      upworkCta: "Voir mon profil Upwork",
      fiverrCta: "Voir mon profil Fiverr",
    },
    footer: {
      tagline: "Automatisation IA et agents intelligents, livrés avec rigueur.",
      linksTitle: "Navigation",
      contactTitle: "Contact",
      rights: "Tous droits réservés.",
      builtWith: "Site conçu avec React, Tailwind CSS et Framer Motion.",
    },
    languageSwitcher: {
      label: "Langue",
    },
  },

  en: {
    nav: {
      services: "Solutions",
      roi: "Calculator",
      process: "Process",
      about: "About",
      faq: "FAQ",
      contact: "Contact",
      cta: "Book a Call",
    },
    hero: {
      eyebrow: "AI Automation · Agents · n8n",
      title: "You run the business.\nAI handles the busywork.",
      subtitle:
        "I build custom AI agents and workflows (n8n, Claude, OpenAI) that answer your customers, process your documents and connect your tools — giving you back hours every week.",
      ctaPrimary: "Book a Call",
      ctaSecondary: "Calculate my savings",
      badge: "Available for new projects",
      stats: [
        { value: "24/7", label: "Always-on workflows" },
        { value: "FR / EN", label: "Native bilingual service" },
        { value: "100%", label: "Custom-built, no lock-in" },
      ],
    },
    demo: {
      windowTitle: "workflow · in production",
      running: "Running",
      done: "Done",
      tabsLabel: "Choose a scenario",
      hint: "Pick a scenario: this is exactly the kind of system I build.",
      doneLine: "Completed in {s}s — zero human intervention",
      scenarios: [
        {
          tab: "Customer support",
          total: "4.2",
          nodes: [
            { label: "Trigger", text: "Email received" },
            { label: "AI Agent", text: "Understands & drafts" },
            { label: "Action", text: "Replies + CRM" },
          ],
          logs: [
            [0, "Email received: \"Where is my order #4821?\""],
            [1, "Intent detected: order tracking (96%)"],
            [1, "Order #4821 found — shipped Oct 14"],
            [1, "Personalized reply drafted"],
            [2, "Reply sent · customer record updated"],
          ],
        },
        {
          tab: "Leads",
          total: "3.8",
          nodes: [
            { label: "Trigger", text: "Web form" },
            { label: "AI Agent", text: "Qualifies the lead" },
            { label: "Action", text: "Alert + booking" },
          ],
          logs: [
            [0, "New form: small business, 25 employees"],
            [1, "Need analyzed: automate invoicing"],
            [1, "Qualification score: 82/100 — hot lead"],
            [2, "Personalized follow-up email sent"],
            [2, "Slack alert · booking link offered"],
          ],
        },
        {
          tab: "Invoices",
          total: "2.9",
          nodes: [
            { label: "Trigger", text: "PDF received" },
            { label: "AI Agent", text: "Extracts the data" },
            { label: "Action", text: "Bookkeeping" },
          ],
          logs: [
            [0, "PDF invoice received — ABC Supplies Inc."],
            [1, "Amount: $1,248.50 · due: Nov 30"],
            [1, "Sales taxes extracted · no duplicate found"],
            [2, "Row added to Google Sheets"],
            [2, "Payment reminder scheduled"],
          ],
        },
      ],
    },
    services: {
      eyebrow: "What I Automate",
      title: "AI agents that work for you",
      subtitle:
        "One craft, mastered: turning your repetitive tasks into reliable intelligent systems.",
      items: [
        {
          title: "Conversational AI agents",
          description:
            "Claude- or OpenAI-powered assistants that answer your customers, qualify leads and only involve you when it matters.",
        },
        {
          title: "Custom n8n workflows",
          description:
            "End-to-end scenarios that chain your manual steps: emails, forms, invoices, notifications — designed, tested and documented.",
        },
        {
          title: "AI document processing",
          description:
            "Automatic extraction, sorting and summarizing of invoices, contracts or emails, with results sent straight into your tools.",
        },
        {
          title: "Tool integrations",
          description:
            "Google Workspace, CRM, Slack, Notion, Airtable, custom APIs: your apps finally talk to each other, no copy-pasting.",
        },
      ],
      stackTitle: "Tools I work with",
      stack: ["n8n", "Claude API", "OpenAI API", "Make", "Zapier", "Webhooks & REST APIs"],
    },
    roi: {
      eyebrow: "Calculator",
      title: "How much time could automation give you back?",
      subtitle: "Adjust the sliders to match your reality. Results update live.",
      hoursLabel: "Hours per week on repetitive tasks",
      rateLabel: "Hourly cost of that time",
      shareLabel: "Automatable share (estimate)",
      resultHours: "hours saved per year",
      resultValue: "in value freed up per year",
      weeks: "≈ {n} full-time work weeks",
      disclaimer:
        "Indicative estimate over 48 weeks. Your real potential is assessed for free during the scoping call.",
      cta: "Let's talk about these savings",
    },
    process: {
      eyebrow: "Process",
      title: "From need to production system",
      subtitle: "A simple, transparent process with no surprises.",
      steps: [
        {
          title: "Scoping call",
          description:
            "We identify the tasks costing you the most time and decide what is actually worth automating.",
        },
        {
          title: "Design and build",
          description:
            "I build the workflow or AI agent, testing on your real use cases before anything goes live.",
        },
        {
          title: "Delivery and follow-up",
          description:
            "Go-live, clear documentation and post-launch adjustments so the system stays reliable.",
        },
      ],
    },
    about: {
      eyebrow: "About",
      title: "Frank Laro — AI Automation Specialist",
      paragraph1:
        "Based in Canada, I focus on one thing: building automation systems and AI agents that actually work in production. Technical rigor, documented deliverables and clear communication from start to finish.",
      paragraph2:
        "Natively bilingual (Canadian French and English), I work equally well with French- and English-speaking businesses, with no loss of nuance in understanding your needs.",
      highlights: [
        { label: "Specialty", value: "AI Automation" },
        { label: "Tools", value: "n8n, Claude API, OpenAI API" },
        { label: "Languages", value: "FR-CA / EN" },
        { label: "Platforms", value: "Upwork, Fiverr" },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      items: [
        {
          q: "How much does an automation project cost?",
          a: "Every project is quoted after the scoping call, based on its complexity. You get a fixed price and a clear scope before any work begins — no surprises.",
        },
        {
          q: "How long does delivery take?",
          a: "A simple automation is often delivered within a few days. A more complete AI agent with several integrations usually takes one to three weeks.",
        },
        {
          q: "Is my data safe?",
          a: "Workflows can run on your own account or a self-hosted n8n instance: your credentials stay yours. Only the necessary data passes through AI APIs, and nothing is kept on my side after delivery.",
        },
        {
          q: "Do I need technical skills?",
          a: "No. I handle all the technical work and hand over clear documentation, in English or French, so you can use and understand your system.",
        },
        {
          q: "What happens if something breaks?",
          a: "Workflows include error alerts so nothing goes unnoticed. Follow-up is included after delivery, and an optional maintenance plan is available.",
        },
        {
          q: "I'm not sure what to automate yet. Is that a problem?",
          a: "Not at all — that's exactly what the scoping call is for. We review your repetitive tasks and I point out the ones with the best return on investment.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk about your automation",
      subtitle:
        "Describe the task you'd love to stop doing by hand — I'll get back to you quickly with a first approach.",
      form: {
        name: "Name",
        namePlaceholder: "Your full name",
        email: "Email",
        emailPlaceholder: "you@example.com",
        message: "Message",
        messagePlaceholder: "Which task do you want to automate?",
        submit: "Send Message",
        submitting: "Sending...",
        success: "Thanks! Your message has been sent. I'll get back to you shortly.",
        mailto: "Your email app opened with your message — just hit send.",
        error: "Something went wrong. Please try again or email me directly.",
      },
      platformsTitle: "Prefer a freelance platform?",
      platformsText: "Check out my profile, client reviews, and reach out directly.",
      upworkCta: "View My Upwork Profile",
      fiverrCta: "View My Fiverr Profile",
    },
    footer: {
      tagline: "AI automation and intelligent agents, delivered with rigor.",
      linksTitle: "Navigation",
      contactTitle: "Contact",
      rights: "All rights reserved.",
      builtWith: "Built with React, Tailwind CSS and Framer Motion.",
    },
    languageSwitcher: {
      label: "Language",
    },
  },
};
