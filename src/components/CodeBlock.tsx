import * as ReactCodeBlock from 'react-code-blocks';

export default function CodeBlock({
  code,
  language,
}: Readonly<{
  code: string;
  language: string;
}>) {
  return (
    <ReactCodeBlock.CodeBlock
      text={code}
      language={language}
      showLineNumbers={true}
      theme={ReactCodeBlock.atomOneDark}
    />
  );
}