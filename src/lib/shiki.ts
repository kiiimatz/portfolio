import { createHighlighter } from 'shiki';
import { decode } from 'html-entities';

// 1回だけ初期化（毎回作ると重い）
const highlighterPromise = createHighlighter({
    themes: ['github-dark'],
    langs: ['ts', 'js', 'html', 'css', 'json', 'bash']
});

// microCMSの language-xxx → Shiki用に変換
const langMap: Record<string, string> = {
    typescript: 'ts',
    javascript: 'js',
    shell: 'bash',
    sh: 'bash'
};

export async function highlightBlogHtml(html: string): Promise<string> {
    const highlighter = await highlighterPromise;

    return html.replace(
        /<div data-filename="(.*?)">\s*<pre><code class="language-(.*?)">([\s\S]*?)<\/code><\/pre>\s*<\/div>/g,
        (_, filename: string, lang: string, code: string) => {

            // HTMLエスケープ解除（超重要）
            const decoded = decode(code);

            // 言語マッピング
            const mappedLang = langMap[lang] || lang;

            // Shikiでハイライト
            const highlighted = highlighter.codeToHtml(decoded, {
                lang: mappedLang,
                theme: 'github-dark'
            });

            // ヘッダー込みで返す（SSRで完成させる）
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

/**
 * 万が一のXSS対策（ファイル名用）
 */
function escapeHtml(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
