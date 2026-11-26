import { Fragment, useEffect, useRef, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';

const f = { jsx, jsxs, Fragment };
const l = { useState, useEffect, useRef };

const p = {
  fill: `none`,
  stroke: `currentColor`,
  strokeWidth: 1.7,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  "aria-hidden": !0,
};
function m(e) {
  return (0, f.jsxs)(`svg`, {
    viewBox: `0 0 24 24`,
    ...p,
    ...e,
    children: [
      (0, f.jsx)(`path`, {
        d: `M12 3 5.5 6v5.2c0 4.1 2.8 7.1 6.5 8.3 3.7-1.2 6.5-4.2 6.5-8.3V6L12 3Z`,
      }),
      (0, f.jsx)(`path`, { d: `M9.2 12.1 11 14l3.8-4.2` }),
    ],
  });
}
function h(e) {
  return (0, f.jsxs)(`svg`, {
    viewBox: `0 0 24 24`,
    ...p,
    ...e,
    children: [
      (0, f.jsx)(`ellipse`, { cx: `12`, cy: `6.2`, rx: `6.5`, ry: `2.4` }),
      (0, f.jsx)(`path`, {
        d: `M5.5 6.2v4.6c0 1.3 2.9 2.4 6.5 2.4s6.5-1.1 6.5-2.4V6.2`,
      }),
      (0, f.jsx)(`path`, {
        d: `M5.5 10.8v4.6c0 1.3 2.9 2.4 6.5 2.4s6.5-1.1 6.5-2.4v-4.6`,
      }),
    ],
  });
}
function g(e) {
  return (0, f.jsxs)(`svg`, {
    viewBox: `0 0 24 24`,
    ...p,
    ...e,
    children: [
      (0, f.jsx)(`path`, { d: `M4 19h16` }),
      (0, f.jsx)(`path`, { d: `M6.5 15.5 10 11l3 3 5-7` }),
      (0, f.jsx)(`path`, { d: `M18 7h-3.2` }),
    ],
  });
}
function _(e) {
  return (0, f.jsxs)(`svg`, {
    viewBox: `0 0 24 24`,
    ...p,
    ...e,
    children: [
      (0, f.jsx)(`circle`, { cx: `12`, cy: `12`, r: `3.1` }),
      (0, f.jsx)(`path`, {
        d: `M12 4.2v2.1M12 17.7v2.1M4.2 12h2.1M17.7 12h2.1M6.5 6.5l1.5 1.5M16 16l1.5 1.5M17.5 6.5 16 8M8 16l-1.5 1.5`,
      }),
      (0, f.jsx)(`circle`, { cx: `12`, cy: `12`, r: `7.2` }),
    ],
  });
}
function v(e) {
  return (0, f.jsxs)(`svg`, {
    viewBox: `0 0 24 24`,
    ...p,
    ...e,
    children: [
      (0, f.jsx)(`circle`, { cx: `9`, cy: `8.2`, r: `2.3` }),
      (0, f.jsx)(`path`, {
        d: `M4.4 18c.4-3 2.3-4.6 4.6-4.6 2.3 0 4.2 1.6 4.6 4.6`,
      }),
      (0, f.jsx)(`circle`, { cx: `16.2`, cy: `8.8`, r: `1.9` }),
      (0, f.jsx)(`path`, { d: `M15 13.6c2 .3 3.6 1.7 4 4.4` }),
    ],
  });
}
function y(e) {
  return (0, f.jsx)(`svg`, {
    viewBox: `0 0 24 24`,
    ...p,
    ...e,
    children: (0, f.jsx)(`path`, { d: `M5 12h14M13 6l6 6-6 6` }),
  });
}
function b(e) {
  return (0, f.jsxs)(`svg`, {
    viewBox: `0 0 24 24`,
    ...p,
    ...e,
    children: [
      (0, f.jsx)(`path`, { d: `M14 5h5v5` }),
      (0, f.jsx)(`path`, { d: `M19 5 10 14` }),
      (0, f.jsx)(`path`, {
        d: `M11 6H6.5A1.5 1.5 0 0 0 5 7.5v10A1.5 1.5 0 0 0 6.5 19h10a1.5 1.5 0 0 0 1.5-1.5V13`,
      }),
    ],
  });
}
function ee(e) {
  return (0, f.jsx)(`svg`, {
    viewBox: `0 0 24 24`,
    fill: `currentColor`,
    "aria-hidden": !0,
    ...e,
    children: (0, f.jsx)(`path`, {
      d: `M6.5 9.2H3.9V20h2.6V9.2ZM5.2 4A1.55 1.55 0 1 0 5.2 7a1.55 1.55 0 0 0 0-3ZM20.1 20h-2.6v-5.5c0-1.5-.5-2.5-1.8-2.5-1 0-1.5.7-1.8 1.3-.1.2-.1.6-.1.9V20h-2.6s.05-8.8 0-10.8h2.6v1.5c.4-.6 1.2-1.7 2.9-1.7 2.1 0 3.7 1.4 3.7 4.4V20Z`,
    }),
  });
}
function te(e) {
  return (0, f.jsx)(`svg`, {
    viewBox: `0 0 24 24`,
    ...p,
    ...e,
    children: (0, f.jsx)(`path`, { d: `M4 7h16M4 12h16M4 17h16` }),
  });
}
function ne(e) {
  return (0, f.jsx)(`svg`, {
    viewBox: `0 0 24 24`,
    ...p,
    ...e,
    children: (0, f.jsx)(`path`, { d: `M6 6l12 12M18 6 6 18` }),
  });
}
var re = { shield: m, database: h, chart: g, gear: _, people: v };
function x({ name: e, ...t }) {
  let n = re[e];
  return (0, f.jsx)(n, { ...t });
}
function ie({ name: e }) {
  return e === `Copilot Studio`
    ? (0, f.jsxs)(`svg`, {
        viewBox: `0 0 24 24`,
        className: `tool-mark`,
        "aria-hidden": !0,
        children: [
          (0, f.jsx)(`rect`, {
            x: `3`,
            y: `3`,
            width: `8`,
            height: `8`,
            rx: `1.6`,
            fill: `#7b83eb`,
          }),
          (0, f.jsx)(`rect`, {
            x: `13`,
            y: `3`,
            width: `8`,
            height: `8`,
            rx: `1.6`,
            fill: `#22c55e`,
          }),
          (0, f.jsx)(`rect`, {
            x: `3`,
            y: `13`,
            width: `8`,
            height: `8`,
            rx: `1.6`,
            fill: `#38bdf8`,
          }),
          (0, f.jsx)(`rect`, {
            x: `13`,
            y: `13`,
            width: `8`,
            height: `8`,
            rx: `1.6`,
            fill: `#f59e0b`,
          }),
        ],
      })
    : e === `Power Automate`
      ? (0, f.jsxs)(`svg`, {
          viewBox: `0 0 24 24`,
          className: `tool-mark`,
          "aria-hidden": !0,
          children: [
            (0, f.jsx)(`path`, {
              d: `M4 12h7l3-5 6 10H4Z`,
              fill: `#7c3aed`,
              opacity: `0.95`,
            }),
            (0, f.jsx)(`path`, { d: `M8 12h6l-2.4 4H8V12Z`, fill: `#c4b5fd` }),
          ],
        })
      : e === `Jira`
        ? (0, f.jsxs)(`svg`, {
            viewBox: `0 0 24 24`,
            className: `tool-mark`,
            "aria-hidden": !0,
            children: [
              (0, f.jsx)(`path`, {
                d: `M12 4 5 11.2c1.9 1.9 5 1.9 6.9 0L18.8 4H12Z`,
                fill: `#1868DB`,
              }),
              (0, f.jsx)(`path`, {
                d: `M12 10.2 8.2 14c1.1 1.1 2.9 1.1 4 0L16 10.2h-4Z`,
                fill: `#2684FF`,
              }),
              (0, f.jsx)(`path`, {
                d: `M12 16.2 10.2 18c.5.5 1.4.5 1.9 0L14 16.2h-2Z`,
                fill: `#0052CC`,
              }),
            ],
          })
        : e === `Claude`
          ? (0, f.jsx)(`svg`, {
              viewBox: `0 0 24 24`,
              className: `tool-mark`,
              "aria-hidden": !0,
              children: (0, f.jsx)(`path`, {
                d: `M12 3.2 13.4 8l4.8.2-3.8 3 1.3 4.7L12 13.8 8.3 15.9 9.6 11.2 5.8 8.2 10.6 8 12 3.2Z`,
                fill: `#D97757`,
              }),
            })
          : e === `n8n`
            ? (0, f.jsxs)(`svg`, {
                viewBox: `0 0 24 24`,
                className: `tool-mark`,
                "aria-hidden": !0,
                children: [
                  (0, f.jsx)(`circle`, {
                    cx: `6.2`,
                    cy: `12`,
                    r: `2.6`,
                    fill: `#EA4B71`,
                  }),
                  (0, f.jsx)(`circle`, {
                    cx: `17.8`,
                    cy: `7.2`,
                    r: `2.4`,
                    fill: `#EA4B71`,
                  }),
                  (0, f.jsx)(`circle`, {
                    cx: `17.8`,
                    cy: `16.8`,
                    r: `2.4`,
                    fill: `#EA4B71`,
                  }),
                  (0, f.jsx)(`path`, {
                    d: `M8.6 11.2 15.4 8.2M8.6 12.8 15.4 15.8`,
                    stroke: `#EA4B71`,
                    strokeWidth: `1.8`,
                    fill: `none`,
                    strokeLinecap: `round`,
                  }),
                ],
              })
            : e === `Grok`
              ? (0, f.jsxs)(`svg`, {
                  viewBox: `0 0 24 24`,
                  className: `tool-mark`,
                  "aria-hidden": !0,
                  children: [
                    (0, f.jsx)(`path`, {
                      d: `M12 3.2 13.2 9.2 19.2 8.4 14.4 12 19.2 15.6 13.2 14.8 12 20.8 10.8 14.8 4.8 15.6 9.6 12 4.8 8.4 10.8 9.2 12 3.2Z`,
                      fill: `#E8EEF6`,
                    }),
                    (0, f.jsx)(`circle`, {
                      cx: `12`,
                      cy: `12`,
                      r: `2.1`,
                      fill: `#0b1220`,
                    }),
                  ],
                })
              : e === `IoT`
                ? (0, f.jsxs)(`svg`, {
                    viewBox: `0 0 24 24`,
                    className: `tool-mark`,
                    "aria-hidden": !0,
                    children: [
                      (0, f.jsx)(`rect`, {
                        x: `8.2`,
                        y: `9.4`,
                        width: `7.6`,
                        height: `7.6`,
                        rx: `1.5`,
                        fill: `none`,
                        stroke: `#1fe6b4`,
                        strokeWidth: `1.7`,
                      }),
                      (0, f.jsx)(`circle`, {
                        cx: `12`,
                        cy: `13.2`,
                        r: `1.2`,
                        fill: `#1fe6b4`,
                      }),
                      (0, f.jsx)(`path`, {
                        d: `M9.2 8.2c1.6-1.5 4-1.5 5.6 0M10.4 7c1-.9 2.2-.9 3.2 0`,
                        fill: `none`,
                        stroke: `#1fe6b4`,
                        strokeWidth: `1.5`,
                        strokeLinecap: `round`,
                      }),
                      (0, f.jsx)(`path`, {
                        d: `M10.2 17h3.6`,
                        stroke: `#1fe6b4`,
                        strokeWidth: `1.6`,
                        strokeLinecap: `round`,
                      }),
                    ],
                  })
                : e === `HeyGen`
                  ? (0, f.jsxs)(`svg`, {
                      viewBox: `0 0 24 24`,
                      className: `tool-mark`,
                      "aria-hidden": !0,
                      children: [
                        (0, f.jsx)(`rect`, {
                          x: `4`,
                          y: `4`,
                          width: `16`,
                          height: `16`,
                          rx: `5`,
                          fill: `#6C47FF`,
                        }),
                        (0, f.jsx)(`circle`, {
                          cx: `12`,
                          cy: `10.2`,
                          r: `2.3`,
                          fill: `#F4F1FF`,
                        }),
                        (0, f.jsx)(`path`, {
                          d: `M7.8 17c.7-2.2 2.2-3.3 4.2-3.3s3.5 1.1 4.2 3.3`,
                          fill: `#F4F1FF`,
                        }),
                      ],
                    })
                  : e === `Lovable`
                    ? (0, f.jsx)(`svg`, {
                        viewBox: `0 0 24 24`,
                        className: `tool-mark`,
                        "aria-hidden": !0,
                        children: (0, f.jsx)(`path`, {
                          d: `M12 19.2S5.2 14.2 5.2 9.8A3.8 3.8 0 0 1 12 8.2 3.8 3.8 0 0 1 18.8 9.8C18.8 14.2 12 19.2 12 19.2Z`,
                          fill: `#FF6B4A`,
                        }),
                      })
                    : e === `Snowflake`
                      ? (0, f.jsx)(`svg`, {
                          viewBox: `0 0 24 24`,
                          className: `tool-mark`,
                          "aria-hidden": !0,
                          children: (0, f.jsxs)(`g`, {
                            stroke: `#29B5E8`,
                            strokeWidth: `1.7`,
                            strokeLinecap: `round`,
                            fill: `none`,
                            children: [
                              (0, f.jsx)(`path`, {
                                d: `M12 4v16M5.2 8l13.6 8M5.2 16 18.8 8`,
                              }),
                              (0, f.jsx)(`path`, {
                                d: `M12 7.2 10.2 5.8M12 7.2 13.8 5.8M12 16.8 10.2 18.2M12 16.8 13.8 18.2`,
                              }),
                              (0, f.jsx)(`path`, {
                                d: `M7.2 9.1 5.6 9.8M7.2 9.1 7.4 7.1M16.8 14.9 18.4 14.2M16.8 14.9 16.6 16.9`,
                              }),
                              (0, f.jsx)(`path`, {
                                d: `M7.2 14.9 5.6 14.2M7.2 14.9 7.4 16.9M16.8 9.1 18.4 9.8M16.8 9.1 16.6 7.1`,
                              }),
                            ],
                          }),
                        })
                      : e === `Gemini NotebookLM`
                        ? (0, f.jsxs)(`svg`, {
                            viewBox: `0 0 24 24`,
                            className: `tool-mark`,
                            "aria-hidden": !0,
                            children: [
                              (0, f.jsx)(`defs`, {
                                children: (0, f.jsxs)(`linearGradient`, {
                                  id: `gemini-spark`,
                                  x1: `5`,
                                  y1: `4`,
                                  x2: `19`,
                                  y2: `20`,
                                  gradientUnits: `userSpaceOnUse`,
                                  children: [
                                    (0, f.jsx)(`stop`, {
                                      stopColor: `#1A73E8`,
                                    }),
                                    (0, f.jsx)(`stop`, {
                                      offset: `0.45`,
                                      stopColor: `#9334E6`,
                                    }),
                                    (0, f.jsx)(`stop`, {
                                      offset: `1`,
                                      stopColor: `#F53868`,
                                    }),
                                  ],
                                }),
                              }),
                              (0, f.jsx)(`path`, {
                                d: `M12 3.2 13.7 10.3 20.8 12 13.7 13.7 12 20.8 10.3 13.7 3.2 12 10.3 10.3 12 3.2Z`,
                                fill: `url(#gemini-spark)`,
                              }),
                            ],
                          })
                        : e === `Hermes`
                          ? (0, f.jsxs)(`svg`, {
                              viewBox: `0 0 24 24`,
                              className: `tool-mark`,
                              "aria-hidden": !0,
                              children: [
                                (0, f.jsx)(`path`, {
                                  d: `M12 4.2c2.4 0 4.4 1.7 5.2 4.1-1.5-.6-3.3-.9-5.2-.9s-3.7.3-5.2.9C7.6 5.9 9.6 4.2 12 4.2Z`,
                                  fill: `#E2B54A`,
                                }),
                                (0, f.jsx)(`path`, {
                                  d: `M7.2 8.6c-2-.9-3.8-.4-4.6 1.4 1.6-.1 3 .5 4.2 1.6M16.8 8.6c2-.9 3.8-.4 4.6 1.4-1.6-.1-3 .5-4.2 1.6`,
                                  fill: `none`,
                                  stroke: `#E2B54A`,
                                  strokeWidth: `1.6`,
                                  strokeLinecap: `round`,
                                }),
                                (0, f.jsx)(`path`, {
                                  d: `M8.2 10.4h7.6v2.1c0 2.4-1.7 4.2-3.8 4.2s-3.8-1.8-3.8-4.2v-2.1Z`,
                                  fill: `#C9962E`,
                                }),
                                (0, f.jsx)(`path`, {
                                  d: `M12 16.6v3.4`,
                                  stroke: `#E2B54A`,
                                  strokeWidth: `1.7`,
                                  strokeLinecap: `round`,
                                }),
                              ],
                            })
                          : e === `OpenClaw`
                            ? (0, f.jsxs)(`svg`, {
                                viewBox: `0 0 24 24`,
                                className: `tool-mark`,
                                "aria-hidden": !0,
                                children: [
                                  (0, f.jsx)(`path`, {
                                    d: `M6.2 17.8c-1.6-1.4-2.4-3.8-1.6-6.2.9 1.2 2.2 2 3.6 2.2-.8-2.2-.2-4.6 1.6-6.2 1.2 2.6 1 5.4-.4 7.6 1.6-.3 3-.2 4.3.6-2.2 1.8-5.1 2.6-7.5 2Z`,
                                    fill: `#F5654A`,
                                  }),
                                  (0, f.jsx)(`path`, {
                                    d: `M17.8 17.8c1.6-1.4 2.4-3.8 1.6-6.2-.9 1.2-2.2 2-3.6 2.2.8-2.2.2-4.6-1.6-6.2-1.2 2.6-1 5.4.4 7.6-1.6-.3-3-.2-4.3.6 2.2 1.8 5.1 2.6 7.5 2Z`,
                                    fill: `#FF7A62`,
                                  }),
                                ],
                              })
                            : (0, f.jsxs)(`svg`, {
                                viewBox: `0 0 24 24`,
                                className: `tool-mark`,
                                "aria-hidden": !0,
                                children: [
                                  (0, f.jsx)(`path`, {
                                    d: `M12.2 3.2c-2.2 0-3.5 1.1-4 2.4.8-.6 1.8-.8 2.8-.4.6.2 1 .7 1.3 1.3.5 1.1.1 2.2-.7 2.9l-3.2 2.3c-1.7 1.2-2.3 3.3-1.5 5 .8 1.7 2.8 2.6 4.7 2.1`,
                                    fill: `#3673a5`,
                                  }),
                                  (0, f.jsx)(`path`, {
                                    d: `M11.8 20.8c2.2 0 3.5-1.1 4-2.4-.8.6-1.8.8-2.8.4-.6-.2-1-.7-1.3-1.3-.5-1.1-.1-2.2.7-2.9l3.2-2.3c1.7-1.2 2.3-3.3 1.5-5-.8-1.7-2.8-2.6-4.7-2.1`,
                                    fill: `#ffd43b`,
                                  }),
                                ],
                              });
}
var S = [
  { href: `#inicio`, id: `inicio`, label: `Início` },
  { href: `#projetos`, id: `projetos`, label: `Projetos` },
  { href: `#trajetoria`, id: `trajetoria`, label: `Trajetória` },
  { href: `#contato`, id: `contato`, label: `Contato` },
];
function ae() {
  let [e, t] = (0, l.useState)(!1),
    [n, r] = (0, l.useState)(`inicio`);
  return (
    (0, l.useEffect)(() => {
      let e = S.map((e) => e.id)
          .map((e) => document.getElementById(e))
          .filter((e) => !!e),
        t = new IntersectionObserver(
          (e) => {
            let t = e
              .filter((e) => e.isIntersecting)
              .sort((e, t) => t.intersectionRatio - e.intersectionRatio)[0];
            t?.target.id && r(t.target.id);
          },
          { rootMargin: `-30% 0px -55% 0px`, threshold: [0.1, 0.25, 0.5] },
        );
      e.forEach((e) => t.observe(e));
      return () => t.disconnect();
    }, []),
    (0, l.useEffect)(() => {
      document.body.style.overflow = e ? `hidden` : ``;
      return () => {
        document.body.style.overflow = ``;
      };
    }, [e]),
    (0, f.jsxs)(f.Fragment, {
      children: [
        (0, f.jsx)(`header`, {
          className: `site-header${e ? ` is-open` : ``}`,
          children: (0, f.jsxs)(`div`, {
            className: `header-inner`,
            children: [
              (0, f.jsx)(`a`, {
                className: `logo`,
                href: `#inicio`,
                "aria-label": `Diego Arruda, ir ao início`,
                children: `Diego Arruda`,
              }),
              (0, f.jsx)(`nav`, {
                className: `nav-desktop`,
                "aria-label": `Seções`,
                children: S.map((e) =>
                  (0, f.jsx)(
                    `a`,
                    {
                      href: e.href,
                      className: n === e.id ? `is-active` : ``,
                      children: e.label,
                    },
                    e.id,
                  ),
                ),
              }),
              (0, f.jsxs)(`button`, {
                type: `button`,
                className: `nav-toggle`,
                "aria-expanded": e,
                "aria-controls": `menu-mobile`,
                onClick: () => t((e) => !e),
                children: [
                  e ? (0, f.jsx)(ne, {}) : (0, f.jsx)(te, {}),
                  (0, f.jsx)(`span`, {
                    className: `sr-only`,
                    children: e ? `Fechar menu` : `Abrir menu`,
                  }),
                ],
              }),
            ],
          }),
        }),
        (0, f.jsx)(`div`, {
          id: `menu-mobile`,
          className: `nav-mobile${e ? ` is-open` : ``}`,
          hidden: !e,
          children: (0, f.jsx)(`nav`, {
            "aria-label": `Seções`,
            children: S.map((e) =>
              (0, f.jsx)(
                `a`,
                {
                  href: e.href,
                  className: n === e.id ? `is-active` : ``,
                  onClick: () => t(!1),
                  children: e.label,
                },
                e.id,
              ),
            ),
          }),
        }),
      ],
    })
  );
}
var oe = {
    name: `Diego Arruda`,
    rolePrefix: `Especialista de `,
    roleHighlight: `Inovação e IA`,
    company: `Iguatemi S.A.`,
    kicker: `Portfólio`,
    tagline: `Transformando processos em agentes de IA que geram resultado.`,
    location: `Osasco-SP`,
    stats: [
      { value: `26`, label: `agentes de IA em produção` },
      { value: `5.100+`, label: `horas economizadas` },
      { value: `R$ 265 mil+`, label: `em economia` },
    ],
    tools: [
      `Copilot Studio`,
      `Power Automate`,
      `Jira`,
      `Claude`,
      `n8n`,
      `Grok`,
      `IoT`,
      `HeyGen`,
      `Lovable`,
      `Snowflake`,
      `Gemini NotebookLM`,
      `Hermes`,
      `OpenClaw`,
    ],
    skills: [
      `Copilot Studio`,
      `Power Automate`,
      `RPA`,
      `chatbots`,
      `agentes de IA`,
      `Jira`,
      `Claude`,
      `BigQuery`,
      `Python`,
    ],
  },
  se = [
    { id: `agentes`, label: `Agentes de IA`, icon: `shield`, angle: 288 },
    { id: `rpa`, label: `Automação RPA`, icon: `database`, angle: 0 },
    { id: `copilot`, label: `Copilot Studio`, icon: `chart`, angle: 72 },
    { id: `comite`, label: `Comitê de IA`, icon: `gear`, angle: 216 },
    { id: `squad`, label: `Squad de Inovação`, icon: `people`, angle: 144 },
  ],
  ce = [
    {
      name: `HUB de IA`,
      context: `Iguatemi S.A.`,
      description: `Plataforma que centraliza agentes, ferramentas e artefatos de IA da empresa e também funciona como repositório de iniciativas, usando IA para avaliar sinergias entre projetos e ranquear a priorização.`,
    },
    {
      name: `Agentes de IA`,
      context: `Iguatemi S.A.`,
      description: `Soluções em produção para Jurídico, Comercial, RH, Comunicação, Marketing e Operações, com Claude, Copilot Studio, Salesforce e Snowflake. São 26 agentes em produção.`,
    },
    {
      name: `Automação RPA e chatbots`,
      context: `Iguatemi S.A.`,
      description: `Projetos de RPA e chatbots, com equipes terceirizadas e ferramentas de workflow.`,
    },
  ],
  le = [
    {
      name: `Autoescola Ellus`,
      href: `https://ellus-prototipo.vercel.app`,
      description: `Protótipo de site para a CFC Ellus, autoescola de Carapicuíba, feito como demonstração com dados de exemplo. Traz um hero com vídeo em loop de um personagem 3D dirigindo o carro da marca, simulador de pacotes por categoria (A, B, A+B, D, E, adição e reciclagem) de 5 em 5 aulas, agendamento de aula prática em cinco passos — tipo de aula, instrutor, dia, horário e dados — com código de reserva e opção de cancelar ou remarcar, simulado da prova teórica do DETRAN com correção e explicações por tema, e carrossel da frota com carros, micro-ônibus e caminhão. O site é responsivo e acessível, em HTML, CSS e JavaScript puro, com localStorage, publicação na Vercel e mídia de imagem e vídeo gerada por IA. É um protótipo em demonstração.`,
    },
    {
      name: `LearnUp`,
      href: `https://learnupapp.vercel.app`,
      description: `Plataforma pessoal de aprendizagem.`,
    },
    {
      name: `InovaLab 3D`,
      href: `https://inovalab3d.vercel.app`,
      description: `Catálogo de peças em impressão 3D.`,
    },
  ],
  ue = [
    {
      company: `Iguatemi S.A.`,
      role: `Especialista de Inovação e Soluções TI`,
      period: `jan/2024 – atual`,
      text: `Lidera o squad de Inovação & IA (5 pessoas), integra o Comitê de IA e criou o HUB de IA, com 26 agentes de IA em produção, 5.100+ horas economizadas e R$ 265 mil+ de economia em 2026.`,
      details: [
        `Lidera o squad de Inovação & IA (5 pessoas) e participa do Comitê de IA, definindo estratégia, governança e priorização das iniciativas de IA em toda a companhia.`,
        `Criou o HUB de IA, plataforma que centraliza agentes, ferramentas e artefatos de IA da empresa e também funciona como repositório de iniciativas, usando IA para avaliar sinergias entre projetos e ranquear a priorização.`,
        `Agentes de IA em produção para Jurídico, Comercial, RH, Comunicação, Marketing e Operações, com Claude, Copilot Studio, Teams, Salesforce e Snowflake.`,
        `Resultados em 2026: 5.100+ horas de trabalho repetitivo economizadas e R$ 265 mil+ de economia, combinando agentes desenvolvidos internamente e soluções de mercado incorporadas.`,
        `Estrutura a esteira de inovação (ideia → POC → MVP → produção), com testes, integração, medição de impacto, KPIs e roadmap; analisa soluções de mercado e atua em pesquisa e desenvolvimento de novas tecnologias e casos de uso de IA.`,
        `Gestão de orçamento (CAPEX/OPEX), licenciamento de IA e tecnologia, contratos e fornecedores; define boas práticas de uso corporativo de IA; treina em Inovação, Claude e Microsoft Copilot e capacita os AI Champions; atua como jurado do Prêmio Inovação; conduz projetos de RPA e chatbots.`,
      ],
    },
    {
      company: `Strattner`,
      role: `Analista de Sistemas Sênior`,
      period: `abr/2022 – dez/2023`,
      text: `Na saúde, liderou a criação do Departamento de Soluções Digitais e de soluções de IA e IoT.`,
      details: [
        `Liderou a criação do Departamento de Soluções Digitais, impulsionando inovação e transformação digital na saúde.`,
        `Desenvolveu e implementou IA para detecção precoce de câncer.`,
        `Responsável pelas soluções de IoT, com dispositivos que permitiam identificar de forma preditiva a necessidade de manutenção de equipamentos hospitalares.`,
        `Product Owner de produtos digitais, da concepção ao lançamento, com times de desenvolvimento, design, marketing e vendas.`,
      ],
    },
    {
      company: `Strattner`,
      role: `Analista de Sistemas Pleno`,
      period: `ago/2017 – mar/2022`,
      text: `Product Owner de produtos internos e externos, com projetos campeões de inovação.`,
      details: [
        `Product Owner de produtos internos e externos, com participação em IoT em saúde, LMS, Contratos, Assistência técnica, BPMS e conexão remota para medical device.`,
        `Projetos campeões de inovação: S.Connect (redução de despesas operacionais de atendimento técnico) e Atendimento 24/7 (chatbot).`,
      ],
    },
    {
      company: `Simpress`,
      role: `Analista de Suporte`,
      period: `fev/2016 – ago/2017`,
      text: `Analista de Suporte na Simpress, subsidiária da Samsung Electronics.`,
      details: [
        `Analista de Suporte na Simpress, subsidiária da Samsung Electronics, de fev/2016 a ago/2017.`,
        `Indicadores de Segurança da Informação; administração de DLP e Endpoint Symantec; gestão de ativos (Lansweeper, WSUS) e Active Directory.`,
      ],
    },
    {
      company: `Iguatemi Empresa de Shopping Center`,
      role: `Analista de Sistemas`,
      period: `dez/2009 – set/2015`,
      text: `Líder de projetos de TI na implantação de shoppings da Iguatemi e de infraestrutura de grande porte.`,
      details: [
        `Analista de Sistemas na Iguatemi Empresa de Shopping Center, de dez/2009 a set/2015.`,
        `Líder de projetos de TI na implantação dos shoppings Iguatemi Ribeirão Preto, São José do Rio Preto e Esplanada.`,
        `Infraestrutura de grande porte: redes, telefonia, controle de acesso e automação.`,
      ],
    },
  ],
  de = [
    {
      title: `MBA em Inteligência Artificial`,
      org: `FIAP`,
      detail: `Previsão out/2027`,
    },
    { title: `MBA em Transformação Digital`, org: `Mackenzie`, detail: `2023` },
    { title: `MBA em Gestão de Cibersegurança`, org: `FIAP`, detail: `2018` },
    {
      title: `Tecnologia em Redes de Computadores`,
      org: `FIEO`,
      detail: `2016`,
    },
  ],
  fe = [
    { title: `AI for Business`, org: `Inteli`, detail: `jan/2026` },
    { title: `CSPO — Certified Scrum Product Owner`, org: ``, detail: `2020` },
    { title: `Green Belt — Lean Six Sigma`, org: ``, detail: `` },
    { title: `Digital Products Hero`, org: `FIAP`, detail: `2022` },
  ];
function pe() {
  let [e, t] = (0, l.useState)(!1);
  return (
    (0, l.useEffect)(() => {
      let e = window.matchMedia(`(prefers-reduced-motion: reduce)`),
        n = () => t(e.matches);
      return (
        n(),
        e.addEventListener(`change`, n),
        () => e.removeEventListener(`change`, n)
      );
    }, []),
    e
  );
}
function me() {
  return (0, f.jsxs)(`svg`, {
    className: `hub-core-svg`,
    viewBox: `0 0 200 200`,
    role: `img`,
    "aria-label": `HUB de IA`,
    children: [
      (0, f.jsxs)(`defs`, {
        children: [
          (0, f.jsxs)(`radialGradient`, {
            id: `hubGlow`,
            cx: `50%`,
            cy: `46%`,
            r: `55%`,
            children: [
              (0, f.jsx)(`stop`, {
                offset: `0%`,
                stopColor: `#1fe6b4`,
                stopOpacity: `0.85`,
              }),
              (0, f.jsx)(`stop`, {
                offset: `45%`,
                stopColor: `#1a7cff`,
                stopOpacity: `0.4`,
              }),
              (0, f.jsx)(`stop`, {
                offset: `100%`,
                stopColor: `#040b12`,
                stopOpacity: `0`,
              }),
            ],
          }),
          (0, f.jsxs)(`linearGradient`, {
            id: `hubRing`,
            x1: `0`,
            y1: `0`,
            x2: `1`,
            y2: `1`,
            children: [
              (0, f.jsx)(`stop`, { offset: `0%`, stopColor: `#1fe6b4` }),
              (0, f.jsx)(`stop`, { offset: `50%`, stopColor: `#3cf0ff` }),
              (0, f.jsx)(`stop`, { offset: `100%`, stopColor: `#8b5cf6` }),
            ],
          }),
        ],
      }),
      (0, f.jsx)(`circle`, {
        cx: `100`,
        cy: `100`,
        r: `78`,
        fill: `url(#hubGlow)`,
      }),
      (0, f.jsx)(`circle`, {
        className: `hub-ring hub-ring-a`,
        cx: `100`,
        cy: `100`,
        r: `62`,
        fill: `none`,
        stroke: `url(#hubRing)`,
        strokeWidth: `1.2`,
        strokeDasharray: `8 10`,
        opacity: `0.85`,
      }),
      (0, f.jsx)(`circle`, {
        className: `hub-ring hub-ring-b`,
        cx: `100`,
        cy: `100`,
        r: `48`,
        fill: `none`,
        stroke: `#1fe6b4`,
        strokeWidth: `0.7`,
        strokeDasharray: `3 8`,
        opacity: `0.55`,
      }),
      Array.from({ length: 12 }, (e, t) => {
        let n = (t / 12) * Math.PI * 2,
          r = 28 + (t % 3) * 10;
        return (0, f.jsx)(
          `circle`,
          {
            cx: 100 + Math.cos(n) * r,
            cy: 100 + Math.sin(n) * r,
            r: t % 4 === 0 ? 2.4 : 1.5,
            fill: t % 3 === 0 ? `#e7ffff` : `#1fe6b4`,
            opacity: `0.9`,
          },
          t,
        );
      }),
      Array.from({ length: 12 }, (e, t) => {
        let n = (t / 12) * Math.PI * 2,
          r = 36 + (t % 3) * 8;
        return (0, f.jsx)(
          `line`,
          {
            x1: 100 + Math.cos(n) * 22,
            y1: 100 + Math.sin(n) * 22,
            x2: 100 + Math.cos(n) * r,
            y2: 100 + Math.sin(n) * r,
            stroke: `#7dd3fc`,
            strokeWidth: `0.6`,
            opacity: `0.45`,
          },
          `l-${t}`,
        );
      }),
    ],
  });
}
function he({ reduced: e }) {
  let t = `M50 14 A36 36 0 1 1 49.99 14`;
  return (0, f.jsxs)(`svg`, {
    className: `hub-links`,
    viewBox: `0 0 100 100`,
    "aria-hidden": !0,
    children: [
      (0, f.jsx)(`defs`, {
        children: (0, f.jsxs)(`linearGradient`, {
          id: `flow`,
          x1: `0`,
          y1: `0`,
          x2: `1`,
          y2: `1`,
          children: [
            (0, f.jsx)(`stop`, {
              offset: `0%`,
              stopColor: `#1fe6b4`,
              stopOpacity: `0.15`,
            }),
            (0, f.jsx)(`stop`, {
              offset: `50%`,
              stopColor: `#1fe6b4`,
              stopOpacity: `1`,
            }),
            (0, f.jsx)(`stop`, {
              offset: `100%`,
              stopColor: `#8b5cf6`,
              stopOpacity: `0.2`,
            }),
          ],
        }),
      }),
      se.map((e) => {
        let t = (e.angle * Math.PI) / 180,
          n = 50 + Math.sin(t) * 36,
          r = 50 - Math.cos(t) * 36,
          i = 50 + Math.sin(t + 0.35) * 18,
          a = 50 - Math.cos(t + 0.35) * 18;
        return (0, f.jsx)(
          `path`,
          {
            className: `hub-flow`,
            d: `M50 50 Q ${i} ${a} ${n} ${r}`,
            fill: `none`,
            stroke: `url(#flow)`,
            strokeWidth: `0.7`,
          },
          e.id,
        );
      }),
      (0, f.jsx)(`circle`, {
        className: `hub-orbit-ring`,
        cx: `50`,
        cy: `50`,
        r: `36`,
        fill: `none`,
      }),
      e
        ? null
        : (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsx)(`circle`, {
                r: `1.4`,
                fill: `#1fe6b4`,
                children: (0, f.jsx)(`animateMotion`, {
                  dur: `11s`,
                  repeatCount: `indefinite`,
                  path: t,
                }),
              }),
              (0, f.jsx)(`circle`, {
                r: `1.1`,
                fill: `#8b5cf6`,
                children: (0, f.jsx)(`animateMotion`, {
                  dur: `17s`,
                  repeatCount: `indefinite`,
                  path: t,
                }),
              }),
            ],
          }),
    ],
  });
}
function ge() {
  let e = (0, l.useRef)(null),
    t = pe(),
    [n, r] = (0, l.useState)(null),
    [i, a] = (0, l.useState)({ x: 0, y: 0 });
  (0, l.useEffect)(() => {
    let t = e.current;
    if (!t) return;
    let n = new IntersectionObserver(
      ([e]) => {
        t.classList.toggle(`is-offscreen`, !e.isIntersecting);
      },
      { threshold: 0.12 },
    );
    n.observe(t);
    return () => n.disconnect();
  }, []);
  function o(n) {
    if (t || n.pointerType !== `mouse`) return;
    let r = e.current;
    if (!r) return;
    let i = r.getBoundingClientRect(),
      o = (n.clientX - i.left) / i.width - 0.5,
      s = (n.clientY - i.top) / i.height - 0.5;
    a({ x: o * 10, y: s * 10 });
  }
  function s() {
    a({ x: 0, y: 0 });
    r(null);
  }
  function c(e) {
    r((t) => (t === e ? null : e));
  }
  return (0, f.jsx)(`div`, {
    ref: e,
    className: `hub${t ? ` is-static` : ``}`,
    onPointerMove: o,
    onPointerLeave: s,
    style: { "--hub-shift-x": `${i.x}px`, "--hub-shift-y": `${i.y}px` },
    children: (0, f.jsxs)(`div`, {
      className: `hub-stage`,
      children: [
        (0, f.jsx)(he, { reduced: t }),
        (0, f.jsxs)(`div`, {
          className: `hub-core`,
          children: [
            (0, f.jsx)(`div`, { className: `hub-rays` }),
            (0, f.jsx)(me, {}),
            (0, f.jsxs)(`div`, {
              className: `hub-label`,
              children: [
                (0, f.jsx)(`span`, {
                  className: `hub-label-main`,
                  children: `HUB`,
                }),
                (0, f.jsx)(`span`, {
                  className: `hub-label-sub`,
                  children: `de IA`,
                }),
              ],
            }),
            (0, f.jsxs)(`div`, {
              className: `pedestal`,
              "aria-hidden": !0,
              children: [
                (0, f.jsx)(`div`, { className: `plate plate-a` }),
                (0, f.jsx)(`div`, { className: `plate plate-b` }),
                (0, f.jsx)(`div`, { className: `plate plate-c` }),
              ],
            }),
          ],
        }),
        (0, f.jsx)(`div`, {
          className: `hub-orbit`,
          children: se.map((e) => {
            let t = n === e.id;
            return (0, f.jsx)(
              `div`,
              {
                className: `hub-slot`,
                style: {
                  left: `calc(50% + ${Math.sin((e.angle * Math.PI) / 180) * 36}%)`,
                  top: `calc(50% - ${Math.cos((e.angle * Math.PI) / 180) * 36}%)`,
                },
                children: (0, f.jsxs)(`button`, {
                  type: `button`,
                  className: `hub-card${t ? ` is-active` : ``}`,
                  "aria-label": e.label,
                  "aria-pressed": t,
                  onMouseEnter: () => r(e.id),
                  onFocus: () => r(e.id),
                  onClick: () => c(e.id),
                  children: [
                    (0, f.jsx)(`span`, {
                      className: `hub-card-icon`,
                      children: (0, f.jsx)(x, { name: e.icon }),
                    }),
                    (0, f.jsx)(`span`, {
                      className: `hub-card-label`,
                      children: e.label,
                    }),
                  ],
                }),
              },
              e.id,
            );
          }),
        }),
      ],
    }),
  });
}
function _e() {
  return (0, f.jsxs)(`section`, {
    className: `hero`,
    id: `inicio`,
    children: [
      (0, f.jsxs)(`div`, {
        className: `hero-bg`,
        "aria-hidden": !0,
        children: [
          (0, f.jsx)(`div`, { className: `hero-vignette` }),
          (0, f.jsx)(`div`, { className: `hero-dots` }),
          (0, f.jsx)(`div`, { className: `hero-floor` }),
        ],
      }),
      (0, f.jsxs)(`div`, {
        className: `hero-grid`,
        children: [
          (0, f.jsxs)(`div`, {
            className: `hero-copy`,
            children: [
              (0, f.jsx)(`p`, { className: `kicker`, children: oe.kicker }),
              (0, f.jsx)(`h1`, { children: oe.name }),
              (0, f.jsxs)(`p`, {
                className: `role`,
                children: [
                  oe.rolePrefix,
                  (0, f.jsx)(`span`, { children: oe.roleHighlight }),
                ],
              }),
              (0, f.jsx)(`p`, { className: `tagline`, children: oe.tagline }),
              (0, f.jsx)(`ul`, {
                className: `stats`,
                children: oe.stats.map((e) =>
                  (0, f.jsxs)(
                    `li`,
                    {
                      children: [
                        (0, f.jsx)(`strong`, { children: e.value }),
                        (0, f.jsx)(`span`, { children: e.label }),
                      ],
                    },
                    e.label,
                  ),
                ),
              }),
              (0, f.jsxs)(`div`, {
                className: `hero-actions`,
                children: [
                  (0, f.jsxs)(`a`, {
                    className: `btn btn-primary`,
                    href: `#projetos`,
                    children: [`Ver projetos`, (0, f.jsx)(y, {})],
                  }),
                  (0, f.jsx)(`a`, {
                    className: `btn btn-ghost`,
                    href: `#contato`,
                    children: `Fale comigo`,
                  }),
                ],
              }),
              (0, f.jsxs)(`section`, {
                className: `knowledge`,
                "aria-labelledby": `knowledge-title`,
                children: [
                  (0, f.jsx)(`h2`, {
                    className: `knowledge-title`,
                    id: `knowledge-title`,
                    children: `Caixa de conhecimentos`,
                  }),
                  (0, f.jsx)(`ul`, {
                    className: `knowledge-grid`,
                    children: oe.tools.map((e) =>
                      (0, f.jsxs)(
                        `li`,
                        {
                          children: [
                            (0, f.jsx)(ie, { name: e }),
                            (0, f.jsx)(`span`, { children: e }),
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
          (0, f.jsx)(ge, {}),
        ],
      }),
    ],
  });
}
function ve() {
  return (0, f.jsx)(`section`, {
    className: `section`,
    id: `projetos`,
    children: (0, f.jsxs)(`div`, {
      className: `wrap`,
      children: [
        (0, f.jsxs)(`header`, {
          className: `section-head`,
          children: [
            (0, f.jsx)(`p`, { className: `kicker`, children: `Iniciativas` }),
            (0, f.jsx)(`h2`, { children: `Projetos` }),
          ],
        }),
        (0, f.jsx)(`div`, {
          className: `project-grid`,
          children: ce.map((e) =>
            (0, f.jsxs)(
              `article`,
              {
                className: `project-card`,
                children: [
                  (0, f.jsx)(`p`, {
                    className: `project-context`,
                    children: e.context,
                  }),
                  (0, f.jsx)(`div`, {
                    className: `project-card-top`,
                    children: (0, f.jsx)(`h3`, { children: e.name }),
                  }),
                  (0, f.jsx)(`p`, { children: e.description }),
                ],
              },
              e.name,
            ),
          ),
        }),
        (0, f.jsx)(`h3`, {
          className: `project-subhead`,
          children: `Projetos pessoais`,
        }),
        (0, f.jsx)(`p`, {
          className: `lede project-sublede`,
          children: `Iniciativas pessoais, fora do ambiente de trabalho.`,
        }),
        (0, f.jsx)(`div`, {
          className: `project-grid`,
          children: le.map((e) =>
            (0, f.jsxs)(
              `article`,
              {
                className: `project-card`,
                children: [
                  (0, f.jsx)(`div`, {
                    className: `project-card-top`,
                    children: (0, f.jsx)(`h3`, { children: e.name }),
                  }),
                  (0, f.jsx)(`p`, { children: e.description }),
                  (0, f.jsxs)(`a`, {
                    className: `project-link`,
                    href: e.href,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    children: [`Acesse aqui`, (0, f.jsx)(b, {})],
                  }),
                ],
              },
              e.name,
            ),
          ),
        }),
      ],
    }),
  });
}
function ye() {
  let [e, t] = (0, l.useState)(null);
  return (0, f.jsx)(`section`, {
    className: `section`,
    id: `trajetoria`,
    children: (0, f.jsxs)(`div`, {
      className: `wrap`,
      children: [
        (0, f.jsxs)(`header`, {
          className: `section-head`,
          children: [
            (0, f.jsx)(`p`, { className: `kicker`, children: `Carreira` }),
            (0, f.jsx)(`h2`, { children: `Trajetória` }),
            (0, f.jsx)(`p`, {
              className: `lede`,
              children: `Mais de 16 anos em tecnologia, com atuação em varejo, shopping centers e saúde. Clique ou toque em cada experiência para ver o detalhamento.`,
            }),
          ],
        }),
        (0, f.jsx)(`ol`, {
          className: `timeline`,
          children: ue.map((n, r) => {
            let i = n.role !== n.company,
              a = e === r,
              o = `traj-panel-${r}`,
              s = `traj-btn-${r}`;
            return (0, f.jsxs)(
              `li`,
              {
                children: [
                  (0, f.jsx)(`div`, { className: `tl-dot`, "aria-hidden": !0 }),
                  (0, f.jsxs)(`div`, {
                    className: `tl-card${a ? ` is-open` : ``}`,
                    children: [
                      (0, f.jsx)(`h3`, {
                        children: (0, f.jsxs)(`button`, {
                          type: `button`,
                          className: `tl-trigger`,
                          id: s,
                          "aria-expanded": a,
                          "aria-controls": o,
                          onClick: () => t(a ? null : r),
                          children: [
                            (0, f.jsxs)(`span`, {
                              className: `tl-trigger-text`,
                              children: [
                                (0, f.jsx)(`span`, {
                                  className: `tl-period`,
                                  children: n.period,
                                }),
                                (0, f.jsxs)(`span`, {
                                  className: `tl-role`,
                                  children: [
                                    i ? n.role : n.company,
                                    i
                                      ? (0, f.jsxs)(`span`, {
                                          children: [` · `, n.company],
                                        })
                                      : null,
                                  ],
                                }),
                              ],
                            }),
                            (0, f.jsx)(`span`, {
                              className: `tl-chevron`,
                              "aria-hidden": !0,
                              children: a ? `–` : `+`,
                            }),
                          ],
                        }),
                      }),
                      (0, f.jsx)(`p`, { children: n.text }),
                      (0, f.jsx)(`div`, {
                        id: o,
                        role: `region`,
                        "aria-labelledby": s,
                        className: `tl-panel`,
                        hidden: !a,
                        children: (0, f.jsx)(`ul`, {
                          className: `tl-bullets`,
                          children: n.details.map((e) =>
                            (0, f.jsx)(`li`, { children: e }, e),
                          ),
                        }),
                      }),
                    ],
                  }),
                ],
              },
              `${n.company}-${n.period}-${r}`,
            );
          }),
        }),
      ],
    }),
  });
}
function be({ items: e }) {
  return (0, f.jsx)(`ul`, {
    className: `edu-grid`,
    children: e.map((e) =>
      (0, f.jsxs)(
        `li`,
        {
          className: `edu-card`,
          children: [
            (0, f.jsx)(`h3`, { children: e.title }),
            e.org
              ? (0, f.jsx)(`p`, { className: `edu-org`, children: e.org })
              : null,
            e.detail ? (0, f.jsx)(`p`, { children: e.detail }) : null,
          ],
        },
        e.title,
      ),
    ),
  });
}
function xe() {
  return (0, f.jsxs)(f.Fragment, {
    children: [
      (0, f.jsx)(`section`, {
        className: `section`,
        id: `formacao`,
        children: (0, f.jsxs)(`div`, {
          className: `wrap`,
          children: [
            (0, f.jsxs)(`header`, {
              className: `section-head`,
              children: [
                (0, f.jsx)(`p`, { className: `kicker`, children: `Estudos` }),
                (0, f.jsx)(`h2`, { children: `Formação` }),
              ],
            }),
            (0, f.jsx)(be, { items: de }),
          ],
        }),
      }),
      (0, f.jsx)(`section`, {
        className: `section`,
        id: `certificacoes`,
        children: (0, f.jsxs)(`div`, {
          className: `wrap`,
          children: [
            (0, f.jsxs)(`header`, {
              className: `section-head`,
              children: [
                (0, f.jsx)(`p`, {
                  className: `kicker`,
                  children: `Qualificações`,
                }),
                (0, f.jsx)(`h2`, { children: `Certificações e Cursos` }),
              ],
            }),
            (0, f.jsx)(be, { items: fe }),
          ],
        }),
      }),
    ],
  });
}
function Se() {
  return (0, f.jsx)(`section`, {
    className: `section`,
    id: `contato`,
    children: (0, f.jsxs)(`div`, {
      className: `wrap contact-wrap`,
      children: [
        (0, f.jsxs)(`header`, {
          className: `section-head`,
          children: [
            (0, f.jsx)(`p`, { className: `kicker`, children: `Contato` }),
            (0, f.jsx)(`h2`, { children: `Fale comigo` }),
            (0, f.jsx)(`p`, {
              className: `lede`,
              children: `Vamos conversar sobre inovação, IA e projetos. Me encontre no LinkedIn.`,
            }),
          ],
        }),
        (0, f.jsxs)(`a`, {
          className: `btn btn-primary btn-lg`,
          href: `https://www.linkedin.com/in/diegoarruda/`,
          target: `_blank`,
          rel: `noopener noreferrer`,
          "aria-label": `LinkedIn de Diego Arruda, abre em uma nova aba`,
          children: [(0, f.jsx)(ee, {}), `LinkedIn`],
        }),
      ],
    }),
  });
}
function Ce() {
  return (0, f.jsx)(`footer`, {
    className: `site-footer`,
    children: (0, f.jsx)(`div`, {
      className: `wrap`,
      children: (0, f.jsx)(`p`, {
        children: `© 2026 Diego Arruda · Osasco-SP`,
      }),
    }),
  });
}
function we() {
  return (0, f.jsxs)(f.Fragment, {
    children: [
      (0, f.jsx)(`a`, {
        className: `skip-link`,
        href: `#conteudo`,
        children: `Ir para o conteúdo`,
      }),
      (0, f.jsx)(ae, {}),
      (0, f.jsxs)(`main`, {
        id: `conteudo`,
        children: [
          (0, f.jsx)(_e, {}),
          (0, f.jsx)(ve, {}),
          (0, f.jsx)(ye, {}),
          (0, f.jsx)(xe, {}),
          (0, f.jsx)(Se, {}),
        ],
      }),
      (0, f.jsx)(Ce, {}),
    ],
  });
}

export default we;
