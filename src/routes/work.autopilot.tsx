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
    <header className="portfolio-shell cs-shell site-header">
      <Link className="wordmark" to="/" aria-label="Jina, back home">Jina<span className="text-honey">.</span></Link>
      <nav className="site-nav" aria-label="Case study navigation"><Link to="/" hash="work">All work</Link><Link to="/" hash="contact" className="flex items-center gap-1">Let’s talk <ArrowUpRight size={13} /></Link></nav>
    </header>
    <main className="cs-page">
      <section className="cs-hero"><div className="portfolio-shell">
        <Link to="/" hash="work" className="cs-back"><ArrowLeft size={14} /> Back to case studies</Link>
        <div className="cs-hero-grid">
          <div className="cs-hero-copy">
            <p className="eyebrow featured-eyebrow"><span className="featured-dot" />Case study · Automated savings<span className="featured-tag">Shipped to Production</span></p>
            <h1 className="cs-title">Autopilot: Designing savings habits that stick</h1>
            <p className="cs-sub">Turning good intentions into automatic progress.</p>
          </div>
          <div className="cs-visual"><img src={autopilotAsset.url} alt="Angled close-up of a phone showing the Automatic Savings tile and bottom navigation on a pale blue and cream surface" /></div>
        </div>
        <dl className="cs-meta">
          <div><dt>Role</dt><dd>Product design intern</dd></div>
          <div><dt>Team</dt><dd>Financial well-being</dd></div>
          <div><dt>Timeline</dt><dd>2022</dd></div>
          <div><dt>Focus</dt><dd>UX research, product design</dd></div>
        </dl>
      </div></section>
      <div className="portfolio-shell cs-shell">
        <Section n="01" label="Problem">
          <p>Capital One’s existing automated savings tools — a recurring transfer on a schedule, and a one-time transfer of a percentage of each paycheck — didn’t work for a specific, underserved segment of customers: people with unstable or variable cash flow, living paycheck to paycheck, with a low sense of control over their finances and genuine uncertainty about how much they could safely save. For this segment, committing to a fixed recurring amount or percentage was itself a barrier to saving at all.</p>
          <p className="cs-lead">My research identified the specific factors that make saving difficult for this group:</p>
          <ul className="cs-types cs-factors">
            <li>Past savings failures</li>
            <li>Low financial literacy</li>
            <li>Income instability</li>
            <li>A present-bias orientation</li>
            <li>Lack of known tools</li>
            <li>Existing debt</li>
            <li>Psychological barriers</li>
          </ul>
          <p className="cs-lead">From that, two things any new solution needed to deliver:</p>
          <ol className="cs-needs">
            <li><span className="cs-problem-num">1</span><h3>Reduced effort to save</h3></li>
            <li><span className="cs-problem-num">2</span><h3>Increased confidence to save</h3></li>
          </ol>
          <p className="cs-lead cs-lead--split">What needed to be true for a solution to work for this segment:</p>
          <ol className="cs-problems">
            <li><span className="cs-problem-num">1</span><div><p>It had to remove the “how much” and “when” decisions entirely, rather than asking the customer to set them upfront.</p></div></li>
            <li><span className="cs-problem-num">2</span><div><p>It had to only move money when it was genuinely safe to do so, since this segment is disproportionately vulnerable to overdraft and low-balance risk.</p></div></li>
            <li><span className="cs-problem-num">3</span><div><p>It had to be simple enough to enroll in without feeling like another financial decision the customer wasn’t confident making.</p></div></li>
          </ol>
          <p className="cs-methods"><span>Research</span>Customer interviews, a review of internal customer data, and A/B testing.</p>
        </Section>
        <Section n="02" label="Constraints">
          <ul className="cs-constraints">
            <li>
              <span className="cs-problem-num">1</span>
              <div>
                <h3>Trust had to be designed in from the start</h3>
                <p>That meant building a shared language and an experience that made customers feel informed, in control, and confident in what was happening.</p>
              </div>
            </li>
            <li>
              <span className="cs-problem-num">2</span>
              <div>
                <h3>A setup flow in 10 weeks</h3>
                <p>In 10 weeks, we needed to ship out a design and flow for setting up the Minimum Balance Threshold for Autopilot</p>
              </div>
            </li>
          </ul>
        </Section>
        <Section n="03" label="Process & decisions">
          <p className="cs-lead">Designing the flow</p>
          <p>Based on this research, I designed the end-to-end Autopilot flow around three decisions:</p>
          <ul className="cs-process">
            <li>
              <span className="cs-problem-num">1</span>
              <div>
                <h3>A same-day daily transfer model</h3>
                <p>Rather than a lump-sum or scheduled transfer, so saving happened in small, low-stakes “micro-bites” — removing the stress of deciding how much to save at any one time</p>
              </div>
            </li>
            <li>
              <span className="cs-problem-num">2</span>
              <div>
                <h3>A customer-set minimum balance, rather than a system-determined one</h3>
                <p>So the customer stayed in control of what the system was allowed to touch and could trust that Autopilot would never save at the expense of their comfort threshold</p>
              </div>
            </li>
            <li>
              <span className="cs-problem-num">3</span>
              <div>
                <h3>An explainer screen before setup</h3>
                <p>So the customer understood how the feature worked before enrolling — establishing trust and reliance in a system that would otherwise be moving their money without asking each time</p>
              </div>
            </li>
          </ul>
          <p>We considered a round-up savings model (rounding up purchases to the nearest dollar, similar to point-of-sale savings tools), but research showed customers in this segment didn’t find round-ups a meaningful or valuable way to save, so we moved forward with the daily-transfer model instead.</p>
          <p className="cs-lead cs-lead--split">How the flow works:</p>
          <ul className="cs-list cs-list--stacked cs-list--full">
            <li><strong>Enrollment:</strong> customer selects an eligible checking and savings account, reviews what Autopilot does, and sets a minimum checking balance (floor of $150) before the rule is created</li>
            <li><strong>The minimum balance guardrail:</strong> if a transfer would drop the customer’s available checking balance below their set minimum, the system skips that day’s transfer rather than executing it — the core mechanism that lets the feature move money without asking the customer to approve each transfer</li>
            <li><strong>Editing and deleting a rule:</strong> customers can adjust their minimum balance or delete the rule entirely at any time, with changes taking effect within one calendar day</li>
          </ul>
        </Section>
        <Section n="04" label="Outcome"><p>Placeholder: what changed after shipping to production, and what you learned.</p><dl className="cs-stats"><div><dt>00</dt><dd>Metric one</dd></div><div><dt>00</dt><dd>Metric two</dd></div><div><dt>00</dt><dd>Metric three</dd></div></dl></Section>
        <Section n="05" label="Before / After"><div className="cs-compare"><figure><div className="cs-placeholder">Before image</div><figcaption>Before</figcaption></figure><figure><div className="cs-placeholder after">After image</div><figcaption>After</figcaption></figure></div></Section>
      </div>
      <section className="cs-next"><div className="portfolio-shell cs-shell"><p className="eyebrow">Next case study</p><Link to="/work/data-visualization-palette" className="cs-label inline-flex items-center gap-2 mt-3">Building a scalable data visualization palette <ArrowUpRight size={20} /></Link></div></section>
    </main>
  </>;
}
