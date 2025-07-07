import styled from 'styled-components';

export const CodeContainer = styled.div`
  margin: 1rem 0;
  position: relative;
  
  pre {
    background: #0d0618 !important;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.primary}77;
    padding: 1.5rem !important;
  }
`;

export const CopyButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`; 