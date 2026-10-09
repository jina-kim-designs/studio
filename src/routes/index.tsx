import { createFileRoute, Link } from '@tanstack/react-router';
import dataviz from '@/assets/dataviz-editorial-mockup.jpg';
import { useState, type ReactNode } from 'react';
import { ArrowUpRight, ArrowDown, ArrowUp, Plus, X } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/button';
import studioImage from '@/assets/studio-project.jpg';
import everydayImage from '@/assets/everyday-project.jpg';
import autopilotAsset from '@/assets/autopilot-angled-screen.jpg.asset.json';
const autopilotImage = autopilotAsset.url;

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
  { title: 'Autopilot: Designing savings habits that stick', subtitle: 'Turning good intentions into automatic progress.', tags: ['Product design', 'UX research', '2022'], image: autopilotImage, alt: 'Close-up of a phone showing transaction amounts, the Automatic Savings tile, and bottom navigation on a pale blue and cream surface', description: 'An example digital product bringing a gentler approach to daily routines, reflection, and personal wellbeing.' },
];
const otherWork = [
  { title: 'AI + design systems automation', description: 'Pioneering AI-assisted workflows that generate components and documentation and safeguard design-to-code parity, preparing the design system for what’s next.', image: studioImage, category: 'Exploration' },
  { title: 'Pocket Mentor', description: 'Building an agentic AI financial companion to bridge digital engagement and physical banking through transparent, trust-driven micro-lessons.', image: everydayImage, category: 'Hackathon' },
  { title: 'Cross-platform parity', description: 'Prioritized and planned cross-platform work to drive design system parity, aligning teams on a clear roadmap.', image: studioImage, category: 'Collaboration' },
];

function SectionHeading({ number, title, aside }: { number: string; title: string; aside?: ReactNode }) {
  return <div className="section-heading"><h2 className="section-title"><span className="section-number">{number}</span>{title}</h2>{aside && <div className="section-aside">{aside}</div>}</div>;
}

function Portfolio() {
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
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
            <p className="featured-text">{projects[0]!.subtitle} I led a unified, accessible color palette so every chart across the enterprise speaks the same visual language.</p>
            <dl className="featured-stats">
              <div><dt>40+</dt><dd>chart types</dd></div>
              <div><dt>AA</dt><dd>contrast tested</dd></div>
              <div><dt>12</dt><dd>teams aligned</dd></div>
            </dl>
            <Link to="/work/data-visualization-palette" className="featured-link">Read the case study <ArrowUpRight size={15} /></Link>
          </div>
          <Link to="/work/data-visualization-palette" className="featured-visual" aria-label="Read the data visualization palette case study">
            <img src={dataviz} alt="Tablet showing the data visualization palette, chart examples, and color swatches on a pale blue and cream surface" loading="lazy" />
          </Link>
        </article>
        <article className="featured-study">
          <div className="featured-copy">
            <p className="eyebrow featured-eyebrow"><span className="featured-dot" />Featured · Automated savings</p>
            <h3 className="featured-title">{projects[1]!.title}</h3>
            <p className="featured-text">{projects[1]!.subtitle} I drove the research and design behind Autopilot, Capital One’s automated savings tool, taking it from customer insight to launch.</p>
            <dl className="featured-stats">
              <div><dt>2022</dt><dd>insight to launch</dd></div>
              <div><dt>0→1</dt><dd>new savings tool</dd></div>
              <div><dt>UX</dt><dd>research & design</dd></div>
            </dl>
            <Button variant="ghost" className="featured-link" onClick={() => setSelected(projects[1]!)}>Read the case study <ArrowUpRight size={15} /></Button>
          </div>
          <button type="button" className="featured-visual" onClick={() => setSelected(projects[1]!)} aria-label="View the Autopilot case study">
            <img src={projects[1]!.image} alt={projects[1]!.alt} width={1536} height={1024} loading="lazy" />
          </button>
        </article>
      </section>
      <section className="portfolio-shell portfolio-section" id="other-work">
        <SectionHeading number="02" title="A few other things" aside="Experiments, collaborations & side quests" />
        {otherWork.map(work => <article className="work-row" key={work.title}><img src={work.image} className="work-thumb" alt={`${work.title} sample project`} width={56} height={56} loading="lazy" /><div><h3 className="project-title">{work.title}</h3><p className="project-description">{work.description}</p></div><span className="work-type">{work.category}</span><Button variant="ghost" size="icon" title={`View ${work.title}`} aria-label={`View ${work.title}`} onClick={() => setSelected({ title: work.title, subtitle: work.description, description: 'A sample entry for an independent project. Your project story, contributions, and outcomes will live here.', image: work.image, alt: `${work.title} sample project`, tags: [work.category, 'Sample project'] })}><ArrowUpRight /></Button></article>)}
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
      <Dialog.Portal><Dialog.Overlay className="dialog-overlay" /><Dialog.Content className="dialog-content">{selected && <><div className="dialog-top"><div><p className="eyebrow mb-2">Sample case study</p><Dialog.Title className="dialog-title">{selected.title}</Dialog.Title></div><Dialog.Close asChild><Button variant="ghost" size="icon" aria-label="Close case study"><X /></Button></Dialog.Close></div><Dialog.Description className="project-description">{selected.description}</Dialog.Description><img src={selected.image} alt={`${selected.title} sample project detail`} className="dialog-image" width={1536} height={1024} /><div className="project-tags mb-7">{selected.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="dialog-grid"><div><h3 className="resume-role">The challenge</h3><p className="resume-copy">Your project’s starting point: the problem, the people you were designing for, and the opportunity you discovered.</p></div><div><h3 className="resume-role">The approach</h3><p className="resume-copy">Your process from research and early sketches to testing, collaboration, and the final design direction.</p></div><div><h3 className="resume-role">My contribution</h3><p className="resume-copy">The role you played, the decisions you shaped, and the work you brought to the project.</p></div><div><h3 className="resume-role">The outcome</h3><p className="resume-copy">The result, a meaningful takeaway, and what you would carry forward into your next project.</p></div></div></>}</Dialog.Content></Dialog.Portal>
    </Dialog.Root>
  </>;
}
