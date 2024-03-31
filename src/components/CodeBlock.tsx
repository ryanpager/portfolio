import * as ReactCodeBlock from 'react-code-blocks';

export default function CodeBlock({
  code,
  language,
}: Readonly<{
  code: string;
  language: string;
}>) {
  return (
    <div className="text-left text-xs rounded-lg overflow-hidden tracking-wide leading-8 rounded-lg border border-slate-200 p-4 shadow-lg shadow-slate-100">
      <ReactCodeBlock.CodeBlock
        text={code}
        language={language}
        showLineNumbers={true}
        theme={ReactCodeBlock.github}
      />
    </div>
  );
}