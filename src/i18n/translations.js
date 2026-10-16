// -----------------------------------------------------------------------
// All site copy lives here, in one place, keyed by language.
// To edit any text on the site: find the key below and change the string.
// To add a new language: duplicate the "fr" object, rename the key,
// and add it to the LANGUAGES array in LanguageContext.jsx.
// -----------------------------------------------------------------------

export const translations = {
  fr: {
    nav: {
      services: "Solutions",
      process: "Méthode",
      about: "À propos",
      contact: "Contact",
      cta: "Réserver un appel",
    },
    hero: {
      eyebrow: "Automatisation IA · Agents · n8n",
      title: "Automatisez votre entreprise,\nlaissez l'IA faire le travail répétitif.",
      subtitle:
        "Je conçois des agents IA et des workflows sur mesure (n8n, Claude, OpenAI) qui répondent à vos clients, traitent vos données et relient vos outils — pour vous faire gagner des heures chaque semaine.",
      ctaPrimary: "Réservez un appel",
      ctaSecondary: "Voir les solutions",
      badge: "Disponible pour de nouveaux projets",
      flow: {
        trigger: "Déclencheur",
        triggerText: "Nouveau courriel client",
        agent: "Agent IA",
        agentText: "Analyse et rédige la réponse",
        action: "Action",
        actionText: "Envoi + mise à jour du CRM",
      },
      stats: [
        { value: "24/7", label: "Workflows toujours actifs" },
        { value: "FR / EN", label: "Support bilingue natif" },
        { value: "100 %", label: "Sur mesure, sans verrouillage" },
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
          title: "Traitement de données par IA",
          description:
            "Extraction, classement et résumé automatiques de documents, courriels ou fichiers, avec envoi des résultats directement dans vos outils.",
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
      process: "Process",
      about: "About",
      contact: "Contact",
      cta: "Book a Call",
    },
    hero: {
      eyebrow: "AI Automation · Agents · n8n",
      title: "Automate your business,\nlet AI handle the repetitive work.",
      subtitle:
        "I build custom AI agents and workflows (n8n, Claude, OpenAI) that answer your customers, process your data and connect your tools — saving you hours every week.",
      ctaPrimary: "Book a Call",
      ctaSecondary: "View Solutions",
      badge: "Available for new projects",
      flow: {
        trigger: "Trigger",
        triggerText: "New customer email",
        agent: "AI Agent",
        agentText: "Analyzes and drafts the reply",
        action: "Action",
        actionText: "Sends + updates the CRM",
      },
      stats: [
        { value: "24/7", label: "Always-on workflows" },
        { value: "FR / EN", label: "Native bilingual support" },
        { value: "100%", label: "Custom-built, no lock-in" },
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
          title: "AI-powered data processing",
          description:
            "Automatic extraction, sorting and summarizing of documents, emails or files, with results sent straight into your tools.",
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
