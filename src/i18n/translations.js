// -----------------------------------------------------------------------
// All site copy lives here, in one place, keyed by language.
// To edit any text on the site: find the key below and change the string.
// To add a new language: duplicate the "fr" object, rename the key,
// and add it to the LANGUAGES array in LanguageContext.jsx.
// -----------------------------------------------------------------------

export const translations = {
  fr: {
    nav: {
      services: "Services",
      about: "À propos",
      portfolio: "Portfolio",
      contact: "Contact",
      cta: "Réserver un appel",
    },
    hero: {
      eyebrow: "Automatisation IA · Voix-off FR-CA · Vidéo",
      title: "Des systèmes intelligents,\ndes contenus qui parlent votre langue.",
      subtitle:
        "Je conçois des agents et automatisations IA (n8n, Claude, OpenAI) pour faire gagner du temps à votre entreprise, et je livre du contenu voix-off, traduction et vidéo en français canadien natif — un duo rare qui simplifie vos projets bilingues.",
      ctaPrimary: "Réservez un appel",
      ctaSecondary: "Voir mes services",
      badge: "Disponible pour de nouveaux projets",
    },
    services: {
      eyebrow: "Ce que je fais",
      title: "Trois expertises, un seul partenaire",
      subtitle:
        "Des solutions concrètes pour automatiser votre travail et produire du contenu qui résonne, en français comme en anglais.",
      items: [
        {
          title: "Automatisation IA & agents",
          description:
            "Conception de workflows n8n et d'agents IA sur mesure avec les API Claude et OpenAI : réponse client automatisée, traitement de données, intégrations entre vos outils. Mon focus principal.",
        },
        {
          title: "Voix-off & traduction FR-CA",
          description:
            "Voix-off professionnelle et traduction en français canadien natif, pour des contenus qui sonnent juste auprès de votre audience francophone — sans perte de nuance.",
        },
        {
          title: "Création & montage vidéo",
          description:
            "Montage et post-production avec Premiere Pro, DaVinci Resolve et CapCut : contenu publicitaire, réseaux sociaux ou corporatif, prêt à publier.",
        },
      ],
    },
    about: {
      eyebrow: "À propos",
      title: "Frank Laro — freelance bilingue, exécution technique",
      paragraph1:
        "Basé au Canada, je combine une expertise technique en automatisation IA avec une maîtrise native du français canadien et un anglais professionnel courant. Cette double compétence est rare : elle me permet de livrer des projets qui exigent à la fois de la rigueur technique et une communication impeccable dans les deux langues.",
      paragraph2:
        "Je travaille avec des clients sur Upwork qui ont besoin d'un partenaire capable de construire des systèmes intelligents ET de produire du contenu qui parle vraiment à un marché francophone — sans jongler entre plusieurs prestataires.",
      highlights: [
        { label: "Bilingue natif", value: "FR-CA / EN" },
        { label: "Automatisation", value: "n8n, Claude API, OpenAI API" },
        { label: "Vidéo", value: "Premiere Pro, DaVinci Resolve, CapCut" },
        { label: "Plateforme", value: "Upwork" },
      ],
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "Projets récents",
      subtitle: "Une sélection de projets sera ajoutée ici prochainement.",
      placeholderTitle: "Projet à venir",
      placeholderText: "Étude de cas en préparation — revenez bientôt.",
      cta: "Bientôt disponible",
    },
    contact: {
      eyebrow: "Contact",
      title: "Discutons de votre projet",
      subtitle:
        "Décrivez votre besoin — automatisation, voix-off, traduction ou vidéo — et je vous réponds rapidement.",
      form: {
        name: "Nom",
        namePlaceholder: "Votre nom complet",
        email: "Courriel",
        emailPlaceholder: "vous@exemple.com",
        message: "Message",
        messagePlaceholder: "Parlez-moi de votre projet...",
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
      tagline: "Automatisation IA et contenu bilingue, livrés avec rigueur.",
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
      services: "Services",
      about: "About",
      portfolio: "Portfolio",
      contact: "Contact",
      cta: "Book a Call",
    },
    hero: {
      eyebrow: "AI Automation · FR-CA Voiceover · Video",
      title: "Intelligent systems,\ncontent that speaks your audience's language.",
      subtitle:
        "I build AI agents and automations (n8n, Claude, OpenAI) that save your business time, and I deliver native Canadian French voiceover, translation and video content — a rare pairing that simplifies your bilingual projects.",
      ctaPrimary: "Book a Call",
      ctaSecondary: "View My Services",
      badge: "Available for new projects",
    },
    services: {
      eyebrow: "What I Do",
      title: "Three skill sets, one partner",
      subtitle:
        "Concrete solutions to automate your work and produce content that resonates, in French and in English.",
      items: [
        {
          title: "AI Automation & Agents",
          description:
            "Custom n8n workflows and AI agents built with the Claude and OpenAI APIs: automated customer responses, data processing, and integrations between your tools. My main focus.",
        },
        {
          title: "Voiceover & FR-CA Translation",
          description:
            "Professional voiceover and native Canadian French translation, for content that truly resonates with your French-speaking audience — with no loss of nuance.",
        },
        {
          title: "Video Creation & Editing",
          description:
            "Editing and post-production with Premiere Pro, DaVinci Resolve and CapCut: ad content, social media or corporate video, ready to publish.",
        },
      ],
    },
    about: {
      eyebrow: "About",
      title: "Frank Laro — Bilingual Freelancer, Technical Execution",
      paragraph1:
        "Based in Canada, I combine technical expertise in AI automation with native fluency in Canadian French and professional working English. This dual skill set is rare: it lets me deliver projects that demand both technical rigor and flawless communication in both languages.",
      paragraph2:
        "I work with Upwork clients who need a partner who can build intelligent systems AND produce content that truly speaks to a French-speaking market — without juggling multiple vendors.",
      highlights: [
        { label: "Native Bilingual", value: "FR-CA / EN" },
        { label: "Automation", value: "n8n, Claude API, OpenAI API" },
        { label: "Video", value: "Premiere Pro, DaVinci Resolve, CapCut" },
        { label: "Platform", value: "Upwork" },
      ],
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "Recent Projects",
      subtitle: "A selection of projects will be added here soon.",
      placeholderTitle: "Project Coming Soon",
      placeholderText: "Case study in progress — check back soon.",
      cta: "Coming Soon",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk about your project",
      subtitle:
        "Tell me about your needs — automation, voiceover, translation or video — and I'll get back to you quickly.",
      form: {
        name: "Name",
        namePlaceholder: "Your full name",
        email: "Email",
        emailPlaceholder: "you@example.com",
        message: "Message",
        messagePlaceholder: "Tell me about your project...",
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
      tagline: "AI automation and bilingual content, delivered with rigor.",
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
