import styled from 'styled-components';

export const Card = styled.div`
  background: rgba(23, 22, 48, 0.6); /* Темный, полупрозрачный фон */
  border: 1px solid #2a2942; /* Тонкая, темная граница */
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease-in-out;
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(173, 148, 255, 0.1); /* Мягкая тень при наведении */
    border-color: ${({ theme }) => theme.colors.primary}77;
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: #e0e2e8;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  color: #a0a3af; /* Более светлый серый для читаемости */
  flex-grow: 1;
  margin-bottom: 1rem;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Tag = styled.span`
  background-color: ${({ theme }) => theme.colors.primary}22; /* Очень прозрачный фон */
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.3rem 0.7rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.primary}55; /* Тонкая граница для тега */
`; 