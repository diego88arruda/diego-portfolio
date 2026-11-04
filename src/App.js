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

const WHATSAPP_MESSAGE = 'Olá Diego, vim pelo seu portfólio e gostaria de um diagnóstico.';
const WHATSAPP_URL = `https://wa.me/5511982661567?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const SERVICES = [
  {
    title: 'Site e presença digital rápida',
    problem: 'A empresa existe, mas quem chega pela internet não entende o que ela faz nem como dar o próximo passo.',
    deadline: '1 a 2 semanas',
  },
  {
    title: 'Automação de rotinas',
    problem: 'O time repete cópia de dados, avisos e conferências que uma rotina poderia assumir.',
    deadline: '2 a 4 semanas',
  },
  {
    title: 'Atendente de IA',
    problem: 'As mesmas perguntas, no WhatsApp ou no site, ocupam quem deveria cuidar do que é novo.',
    deadline: '2 a 4 semanas',
  },
  {
    title: 'Sistema sob medida enxuto',
    problem: 'A operação não cabe numa planilha nem num sistema genérico, e um projeto longo não cabe agora.',
    deadline: '4 a 8 semanas',
  },
  {
    title: 'Consultoria e diagnóstico',
    problem: 'Há várias ideias na mesa e falta clareza sobre o que fazer primeiro.',
    deadline: 'cerca de 1 semana',
  },
  {
    title: 'Manutenção mensal',
    problem: 'O que já foi entregue precisa de ajuste, acompanhamento e pequenas evoluções todo mês.',
    deadline: 'ciclo mensal',
  },
];

const CASE_INOVALAB = {
  name: 'InovaLab',
  href: 'https://inovalab3d.vercel.app/',
  summary:
    'Estúdio de impressão 3D que precisava mostrar as peças, receber pedidos e conversar sobre o que ainda não está no catálogo.',
  before:
    'Quem não conhecia o trabalho dependia de já saber o que pedir. Não havia uma vitrine com as peças, as cores e o caminho do pedido.',
  after:
    'O site apresenta os produtos, explica como pedir pelo WhatsApp e deixa claro que uma ideia fora do catálogo também pode virar peça.',
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

function Nav({ view }) {
  const [open, setOpen] = useState(false);
  const links = [
    ['Início', '#inicio', 'home'],
    ['Meu perfil', '#perfil', 'perfil'],
    ['Serviços', '#servicos', 'servicos'],
  ];
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#inicio" className="nav-name">
          Diego Arruda
        </a>
        <nav className={`nav-links ${open ? 'nav-links--open' : ''}`}>
          {links.map(([label, href, key]) => (
            <a
              key={href}
              href={href}
              className={view === key ? 'is-active' : undefined}
              aria-current={view === key ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
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

function Home() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-top">
        <div className="hero-copy">
          <p className="eyebrow">Tecnologia e consultoria</p>
          <h1 className="hero-name">{PROFILE.name}</h1>
          <p className="hero-role">{PROFILE.role}</p>
          <p className="hero-tagline">{PROFILE.tagline}</p>
        </div>
        <div className="hero-photo-wrap">
          <img src="/diego-arruda.jpg" alt="Diego Arruda" className="hero-photo" />
        </div>
      </div>
      <div className="doors">
        <a className="door" href="#trajetoria">
          <p className="eyebrow">Perfil</p>
          <h2>Meu perfil</h2>
          <p>A trajetória em tecnologia, a formação e os projetos — numa linha do tempo própria.</p>
          <span className="door-go">Ver a trajetória</span>
        </a>
        <a className="door" href="#servicos">
          <p className="eyebrow">Empresas</p>
          <h2>Serviços para empresas</h2>
          <p>Pacotes para pequenas e médias empresas, com o problema, o prazo típico e o valor sob consulta.</p>
          <span className="door-go">Ver os pacotes</span>
        </a>
      </div>
    </section>
  );
}

function Sobre() {
  return (
    <section id="perfil" className="section">
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

        <CareerGraph />

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
          O LinkedIn reúne a trajetória. Para um problema da sua empresa, o caminho é o dos serviços.
        </p>
        <div className="contact-links">
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="btn btn--primary">
            LinkedIn
          </a>
          <a href="#servicos" className="btn btn--ghost">
            Serviços para empresas
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

function DiagnosticoCta() {
  return (
    <div className="diagnostico">
      <div>
        <h2 className="section-title diagnostico-title">Diagnóstico gratuito</h2>
        <p className="lead">
          Uma conversa para entender o problema e indicar por onde começar. O botão abre o WhatsApp com a mensagem pronta.
        </p>
      </div>
      <a className="btn btn--primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
        WhatsApp
      </a>
    </div>
  );
}

function Servicos() {
  return (
    <>
      <section id="servicos" className="section">
        <div className="section-inner">
          <Reveal>
            <p className="section-eyebrow">Consultoria</p>
            <h2 className="section-title section-title--tight">Serviços para empresas</h2>
            <p className="lead services-lead">
              Para pequenas e médias empresas que precisam transformar uma necessidade do dia a dia em site, automação ou agente de IA. Seis pacotes, cada um com o problema que resolve e um prazo típico. O valor é sob consulta.
            </p>
          </Reveal>
          <Reveal>
            <DiagnosticoCta />
          </Reveal>
          <div className="service-grid">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} className="service-card" delay={i * 70}>
                <h3 className="project-title">{service.title}</h3>
                <p className="service-kicker">Problema</p>
                <p className="project-desc">{service.problem}</p>
                <div className="service-meta">
                  <div>
                    <span className="service-kicker">Prazo típico</span>
                    <p className="service-value">{service.deadline}</p>
                  </div>
                  <div>
                    <span className="service-kicker">Valor</span>
                    <p className="service-value">Sob consulta</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <Reveal>
            <p className="section-eyebrow">Primeiro caso</p>
            <h2 className="section-title">InovaLab</h2>
          </Reveal>
          <Reveal className="case-card">
            <p className="project-desc case-summary">{CASE_INOVALAB.summary}</p>
            <div className="case-split">
              <div>
                <p className="service-kicker">Antes</p>
                <p className="project-desc">{CASE_INOVALAB.before}</p>
              </div>
              <div>
                <p className="service-kicker">Depois</p>
                <p className="project-desc">{CASE_INOVALAB.after}</p>
              </div>
            </div>
            <a className="door-go" href={CASE_INOVALAB.href} target="_blank" rel="noreferrer">
              inovalab3d.vercel.app
            </a>
          </Reveal>
          <Reveal>
            <DiagnosticoCta />
          </Reveal>
          <p className="footer-note">© {new Date().getFullYear()} {PROFILE.name}</p>
        </div>
      </section>
    </>
  );
}

function viewFromHash(hash) {
  const id = hash.replace('#', '');
  if (id === 'servicos') return 'servicos';
  if (
    id === 'perfil' ||
    id === 'trajetoria' ||
    id === 'formacao' ||
    id === 'skills' ||
    id === 'projetos' ||
    id === 'contato' ||
    id.startsWith('exp-') ||
    id.startsWith('earlier-')
  ) {
    return 'perfil';
  }
  return 'home';
}

function useHash() {
  const [hash, setHash] = useState(() => window.location.hash || '#inicio');

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || '#inicio');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const id = hash.replace('#', '');
    if (!id || id === 'inicio' || id === 'top' || id === 'perfil' || id === 'servicos') {
      window.scrollTo(0, 0);
      return undefined;
    }
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView();
    });
    return () => window.cancelAnimationFrame(frame);
  }, [hash]);

  return hash;
}

export default function App() {
  const hash = useHash();
  const view = viewFromHash(hash);

  return (
    <div className="page">
      <Nav view={view} />
      <main>
        {view === 'home' ? <Home /> : null}
        {view === 'perfil' ? (
          <>
            <Sobre />
            <Trajetoria />
            <Formacao />
            <Skills />
            <Projetos />
            <Contato />
          </>
        ) : null}
        {view === 'servicos' ? <Servicos /> : null}
      </main>
    </div>
  );
}
