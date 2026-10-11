import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
import autopilotAsset from '@/assets/autopilot-angled-screen.jpg.asset.json';

const title = 'Autopilot: Designing savings habits that stick — Jina';
const description = 'Case study: designing Autopilot, an automated savings tool that turns good intentions into automatic progress.';

export const Route = createFileRoute('/work/autopilot')({
  head: () => ({ meta: [
    { title },
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: CaseStudy,
});

function Section({ n, label, children }: { n: string; label: string; children: ReactNode }) {
  return <section className="cs-section"><h2 className="cs-label"><span>{n}</span>{label}</h2><div className="cs-body">{children}</div></section>;
}

function CaseStudy() {
  return <>
    <header className="portfolio-shell site-header">
      <Link className="wordmark" to="/" aria-label="Jina, back home">Jina<span className="text-honey">.</span></Link>
      <nav className="site-nav" aria-label="Case study navigation"><Link to="/" hash="work">All work</Link><Link to="/" hash="contact" className="flex items-center gap-1">Let’s talk <ArrowUpRight size={13} /></Link></nav>
    </header>
    <main>
      <section className="cs-hero"><div className="portfolio-shell">
        <Link to="/" hash="work" className="cs-back"><ArrowLeft size={14} /> Back to case studies</Link>
        <p className="eyebrow featured-eyebrow"><span className="featured-dot" />Case study · Automated savings<span className="featured-tag">Shipped to Production</span></p>
        <h1 className="cs-title">Autopilot: Designing savings habits that stick</h1>
        <p className="cs-sub">Turning good intentions into automatic progress.</p>
        <dl className="cs-meta">
          <div><dt>Role</dt><dd>Product design intern</dd></div>
          <div><dt>Team</dt><dd>Financial well-being</dd></div>
          <div><dt>Timeline</dt><dd>2022</dd></div>
          <div><dt>Focus</dt><dd>UX research, product design</dd></div>
        </dl>
        <div className="cs-visual"><img src={autopilotAsset.url} alt="Angled close-up of a phone showing the Automatic Savings tile and bottom navigation on a pale blue and cream surface" /></div>
      </div></section>
      <div className="portfolio-shell">
        <Section n="01" label="Problem"><p>Placeholder: why customers struggled to save consistently, and who it affected.</p></Section>
        <Section n="02" label="Before"><p>Placeholder: what saving looked like before Autopilot — manual transfers, forgotten goals, lost momentum.</p></Section>
        <Section n="03" label="Constraints"><p>Placeholder: the limits you designed within.</p><ul className="cs-list"><li>Constraint one — e.g. regulatory and money-movement rules</li><li>Constraint two — e.g. existing app patterns</li><li>Constraint three — e.g. internship timeline</li></ul></Section>
        <Section n="04" label="Process & decisions"><p>Placeholder: the key steps you took and the decisions that shaped Autopilot.</p><ul className="cs-list"><li>Decision one and why</li><li>Decision two and why</li><li>Decision three and why</li></ul></Section>
        <Section n="05" label="Outcome"><p>Placeholder: what changed after shipping to production, and what you learned.</p><dl className="cs-stats"><div><dt>00</dt><dd>Metric one</dd></div><div><dt>00</dt><dd>Metric two</dd></div><div><dt>00</dt><dd>Metric three</dd></div></dl></Section>
        <Section n="06" label="Before / After"><div className="cs-compare"><figure><div className="cs-placeholder">Before image</div><figcaption>Before</figcaption></figure><figure><div className="cs-placeholder after">After image</div><figcaption>After</figcaption></figure></div></Section>
      </div>
      <section className="cs-next"><div className="portfolio-shell"><p className="eyebrow">Next case study</p><Link to="/work/data-visualization-palette" className="cs-label inline-flex items-center gap-2 mt-3">Building a scalable data visualization palette <ArrowUpRight size={20} /></Link></div></section>
    </main>
  </>;
}
