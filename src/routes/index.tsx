import { createFileRoute, Link } from '@tanstack/react-router';
import dataviz from '@/assets/dataviz-editorial-mockup.jpg';
import { useState, type ReactNode } from 'react';
import { ArrowUpRight, ArrowDown, ArrowUp, Plus, X } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/button';
import studioImage from '@/assets/studio-project.jpg';
import autopilotAsset from '@/assets/autopilot-angled-screen.jpg.asset.json';
const autopilotImage = autopilotAsset.url;
import pocketMentorGridAsset from '@/assets/pocket-mentor-grid.png.asset.json';
const pocketMentorImage = pocketMentorGridAsset.url;
import pocketMentorIconAsset from '@/assets/pocket-mentor-icon.png.asset.json';
import jiraLogoAsset from '@/assets/jira-1.svg.asset.json';

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
type OtherWorkItem = { title: string; description: string; image: string; category: string; alt?: string; aspect?: string; thumb?: string; thumbInset?: boolean; blur?: boolean; tags: string[]; dialog: DialogBlock[] };
const otherWork: OtherWorkItem[] = [
  { title: 'AI + design systems automation', description: 'Pioneering AI-assisted workflows that generate components and documentation and safeguard design-to-code parity, preparing the design system for what’s next.', image: studioImage, thumb: jiraLogoAsset.url, thumbInset: true, alt: 'The Jira logo: three interlocking blue gradient chevrons', category: 'Exploration', tags: ['Exploration', 'AI'], dialog: [
    { label: 'The challenge', body: <>
      <p className="resume-copy">Gravity’s parity initiative, which keeps the Figma and code definitions of each component in sync, began in Q1 2026 as largely manual work. As it neared closeout, three recurring problems slowed it down, each found by hand and after the fact:</p>
      <p className="resume-copy">Parity bugs surfaced after shipping. A property would be renamed or re-typed on one side (Figma or code) without the other being updated, as in Checkbox’s rename of Inactive to Disabled. Teams only found these when they hit the bug and filed a ticket, since no review step caught the mismatch earlier.</p>
      <p className="resume-copy">Backlog grooming was a manual chore. Parity and design stories tended to go quiet without being resolved, and finding them meant someone periodically scanning the board.</p>
      <p className="resume-copy">Epic status required reading every Story. An Epic with six closed Stories and one awaiting acceptance looks nearly done but can’t close until someone notices and accepts the last one.</p>
      <p className="resume-copy">None of these needed human judgment to detect. They needed consistent classification logic run on a schedule, which made them a good fit for AI-built automation instead of one-off manual review.</p>
    </> },
    { label: 'The constraints', body: <>
      <p className="resume-copy">Detection, not auto-fix. Each skill surfaces discrepancies for a human to resolve and has an explicit write boundary. The drift detector never touches Figma or code, and the epic closeout tracker only reports in chat. The stale tracker writes only a comment and a label, never a status change, because a status transition resets Jira’s updated timestamp and would hide a genuinely unlooked-at issue from the next scheduled run.</p>
      <p className="resume-copy">No status-name assumptions. Jira workflows differ across projects, so both trackers had to resolve the literal statuses this instance uses, like Canceled and Ready for Acceptance, rather than relying on the “Done” category. They also avoided the labels != template JQL shortcut, which silently drops any issue with other labels too. A real false exclusion confirmed this before shipping.</p>
      <p className="resume-copy">Real automation, not session-dependent. A skill that only runs when someone happens to be in a live Claude Code session is a manual task with extra steps, so both Jira skills got a recurring trigger outside any one conversation.</p>
      <p className="resume-copy">Honest classification over forced matches. When the drift detector can’t confirm a property on both sides, it reports “needs manual review” instead of guessing, since a false “clean match” is worse than an honest “inconclusive.”</p>
    </> },
    { label: 'The process', className: 'dialog-wide', body: <>
      <p className="dialog-sub">Parity Drift Detector</p>
      <p className="resume-copy">Compares a component’s Figma properties against its code model and classifies each pair: clean match, naming drift, polarity inversion, Figma-only, code-only, or default mismatch.</p>
      <p className="resume-copy">Its most valuable catch is polarity inversion, where Figma and code express the same concept with opposite boolean senses (e.g., Disabled=True vs. is_enabled=False).</p>
      <p className="resume-copy">Validated across seven components in three passes. It reproduced a known Checkbox bug, found the same pattern twice more under different names, surfaced four new coverage gaps, flagged one stale Figma option and one likely piece of dead code, and produced no false-confident matches.</p>
      <p className="dialog-sub">Jira Stale Story Tracker</p>
      <p className="resume-copy">Finds stale stories on a board, comments on them, and tags them with a stale label. It also clears the label once stories are canceled or ready for acceptance.</p>
      <p className="resume-copy">Started as a Claude Code skill and became a standalone script.</p>
      <p className="resume-copy">A scheduled GitHub Actions run failed because the Jira instance requires VPN, so it moved to local cron with credentials in macOS Keychain. A companion revert script can undo a bad run, since Jira has no bulk undo.</p>
      <p className="dialog-sub">Epic Closeout Tracker</p>
      <p className="resume-copy">Scans active, Design-scoped Epics and groups them by the status of their child Stories: ready to close, needs formal acceptance, or one story away from done.</p>
      <p className="resume-copy">The groups can overlap, and every Epic links straight to Jira.</p>
      <p className="resume-copy">Caught a JQL bug before shipping: labels != template silently drops any multi-labeled issue, which would have hidden a real Epic.</p>
      <p className="dialog-sum">Together, these show a pattern of catching problems early (design-code drift, stale work, near-done Epics) and building the tools to run reliably without manual effort.</p>
    </> },
    { label: 'The outcome', className: 'dialog-wide', body: <>
      <p className="resume-copy">Two skills are in production. The stale tracker runs weekly via local cron and the epic closeout tracker runs on its own schedule. Both deliver reports to your manager and the design team without anyone needing a live Claude Code session.</p>
      <p className="resume-copy">The parity drift detector is written but validated manually. It has been through three test passes on seven real components. It reproduced a known historical bug category, generalized that pattern to two more components under different names, and found four new coverage gaps, with no false-confident matches.</p>
      <p className="resume-copy">Each skill has a built-in safety boundary. The stale tracker has a revert script, the closeout tracker is report-only, and the drift detector detects without fixing. The point is that speed and safety don’t have to trade off.</p>
    </> },
    { label: 'Reflection', className: 'dialog-reflection', body: <>
      <p className="resume-copy">The recurring chores justified the infrastructure. Catching one bug early is useful once, but backlog rot and near-done Epics come up every week. That repeating pattern is what made the stale tracker and epic closeout tracker worth building as standing tools.</p>
      <p className="resume-copy">“AI wrote a script” is not the same as “it works.” The first stale tracker automation, a GitHub Actions workflow, passed review but failed on every runner because none had VPN access to Jira. Treating that as a constraint rather than a bug led to local cron, Keychain credentials, a log file, and a revert script. The lesson: don’t call anything automated until it has survived its real environment.</p>
      <p className="resume-copy">Human judgment mattered most where the tool couldn’t know the org’s conventions. The AI wrote correct JQL but didn’t know that labels != template drops multi-labeled issues on this Jira instance, or which status names the team actually uses to mean “handled.” Those catches came from checking output against known history. The tool’s edge was consistency, such as spotting the same polarity inversion a third time under the name Inactive.</p>
      <p className="resume-copy">Detect-and-report was the right scope. None of the tools change Figma, the DSL, or Jira statuses directly, so every finding passes through a human. That was slower to ship but is why the output is trusted.</p>
      <div className="dialog-notes"><div className="dialog-note"><span>WHAT'S NEXT</span><p className="resume-copy">Fold the drift detector into the parity program’s regular review cadence, and run it across the full component library against this year’s parity Jira history to estimate what share of filed bugs it would have caught.</p></div>
      <div className="dialog-note"><span>WHAT I'D DO DIFFERENTLY</span><p className="resume-copy">Validate the recurring-automation path (cron) for the drift detector from the start, rather than losing time on the GitHub Actions dead end.</p></div></div>
    </> },
  ] },
  { title: 'Pocket Mentor', description: 'Building an agentic AI financial companion to bridge digital engagement and physical banking through transparent, trust-driven micro-lessons.', image: pocketMentorImage, thumb: pocketMentorIconAsset.url, alt: 'Ten Pocket Mentor screens in the Capital One app, from onboarding and goal setting to chat guidance and booking a Café appointment', aspect: '1920 / 1632', blur: true, category: 'Hackathon', tags: ['Hackathon', 'AI'], dialog: [
    { label: 'The challenge', body: <p className="resume-copy">{'Customers often struggle to translate raw financial transaction data into actionable financial literacy.   \nFurthermore, there was a strategic gap between isolated digital banking tools and the in-person financial advisory services offered at retail banking locations.'}</p> },
    { label: 'The approach', body: <p className="resume-copy">{'To treat artificial intelligence as an empowering financial companion rather than a passive tool. The strategy focused on creating an agentic AI that utilizes real-time transaction data to deliver proactive, personalized micro-lessons.    \nA core strategic pillar was structural transparency—building user trust through an interactive "Autonomy Dial" and establishing seamless handoffs from digital AI assistance to human mentors.'}</p> },
    { label: 'My contribution', body: <p className="resume-copy">Led the design and strategy for a conceptual prototype that helps people grow their financial literacy, and shaped the experience to build trust in AI.</p> },
    { label: 'The outcome', body: <p className="resume-copy">{'Rapid Concept Delivery: Successfully delivered a cohesive, 0-to-1 conceptual product within a rigorous 2-day timeframe, emphasizing trustworthy human-AI interaction.       \nStrategic Roadmap Contribution: Provided product leadership with a viable blueprint for unifying digital app experiences with in-person advisory services at Capital One Cafés.'}</p> },
    { label: 'Reflection', className: 'dialog-reflection', body: <p className="resume-copy">Pocket Mentor pushed me to design for trust first: making the AI’s intent visible, and the handoff to a human mentor feel like a natural next step rather than a fallback.</p> },
  ] },
  { title: 'Cross-platform parity', description: 'Prioritized and planned cross-platform work to drive design system parity, aligning teams on a clear roadmap.', image: studioImage, category: 'Collaboration', tags: ['Collaboration'], dialog: [] },
];

function SectionHeading({ number, title, aside }: { number: string; title: string; aside?: ReactNode }) {
  return <div className="section-heading"><h2 className="section-title"><span className="section-number">{number}</span>{title}</h2>{aside && <div className="section-aside">{aside}</div>}</div>;
}

function Portfolio() {
  const [selected, setSelected] = useState<OtherWorkItem | null>(null);
  return <>
    <header className="portfolio-shell site-header" id="top">
      <a className="wordmark" href="#top" aria-label="Jina, back to top">Jina<span className="text-honey">.</span></a>
      <nav className="site-nav" aria-label="Portfolio navigation">
        <a href="#work">Work</a><a href="#today" className="desktop-link">Today</a><a href="#experience">Resume</a><a href="#contact" className="flex items-center gap-1">Let’s talk <ArrowUpRight size={13} /></a>
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
        { [['Cocoon Technologies', 'Visual identity', '2023'], ['OptiCloud', 'Editorial design', '2022'], ['Highland Township Public Library', 'Digital design', '2021']].map(([title, category, year]) => <div className="archive-row" key={title}><details><summary><span>{title}</span><span className="archive-meta"><span className="archive-category">{category}</span><span>{year}</span><Plus size={15} /></span></summary><p className="body-copy">Sample archived project. A brief reflection on the original idea, your approach, and what you learned along the way.</p></details></div>)}
      </div></section>
      <section className="portfolio-shell portfolio-section" id="education">
        <SectionHeading number="06" title="Foundations & favourites" aside="Education & the tools of the trade" />
        <div className="education-grid"><div><h3 className="subheading">Education</h3><h4 className="resume-role">B.S. Information</h4><p className="resume-company">University of Michigan - Ann Arbor · 2019 — 2023</p><p className="resume-copy">Concentration: UX design</p></div><div><h3 className="subheading">TOOLS I WORK WITH </h3><div className="tool-list">{['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'A sketchbook & a pencil', 'Claude Code', 'ChatGPT', 'Gemini', 'Lovable', 'Jira', 'Confluence', 'Google Suite'].map(tool => <span key={tool}>{tool}</span>)}</div></div></div>
      </section>
    </main>
    <footer className="portfolio-shell" id="contact"><div className="site-footer"><h2 className="footer-title">Good things start with a conversation.</h2><p className="footer-note">Your email address & social links will go here.</p><div className="footer-bottom"><span>© 2026 Jina</span><a href="#top" className="inline-flex items-center gap-2">Back to top <ArrowUp size={12} /></a></div></div></footer>
    <Dialog.Root open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}>
        <Dialog.Portal><Dialog.Overlay className="dialog-overlay" /><Dialog.Content className="dialog-content">{selected && <><div className="dialog-top"><div><p className="eyebrow mb-2">OTHER WORK</p><Dialog.Title className="dialog-title">{selected.title}</Dialog.Title></div><Dialog.Close asChild><Button variant="ghost" size="icon" aria-label="Close case study"><X /></Button></Dialog.Close></div><Dialog.Description className="project-description">{selected.description}</Dialog.Description><figure className={selected.blur ? 'dialog-media dialog-media--private' : 'dialog-media'}><div className={selected.blur ? 'dialog-frame dialog-frame--private' : 'dialog-frame'}><img src={selected.image} alt={`${selected.title} sample project detail`} className={selected.blur ? 'dialog-image dialog-image--private' : 'dialog-image'} style={{ aspectRatio: selected.aspect ?? '2 / 1' }} width={1536} height={1024} /></div>{selected.blur && <figcaption className="dialog-conf">Screens blurred for confidentiality</figcaption>}</figure><div className="project-tags mb-7">{selected.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{selected.dialog.length > 0 && <div className="dialog-grid">{selected.dialog.map(block => <div className={block.className} key={block.label}><h3 className="resume-role">{block.label}</h3>{block.body}</div>)}</div>}</>}</Dialog.Content></Dialog.Portal>
    </Dialog.Root>
  </>;
}
