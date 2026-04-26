import { createHighlighter } from 'shiki';
import { decode } from 'html-entities';

let highlighterPromise: Promise<any> | null = null;

// 遅延初期化（Cloudflare対応）
async function getHighlighter() {
    if (!highlighterPromise) {
        highlighterPromise = createHighlighter({
            themes: ['github-dark'],
            langs: ['ts', 'js', 'html', 'css', 'json', 'bash']
        });
    }
    return highlighterPromise;
}

const langMap: Record<string, string> = {
    typescript: 'ts',
    javascript: 'js',
    shell: 'bash',
    sh: 'bash'
};

export async function highlightBlogHtml(html: string): Promise<string> {
    const highlighter = await getHighlighter(); // ←ここで初めて生成

    return html.replace(
        /<div data-filename="(.*?)">\s*<pre><code class="language-(.*?)">([\s\S]*?)<\/code><\/pre>\s*<\/div>/g,
        (_, filename: string, lang: string, code: string) => {

            const decoded = decode(code);
            const mappedLang = langMap[lang] || lang;

            const highlighted = highlighter.codeToHtml(decoded, {
                lang: mappedLang,
                theme: 'github-dark'
            });

            return `
<div class="code-block">
    <div class="code-header">
        <span class="code-filename">${escapeHtml(filename)}</span>
        <span class="code-language">${mappedLang}</span>
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
