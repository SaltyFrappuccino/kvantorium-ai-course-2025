import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CodeContainer, CopyButton } from './CodeBlock.styles';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [copyText, setCopyText] = useState('Copy');

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopyText('Copied!');
    setTimeout(() => setCopyText('Copy'), 2000);
  };

  return (
    <CodeContainer>
      <CopyButton onClick={handleCopy}>{copyText}</CopyButton>
      <SyntaxHighlighter language={language} style={vscDarkPlus} showLineNumbers>
        {code}
      </SyntaxHighlighter>
    </CodeContainer>
  );
};

export default CodeBlock; 