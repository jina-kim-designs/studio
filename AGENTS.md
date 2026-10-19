<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the portfolio as a sequential scrolling page with reusable section and project structures; this preserves the requested reading order.
- Store demonstration projects as browser-safe static content and show case studies in accessible dialogs; no persistence is needed for placeholder work.
- Each other-work item owns its popup content through its own `dialog` blocks, so a popup never shows another project's copy; leave a block out until its real wording arrives rather than reusing placeholder text.
- Declare the requested display typeface first with a web-loaded serif fallback; the portfolio remains usable until a licensed font file is provided.
