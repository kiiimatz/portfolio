import { getSingletonHighlighter } from 'shiki/bundle/web';
import { decode } from 'html-entities';

async function getHighlighter() {
    return getSingletonHighlighter({
        themes: ['github-dark'],
        langs: ['typescript', 'javascript', 'html', 'css', 'json', 'bash', 'svelte', 'tsx', 'jsx', 'python', 'sql', 'yaml']
    });
}

export async function highlightBlogHtml(html: string): Promise<string> {
    const highlighter = await getHighlighter();

    return html.replace(
        /<div data-filename="(.*?)">\s*<pre><code class="language-(.*?)">([\s\S]*?)<\/code><\/pre>\s*<\/div>/g,
        (_, filename: string, lang: string, code: string) => {
            const decoded = decode(code);

            let highlighted: string;
            try {
                highlighted = highlighter.codeToHtml(decoded, {
                    lang,
                    theme: 'github-dark'
                });
            } catch {
                // 未対応言語はフォールバック
                highlighted = `<pre><code>${escapeHtml(decoded)}</code></pre>`;
            }

            return `
<div class="code-block">
    <div class="code-header">
        <span class="code-filename">${escapeHtml(filename)}</span>
        <span class="code-language">${lang}</span>
    </div>
    ${highlighted}
</div>
`;
        }
    );
}

function escapeHtml(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
