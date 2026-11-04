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
  tagline: 'MBA · CSPO · Product Owner · Transformação Digital · Inteligência Artificial',
  location: 'São Paulo, Brasil',
  email: 'diego88arruda@gmail.com',
  linkedin: 'https://www.linkedin.com/in/diegoarruda',
  whatsapp: 'https://wa.me/5511982661567',
  github: '', // preencher com a URL do GitHub quando definida
  summary:
    'Profissional de tecnologia com 17 anos de experiência em gestão de projetos e soluções digitais para varejo e saúde. Atualmente conduzo iniciativas de Inteligência Artificial de ponta a ponta — da identificação de oportunidades à governança, integração e medição de impacto — sempre com abordagem data-driven e foco em escala.',
};

const NETWORK_NODES = [
  { year: '2004', label: ['Eletrônica'], x: 40, y: 236, anchor: 'start', target: 'earlier-2004' },
  { year: '2009', label: ['Suporte &', 'Infraestrutura'], x: 234, y: 200, anchor: 'middle', target: 'earlier-2008' },
  { year: '2012', label: ['Projetos de', 'Sistemas'], x: 428, y: 164, anchor: 'middle', target: 'earlier-2012' },
  { year: '2018', label: ['Gestão de', 'Produtos Digitais'], x: 622, y: 124, anchor: 'middle', target: 'earlier-2018' },
  {
    year: '2022',
    label: ['Gestão de Projetos', 'de Software e RPA'],
    x: 816,
    y: 88,
    anchor: 'middle',
    target: 'exp-1',
  },
  {
    year: '2025',
    label: ['Arquitetura &', 'Governança de IA'],
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
    tags: ['Gestão de Projetos', 'Inovação', 'Inteligência Artificial'],
    bullets: [
      'Liderança de projetos estratégicos de inovação e tecnologia, com foco em eficiência operacional, ganhos de receita e transformação digital.',
      'Condução de iniciativas de IA de ponta a ponta: identificação de oportunidades, governança, testes, integração com sistemas e medição de impacto.',
      'Atuação como parceiro de negócio, mapeando necessidades e desenhando soluções escaláveis baseadas em dados.',
      'Definição de KPIs, roadmap e evolução contínua das soluções digitais e de IA implantadas.',
    ],
  },
  {
    period: 'nov 2024 — jun 2025',
    role: 'Especialista de Soluções TI',
    org: 'Iguatemi S.A.',
    tags: ['Gestão de Projetos', 'Software', 'RPA'],
    bullets: [
      'Liderança de projetos de automação de processos (RPA) para redução de custos e ganho de eficiência.',
      'Gestão do portal do lojista, aprimorando comunicação e integração operacional entre lojistas e administração.',
      'Gestão das ferramentas de workflow e do Portal de Aprovações.',
    ],
  },
  {
    period: 'jan 2024 — out 2024',
    role: 'Especialista de Soluções TI',
    org: 'Iguatemi S.A.',
    tags: ['Gestão de Projetos', 'Infraestrutura'],
    bullets: [
      'Planejamento, administração e monitoramento de projetos de TI para operações de shopping, com metodologias PMI e Agile.',
      'Liderança da nova rede Wi-Fi do Shopping Pátio Higienópolis e da infraestrutura de novos espaços (teatro, auditórios, lojas).',
    ],
  },
  {
    period: 'abr 2022 — dez 2023',
    role: 'Analista de Sistemas Sênior',
    org: 'Strattner',
    tags: ['Produtos Digitais', 'UX', 'IA'],
    bullets: [
      'Atuação como Product Owner, liderando produtos digitais da concepção ao lançamento.',
      'Implementação de soluções de IA para detecção precoce de achados em saúde (ex: câncer), melhorando precisão diagnóstica.',
      'Participação na incubadora de healthcare, ideando novas soluções para o setor.',
    ],
  },
];

const EXPERIENCE_EARLIER = [
  {
    id: 'earlier-2018',
    period: '2018 — 2022',
    text: 'Strattner — Analista de Sistemas Pleno atuando em produtos digitais, IoT para saúde e projetos internos como Product Owner e Scrum Master.',
  },
  {
    id: 'earlier-2012',
    period: '2012 — 2018',
    text: 'Iguatemi Empresa de Shopping Centers — Analista de Sistemas, liderando projetos de infraestrutura, redes e telefonia para toda a rede de shoppings do grupo.',
  },
  {
    id: 'earlier-2008',
    period: '2008 — 2012',
    text: 'Técnico de TI (Shopping Iguatemi) e Suporte (FINNET) — telefonia IP, redes Cisco, administração de ambiente e atendimento a executivos.',
  },
  {
    id: 'earlier-2004',
    period: '2004 — 2008',
    text: 'Início de carreira em infraestrutura elétrica e de redes (Saint-Gobain), base técnica que fundamenta a visão de arquitetura de hoje.',
  },
];

const EDUCATION = [
  { period: '2025 — 2026', course: 'Pós-graduação em Inteligência Artificial', school: 'FIAP' },
  { period: '2021 — 2023', course: 'MBA em Transformação Digital', school: 'Universidade Presbiteriana Mackenzie' },
  { period: '2017 — 2018', course: 'MBA em Gestão de Cibersegurança', school: 'FIAP' },
  { period: '2013 — 2016', course: 'Tecnologia em Redes de Computadores', school: 'Centro Universitário FIEO' },
];

const CERTIFICATIONS = ['Green Belt em Lean Six-Sigma', 'Digital Products Hero'];

const AWARDS = [
  '1º Lugar — Projeto de Inovação: Smart Connect',
  '1º Lugar — Projeto de Inovação: Atendimento 24/7',
  '1º Lugar — Projeto de Inovação: HUB AI, Assistant Healthcare e Telementoring',
  'Destaque — Gestão de Processos e Atingimento de Metas',
];

const SKILLS = {
  'Gestão & Estratégia': ['Gestão de Projetos', 'PMI & Agile', 'Product Ownership (CSPO)', 'Governança de IA'],
  'IA & Automação': ['Machine Learning', 'Redes Neurais Profundas (DNN)', 'RPA', 'Claude API'],
  Plataformas: ['Microsoft Copilot Studio', 'Power Automate', 'Azure APIM', 'Snowflake Cortex'],
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
    title: 'Agentes de Contratos e Performance de Lojas',
    desc: 'Agentes de IA para apoio a contratos, programa de relacionamento e acompanhamento de performance de lojas, com dados estruturados no Snowflake.',
    tags: ['Snowflake Cortex', 'Claude API', 'Dados'],
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
   Representa a progressão de carreira de Diego: de redes e
   infraestrutura até arquitetura e governança de IA.
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
          <p className="eyebrow">{PROFILE.location}</p>
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
          <h2 className="section-title">17 anos entre produto, dados e IA</h2>
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
          <h3 className="earlier-title">Trajetória anterior (2004 — 2022)</h3>
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
          Aberto a novas conexões sobre arquitetura corporativa, governança de IA e transformação digital.
        </p>
        <div className="contact-links">
          <a href={`mailto:${PROFILE.email}`} className="btn btn--primary">
            {PROFILE.email}
          </a>
          <a href={PROFILE.whatsapp} target="_blank" rel="noreferrer" className="btn btn--ghost">
            WhatsApp
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="btn btn--ghost">
            LinkedIn
          </a>
          {PROFILE.github ? (
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="btn btn--ghost">
              GitHub
            </a>
          ) : null}
        </div>
        <p className="footer-note">
          {PROFILE.location} · © {new Date().getFullYear()} {PROFILE.name}
        </p>
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
