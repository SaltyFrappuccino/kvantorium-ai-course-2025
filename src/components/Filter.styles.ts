import styled from 'styled-components';

export const FilterContainer = styled.aside`
  width: 280px;
  flex-shrink: 0;
  padding: 2rem;
  background-color: rgba(13, 12, 29, 0.5); /* Фон сайдбара чуть темнее основного */
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid #2a2942; /* Такая же граница, как у карточек */
`;

export const FilterSection = styled.div`
  margin-bottom: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    color: #c5c8d2;
  }
`;

export const Tag = styled.button<{ isActive: boolean }>`
  background-color: ${({ isActive, theme }) => (isActive ? theme.colors.primary : 'transparent')};
  color: ${({ isActive, theme }) => (isActive ? '#0d0c1d' : theme.colors.primary)};
  border: 1px solid ${({ theme }) => theme.colors.primary}99;
  border-radius: 15px;
  padding: 0.4rem 0.8rem;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 0.9rem;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}dd;
    color: #0d0c1d;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`; 