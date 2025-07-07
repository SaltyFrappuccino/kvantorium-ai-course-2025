import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 20, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #11111b;
  border: 1px solid ${({ theme }) => theme.colors.primary}77;
  border-radius: 12px;
  width: 90%;
  max-width: 1100px; /* Увеличено с 800px */
  height: 85vh; /* Немного увеличена высота */
  padding: 2.5rem; /* Увеличены отступы */
  overflow-y: auto;
  position: relative;
  box-shadow: 0 0 35px rgba(173, 148, 255, 0.15);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem; /* Скорректировано */
  right: 1.5rem; /* Скорректировано */
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: white;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 2.2rem; /* Увеличен */
  margin-bottom: 1.5rem;
`;

export const ModalText = styled.div`
  white-space: pre-wrap;
  line-height: 1.7; 
  font-size: 1.05rem; 

  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 2rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary}44;
    padding-bottom: 0.5rem;
  }
  
  strong {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }

  code {
    background: rgba(0,0,0,0.3);
    padding: 3px 6px;
    border-radius: 4px;
    font-family: 'Courier New', Courier, monospace;
    border: 1px solid #333;
  }

  p {
    margin-bottom: 1rem;
  }

  ul, ol {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }
`; 