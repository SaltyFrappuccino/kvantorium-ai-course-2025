import React from 'react';
import ReactMarkdown from 'react-markdown';
import type { Content } from '../types';
import {
  ModalBackdrop,
  ModalContent,
  CloseButton,
  ModalTitle,
  ModalText, // This is the styled-component wrapper
} from './Modal.styles';
import CodeBlock from './CodeBlock';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: Content;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, item }) => {
  if (!isOpen) return null;

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalTitle>{item.title}</ModalTitle>
        <ModalText>
          {item.content.map((block, index) => {
            if (typeof block === 'string') {
              return <ReactMarkdown key={index}>{block}</ReactMarkdown>;
            }
            // The check 'code' in block is enough to tell TS it's a code block
            return <CodeBlock key={index} language={block.language} code={block.code} />;
          })}
        </ModalText>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default Modal; 