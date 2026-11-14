// Copy for the multi-page structure: nav labels, per-page SEO + header,
// and the home page "explore" cards. Merged into translations as `t.pages`.

export const pages = {
  fr: {
    nav: {
      home: "Accueil",
      solutions: "Solutions",
      tools: "Outils gratuits",
      offers: "Offres",
      about: "À propos",
      contact: "Contact",
      faq: "FAQ",
    },
    onThisPage: "Sur cette page",
    breadcrumb: "Fil d'Ariane",
    meta: {
      solutions: {
        title: "Solutions d'automatisation IA et cas d'usage — BoncelliAI",
        description:
          "Agents IA conversationnels, workflows n8n, traitement de documents et intégrations d'outils. Six cas d'usage concrets avec le flux automatisé et le gain typique.",
        eyebrow: "Solutions",
        heading: "Ce que l'IA peut faire pour votre entreprise",
        intro:
          "Quatre types de solutions, et des exemples concrets par domaine : service client, ventes, administration et opérations.",
        anchors: [
          { id: "services", label: "Solutions" },
          { id: "cases", label: "Cas d'usage" },
        ],
      },
      tools: {
        title: "Calculateur de gains et diagnostic d'automatisation gratuit — BoncelliAI",
        description:
          "Estimez en quelques secondes les heures et l'argent que l'automatisation peut vous faire gagner, puis obtenez une première piste avec le diagnostic express en trois questions.",
        eyebrow: "Outils gratuits",
        heading: "Combien l'automatisation peut-elle vous rapporter?",
        intro:
          "Deux outils gratuits, sans inscription : calculez vos gains, puis répondez à trois questions pour savoir par où commencer.",
        anchors: [
          { id: "roi", label: "Calculateur" },
          { id: "diagnostic", label: "Diagnostic express" },
        ],
      },
      offers: {
        title: "Offres d'automatisation IA à prix fixe et FAQ — BoncelliAI",
        description:
          "Trois formules claires : automatisation ciblée, agent IA complet ou partenaire automatisation. Prix fixe après l'appel de cadrage, engagements écrits et réponses à vos questions.",
        eyebrow: "Offres",
        heading: "Des formules claires, un prix fixe",
        intro:
          "Choisissez le format qui vous convient. Le prix exact est fixé après l'appel de cadrage, avant tout travail.",
        anchors: [
          { id: "offers", label: "Formules" },
          { id: "faq", label: "FAQ" },
        ],
      },
      about: {
        title: "À propos de Frank Laro, spécialiste en automatisation IA — BoncelliAI",
        description:
          "Qui est derrière BoncelliAI, comment je travaille et ce que vous pouvez attendre de chaque projet : appel de cadrage, conception, livraison et suivi.",
        eyebrow: "À propos",
        heading: "Une personne, du cadrage à la livraison",
        intro: "Vous parlez directement à celui qui conçoit et construit votre automatisation. Voici qui je suis et comment je travaille.",
        anchors: [
          { id: "about", label: "Qui je suis" },
          { id: "process", label: "Méthode" },
        ],
      },
      contact: {
        title: "Contact — Réservez un appel de cadrage gratuit — BoncelliAI",
        description:
          "Décrivez la tâche que vous aimeriez automatiser. Échange en français ou en anglais. Appel de cadrage gratuit et sans engagement.",
        eyebrow: "Contact",
        heading: "Parlons de votre projet",
        intro: "Quelques lignes suffisent pour démarrer. Je vous réponds avec une première idée concrète.",
        anchors: [],
      },
    },
    explore: {
      eyebrow: "Explorer",
      title: "Tout ce qu'il faut savoir, en quatre pages",
      subtitle: "Allez directement à ce qui vous intéresse.",
      cards: {
        solutions: {
          title: "Solutions et cas d'usage",
          text: "Agents IA, workflows n8n, traitement de documents. Six exemples concrets avec le gain typique.",
          cta: "Voir les solutions",
        },
        tools: {
          title: "Calculateur et diagnostic",
          text: "Estimez vos heures récupérées et obtenez une première piste en trois questions.",
          cta: "Calculer mes gains",
        },
        offers: {
          title: "Offres et FAQ",
          text: "Trois formules à prix fixe, mes engagements et les réponses aux questions fréquentes.",
          cta: "Voir les offres",
        },
        about: {
          title: "À propos et méthode",
          text: "Qui je suis, et comment se déroule un projet, du premier appel au suivi.",
          cta: "En savoir plus",
        },
      },
    },
  },

  en: {
    nav: {
      home: "Home",
      solutions: "Solutions",
      tools: "Free tools",
      offers: "Packages",
      about: "About",
      contact: "Contact",
      faq: "FAQ",
    },
    onThisPage: "On this page",
    breadcrumb: "Breadcrumb",
    meta: {
      solutions: {
        title: "AI Automation Solutions & Use Cases — BoncelliAI",
        description:
          "Conversational AI agents, n8n workflows, document processing and tool integrations. Six concrete use cases with the automated flow and the typical gain.",
        eyebrow: "Solutions",
        heading: "What AI can do for your business",
        intro: "Four kinds of solutions, with concrete examples by area: customer support, sales, admin and operations.",
        anchors: [
          { id: "services", label: "Solutions" },
          { id: "cases", label: "Use cases" },
        ],
      },
      tools: {
        title: "Free Automation Savings Calculator & Quick Diagnostic — BoncelliAI",
        description:
          "Estimate in seconds the hours and money automation can save you, then get a first lead with the three-question quick diagnostic.",
        eyebrow: "Free tools",
        heading: "How much could automation give back to you?",
        intro: "Two free tools, no sign-up: calculate your savings, then answer three questions to see where to start.",
        anchors: [
          { id: "roi", label: "Calculator" },
          { id: "diagnostic", label: "Quick diagnostic" },
        ],
      },
      offers: {
        title: "Fixed-Price AI Automation Packages & FAQ — BoncelliAI",
        description:
          "Three clear packages: targeted automation, full AI agent or automation partner. Fixed price after the scoping call, written commitments and answers to your questions.",
        eyebrow: "Packages",
        heading: "Clear packages, a fixed price",
        intro: "Pick the format that suits you. The exact price is set after the scoping call, before any work starts.",
        anchors: [
          { id: "offers", label: "Packages" },
          { id: "faq", label: "FAQ" },
        ],
      },
      about: {
        title: "About Frank Laro, AI Automation Specialist — BoncelliAI",
        description:
          "Who is behind BoncelliAI, how I work and what to expect from every project: scoping call, design, delivery and follow-up.",
        eyebrow: "About",
        heading: "One person, from scoping to delivery",
        intro: "You talk directly to the person who designs and builds your automation. Here is who I am and how I work.",
        anchors: [
          { id: "about", label: "Who I am" },
          { id: "process", label: "Process" },
        ],
      },
      contact: {
        title: "Contact — Book a Free Scoping Call — BoncelliAI",
        description:
          "Describe the task you'd like to automate. We can talk in English or French. Free, no-commitment scoping call.",
        eyebrow: "Contact",
        heading: "Let's talk about your project",
        intro: "A few lines are enough to get started. I'll reply with a first concrete idea.",
        anchors: [],
      },
    },
    explore: {
      eyebrow: "Explore",
      title: "Everything you need to know, in four pages",
      subtitle: "Jump straight to what interests you.",
      cards: {
        solutions: {
          title: "Solutions & use cases",
          text: "AI agents, n8n workflows, document processing. Six concrete examples with the typical gain.",
          cta: "See solutions",
        },
        tools: {
          title: "Calculator & diagnostic",
          text: "Estimate the hours you'd win back and get a first lead in three questions.",
          cta: "Calculate my savings",
        },
        offers: {
          title: "Packages & FAQ",
          text: "Three fixed-price packages, my commitments and answers to common questions.",
          cta: "See packages",
        },
        about: {
          title: "About & process",
          text: "Who I am, and how a project runs, from the first call to follow-up.",
          cta: "Learn more",
        },
      },
    },
  },
};
