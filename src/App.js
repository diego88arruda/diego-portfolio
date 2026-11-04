import React, { useEffect, useRef, useState } from 'react';
import './App.css';

/* ---------------------------------------------------------
   Dados de conteúdo
   Edite os valores abaixo para atualizar textos, projetos,
   experiências e links sem mexer no layout.
--------------------------------------------------------- */

const PROFILE = {
  name: 'Diego Arruda',
  role: 'Especialista de Inovação',
  org: 'Iguatemi S.A.',
  tagline:
    'Inteligência Artificial · IA Generativa e Agentes · Governança de IA · Inovação e Transformação Digital',
  linkedin: 'https://www.linkedin.com/in/diegoarruda/',
  github: '', // preencher com a URL do GitHub quando definida
  summary:
    'Profissional de tecnologia com mais de 16 anos de experiência em varejo, shopping centers e saúde. Na Iguatemi S.A., atuo como Especialista de Inovação: lidero o squad de Inovação e IA, integro o Comitê de IA e conduzo agentes, automação e governança — da oportunidade à operação — com foco em escala e no impacto no dia a dia das áreas.',
};

const NETWORK_NODES = [
  { year: '2009', label: ['Analista de', 'Sistemas'], x: 40, y: 236, anchor: 'start', target: 'earlier-2009' },
  { year: '2016', label: ['Segurança da', 'Informação'], x: 234, y: 200, anchor: 'middle', target: 'earlier-2016' },
  { year: '2017', label: ['Produtos Digitais', 'e IoT'], x: 428, y: 164, anchor: 'middle', target: 'exp-3' },
  { year: '2022', label: ['Soluções', 'Digitais'], x: 622, y: 124, anchor: 'middle', target: 'exp-2' },
  { year: '2024', label: ['Soluções', 'de TI'], x: 816, y: 88, anchor: 'middle', target: 'exp-1' },
  {
    year: '2025',
    label: ['Inovação', 'e IA'],
    x: 1010,
    y: 50,
    anchor: 'end',
    current: true,
    target: 'exp-0',
  },
];

const EXPERIENCE_RECENT = [
  {
    period: 'jul 2025 — atual',
    role: 'Especialista de Inovação',
    org: 'Iguatemi S.A.',
    tags: ['Inovação', 'Agentes de IA', 'Governança'],
    bullets: [
      'Liderança do squad de Inovação e IA (5 pessoas) e integração ao Comitê de IA.',
      'Adoção de agentes de IA em produção, com redução de trabalho repetitivo e ganhos de eficiência operacional.',
      'Agente de Contratos do Shopping em Copilot Studio e Microsoft Teams, com dados do Salesforce e do BigQuery.',
      'Gestão de custos e licenças de IA, definição de KPIs e roadmap, e formação dos Champions de IA.',
    ],
  },
  {
    period: 'jan 2024 — jun 2025',
    role: 'Especialista de Soluções TI',
    org: 'Iguatemi S.A.',
    tags: ['RPA', 'Chatbots', 'Portal do Lojista'],
    bullets: [
      'Automação de processos com RPA e chatbots para a operação dos shoppings.',
      'Gestão do Portal do Lojista, de fornecedores e de contratos.',
    ],
  },
  {
    period: 'abr 2022 — dez 2023',
    role: 'Analista de Sistemas Sênior',
    org: 'Strattner',
    tags: ['Soluções Digitais', 'IA em Saúde', 'Product Owner'],
    bullets: [
      'Liderança na criação do Departamento de Soluções Digitais.',
      'IA para detecção precoce de câncer em exames.',
      'Atuação como Product Owner; projeto premiado HUB AI, Assistant Healthcare e Telementoring.',
    ],
  },
  {
    period: 'ago 2017 — mar 2022',
    role: 'Analista de Sistemas Pleno',
    org: 'Strattner',
    tags: ['Product Owner', 'IoT', 'Saúde'],
    bullets: [
      'Product Owner em produtos digitais e em iniciativas de IoT para a saúde.',
      'Projetos premiados S.Connect e Atendimento 24/7 (chatbot).',
    ],
  },
];

const EXPERIENCE_EARLIER = [
  {
    id: 'earlier-2016',
    period: '2016 — 2017',
    text: 'Simpress (fev/2016 a ago/2017) — indicadores de segurança da informação, com DLP e Endpoint Symantec.',
  },
  {
    id: 'earlier-2009',
    period: '2009 — 2015',
    text: 'Iguatemi (dez/2009 a set/2015) — Analista de Sistemas e líder de TI nas inaugurações dos shoppings Ribeirão Preto, São José do Rio Preto e Esplanada.',
  },
];

const EDUCATION = [
  {
    period: 'em curso',
    course: 'MBA em Inteligência Artificial',
    school: 'FIAP · conclusão prevista em out/2027',
  },
  { period: '2023', course: 'MBA em Transformação Digital', school: 'Universidade Presbiteriana Mackenzie' },
  { period: '2018', course: 'MBA em Gestão de Cibersegurança', school: 'FIAP' },
  { period: '2016', course: 'Tecnologia em Redes de Computadores', school: 'Centro Universitário FIEO' },
];

const CERTIFICATIONS = [
  'CSPO (2020)',
  'Green Belt Lean Six Sigma',
  'Digital Products Hero (FIAP, 2022)',
];

const AWARDS = [
  '1º lugar — HUB AI, Assistant Healthcare e Telementoring (2023)',
  '1º lugar — Atendimento 24/7 (2021)',
  '1º lugar — Smart Connect (2020)',
  'Destaque em Gestão de Processos e Atingimento de Metas (2020)',
];

const SKILLS = {
  'IA & Agentes': [
    'IA generativa',
    'LLMs',
    'Agentes e multiagentes',
    'Engenharia de prompt',
    'Governança de IA',
  ],
  'Automação & Dados': ['RPA', 'Power Automate', 'n8n', 'BigQuery', 'Snowflake', 'Databricks', 'Power BI'],
  'Plataformas & Métodos': ['Copilot Studio', 'M365 Copilot', 'Azure AI', 'GCP', 'APIs', 'Agile/Scrum', 'PMI'],
};

const PROJECTS = [
  {
    title: 'Agente Executivo',
    desc: 'Agente construído em Microsoft Copilot Studio para apoiar a liderança (incluindo CEO) com priorização, contexto e follow-ups de tarefas do dia a dia.',
    tags: ['Copilot Studio', 'Governança de IA'],
  },
  {
    title: 'Resolver Plano e Bucket',
    desc: 'Fluxo em Power Automate integrado à API da Anthropic para classificar automaticamente tarefas do Planner em plano/bucket com roteamento por confiança.',
    tags: ['Power Automate', 'Claude API', 'SharePoint'],
  },
  {
    title: 'Iguatemi AI Hub',
    desc: 'Portal interno multi-LLM com SSO via Azure Entra ID, controle de cotas por usuário e camada de governança para gestão de agentes de IA.',
    tags: ['React', 'Azure Entra ID', 'Governança'],
  },
  {
    title: 'Agente de Contratos do Shopping',
    desc: 'Agente em Copilot Studio e Microsoft Teams para apoio a contratos, com dados do Salesforce e do BigQuery.',
    tags: ['Copilot Studio', 'Microsoft Teams', 'BigQuery'],
  },
  {
    title: 'Agente de Comunicados Corporativos',
    desc: 'Agente em Copilot Studio para geração de comunicados internos, com sugestão de texto, fluxo de aprovação e workflow de publicação para toda a empresa.',
    tags: ['Copilot Studio', 'Power Automate', 'Workflow'],
  },
  {
    title: 'Assistente Remoto Hospitalar (IoT)',
    desc: 'Assistente remoto para gestão e controle à distância de equipamentos hospitalares, usando ESP32/Arduino como camada IoT e Oracle APEX para gestão.',
    tags: ['IoT', 'ESP32 & Arduino', 'Oracle APEX'],
  },
];

/* ---------------------------------------------------------
   Hook simples de reveal-on-scroll
--------------------------------------------------------- */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ as: Tag = 'div', className = '', children, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ---------------------------------------------------------
   Grafo de rede — assinatura visual da hero
   Representa a progressão de carreira de Diego: de sistemas e
   segurança da informação até inovação e governança de IA.
--------------------------------------------------------- */
function CareerGraph() {
  return (
    <div className="graph-wrap">
      <svg viewBox="0 0 1050 300" className="graph-svg" preserveAspectRatio="xMidYMid meet">
        <polyline
          className="graph-line"
          points={NETWORK_NODES.map((n) => `${n.x},${n.y}`).join(' ')}
          fill="none"
        />
        {NETWORK_NODES.map((n, i) => {
          const above = i % 2 === 0;
          const yearY = n.y + (above ? -36 : 30);
          const labelStartY = n.y + (above ? -21 : 46);
          const anchor = n.anchor || 'middle';
          return (
            <a
              key={n.year}
              href={`#${n.target}`}
              className="graph-node-link"
              aria-label={`Ir para: ${n.label.join(' ')} (${n.year})`}
            >
              <g style={{ transitionDelay: `${i * 120}ms` }}>
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={n.current ? 8 : 5}
                  className={`graph-node ${n.current ? 'graph-node--current' : ''}`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                />
                <circle cx={n.x} cy={n.y} r={16} className="graph-node-hit" />
                <text x={n.x} y={yearY} textAnchor={anchor} className="graph-year">
                  {n.year}
                </text>
                {n.label.map((line, li) => (
                  <text
                    key={line}
                    x={n.x}
                    y={labelStartY + li * 14}
                    textAnchor={anchor}
                    className="graph-label"
                  >
                    {line}
                  </text>
                ))}
              </g>
            </a>
          );
        })}
      </svg>
    </div>
  );
}

/* --------------------------------------------------------- */

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ['Sobre', '#sobre'],
    ['Trajetória', '#trajetoria'],
    ['Formação', '#formacao'],
    ['Skills', '#skills'],
    ['Projetos', '#projetos'],
    ['Contato', '#contato'],
  ];
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="nav-name">
          Diego Arruda
        </a>
        <nav className={`nav-links ${open ? 'nav-links--open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <button
          className="nav-toggle"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-top">
        <div className="hero-copy">
          <p className="eyebrow">{PROFILE.org}</p>
          <h1 className="hero-name">{PROFILE.name}</h1>
          <p className="hero-role">{PROFILE.role}</p>
          <p className="hero-tagline">{PROFILE.tagline}</p>
          <div className="hero-cta">
            <a className="btn btn--primary" href="#projetos">
              Ver projetos
            </a>
            <a className="btn btn--ghost" href="#contato">
              Contato
            </a>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <img src="/diego-arruda.jpg" alt="Diego Arruda" className="hero-photo" />
        </div>
      </div>
      <CareerGraph />
    </section>
  );
}

function Sobre() {
  return (
    <section id="sobre" className="section">
      <Reveal as="div" className="section-inner section-inner--narrow">
        <p className="section-eyebrow">01 — Sobre</p>
        <p className="lead">{PROFILE.summary}</p>
      </Reveal>
    </section>
  );
}

function Trajetoria() {
  return (
    <section id="trajetoria" className="section">
      <div className="section-inner">
        <Reveal>
          <p className="section-eyebrow">02 — Trajetória</p>
          <h2 className="section-title">Mais de 16 anos em varejo, saúde e IA</h2>
        </Reveal>

        <div className="timeline">
          {EXPERIENCE_RECENT.map((job, i) => (
            <Reveal key={job.role + job.period} className="timeline-item" delay={i * 80}>
              <span id={`exp-${i}`} className="anchor-offset" />
              <div className="timeline-marker" />
              <div className="timeline-content">
                <p className="timeline-period">{job.period}</p>
                <h3 className="timeline-role">{job.role}</h3>
                <p className="timeline-org">{job.org}</p>
                <ul className="timeline-bullets">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {job.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="earlier-block">
          <h3 className="earlier-title">Trajetória anterior (2009 — 2017)</h3>
          <div className="earlier-list">
            {EXPERIENCE_EARLIER.map((e) => (
              <div key={e.period} id={e.id} className="earlier-item">
                <span className="earlier-period">{e.period}</span>
                <span className="earlier-text">{e.text}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Formacao() {
  return (
    <section id="formacao" className="section">
      <div className="section-inner">
        <Reveal>
          <p className="section-eyebrow">03 — Formação</p>
          <h2 className="section-title">Formação, certificações e prêmios</h2>
        </Reveal>

        <div className="formacao-grid">
          <Reveal className="formacao-col">
            <h3 className="formacao-col-title">Formação acadêmica</h3>
            {EDUCATION.map((e) => (
              <div key={e.course} className="edu-item">
                <span className="edu-period">{e.period}</span>
                <div>
                  <p className="edu-course">{e.course}</p>
                  <p className="edu-school">{e.school}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="formacao-col" delay={100}>
            <h3 className="formacao-col-title">Certificações</h3>
            <ul className="plain-list">
              {CERTIFICATIONS.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>

            <h3 className="formacao-col-title formacao-col-title--spaced">Prêmios & reconhecimentos</h3>
            <ul className="plain-list">
              {AWARDS.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <Reveal>
          <p className="section-eyebrow">04 — Skills</p>
          <h2 className="section-title">Ferramentas e competências</h2>
        </Reveal>
        <div className="skills-grid">
          {Object.entries(SKILLS).map(([group, items], i) => (
            <Reveal key={group} className="skills-group" delay={i * 100}>
              <h3 className="skills-group-title">{group}</h3>
              <div className="chip-row">
                {items.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projetos() {
  return (
    <section id="projetos" className="section">
      <div className="section-inner">
        <Reveal>
          <p className="section-eyebrow">05 — Projetos</p>
          <h2 className="section-title">Projetos pessoais e iniciativas de IA</h2>
        </Reveal>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} className="project-card" delay={i * 90}>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="tag-row">
                {p.tags.map((t) => (
                  <span key={t} className="tag tag--muted">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contato() {
  return (
    <section id="contato" className="section section--footer">
      <Reveal as="div" className="section-inner section-inner--narrow contact-block">
        <p className="section-eyebrow">06 — Contato</p>
        <h2 className="section-title">Vamos conversar</h2>
        <p className="lead">
          Inovação, agentes de IA e transformação digital na Iguatemi S.A. O LinkedIn reúne a trajetória e os temas em que atuo.
        </p>
        <div className="contact-links">
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="btn btn--primary">
            LinkedIn
          </a>
          {PROFILE.github ? (
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="btn btn--ghost">
              GitHub
            </a>
          ) : null}
        </div>
        <p className="footer-note">© {new Date().getFullYear()} {PROFILE.name}</p>
      </Reveal>
    </section>
  );
}

export default function App() {
  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <Sobre />
        <Trajetoria />
        <Formacao />
        <Skills />
        <Projetos />
        <Contato />
      </main>
    </div>
  );
}
