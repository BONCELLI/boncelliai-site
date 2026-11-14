// French (fr-CA) copy. See translations.js for the shared structure notes.
// Demo logs are [nodeIndex, text] pairs: nodeIndex lights up that node.

export const fr = {
  nav: {
    services: "Solutions",
    cases: "Cas d'usage",
    offers: "Offres",
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
  trust: {
    label: "Je connecte les outils que vous utilisez déjà",
    more: "+ Make, Zapier, Airtable, HubSpot et toute API REST",
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
  cases: {
    eyebrow: "Cas d'usage",
    title: "Des exemples concrets, prêts à adapter",
    subtitle:
      "Chaque carte décrit un système que je construis régulièrement. Le gain indiqué est une estimation typique : le vôtre est évalué lors de l'appel de cadrage.",
    filterLabel: "Filtrer par domaine",
    all: "Tous",
    gainLabel: "Gain typique",
    flowLabel: "Le flux automatisé",
    categories: { support: "Service client", sales: "Ventes", admin: "Administration", ops: "Opérations" },
    items: [
      {
        category: "support",
        industry: "Commerce en ligne",
        title: "Support de niveau 1 qui répond seul",
        problem: "Les mêmes questions reviennent chaque jour : suivi de commande, retours, délais.",
        flow: ["Courriel ou chat reçu", "L'agent IA lit la commande et rédige", "Réponse envoyée, cas complexes escaladés"],
        gain: "5 à 10 h / semaine",
        tools: ["Gmail", "Shopify", "Claude"],
      },
      {
        category: "sales",
        industry: "Immobilier · courtage",
        title: "Prospects qualifiés avant même de rappeler",
        problem: "Les demandes web s'accumulent et les meilleurs prospects attendent trop longtemps.",
        flow: ["Formulaire ou annonce reçu", "Scoring, enrichissement et fiche CRM", "Courriel personnalisé + lien de rendez-vous"],
        gain: "Réponse en moins de 2 min",
        tools: ["HubSpot", "Google Calendar", "n8n"],
      },
      {
        category: "admin",
        industry: "PME · comptabilité",
        title: "Factures fournisseurs saisies sans vous",
        problem: "Chaque facture PDF est retapée à la main, avec des erreurs et des retards de paiement.",
        flow: ["PDF reçu par courriel", "Extraction des montants, taxes et échéances", "Ligne comptable + rappel de paiement"],
        gain: "3 à 6 h / semaine",
        tools: ["Gmail", "Google Sheets", "OpenAI"],
      },
      {
        category: "ops",
        industry: "Clinique · services",
        title: "Rappels de rendez-vous automatiques",
        problem: "Les absences non prévenues coûtent des créneaux vides et des appels de relance.",
        flow: ["Rendez-vous créé dans l'agenda", "Rappel 48 h et 2 h avant, en FR ou EN", "Confirmation ou replanification enregistrée"],
        gain: "Moins d'absences, zéro appel de rappel",
        tools: ["Google Calendar", "WhatsApp", "n8n"],
      },
      {
        category: "ops",
        industry: "Agence · consultation",
        title: "Onboarding client en un clic",
        problem: "Chaque nouveau client exige la même série de courriels, dossiers et accès à créer.",
        flow: ["Contrat signé", "Dossier Drive, canal Slack et tâches créés", "Courriel de bienvenue personnalisé envoyé"],
        gain: "2 h récupérées par client",
        tools: ["Google Drive", "Slack", "Notion"],
      },
      {
        category: "admin",
        industry: "Ressources humaines",
        title: "Tri des candidatures en continu",
        problem: "Des dizaines de CV à lire pour quelques profils réellement pertinents.",
        flow: ["CV reçu par courriel ou formulaire", "Résumé, score et points forts extraits", "Tableau mis à jour + réponse envoyée"],
        gain: "Jusqu'à 80 % du tri initial",
        tools: ["Outlook", "Airtable", "Claude"],
      },
    ],
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
  diagnostic: {
    eyebrow: "Diagnostic express",
    title: "Quelle automatisation commencer en premier?",
    subtitle: "Trois questions, trente secondes : je vous propose une première piste adaptée à votre situation.",
    stepLabel: "Question {n} sur {total}",
    back: "Retour",
    restart: "Recommencer",
    questions: [
      {
        q: "Quelle tâche vous coûte le plus de temps?",
        options: [
          "Répondre aux courriels et aux clients",
          "Suivre et relancer les prospects",
          "Saisir des documents ou des factures",
          "Copier-coller entre plusieurs outils",
        ],
      },
      {
        q: "Combien d'heures par semaine y passez-vous, vous ou votre équipe?",
        options: ["Moins de 5 h", "5 à 10 h", "10 à 20 h", "Plus de 20 h"],
      },
      {
        q: "Quels outils utilisez-vous déjà?",
        options: ["Google Workspace", "Microsoft 365", "Un CRM (HubSpot, Pipedrive…)", "Rien de précis pour l'instant"],
      },
    ],
    resultEyebrow: "Votre première piste",
    recommendations: [
      {
        title: "Un agent de support qui répond seul",
        text: "Un agent IA lit chaque demande, trouve l'information dans vos outils et répond dans votre ton. Vous ne voyez que les cas qui méritent votre attention.",
      },
      {
        title: "Un agent qui qualifie et relance vos prospects",
        text: "Chaque demande est scorée, enrichie et suivie automatiquement. Les meilleurs prospects reçoivent une réponse personnalisée en quelques minutes.",
      },
      {
        title: "Un flux de traitement de documents",
        text: "Vos PDF, factures et formulaires sont lus par l'IA, vérifiés, puis envoyés au bon endroit : tableur, comptabilité ou CRM.",
      },
      {
        title: "Des intégrations qui relient vos outils",
        text: "Un workflow n8n synchronise vos applications en temps réel, sans ressaisie. Chaque action déclenche la suivante, avec des alertes en cas d'anomalie.",
      },
    ],
    offerLabel: "Offre suggérée",
    hoursLabel: "≈ {n} h récupérées par année",
    hoursNote: "sur la base de 60 % de la tâche automatisée, 48 semaines",
    cta: "Recevoir ma piste détaillée",
    ctaNote: "Vos réponses préremplissent le formulaire de contact. Gratuit, sans engagement.",
    prefill: "Diagnostic express — Tâche : {task}. Temps : {hours} par semaine. Outils : {tools}. Piste proposée : {reco}.",
  },
  process: {
    eyebrow: "Méthode",
    title: "Du besoin au système en production",
    subtitle: "Un processus simple, transparent et sans surprise.",
    steps: [
      {
        duration: "Jour 1",
        title: "Appel de cadrage",
        description:
          "On identifie les tâches qui vous coûtent le plus de temps et on définit ce qui vaut la peine d'être automatisé.",
      },
      {
        duration: "Jours 2 à 15",
        title: "Conception et construction",
        description:
          "Je construis le workflow ou l'agent IA, avec des tests sur vos vrais cas d'usage avant toute mise en ligne.",
      },
      {
        duration: "Mise en ligne et après",
        title: "Livraison et suivi",
        description:
          "Mise en production, documentation claire et ajustements après lancement pour que le système reste fiable.",
      },
    ],
  },
  offers: {
    eyebrow: "Offres",
    title: "Trois façons de travailler ensemble",
    subtitle:
      "Un prix fixe est remis après l'appel de cadrage, selon le périmètre. Aucune facturation surprise.",
    popular: "Le plus demandé",
    deliveryLabel: "Délai",
    idealLabel: "Idéal pour",
    cta: "Discuter de cette offre",
    note: "Chaque offre inclut l'appel de cadrage gratuit, des tests sur vos cas réels et une documentation en français ou en anglais.",
    items: [
      {
        name: "Automatisation ciblée",
        tagline: "Un workflow, un problème réglé.",
        delivery: "Quelques jours",
        ideal: "Une tâche précise qui revient chaque jour",
        features: [
          "Un workflow n8n ou Make complet",
          "Connexion à 2 ou 3 de vos outils",
          "Tests sur vos vrais cas",
          "Documentation claire",
          "2 semaines d'ajustements inclus",
        ],
      },
      {
        name: "Agent IA complet",
        tagline: "Un agent qui comprend, décide et agit.",
        delivery: "1 à 3 semaines",
        ideal: "Support, prospects ou documents à volume",
        features: [
          "Agent IA Claude ou OpenAI sur mesure",
          "Plusieurs intégrations et sources de données",
          "Garde-fous et escalade vers un humain",
          "Alertes d'erreur intégrées",
          "Formation d'une heure pour votre équipe",
          "30 jours d'ajustements inclus",
        ],
      },
      {
        name: "Partenaire automatisation",
        tagline: "Un spécialiste à vos côtés, chaque mois.",
        delivery: "En continu",
        ideal: "Entreprises qui veulent automatiser étape par étape",
        features: [
          "Feuille de route d'automatisation",
          "Nouvelles automatisations chaque mois",
          "Surveillance et maintenance des systèmes",
          "Réponse prioritaire",
          "Rapport mensuel des gains",
        ],
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
      {
        q: "Quelle est la différence entre un workflow et un agent IA?",
        a: "Un workflow suit des règles fixes : si A, alors B. Un agent IA comprend un contexte (un courriel, un document) et décide de l'action à poser. Je combine les deux : l'agent raisonne, le workflow exécute de façon fiable.",
      },
      {
        q: "Travaillez-vous avec des entreprises hors du Canada?",
        a: "Oui. Les projets se font entièrement à distance, en français ou en anglais, avec des clients au Canada, en Europe et aux États-Unis. Les échanges passent par visioconférence et courriel.",
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
  contactExtra: {
    company: "Entreprise",
    optional: "facultatif",
    companyPlaceholder: "Nom de votre entreprise",
    topicLabel: "Ce que vous voulez automatiser",
    topics: ["Support client", "Prospects", "Documents et factures", "Intégrations", "Autre"],
    privacy: "Vos informations restent confidentielles et servent uniquement à vous répondre.",
    replyNote: "Réponse rapide, en français ou en anglais.",
    directTitle: "Ou écrivez-moi directement",
    bookCta: "Réserver un créneau en ligne",
    required: "Champ obligatoire",
    prefilled: "Votre diagnostic a été ajouté au message.",
  },
  commitments: {
    eyebrow: "Engagements",
    title: "Ce sur quoi vous pouvez compter",
    subtitle: "Des garanties concrètes, posées noir sur blanc avant le premier jour de travail.",
    items: [
      {
        title: "Prix fixe, périmètre clair",
        description: "Un devis ferme après l'appel de cadrage. Pas de facturation surprise, pas de dépassement.",
      },
      {
        title: "Vos accès restent les vôtres",
        description:
          "Workflows sur votre compte ou une instance n8n auto-hébergée. Aucun verrouillage, aucune dépendance.",
      },
      {
        title: "Documentation bilingue",
        description: "Chaque système est livré avec une documentation claire, en français ou en anglais.",
      },
      {
        title: "Alertes et suivi inclus",
        description: "Alertes d'erreur intégrées et ajustements après lancement pour que tout reste fiable.",
      },
    ],
  },
  cta: {
    title: "Prêt à reprendre des heures chaque semaine?",
    text: "Commencez par un appel de cadrage : on repère ensemble ce qui vaut la peine d'être automatisé.",
    button: "Réserver mon appel de cadrage",
    note: "Gratuit · sans engagement · en français ou en anglais",
  },
  footer: {
    tagline: "Automatisation IA et agents intelligents, livrés avec rigueur.",
    linksTitle: "Navigation",
    contactTitle: "Contact",
    rights: "Tous droits réservés.",
    builtWith: "Site conçu avec React, Tailwind CSS et Framer Motion.",
    location: "Canada · projets à distance, partout dans le monde",
  },
  languageSwitcher: { label: "Langue" },
  // Shown on the *English* page to French-speaking visitors.
  langSuggest: {
    text: "Ce site est aussi disponible en français.",
    action: "Voir en français",
    dismiss: "Fermer",
  },
  seo: {
    title: "BoncelliAI — Agents IA et automatisation sur mesure (n8n, Claude, OpenAI)",
    description:
      "Agents IA et workflows n8n sur mesure qui répondent à vos clients, traitent vos documents et relient vos outils. Prix fixe, service bilingue FR/EN, sans verrouillage.",
    ogImageAlt: "BoncelliAI — Vous gérez l'essentiel. L'IA s'occupe du répétitif.",
    locale: "fr_CA",
  },
  a11y: {
    skip: "Aller au contenu principal",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    mainNav: "Navigation principale",
    home: "BoncelliAI — accueil",
    backToTop: "Retour en haut",
  },
};
