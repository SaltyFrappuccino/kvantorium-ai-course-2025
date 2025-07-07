import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

export const MainContent = styled.main`
  flex-grow: 1;
  padding: 2rem;
  overflow-y: auto;
  height: 100%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2.5rem;
  }
`;

export const SearchInput = styled.input`
  width: 300px;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #2a2942;
  background-color: rgba(13, 12, 29, 0.7);
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  outline: none;
  transition: all 0.2s ease-in-out;

  &::placeholder {
    color: #a0a3af;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary}99;
    box-shadow: 0 0 10px rgba(173, 148, 255, 0.1);
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
`; 