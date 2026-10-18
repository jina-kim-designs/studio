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
        <Section n="04" label="Handoff">
          <p>By the end of my internship, I had handed off final specs to the team and presented the design to leadership. The feature had already shipped into production by the time I left.</p>
        </Section>
        <Section n="05" label="Outcome: Pilot performance">
          <p>The design shipped to a limited pilot — 5% of the eligible population (~490K checking accounts) — on April 1, 2024, with no marketing behind it.</p>
          <ul className="cs-list cs-list--stacked cs-list--full">
            <li>Organic enrollment grew steadily month over month after launch (April through August 2024)</li>
            <li>Adoption reached the intended target segments directly: a large share of paycheck-to-paycheck customers and financially constrained debit spenders enrolled</li>
            <li>The majority of adopters had not previously used Capital One’s other automatic savings tools — suggesting the flow removed a real barrier for customers the existing tools weren’t reaching</li>
            <li>Unenrollment stayed low relative to total enrollment</li>
            <li>The feature moved a meaningful amount of money into customers’ savings in aggregate</li>
          </ul>
          <p className="cs-note">These numbers reflect the pilot period only, measuring the design as it shipped — not any of the subsequent changes made after my internship ended.</p>
        </Section>
        <Section n="06" label="What happened after (not my work)">
          <p>For context on where the product went: after I left, the team used pilot data and further research to identify a gap between how the feature was positioned (saving “daily”) and what many lower-balance customers actually experienced (a majority of transfer attempts for that segment were being skipped by the guardrail). They ran several rounds of content testing to close that gap, added a new customer-facing control letting people adjust how much Autopilot saves on their behalf, validated the fix with real users, and moved the feature toward general availability. None of that work is mine — I’m noting it only so the full arc of the product is clear.</p>
        </Section>
        <Section n="07" label="Reflection">
          <p>This project taught me to design with intention: every decision — the daily transfer model, the customer-set minimum, the explainer screen — was a bet grounded in research, and I learned not to be afraid to test and iterate on those bets rather than defending a first instinct.</p>
          <p>Designing for financially vulnerable customers also taught me that trust has to be designed for explicitly, not assumed as a byproduct of good mechanics.</p>
          <p>With more time, I’d push harder on validating assumptions earlier — testing the minimum-balance default and transfer cadence against real account behavior before finalizing the flow, rather than after. That’s the habit I’ve carried forward since: treat early design decisions as testable, not fixed, and build in the room to iterate before a feature ever reaches a pilot.</p>
        </Section>
      </div>
      <section className="cs-next"><div className="portfolio-shell cs-shell"><p className="eyebrow">Next case study</p><Link to="/work/data-visualization-palette" className="cs-label inline-flex items-center gap-2 mt-3">Building a scalable data visualization palette <ArrowUpRight size={20} /></Link></div></section>
    </main>
  </>;
}
