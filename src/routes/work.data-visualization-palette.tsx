import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
import dataviz from '@/assets/dataviz-editorial-mockup.jpg';

const title = 'Building a scalable data visualization palette — Jina';
const description = 'Case study: creating a shared, accessible language of color for data visualization across the enterprise design system.';

export const Route = createFileRoute('/work/data-visualization-palette')({
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
    <header className="portfolio-shell cs-shell site-header">
      <Link className="wordmark" to="/" aria-label="Jina, back home">Jina<span className="text-honey">.</span></Link>
      <nav className="site-nav" aria-label="Case study navigation"><Link to="/" hash="work">All work</Link><Link to="/" hash="contact" className="flex items-center gap-1">Let’s talk <ArrowUpRight size={13} /></Link></nav>
    </header>
    <main className="cs-page">
      <section className="cs-hero"><div className="portfolio-shell">
        <Link to="/" hash="work" className="cs-back"><ArrowLeft size={14} /> Back to case studies</Link>
        <div className="cs-hero-grid">
          <div className="cs-hero-copy">
            <p className="eyebrow featured-eyebrow"><span className="featured-dot" />Case study · Design systems</p>
            <h1 className="cs-title">Building a scalable data visualization palette</h1>
            <p className="cs-sub">Rebuilt Enterprise Design System's data visualization color palette and shipped usage guidance alongside it, so product teams could build accessible, on-brand charts without a one-off design review each time</p>
          </div>
          <div className="cs-visual"><img src={dataviz} alt="Tablet showing the data visualization palette, chart examples, and color swatches on a pale blue and cream surface" /></div>
        </div>
        <dl className="cs-meta">
          <div><dt>Role</dt><dd>Product designer</dd></div>
          <div><dt>Team</dt><dd>Enterprise Design System</dd></div>
          <div><dt>Timeline</dt><dd>2026</dd></div>
          <div><dt>Focus</dt><dd>Color, accessibility, systems</dd></div>
        </dl>
      </div></section>
      <div className="portfolio-shell cs-shell">
         <Section n="01" label="Problem"><p>Gravity’s existing data visualization palette was due for an update — bringing it up to current token and brand standards. Three distinct problems justified the work:</p>
          <ol className="cs-problems">
            <li><span className="cs-problem-num">1</span><div><h3>Legacy brand colors</h3><p>The palette was still built on an outdated brand color set that predated Gravity’s current brand standards — visually out of step with the rebranded system it had to live within.</p></div></li>
            <li><span className="cs-problem-num">2</span><div><h3>Token sprawl with no usage signal</h3><p>The palette had accumulated far more color tokens than teams were actually using. With no clear guidance on which token applied to which situation, teams routinely picked the wrong one — undermining the system’s consistency with no clear answer to “which token do I use here?”</p></div></li>
            <li><span className="cs-problem-num">3</span><div><h3>Accessibility and contrast gaps</h3><p>The existing palette hadn’t been built with color accessibility and contrast as a first-class requirement, meaning some combinations in active use didn’t meet the bar charts need to be readable for all users.</p></div></li>
          </ol>
          <p className="cs-lead">The misuse showed up in two concrete, recurring patterns:</p>
          <ul className="cs-list cs-list--stacked"><li><strong>Data viz tokens leaking into non-chart UI.</strong> Teams reached for data visualization option and decision tokens when building visuals that had nothing to do with charts — using tokens meant to carry specific data-series meaning in contexts where that meaning didn’t apply at all.</li><li><strong>Wrong token, “close enough” color.</strong> Within charts themselves, teams frequently picked whichever token visually resembled the color they wanted (e.g., “the closest red”) rather than the token whose name and intended usage actually matched the situation — breaking the system’s naming contract even when the visual result looked passable.</li></ul>
          <p className="cs-callout">Without central chart standards or core team capacity, product teams are reinventing the wheel in silos. This creates fragmented user experiences, redundant design effort, and critical accessibility risks across our products.</p></Section>
        <Section n="02" label="Hypothesis"><p>We see data visualization as an evolutionary journey. By establishing community-sourced design assets and usage guidelines, we will:</p>
          <ul className="cs-list">
            <li><strong>Visual unity</strong> — create a consistent visual language across the enterprise</li>
            <li><strong>Smoother handoffs</strong> — streamline design-to-dev handoffs with shared, documented standards</li>
            <li><strong>Chart literacy &amp; accessibility</strong> — elevate how charts are read, and make them readable for everyone</li>
          </ul></Section>
        <Section n="03" label="Constraints"><p>Placeholder: the limits you designed within.</p><ul className="cs-list"><li>Constraint one — e.g. accessibility contrast requirements</li><li>Constraint two — e.g. existing brand colors</li><li>Constraint three — e.g. multiple platforms and chart libraries</li></ul></Section>
        <Section n="04" label="Process & decisions"><p>Placeholder: the key steps you took and the decisions that shaped the palette.</p><ul className="cs-list"><li>Decision one and why</li><li>Decision two and why</li><li>Decision three and why</li></ul></Section>
        <Section n="05" label="Outcome"><p>Placeholder: what changed after launch, and what you learned.</p><dl className="cs-stats"><div><dt>00</dt><dd>Metric one</dd></div><div><dt>00</dt><dd>Metric two</dd></div><div><dt>00</dt><dd>Metric three</dd></div></dl></Section>
        <Section n="06" label="Before / After"><div className="cs-compare"><figure><div className="cs-placeholder">Before image</div><figcaption>Before</figcaption></figure><figure><div className="cs-placeholder after">After image</div><figcaption>After</figcaption></figure></div></Section>
      </div>
      <section className="cs-next"><div className="portfolio-shell cs-shell"><p className="eyebrow">Next case study</p><Link to="/work/autopilot" className="cs-label inline-flex items-center gap-2 mt-3">Autopilot: Designing savings habits that stick <ArrowUpRight size={20} /></Link></div></section>
    </main>
  </>;
}
