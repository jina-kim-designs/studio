import { createFileRoute, Link } from '@tanstack/react-router';
import dataviz from '@/assets/dataviz-editorial-mockup.jpg';
import { useState, type ReactNode } from 'react';
import { ArrowUpRight, ArrowDown, ArrowUp, Plus, X, Mail, Linkedin } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/button';
import studioImage from '@/assets/studio-project.jpg';
import autopilotAsset from '@/assets/autopilot-angled-screen.jpg.asset.json';
const autopilotImage = autopilotAsset.url;
import pocketMentorGridAsset from '@/assets/pocket-mentor-grid.png.asset.json';
const pocketMentorImage = pocketMentorGridAsset.url;
import pocketMentorIconAsset from '@/assets/pocket-mentor-icon.png.asset.json';
import jiraLogoAsset from '@/assets/jira-1.svg.asset.json';
import parityThumbAsset from '@/assets/cross-platform-parity-thumb.png.asset.json';
import automationVisualAsset from '@/assets/group-269-1.png.asset.json';
import highlandBeforeAsset from '@/assets/highland-before-desktop.png.asset.json';
import highlandAfterAsset from '@/assets/highland-our-design-desktop.png.asset.json';
import highlandCurrentAsset from '@/assets/highland-current-desktop.png.asset.json';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Jina Kim — Design Portfolio' },
    { name: 'description', content: 'A collection of thoughtful design: selected case studies, current practice, experience, and explorations.' },
    { property: 'og:title', content: 'Jina Kim — Design Portfolio' },
    { property: 'og:description', content: 'Selected work, design explorations, and the story behind a creative practice.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Portfolio,
});

const projects = [
  { title: 'Building a scalable data visualization palette', subtitle: 'A shared language of color for data across the enterprise.', tags: ['Design systems', 'Strategy', '2026'], image: studioImage, alt: 'Tablet showing the data visualization palette, chart examples, and color swatches on a pale blue and cream surface', description: 'An example brand identity project exploring the relationship between architecture, people, and place.' },
  { title: 'Autopilot: Designing savings habits that stick', subtitle: 'Turning good intentions into automatic progress.', tags: ['Product design', 'UX research', '2022'], image: autopilotImage, alt: 'Angled close-up of a phone showing the Automatic Savings tile and bottom navigation on a pale blue and cream surface', description: 'An example digital product bringing a gentler approach to daily routines, reflection, and personal wellbeing.' },
];
type DialogBlock = { label: string; body: ReactNode; className?: string };
type OtherWorkItem = { title: string; description: string; image: string; category: string; alt?: string; aspect?: string; thumb?: string; thumbInset?: boolean; blur?: boolean; hideImage?: boolean; tags: string[]; dialog: DialogBlock[] };
const otherWork: OtherWorkItem[] = [
  { title: 'AI + design systems automation', description: 'Pioneering AI-assisted workflows that generate components and documentation and safeguard design-to-code parity, preparing the design system for what’s next.', image: automationVisualAsset.url, thumb: jiraLogoAsset.url, thumbInset: true, alt: 'The Jira logo: three interlocking blue gradient chevrons', aspect: '1726 / 1738', blur: true, category: 'Exploration', tags: ['Exploration', 'AI'], dialog: [
    { label: 'The challenge', body: <>
      <p className="resume-copy">Gravity’s parity initiative keeps the Figma and code definitions of each component in sync. It began in Q1 2026 as largely manual work, and as it neared closeout, three recurring problems slowed it down — each found by hand, after the fact:</p>
      <p className="resume-copy"><strong>Parity bugs surfaced after shipping.</strong> A property would be renamed or re-typed on one side without the other being updated, as in Checkbox’s rename of Inactive to Disabled. Teams found these only when they hit the bug and filed a ticket.</p>
      <p className="resume-copy"><strong>Backlog grooming was a manual chore.</strong> Parity and design stories went quiet without being resolved, and finding them meant someone periodically scanning the board.</p>
      <p className="resume-copy"><strong>Epic status required reading every Story.</strong> An Epic with six closed Stories and one awaiting acceptance looks nearly done but can’t close until someone notices and accepts the last one.</p>
      <p className="resume-copy">None of this needed human judgment to detect — it needed consistent classification logic run on a schedule, which made it a good fit for AI-built automation instead of one-off manual review.</p>
    </> },
    { label: 'The constraints', body: <>
      <p className="resume-copy"><strong>Detection, not auto-fix.</strong> Each skill surfaces discrepancies for a human to resolve, with an explicit write boundary: the drift detector never touches Figma or code, the closeout tracker only reports in chat, and the stale tracker writes just a comment and a label — never a status change, which would reset Jira’s updated timestamp and hide a genuinely unlooked-at issue from the next run.</p>
      <p className="resume-copy"><strong>No status-name assumptions.</strong> Workflows differ across projects, so the trackers resolve this instance’s literal statuses, like Canceled and Ready for Acceptance, rather than relying on the “Done” category, and avoid the labels != template JQL shortcut, which silently drops any issue with other labels too.</p>
      <p className="resume-copy"><strong>Real automation, not session-dependent.</strong> A skill that only runs when someone happens to be in a live Claude Code session is a manual task with extra steps, so both Jira skills got a recurring trigger outside any one conversation.</p>
      <p className="resume-copy"><strong>Honest classification over forced matches.</strong> When the drift detector can’t confirm a property on both sides, it reports “needs manual review” instead of guessing — a false “clean match” is worse than an honest “inconclusive.”</p>
    </> },
    { label: 'The process', className: 'dialog-wide', body: <>
      <p className="dialog-sub">Parity Drift Detector</p>
      <p className="resume-copy">Compares a component’s Figma properties against its code model and classifies each pair: clean match, naming drift, polarity inversion, Figma-only, code-only, or default mismatch. Its most valuable catch is polarity inversion — Figma and code expressing the same concept with opposite boolean senses, like Disabled=True vs. is_enabled=False.</p>
      <p className="dialog-sub">Jira Stale Story Tracker</p>
      <p className="resume-copy">Finds stale stories on a board, comments on them, and tags them with a stale label, clearing the label once a story is canceled or ready for acceptance. It started as a Claude Code skill, became a standalone script, and now runs on a recurring schedule.</p>
      <p className="dialog-sub">Epic Closeout Tracker</p>
      <p className="resume-copy">Scans active, Design-scoped Epics and groups them by the status of their child Stories: ready to close, needs formal acceptance, or one story away from done. The groups can overlap, and every Epic links straight to Jira.</p>
      <p className="dialog-sum">Together, these catch problems early — design-code drift, stale work, near-done Epics — and run reliably without manual effort.</p>
    </> },
    { label: 'The outcome', className: 'dialog-wide', body: <>
      <p className="resume-copy"><strong>Two skills are in production.</strong> The stale tracker runs weekly via local cron, and the epic closeout tracker runs on its own schedule. Both report to the manager and the design team without anyone needing a live Claude Code session.</p>
      <p className="resume-copy"><strong>The drift detector is written and validated manually</strong> — three passes across seven real components. It reproduced a known historical bug, generalized the pattern to two more components under different names, surfaced four coverage gaps plus a stale Figma option and a likely piece of dead code, and produced no false-confident matches.</p>
      <p className="resume-copy"><strong>Every skill carries a safety boundary.</strong> The stale tracker has a revert script, the closeout tracker is report-only, and the drift detector detects without fixing — speed and safety didn’t have to trade off.</p>
    </> },
    { label: 'Reflection', className: 'dialog-reflection', body: <>
      <p className="resume-copy">The recurring chores justified the infrastructure. Catching one bug early is useful once, but backlog rot and near-done Epics come up every week — that repeating pattern is what made these worth building as standing tools.</p>
      <p className="resume-copy">“AI wrote a script” is not the same as “it works.” The first stale tracker automation, a GitHub Actions workflow, passed review but failed on every runner because none had VPN access to Jira. Treating that as a constraint rather than a bug led to local cron, Keychain credentials, a log file, and a revert script. Don’t call anything automated until it has survived its real environment.</p>
      <p className="resume-copy">Human judgment mattered where the tool couldn’t know the org’s conventions. The AI wrote correct JQL but didn’t know that labels != template drops multi-labeled issues on this instance, or which status names the team uses to mean “handled.” Those catches came from checking output against known history.</p>
      <p className="resume-copy">Detect-and-report was the right scope. Nothing changes Figma, the DSL, or Jira statuses directly, so every finding passes through a human — slower to ship, but why the output is trusted.</p>
      <div className="dialog-notes"><div className="dialog-note"><span>WHAT'S NEXT</span><p className="resume-copy">Fold the drift detector into the parity program’s regular review cadence, and run it across the full component library against this year’s parity Jira history to estimate what share of filed bugs it would have caught.</p></div>
      <div className="dialog-note"><span>WHAT I'D DO DIFFERENTLY</span><p className="resume-copy">Validate the recurring-automation path (cron) for the drift detector from the start, rather than losing time on the GitHub Actions dead end.</p></div></div>
    </> },
  ] },
  { title: 'Cross-platform parity', description: 'Prioritized and planned cross-platform work to drive design system parity, aligning teams on a clear roadmap.', image: studioImage, thumb: parityThumbAsset.url, alt: 'The Android robot mascot overlapping the Apple logo', hideImage: true, category: 'Collaboration', tags: ['Collaboration'], dialog: [
    { label: 'The challenge', body: <>
      <p className="resume-copy"><strong>iOS and Android had drifted apart.</strong> The Enterprise Design System’s components diverged through earlier independent decisions and framework-specific builds, making designs harder to keep consistent, slowing development, and raising platform costs. Product management commissioned a parity audit, scoped it, ran a 2-day working session, and committed to owning the resulting roadmap.</p>
      <p className="resume-copy"><strong>The roadmap then stalled.</strong> The product lead who drove the audit left, and the other product partner moved to Web, leaving no one on the product side covering native parity. The initiative lost both its owner and its priority against other design-system work: tickets stopped moving, no one was deciding what mattered next, and no one was checking with engineering on what had shipped versus what was still outstanding.</p>
      <p className="resume-copy">The core lesson: the audit itself worked, but the ownership didn’t survive turnover, so the roadmap lost momentum.</p>
    </> },
    { label: 'The process', className: 'dialog-wide', body: <>
      <p className="dialog-sub">Phase 1: The audit (Oct–Nov 2025)</p>
      <p className="resume-copy">Led by Product, and the foundation for everything that followed: a structured, multi-phase audit to find and prioritize mobile discrepancies between iOS and Android.</p>
      <p className="resume-copy"><strong>Kickoff:</strong> the team aligned on why mobile parity mattered, scoped the design and tech pre-work, and folded 61 existing component-enhancement requests into the audit instead of tracking them separately.</p>
      <p className="resume-copy"><strong>Figma groundwork:</strong> non-breaking cleanup standardized naming, layer structure, property values, and variants across both kits — roughly 8 to 9 weeks of design work that needed no code changes to start.</p>
      <p className="resume-copy"><strong>Working session:</strong> a 2-day session walked every major component category against a shared status legend, then closed with a prioritization block that became the Q1 2026 roadmap.</p>
      <p className="resume-copy"><strong>Bigger goal:</strong> a unified Component Schema across platforms — the key to Server-Driven UI and AI-assisted development, with projected cuts of 30 to 45% in cross-platform rework.</p>
      <p className="dialog-sub">Phase 2: Keeping it moving without a PM (Jan 2026–present)</p>
      <p className="resume-copy"><strong>Where I stepped in:</strong> when the audit’s owners left, the roadmap stalled, and I took on the coordination role without a formal mandate.</p>
      <p className="resume-copy"><strong>Syncs and outreach:</strong> recurring syncs with iOS, Android, and Web partners, plus direct 1:1 follow-ups, surfaced what had shipped, what was blocked, and what needed design input.</p>
      <p className="resume-copy"><strong>Status docs:</strong> tracking resolved versus outstanding work kept decisions on current facts instead of the stale November snapshot.</p>
      <p className="resume-copy"><strong>Re-prioritization by demand and effort:</strong> by January, components tagged “Ready for Work” (Dropdown, Switch/Toggle, Verification input) were still waiting while customer pressure had shifted — so I moved Table: Standard Row ahead, as it was drawing a disproportionate number of enhancement requests for more flexibility and content types.</p>
      <p className="dialog-sum">Takeaway: Treating the audit as a starting point instead of a fixed sequence kept the roadmap responsive to what teams were actually blocked on months later.</p>
    </> },
    { label: 'The outcome', className: 'dialog-wide', body: <>
      <p className="resume-copy"><strong>139 parity-related tickets and Epics</strong> touched since January 2026, spanning Design, iOS, Android, and Web work (QA reviews, docsite updates, Figma kit updates, and cross-platform parity fixes).</p>
      <p className="resume-copy"><strong>62 closed in 2026</strong> — with the broader set of resolved-or-near-done work (closed, canceled as no-longer-relevant, or sitting in Ready for Acceptance) reaching 76 of those 139.</p>
      <p className="resume-copy"><strong>Customer feedback citing easier use and less confusion between design and tech</strong> — a direct signal that closing the parity gaps reduced the friction consuming teams were running into between what Figma specified and what shipped in code.</p>
    </> },
    { label: 'Reflection', className: 'dialog-reflection', body: <>
      <p className="resume-copy">Taking this on didn’t feel like a deliberate career bet — it felt obligatory. The audit had just produced a real, prioritized roadmap with momentum behind it; letting that stall for lack of a PM would have wasted the two-day working session and the months of pre-work behind it. Someone needed to keep it moving, and nobody else was going to.</p>
      <p className="resume-copy">If I backfilled a PM gap like this again, I’d do two things, not one. First, I’d push to be embedded in the audit’s original “Roadmap Creation” governance step from the start — a handoff plan baked into the process beats an informal pickup three months later. Second, I’d escalate the gap explicitly and early rather than quietly absorbing the coordination work myself — so leadership sees what’s actually unowned, and the next person isn’t starting from the same blind improvisation I did.</p>
      <p className="resume-copy">This manual coordination is also the direct throughline to the AI skills I later built — the Jira Stale Story Tracker and the GRV Epic Closeout Tracker exist specifically because status-chasing and backlog-scanning shouldn’t depend on me remembering to do it by hand, every week, forever.</p>
    </> },
  ] },
  { title: 'Pocket Mentor', description: 'Building an agentic AI financial companion to bridge digital engagement and physical banking through transparent, trust-driven micro-lessons.', image: pocketMentorImage, thumb: pocketMentorIconAsset.url, alt: 'Ten Pocket Mentor screens in the Capital One app, from onboarding and goal setting to chat guidance and booking a Café appointment', aspect: '1920 / 1632', blur: true, category: 'Hackathon', tags: ['Hackathon', 'AI'], dialog: [
    { label: 'The challenge', body: <>
      <p className="resume-copy">Agentic AI raises a harder question than chatbots do. Once an AI can act on a user’s behalf, the product has to decide not only whether it’s helpful but how much it should be allowed to do without approval first.</p>
      <p className="resume-copy">That matters most in finance. An AI that quietly reads transactions, one that sends alerts, and one that takes action each ask for a different level of trust, even when the user approves every step. The concept came from two sources: the hackathon’s agentic AI theme, and an internal question the team kept returning to, “what if Eno could do more?” Capital One’s assistant was the reference point for a more proactive financial companion that earns the right to go beyond answering questions.</p>
      <p className="resume-copy">To feel trustworthy rather than presumptuous, three things had to be true:</p>
      <p className="resume-copy"><strong>User-controlled autonomy.</strong> A real spectrum of agency, not a single AI on/off switch.</p>
      <p className="resume-copy"><strong>Visible reasoning.</strong> Every proactive suggestion explains why, since “trust me” doesn’t scale for financial advice.</p>
      <p className="resume-copy"><strong>A defined stopping point.</strong> The AI hands off to a human instead of completing the loop itself.</p>
    </> },
    { label: 'The constraints', body: <>
      <p className="resume-copy"><strong>Autonomy had to be a user choice, not a product default.</strong> This was a self-imposed design principle, not something the hackathon required — a deliberate bet that trust has to be something the user grants, not something the product assumes it already has.</p>
      <p className="resume-copy"><strong>Explainability couldn’t be decorative.</strong> A one-line “based on your activity” justification wasn’t enough for financial suggestions — the reasoning needed to be inspectable, not just asserted.</p>
      <p className="resume-copy"><strong>Hackathon time pressure.</strong> Like any hackathon build, the team was working against a fixed, compressed window — the prototype had to demonstrate the full arc end-to-end rather than polish any single screen.</p>
    </> },
    { label: 'The process', className: 'dialog-wide', body: <>
      <p className="resume-copy">Pocket Mentor builds trust through three deliberate design choices.</p>
      <p className="dialog-sub">The autonomy dial</p>
      <p className="resume-copy">Instead of a single AI on/off switch, onboarding has the user pick one of three autonomy levels before the mentor does anything:</p>
      <p className="resume-copy"><strong>Basic information:</strong> generic financial literacy content, no account access.</p>
      <p className="resume-copy"><strong>Read only:</strong> the mentor can view transactions and nothing else.</p>
      <p className="resume-copy"><strong>Suggest and alert:</strong> the mentor can view transactions, send alerts, generate personalized insights, and work with the user on actions, with approval at each step.</p>
      <p className="resume-copy">The choice happens inside the onboarding quiz, so personalization and consent are set at the same moment. The team treated “when does the user decide how much to trust this” as a first-order design question from the start.</p>
      <p className="dialog-sub">Explainability as an interaction</p>
      <p className="resume-copy">Every proactive nudge, like a grocery-budget win, a minimum-payment warning, or a car-savings milestone, comes with a “Why I suggested this” card. It expands into the real data behind the suggestion, such as actual dining spend against budget. The minimum-payment moment compares the interest cost of minimum payments with paying the full balance, then ties the difference back to the user’s car-savings timeline. This was a response to the vague “based on your activity” explanations common in other financial AI tools, and it lets a skeptical user check the reasoning themselves.</p>
      <p className="dialog-sub">A human handoff</p>
      <p className="resume-copy">The agent never closes a loan or finalizes a financial decision. When a user nears a savings goal and may pre-qualify for something like an auto loan, the mentor prepares a “Money Plan Report” (savings history, budget adherence, credit readiness estimate, goal progress) and books the user with a human mentor at a physical Café. The team drew this line from conviction that AI shouldn’t make real financial decisions unsupervised, not because of hackathon time pressure.</p>
    </> },
    { label: 'My contribution', body: <p className="resume-copy">Led the design and strategy for a conceptual prototype that helps people grow their financial literacy, and shaped the experience to build trust in AI.</p> },
    { label: 'The outcome', body: <>
      <p className="resume-copy"><strong>Rapid concept delivery:</strong> Successfully delivered a cohesive, 0-to-1 conceptual product within a rigorous 2-day timeframe, emphasizing trustworthy human-AI interaction.</p>
      <p className="resume-copy"><strong>Strategic roadmap contribution:</strong> Provided product leadership with a viable blueprint for unifying digital app experiences with in-person advisory services at Capital One Cafés.</p>
    </> },
    { label: 'Reflection', className: 'dialog-reflection', body: <>
      <p className="resume-copy">Pocket Mentor pushed me to design for trust first: making the AI’s intent visible, and the handoff to a human mentor feel like a natural next step rather than a fallback.</p>
      <p className="dialog-sub">What stood out</p>
      <p className="resume-copy"><strong>The autonomy dial was the real design problem.</strong> The chat interface was the easy part. Giving users explicit control over how much agency the AI gets is what turned the project from a feature demo into a point of view: trust has to be built into the interaction from the first screen, not added later.</p>
      <p className="resume-copy"><strong>Explainability had to carry weight.</strong> Showing the actual data behind each suggestion, instead of a vague “based on your activity” line, was the difference between an AI that asks to be trusted and one that earns it.</p>
      <p className="resume-copy"><strong>The stopping point was as deliberate as the capabilities.</strong> The agent never completes a financial decision itself. It hands a prepared context package to a human.</p>
      <p className="resume-copy"><strong>Restraint was the surprise.</strong> Designing what the AI could not do without a human in the loop meant being far more explicit than usual about its behavior at every step, and anticipating a skeptical user’s reaction before any real user saw the prototype.</p>
      <p className="dialog-sub">What I’d validate with real users</p>
      <p className="resume-copy">Whether people understand the three autonomy levels as distinct choices instead of picking one arbitrarily.</p>
      <p className="resume-copy">Whether the human handoff reads as reassurance (“I’m being set up for a real conversation”) rather than the AI abandoning them at a serious moment.</p>
      <p className="resume-copy">Both assumptions are central to the concept, and neither was tested beyond the team’s own judgment.</p>
      <p className="resume-copy"><strong>Status:</strong> Pocket Mentor ended as a hackathon concept, with no active plan to continue it.</p>
      <p className="dialog-sub">What I’d do differently</p>
      <p className="resume-copy">Reconsider whether three fixed autonomy tiers are the right grain, or whether a more granular model would give users better control.</p>
      <p className="resume-copy">Build a tighter process for specifying and reviewing AI-generated suggestions, so edge cases surface earlier instead of during the build.</p>
    </> },
  ] },
];
type ArchiveEntry = { title: string; category: string; year: string; lead?: string; meta?: string; compare?: { before?: string; after?: string; current?: string; beforeAlt?: string; afterAlt?: string; currentAlt?: string }; blocks: { label: string; body: ReactNode }[] };
const archive: ArchiveEntry[] = [
  { title: 'Highland Township Public Library', category: 'Project lead', year: '2023', lead: 'Redesigning a community library’s website so patrons of every age can find what they need.', meta: 'Role: Lead Product Designer & Project Manager | Timeline: ~5 months, 2023', compare: { before: highlandBeforeAsset.url, after: highlandAfterAsset.url, current: highlandCurrentAsset.url, beforeAlt: 'Before: the library home page with sidebar navigation and a seed library announcement, inside the supplied desktop frame', afterAlt: 'Our design: catalog search, a library photograph, and featured events, inside the supplied desktop frame', currentAlt: 'Current update: the library home page with a building photograph, catalog search, quick links, and audience sections, inside the supplied desktop frame' }, blocks: [
    { label: 'The problem', body: <p className="body-copy">The library’s website put everything on one crowded home page, with unclear navigation and ambiguous icons. Patrons ranging from digital natives to seniors struggled to do the two things they came for: search the catalog and register for events.</p> },
    { label: 'The approach', body: <p className="body-copy">I co-designed the redesign with library leadership, so the digital experience would reflect how the physical library actually runs. To understand how patrons think, I ran both open and closed card sorting, then used the results to restructure the site around their mental models. The data showed that catalog search and event registration were the most important pathways, and also the hardest to use, so I prioritized them.</p> },
    { label: 'The key decision', body: <p className="body-copy">I chose universal accessibility over trendy UI. That meant explicit text labels instead of ambiguous icons, strict high-contrast visual hierarchies, and a clear structure by audience (kids, teens, adults, parents), so the site works for the broadest range of patrons.</p> },
    { label: 'The outcome', body: <ul className="archive-bullets"><li>20% increase in online traffic after launch</li><li>Library staff and patrons reported the site was easier to navigate, citing better content organization, elevated key links, and more white space</li></ul> },
    { label: 'What I learned', body: <p className="body-copy">Involving library leadership as co-designers surfaced operational realities that research alone wouldn’t. Functional clarity has to come before aesthetic trends. And qualitative sorting data is one of the most reliable ways to map how people actually think.</p> },
  ] },
];

function ArchiveRow({ entry }: { entry: ArchiveEntry }) {
  const cmp = entry.compare;
  const shots: [string, string | undefined, string][] = cmp ? [['Before', cmp.before, cmp.beforeAlt ?? 'The library website before the redesign'], ['Our design', cmp.after, cmp.afterAlt ?? 'Our library website design'], ['Current update', cmp.current, cmp.currentAlt ?? 'The current library website']] : [];
  return <div className="archive-row"><details><summary><span>{entry.title}</span><span className="archive-meta"><span className="archive-category">{entry.category}</span><span>{entry.year}</span><Plus size={15} /></span></summary><div className="archive-body">{entry.lead && <p className="archive-lead">{entry.lead}</p>}{entry.meta && <p className="archive-meta-line">{entry.meta}</p>}{cmp && <div className="archive-compare">{shots.filter(([, src]) => src).map(([cap, src, alt]) => <figure key={cap}><img src={src} alt={alt} width={583} height={360} loading="lazy" /><figcaption><span>{cap}</span></figcaption></figure>)}</div>}{entry.blocks.map(block => <div key={block.label || entry.title}>{block.label && <h4 className="archive-sub">{block.label}</h4>}{block.body}</div>)}</div></details></div>;
}

function SectionHeading({ number, title, aside }: { number: string; title: string; aside?: ReactNode }) {
  return <div className="section-heading"><h2 className="section-title"><span className="section-number">{number}</span>{title}</h2>{aside && <div className="section-aside">{aside}</div>}</div>;
}

function Portfolio() {
  const [selected, setSelected] = useState<OtherWorkItem | null>(null);
  const [talk, setTalk] = useState(false);
  return <>
    <header className="portfolio-shell site-header" id="top">
      <a className="wordmark" href="#top" aria-label="Jina, back to top">Jina<span className="text-honey">.</span></a>
      <nav className="site-nav" aria-label="Portfolio navigation">
        <a href="#work">Work</a><a href="#today" className="desktop-link">Today</a><a href="#experience">Resume</a><button type="button" className="flex items-center gap-1" onClick={() => setTalk(true)}>Let’s talk <ArrowUpRight size={13} /></button>
      </nav>
    </header>
    <main>
      <section className="hero-band" aria-label="Introduction">
        <div className="portfolio-shell hero-inner">
          <p className="eyebrow">DESIGNER. THINKER. PLANNER. ALWAYS CURIOUS.</p>
          <h1 className="hero-title">Hello, I’m<br /><em>Jina.</em></h1>
          <svg className="hero-mark" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><path d="M100 50 Q56.47 47.32 64.14 35.86 Q52.68 42.53 50 0 Q47.32 42.53 35.86 35.86 Q43.53 47.32 0 50 Q43.53 52.68 35.86 64.14 Q47.32 57.47 50 100 Q52.68 57.47 64.14 64.14 Q56.47 52.68 100 50 Z" fill="currentColor" /></svg>
          <p className="hero-intro">I turn complex questions into thoughtful, human experiences. Part product designer, part product strategist, I work where strategy, storytelling, and design meet, managing workflows and making the prioritization calls that turn good ideas into shipped work.</p>
          <div className="hero-bottom"><span className="availability">Based in Washington, D.C. · Open to good conversations</span><a href="#work" className="inline-flex items-center gap-2">A few things I’ve made <ArrowDown size={14} /></a></div>
        </div>
      </section>
      <section className="portfolio-shell portfolio-section" id="work">
        <SectionHeading number="01" title="Selected case studies" aside="A closer look at the process & the outcome" />
        <article className="featured-study">
          <div className="featured-copy">
            <p className="eyebrow featured-eyebrow"><span className="featured-dot" />Featured · Enterprise design system</p>
            <h3 className="featured-title">{projects[0]!.title}</h3>
            <p className="featured-text">{projects[0]!.subtitle} I co-led a unified, accessible color palette so every chart across the enterprise speaks the same visual language.</p>
            <dl className="featured-stats">
              <div><dt>5</dt><dd>MAIN PALETTES</dd></div>
              <div><dt>AA</dt><dd>contrast tested</dd></div>
              <div><dt>48%</dt><dd>TOKEN MANAGEMENT REDUCTION</dd></div>
            </dl>
            <Link to="/work/data-visualization-palette" className="featured-link">Read the case study <ArrowUpRight size={15} /></Link>
          </div>
          <Link to="/work/data-visualization-palette" className="featured-visual" aria-label="Read the data visualization palette case study">
            <img src={dataviz} alt="Tablet showing the data visualization palette, chart examples, and color swatches on a pale blue and cream surface" loading="lazy" />
          </Link>
        </article>
        <article className="featured-study flip">
          <div className="featured-copy">
            <p className="eyebrow featured-eyebrow"><span className="featured-dot" />Featured · Automated savings<span className="featured-tag">Shipped to Production</span></p>
            <h3 className="featured-title">{projects[1]!.title}</h3>
            <p className="featured-text">{projects[1]!.subtitle} I drove the research and design behind Autopilot, Capital One’s automated savings tool, taking it from customer insight to launch.</p>
            <dl className="featured-stats">
              <div><dt>2022</dt><dd>insight to launch</dd></div>
              <div><dt>0→1</dt><dd>new savings tool</dd></div>
              <div><dt>UX</dt><dd>research & design</dd></div>
            </dl>
            <Link to="/work/autopilot" className="featured-link">Read the case study <ArrowUpRight size={15} /></Link>
          </div>
          <Link to="/work/autopilot" className="featured-visual" aria-label="Read the Autopilot case study">
            <img src={projects[1]!.image} alt={projects[1]!.alt} width={1536} height={1024} loading="lazy" />
          </Link>
        </article>
      </section>
      <section className="portfolio-shell portfolio-section" id="other-work">
        <SectionHeading number="02" title="A few other things" aside="Experiments, collaborations & side quests" />
        {otherWork.map(work => <article className="work-row" key={work.title}><img src={work.thumb ?? work.image} className={work.thumbInset ? 'work-thumb work-thumb--inset' : 'work-thumb'} alt={work.alt ?? `${work.title} sample project`} width={56} height={56} loading="lazy" /><div><h3 className="project-title">{work.title}</h3><p className="project-description">{work.description}</p></div><span className="work-type">{work.category}</span><Button variant="ghost" size="icon" title={`View ${work.title}`} aria-label={`View ${work.title}`} onClick={() => setSelected(work)}><ArrowUpRight /></Button></article>)}
      </section>
      <section className="current-band" id="today"><div className="portfolio-shell portfolio-section current-section">
        <SectionHeading number="03" title="What I’m doing today" aside="The here & now" />
        <div className="current-grid"><h3 className="current-headline">Creating with intention.<br />Learning along the way.</h3><div><p className="body-copy">Currently a designer at Capital One, working with the Enterprise Design Systems team to make meaningful, consistent, and reusable experiences. I'm interested in the small details that make a big difference.</p><p className="body-copy mt-5">Outside of work, you’ll find me exploring new ideas, collecting inspiration, and making things just for the joy of it.</p><p className="eyebrow mt-7">CURRENTLY EXPLORING: WAX STAMP SEAL ART AND WATERCOLORS</p></div></div>
      </div></section>
      <section className="portfolio-shell portfolio-section" id="experience">
        <SectionHeading number="04" title="The journey so far" aside="Experience & a little context" />
        {[{ date: '2024 — Present', role: 'Product designer: Design systems', company: 'Capital One', copy: 'Systems-level product role leading the Enterprise Design System’s initiatives: supporting adoption through keeping every platform consistent, matching design and code, getting the system into more products, and guiding visual design.' }, { date: '2023 — 2024', role: 'Product designer: Internal developer tools ', company: 'Capital One', copy: 'Supported development of internal developer tools, including a documentation library, cloud usage optimization and tracking, and data health. In addition,. researched AI tool integration (e.g., GitHub Copilot) and authored guidance to help teams adopt it effectively.' }, { date: '2022', role: 'Product design intern: Financial well-being', company: 'Capital One', copy: 'Drove the research and design behind Autopilot, Capital One’s automated savings tool, taking it from customer insight to launch. Explore Autopilot (need to add link to case study later)' }].map(job => <article key={job.date} className="resume-row"><div className="resume-date">{job.date}</div><div><h3 className="resume-role">{job.role}</h3><p className="resume-company">{job.company}</p><p className="resume-copy">{job.copy}</p></div></article>)}
      </section>
      <section className="archive-band" id="archive"><div className="portfolio-shell portfolio-section archive-section">
        <SectionHeading number="05" title="From the archives" aside="Older work, still part of the story" />
        {archive.map(entry => <ArchiveRow entry={entry} key={entry.title} />)}
      </div></section>
      <section className="portfolio-shell portfolio-section" id="education">
        <SectionHeading number="06" title="Foundations & favourites" aside="Education & the tools of the trade" />
        <div className="education-grid"><div><h3 className="subheading">Education</h3><h4 className="resume-role">B.S. Information</h4><p className="resume-company">University of Michigan - Ann Arbor · 2019 — 2023</p><p className="resume-copy">Concentration: UX design</p></div><div><h3 className="subheading">TOOLS I WORK WITH </h3><div className="tool-list">{['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'A sketchbook & a pencil', 'Claude Code', 'ChatGPT', 'Gemini', 'Lovable', 'Jira', 'Confluence', 'Google Suite'].map(tool => <span key={tool}>{tool}</span>)}</div></div></div>
      </section>
    </main>
    <footer className="portfolio-shell" id="contact"><div className="site-footer"><h2 className="footer-title">Good things start with a conversation.</h2><div className="footer-links"><a className="footer-btn footer-btn--solid" href="mailto:jiki5462@gmail.com"><Mail size={14} /> jiki5462@gmail.com</a><a className="footer-btn" href="https://www.linkedin.com/in/jinakim5462/" target="_blank" rel="noopener noreferrer"><Linkedin size={14} /> linkedin.com/in/jinakim5462 <ArrowUpRight size={13} /></a></div><div className="footer-bottom"><span>© 2026 Jina</span><a href="#top" className="inline-flex items-center gap-2">Back to top <ArrowUp size={12} /></a></div></div></footer>
    <Dialog.Root open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}>
        <Dialog.Portal><Dialog.Overlay className="dialog-overlay" /><Dialog.Content className="dialog-content">{selected && <><div className="dialog-top"><div><p className="eyebrow mb-2">OTHER WORK</p><Dialog.Title className="dialog-title">{selected.title}</Dialog.Title></div><Dialog.Close asChild><Button variant="ghost" size="icon" aria-label="Close case study"><X /></Button></Dialog.Close></div><Dialog.Description className="project-description">{selected.description}</Dialog.Description>{!selected.hideImage && <figure className={selected.blur ? 'dialog-media dialog-media--private' : 'dialog-media'}><div className={selected.blur ? 'dialog-frame dialog-frame--private' : 'dialog-frame'}><img src={selected.image} alt={`${selected.title} sample project detail`} className={selected.blur ? 'dialog-image dialog-image--private' : 'dialog-image'} style={{ aspectRatio: selected.aspect ?? '2 / 1' }} width={1536} height={1024} /></div>{selected.blur && <figcaption className="dialog-conf">Screens blurred for confidentiality</figcaption>}</figure>}<div className="project-tags mb-7">{selected.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{selected.dialog.length > 0 && <div className="dialog-grid">{selected.dialog.map(block => <div className={block.className} key={block.label}><h3 className="resume-role">{block.label}</h3>{block.body}</div>)}</div>}</>}</Dialog.Content></Dialog.Portal>
    </Dialog.Root>
    <Dialog.Root open={talk} onOpenChange={setTalk}>
        <Dialog.Portal><Dialog.Overlay className="dialog-overlay" /><Dialog.Content className="dialog-content dialog-talk"><div className="dialog-top"><div><p className="eyebrow mb-2">GET IN TOUCH</p><Dialog.Title className="dialog-title">Let’s talk</Dialog.Title></div><Dialog.Close asChild><Button variant="ghost" size="icon" aria-label="Close contact options"><X /></Button></Dialog.Close></div><Dialog.Description className="project-description">Email is the quickest way to reach me — or connect on LinkedIn.</Dialog.Description><div className="talk-options"><a className="footer-btn footer-btn--solid" href="mailto:jiki5462@gmail.com" onClick={() => setTalk(false)}><Mail size={14} /> jiki5462@gmail.com</a><a className="footer-btn" href="https://www.linkedin.com/in/jinakim5462/" target="_blank" rel="noopener noreferrer" onClick={() => setTalk(false)}><Linkedin size={14} /> linkedin.com/in/jinakim5462 <ArrowUpRight size={13} /></a></div></Dialog.Content></Dialog.Portal>
    </Dialog.Root>
  </>;
}
