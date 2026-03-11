export interface JobMeta {
  location: string;
  type: string;
  team: string;
  stage: string;
}

export interface CultureCard {
  num: string;
  title: string;
  body: string;
  variant: "default" | "dark" | "purple";
}

export interface OwnItem {
  num: string;
  title: string;
  body: string;
}

export interface SkillCard {
  num: string;
  label: string;
  body: string;
}

export interface HorizonCard {
  title: string;
  body: string;
}

export interface NinetyItem {
  title?: string;
  body: string;
  variant?: "default" | "dark";
}

export interface Job {
  slug: string;
  title: string;
  title_em: string;
  short_description: string;
  apply_url: string;
  meta: JobMeta;
  about: {
    label: string;
    heading: string;
    paragraphs: string[];
    callout?: { label: string; body: string };
  };
  ownership?: {
    label: string;
    heading: string;
    items: OwnItem[];
  };
  culture?: {
    label: string;
    heading: string;
    cards: CultureCard[];
  };
  tools?: {
    label: string;
    heading: string;
    body: string;
  };
  ninety_days?: {
    label: string;
    heading: string;
    items: NinetyItem[];
  };
  horizon?: {
    label: string;
    heading: string;
    cards: HorizonCard[];
  };
  skills?: {
    label: string;
    heading: string;
    cards: SkillCard[];
  };
  requirements?: {
    label: string;
    heading: string;
    items: string[];
  };
  hiring_process?: {
    label: string;
    heading: string;
    items: NinetyItem[];
  };
}

export const JOBS: Job[] = [
  {
    slug: "ai-customer-success-manager",
    title: "AI Customer",
    title_em: "Success",
    short_description:
      "The primary relationship owner for every client we have. Manage a portfolio of accounts, grow revenue, retain clients, and make every stakeholder feel like throxy is the best decision they ever made.",
    apply_url: "https://apply.throxy.com/apply?r=c",
    meta: {
      location: "London, UK",
      type: "Full-time · In person",
      team: "Customer Success",
      stage: "Early - high impact",
    },
    about: {
      label: "About the Role",
      heading: "The primary relationship owner for every client we have:",
      paragraphs: [
        "We are hiring a Customer Success Manager at throxy: someone who will manage a portfolio of accounts, ensuring every client gets maximum value from our SDR teams and outbound sales engine. Your mission is simple - grow revenue, retain clients, and make every stakeholder feel like throxy is the best decision they ever made.",
        "This role sits at the intersection of sales, operations, and relationship management. You will work closely with our Growth, Product, and Operations teams to translate client needs into action, whether refining a campaign, escalating an issue, or proactively identifying an upsell opportunity.",
      ],
      callout: {
        label: "North Star KPIs",
        body: "Client retention, net revenue retention (NRR), and CSAT. We want clients to stay, expand, and refer others. The best signal that you're doing your job well is that clients actively choose to grow with us.",
      },
    },
    culture: {
      label: "Our Culture",
      heading: "High ownership. No passengers:",
      cards: [
        {
          num: "01",
          title: "Founder-level agency",
          body: "There is no bureaucracy here. If you see a problem, you fix it. If you have a better idea, you say so. We expect everyone to operate like a founder, not an employee waiting to be told what to do.",
          variant: "dark",
        },
        {
          num: "02",
          title: "Data-driven, not data-obsessed",
          body: "Numbers matter, but so does judgment. We care about doing the right thing for clients even when the spreadsheet doesn't tell you to. Direct communication, real accountability.",
          variant: "default",
        },
        {
          num: "03",
          title: "Genuinely AI-native",
          body: "We are excited about what AI makes possible. If you find a new tool on Monday and have it in your workflow by Friday, you will fit right in. We adopt fast and we expect the same.",
          variant: "purple",
        },
        {
          num: "04",
          title: "Fast, early, important",
          body: "YC-backed, early stage, with real clients and real revenue. Your work directly shapes how the company operates at a moment where every decision compounds.",
          variant: "default",
        },
      ],
    },
    tools: {
      label: "Tools",
      heading: "The best stack. No compromises:",
      body: "Our primary platform is <strong>throxy.com</strong> - our internal super app where operations, client data, and campaign management all live in one place. Beyond that, we are deeply AI-native: we move fast, adopt the best tools available, and expect everyone on the team to do the same. From <strong>Claude</strong> to <strong>Raycast</strong> to <strong>Fathom</strong>, we are always looking for technology that removes friction and raises the bar on what's possible.",
    },
    ownership: {
      label: "Ownership",
      heading: "What you will own:",
      items: [
        {
          num: "01",
          title: "Client Portfolio Management",
          body: "Own a book of accounts end-to-end, from onboarding through renewal and expansion. You are the single point of contact for your clients and responsible for their long-term health.",
        },
        {
          num: "02",
          title: "Revenue Growth",
          body: "Identify and execute upsell and cross-sell opportunities within your portfolio. Partner with the Growth team to surface expansion opportunities at the right moment in the client lifecycle.",
        },
        {
          num: "03",
          title: "Stakeholder Management",
          body: "Build deep relationships across multiple levels of each client organisation, from day-to-day contacts to executive sponsors. Understand each stakeholder's priorities and communicate accordingly.",
        },
        {
          num: "04",
          title: "Campaign Optimisation",
          body: "Work with our Operations and SDR teams to continuously improve campaign performance. Translate client feedback into actionable briefs and hold teams accountable to outcomes.",
        },
        {
          num: "05",
          title: "Proactive Communication",
          body: "Don't wait for clients to come to you. Send regular performance updates, flag risks early, and celebrate wins. Make every client feel informed, valued, and confident in throxy's ability to deliver.",
        },
      ],
    },
    ninety_days: {
      label: "First 90 Days",
      heading: "What success looks like:",
      items: [
        { body: "Full audit of your client portfolio completed with a clear view of health, risk, and opportunity across every account." },
        { body: "Every client has had a structured onboarding or re-engagement conversation with clear goals and success metrics defined." },
        { body: "At least one upsell or expansion opportunity identified and progressed within your portfolio." },
        { body: "Client satisfaction scores trending upward and churn risk materially reduced across your book." },
        { body: "Deeply embedded in throxy's operational rhythm and acting as a reliable bridge between clients and internal teams." },
        { body: "More to be defined together as you learn the role and the business.", variant: "dark" },
      ],
    },
    horizon: {
      label: "On the Horizon",
      heading: "What we're building towards:",
      cards: [
        {
          title: "Automated Client Health Scoring",
          body: "A real-time dashboard surfacing at-risk accounts before they churn, giving you early warning signals and recommended actions so you can intervene proactively.",
        },
        {
          title: "Personalised QBR Templates",
          body: "Auto-generated quarterly business review decks pre-populated with client-specific campaign data, so you spend your time on insight rather than pulling numbers together.",
        },
        {
          title: "Expansion Playbooks",
          body: "Structured, data-driven frameworks that identify the right moment and the right pitch to expand a client's engagement with throxy, turning instinct into a repeatable system.",
        },
      ],
    },
    skills: {
      label: "Key Skills",
      heading: "Highly valued for this role:",
      cards: [
        {
          num: "01",
          label: "Multi-tasking",
          body: "Managing several accounts at once without losing quality or dropping context on any of them.",
        },
        {
          num: "02",
          label: "Organisational Skills",
          body: "Keeping tasks, timelines, and client commitments structured and visible across a busy portfolio.",
        },
        {
          num: "03",
          label: "Communication",
          body: "Clear, confident communicator across all levels. Additional languages are a meaningful plus.",
        },
        {
          num: "04",
          label: "Growth / CS Experience",
          body: "Prior exposure to outbound sales, account management, or customer success in a commercial environment.",
        },
      ],
    },
    requirements: {
      label: "Requirements",
      heading: "What we are looking for:",
      items: [
        "2+ years in Customer Success, Account Management, or a client-facing commercial role",
        "Proven ability to manage a large portfolio simultaneously without dropping the ball on any account",
        "Exceptional stakeholder management, comfortable navigating complex organisations at every level",
        "High agency and ownership mindset: you identify the problem and go fix it",
        "Strong commercial instinct with the ability to identify and close expansion opportunities",
        "Outstanding written and verbal communication, always appropriate for the audience",
        "Comfortable in a fast-paced, high-growth environment where priorities shift and ambiguity is the norm",
        "Curiosity and openness to using AI tools to improve your own output and efficiency",
      ],
    },
  },
  {
    slug: "software-engineer-fullstack",
    title: "Software Engineer",
    title_em: "Fullstack",
    short_description:
      "Work across the entire stack, from crafting polished user interfaces to designing the APIs and systems that power them. Own problems end-to-end in a small, AI-native engineering team.",
    apply_url: "https://apply.throxy.com/apply?r=e",
    meta: {
      location: "London, UK",
      type: "Full-time · In person",
      team: "Engineering",
      stage: "Early - high impact",
    },
    about: {
      label: "About the Role",
      heading: "Build the products that power our growth:",
      paragraphs: [
        "We're a fast-growing startup building the next generation of tools for our industry. Small, opinionated engineering team that moves fast - a dozen engineers shipping features that reach users the same week. Backed by top-tier investors and scaling rapidly. Your code matters from day one.",
        "We're AI-native - not as a marketing line, but in how we actually work. Every employee ships with AI daily. We build LLM-powered products and use AI tooling internally. Most companies are still figuring out where AI fits. We already know.",
      ],
      callout: {
        label: "North Star",
        body: "Own problems end-to-end: scope, build, ship, iterate. Strong opinions about code quality, thoughtful architecture, and the drive to figure things out independently.",
      },
    },
    ownership: {
      label: "Ownership",
      heading: "What you'll do:",
      items: [
        {
          num: "01",
          title: "Full-Stack Ownership",
          body: "Build full-stack features from UI to backend, taking ownership of entire product surfaces.",
        },
        {
          num: "02",
          title: "Clean, Readable Code",
          body: "Write code that others can reason about: clear intent, minimal surprise, well-organised. You've developed taste for what good code looks like, and that includes making it readable for the AI tools working alongside you.",
        },
        {
          num: "03",
          title: "AI-Native Development",
          body: "Work with AI tools as a core part of your development workflow: we're AI-native and expect you to be comfortable planning with and through AI, not just vibe-coding.",
        },
        {
          num: "04",
          title: "Systems Architecture",
          body: "Architect systems with a holistic view: understanding how the frontend, backend, and infrastructure connect and affect each other.",
        },
        {
          num: "05",
          title: "Ship Fast",
          body: "Ship quickly in a startup environment where your work goes live fast and feedback loops are tight.",
        },
        {
          num: "06",
          title: "Collaborate",
          body: "Collaborate with a small, senior team where everyone's input shapes the product.",
        },
      ],
    },
    tools: {
      label: "Tech Stack",
      heading: "The stack:",
      body: "We're building with <strong>TypeScript</strong>, <strong>React</strong>, <strong>Next.js</strong>, and modern AI tooling. Our infrastructure includes <strong>SingleStore</strong>, <strong>OpenSearch</strong>, <strong>Trigger.dev</strong>, and <strong>Axiom</strong>. We care about clean code, fast iteration, and engineering excellence.",
    },
    requirements: {
      label: "Must-Haves",
      heading: "What we're looking for:",
      items: [
        "Professional software engineering experience: 1+ years for mid-level, 5+ years for senior roles",
        "Fullstack web development skills: comfortable building in both the frontend and backend",
        "Strong fundamentals in computer science: data structures, algorithms, performance trade-offs",
        "TypeScript and React experience (Next.js is a big plus)",
        "A CS degree or equivalent from a strong university",
        "Based in the UK or willing to relocate to London",
      ],
    },
    skills: {
      label: "Strong Signals",
      heading: "Strong signals:",
      cards: [
        {
          num: "01",
          label: "Top-Tier Experience",
          body: "Experience at a high-calibre tech company: FAANG, Bloomberg, Stripe, Shopify, Revolut, Datadog, or similar.",
        },
        {
          num: "02",
          label: "Startup DNA",
          body: "Time at a startup or small team (< 20 people) where you wore many hats.",
        },
        {
          num: "03",
          label: "AI/LLM Builder",
          body: "Experience building with AI/LLMs: AI agents, RAG systems, or LLM-powered features.",
        },
        {
          num: "04",
          label: "Ships Solo",
          body: "You've built something end-to-end on your own: a side project, an open source tool, a past business.",
        },
      ],
    },
    hiring_process: {
      label: "Hiring Process",
      heading: "Our hiring process:",
      items: [
        { title: "Screening call (15 min)", body: "We get to know each other. We'll talk about your experience, what you're looking for, and give you a clear picture of throxy." },
        { title: "Technical exercise (~2h)", body: "A realistic problem that tests your coding and reasoning skills. We evaluate code quality, architecture decisions, and how you think through problems." },
        { title: "Final conversation", body: "Meet more of the team, talk about culture, role expectations, and comp." },
        { body: "We aim to move through the full process in 1-2 weeks.", variant: "dark" },
      ],
    },
    culture: {
      label: "Why throxy",
      heading: "Why throxy:",
      cards: [
        {
          num: "01",
          title: "Impact from day one",
          body: "Small team, big problems, your code ships to users immediately.",
          variant: "dark",
        },
        {
          num: "02",
          title: "Engineering-first culture",
          body: "We obsess over code quality, tooling, and developer experience.",
          variant: "default",
        },
        {
          num: "03",
          title: "AI-native workflow",
          body: "We don't just build AI products. We use AI to build better, faster.",
          variant: "purple",
        },
        {
          num: "04",
          title: "Growth",
          body: "We're scaling quickly and there's room to grow into leadership, architecture, or specialist roles.",
          variant: "default",
        },
      ],
    },
  },
];

export function getJobBySlug(slug: string): Job | undefined {
  return JOBS.find((j) => j.slug === slug);
}

export function getAllJobSlugs(): string[] {
  return JOBS.map((j) => j.slug);
}
