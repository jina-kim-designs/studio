import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
import dataviz from '@/assets/dataviz-editorial-mockup.jpg';
import afterAsset from '@/assets/gravity-dataviz-after.png.asset.json';
import ratingsToolAsset from '@/assets/ratings-palette-generator.png.asset.json';
import beforeAsset from '@/assets/gravity-dataviz-before.png.asset.json';

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
        <Section n="01" label="Problem"><p>Enterprise Design System’s existing data visualization palette was due for an update — bringing it up to current token and brand standards. Three distinct problems justified the work:</p>
          <ol className="cs-problems">
            <li><span className="cs-problem-num">1</span><div><h3>Legacy brand colors</h3><p>The palette was still built on an outdated brand color set that predated Enterprise Design System’s current brand standards — visually out of step with the rebranded system and the products built on top of it.</p></div></li>
            <li><span className="cs-problem-num">2</span><div><h3>Token sprawl with no usage signal</h3><p>The palette had accumulated far more color tokens than teams were actually using. With no clear guidance on which token applied to which situation, teams routinely picked the wrong one — with no clear answer to “which token do I use here?”</p></div></li>
            <li><span className="cs-problem-num">3</span><div><h3>Accessibility and contrast gaps</h3><p>The existing palette hadn’t been built with color accessibility and contrast as a first-class requirement, meaning some combinations in active use didn’t meet the bar charts need to be readable for all users.</p></div></li>
          </ol>
          <p className="cs-lead">The misuse showed up in two concrete, recurring patterns:</p>
          <ul className="cs-list cs-list--stacked"><li><strong>Data viz tokens leaking into non-chart UI.</strong> Teams reached for data visualization option and decision tokens when building visuals that had nothing to do with charts — using tokens meant to carry specific data-series meaning in contexts where that meaning didn’t apply at all.</li><li><strong>Wrong token, “close enough” color.</strong> Within charts themselves, teams frequently picked whichever token visually resembled the color they wanted (e.g., “the closest red”) rather than the token whose name and intended usage actually matched the situation — breaking the system’s naming contract even when the visual result looked passable.</li></ul>
          <p className="cs-callout">Without central chart standards or core team capacity, product teams are reinventing the wheel in silos. This creates fragmented user experiences, redundant design effort, and critical accessibility risks across our products.</p></Section>
        <Section n="02" label="Hypothesis"><p>We see data visualization as an evolutionary journey. By establishing community-sourced design assets and usage guidelines, we will establish:</p>
          <ul className="cs-list cs-list--full">
            <li><strong>Visual unity</strong> — create a consistent visual language across the enterprise</li>
            <li><strong>Chart literacy &amp; accessibility</strong> — elevate how charts are read, and make them readable for everyone</li>
            <li><strong>Smoother handoffs</strong> — streamline design-to-dev handoffs with shared, documented standards</li>
          </ul></Section>
        <Section n="03" label="Constraints"><p>Three forces shaped what the rebuild had to deliver:</p>
          <ul className="cs-constraints">
            <li>
              <span className="cs-problem-num">1</span>
              <div>
                <h3>Needed to work as a system, not a single palette</h3>
                <p>Charts take different forms, and each needs its own color logic — so a single flat color list wasn’t enough. Additionally, the current palette supported a large number of colors that were not being used, confusing to customers, and resulting in tech maintenance bloat. This is why the work shipped as 5 distinct palettes rather than one:</p>
                <ul className="cs-types">
                  <li><strong>Categorical</strong> — distinct, unrelated categories</li>
                  <li><strong>Sequential</strong> — a single metric increasing in intensity</li>
                  <li><strong>Divergent</strong> — two-directional, like negative-to-positive</li>
                  <li><strong>Rating</strong> — a bounded scale, e.g. star or satisfaction ratings</li>
                  <li><strong>Call-out</strong> — highlighting a specific value against the rest</li>
                </ul>
                <p>The rebuild also had to resolve the sprawl problem directly: the final system cut the token count from 150 down to 78 — nearly halving it while still covering all 5 use cases.</p>
              </div>
            </li>
            <li>
              <span className="cs-problem-num">2</span>
              <div>
                <h3>Accessibility without sacrificing distinction</h3>
                <p>Colors needed sufficient contrast to be accessible while still reading as visually distinct data series. The target was a <strong>3:1 contrast ratio</strong> for every color in the system — the WCAG AA minimum for non-text graphical elements.</p>
                <p>Every candidate was tested with Color Oracle (a color-blindness simulator) and custom AI-assisted tools for checking color combinations and iterating on palette candidates faster. The same process applied across all 5 palettes, split between myself (Categorical, Rating) and my co-lead (Sequential, Divergent, Call-out).</p>
              </div>
            </li>
            <li>
              <span className="cs-problem-num">3</span>
              <div>
                <h3>Had to be usable without a design review each time</h3>
                <p>The goal wasn’t just a prettier palette — it was removing the design team as a bottleneck for every chart built across the organization.</p>
                <p>There wasn’t a precise tracked number, but demand was clearly real: many teams across the organization were independently requesting this rebuild — a signal that the lack of self-serve guidance was a recurring friction point, not an isolated complaint.</p>
              </div>
            </li>
          </ul></Section>
        <Section n="04" label="Process & decisions"><p>Three decisions shaped how the palette was built — and what shipped alongside it.</p>
          <ul className="cs-process">
            <li>
              <span className="cs-problem-num">1</span>
              <div>
                <h3>Rebuilding the palette</h3>
                <p>Rather than inventing new hues from scratch, the 5 palettes were generated from Enterprise Design System’s existing brand palette — building color scales directly off the brand’s established colors so the data viz system stayed visually tied to the rest of Enterprise Design System rather than introducing a disconnected secondary color language.</p>
                <p>Across all 5 palettes, we used Color Oracle to simulate color-blind vision and check that colors stayed distinguishable across vision types, and built custom AI-assisted tools to test color combinations and speed up iterating on palette candidates — rather than manually testing each combination by hand. For my two owned palettes (Categorical, Rating), I ran this process myself; my co-lead ran the same process for the other three.</p><figure className="cs-concept"><img src={ratingsToolAsset.url} alt="The Ratings Palette Generator tool showing three palette variants, each with five rating-tier swatches, accessibility badges, and comparison gauges" width={1920} height={771} /><figcaption>The Ratings Palette Generator — one of the custom AI-assisted tools built to test color combinations and iterate on palette candidates faster</figcaption></figure>
              </div>
            </li>
            <li>
              <span className="cs-problem-num">2</span>
              <div>
                <h3>Why guidance, not just colors</h3>
                <p>This is the decision that elevates the work from a visual refresh to a systems contribution: colors alone don’t prevent misuse. I co-authored usage guidance covering:</p>
                <ul className="cs-types">
                  <li><strong>Chart anatomy</strong> — what each part of a chart is for</li>
                  <li><strong>Chart types &amp; components</strong> — the available chart types, and how to use the chart components themselves</li>
                  <li><strong>Color sequences</strong> — which sequences pair with which chart types</li>
                  <li><strong>Accessible pairings</strong> — color combinations that hold up across vision types</li>
                  <li><strong>Palette selection</strong> — when to reach for categorical vs. sequential vs. divergent vs. rating vs. call-out</li>
                  <li><strong>Content guidelines</strong> — labeling and formatting data within charts</li>
                </ul>
                <p>The guidance lives in both Figma (alongside the palette definitions themselves) and the docsite — so it’s reachable whether a team is working directly in design files or referencing documentation independently.</p>
              </div>
            </li>
            <li>
              <span className="cs-problem-num">3</span>
              <div>
                <h3>Example applications</h3>
                <p>The new system supports the chart types teams actually need day to day — bar charts, donut charts, and line charts — built with the Categorical, Sequential, Divergent, Rating, and Call-out palettes depending on what the data calls for.</p>
                <p>One concrete application: these charts can be used to represent data health metrics, giving teams a consistent, accessible way to visualize system or data-quality signals rather than building one-off visualizations each time.</p>
              </div>
            </li>
          </ul></Section>
        <Section n="05" label="Outcome"><p>The rebuild reduced the token count by <strong>48%</strong> — cutting it from 150 down to 78 — reducing tech maintenance bloat and simplifying the structure of the colors for more intuitive understanding of usage.</p>
          <p>Teams can now build correct, accessible, on-brand charts independently, without routing through a one-off design review for each one — grounded directly in the guidance’s chart anatomy, type selection, and content rules rather than needing to ask the design team each time.</p>
          <p>It’s still early days for this system, so formal adoption metrics aren’t available yet. The clearest outcome so far is structural: the token count was reduced, and every token now has documented guidance behind it — removing the ambiguity that caused the original misuse patterns (data viz tokens in non-chart UI, “closest color” substitutions) in the first place.</p>
          <dl className="cs-stats"><div><dt>48%</dt><dd>Token reduction</dd></div><div><dt>4</dt><dd>Chart guidance docs</dd></div><div><dt>5</dt><dd>Palettes with guidance</dd></div></dl></Section>
        <Section n="06" label="Before / After"><div className="cs-compare"><figure><img src={beforeAsset.url} alt="The previous data visualization palette: eight columns of saturated categorical swatches and sequential ramps on a white slide" /><figcaption>Before</figcaption></figure><figure><img src={afterAsset.url} alt="The rebuilt data visualization palette: six columns of cohesive categorical, sequential, divergent, rating, and call-out swatches on a white slide" /><figcaption>After</figcaption></figure></div></Section>
        <Section n="07" label="Reflection"><p>Looking back at this project, a few things stand out:</p>
          <ul className="cs-list cs-list--stacked">
            <li><strong>Guidance is what actually fixes misuse — not just better colors.</strong> The original problem wasn’t just that the palette looked outdated; it was that nobody had clear direction on which token to use when. Cutting the token count nearly in half (150 → 78) while pairing it with real usage guidance — anatomy, chart types, content rules — addressed the root cause of the misuse patterns, not just the symptom.</li>
            <li><strong>Accessibility has to be a first-class constraint from the start, not a pass at the end.</strong> Building the 3:1 contrast target and Color Oracle testing into the palette-generation process itself (rather than checking compliance after the colors were already chosen) meant accessibility didn’t have to compete with visual distinction after the fact.</li>
            <li><strong>AI-assisted tooling meaningfully sped up a traditionally slow, manual process.</strong> Testing color combinations by hand across 5 palettes and multiple vision-type simulations doesn’t scale well; building custom tools to accelerate that iteration was a direct, practical application of AI to a real design bottleneck — not just a visual design decision but a process one.</li>
            <li><strong>Cross-functional collaboration (Accessibility, Brand, Developer Experience) was necessary, not optional</strong>, given the scope — a 3-month, 2-person core effort covering 5 palettes couldn’t have landed on brand, accessible, and implementable outcomes without input from the teams who owned those respective standards.</li>
          </ul>
          <div className="cs-reflection">
            <div>
              <h3>What’s next</h3>
              <p>User research to study whether the updates actually worked — how well the new palettes and guidance land with teams, and what still needs improvement — plus training sessions to walk teams through how to use the updated system directly, rather relying on the docsite and Figma guidance alone to drive adoption.</p>
            </div>
            <div>
              <h3>What I’d do differently</h3>
              <p>Lean on the AI-assisted testing tools earlier. We built and started using them partway through the process; starting with that tooling in place from the beginning would have let us iterate on color combinations faster from day one, instead of spending the earliest phase on slower manual testing before the tools existed.</p>
            </div>
          </div></Section>
      </div>
      <section className="cs-next"><div className="portfolio-shell cs-shell"><p className="eyebrow">Next case study</p><Link to="/work/autopilot" className="cs-label inline-flex items-center gap-2 mt-3">Autopilot: Designing savings habits that stick <ArrowUpRight size={20} /></Link></div></section>
    </main>
  </>;
}
