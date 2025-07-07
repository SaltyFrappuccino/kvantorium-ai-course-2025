import { useState } from 'react';
import { courseContent } from '../data/content';
import ContentCard from '../components/ContentCard';
import Filter from '../components/Filter';
import Modal from '../components/Modal';
import type { Content } from '../types';
import {
  PageContainer,
  ContentGrid,
  MainContent,
  SearchInput,
  Header,
} from './HomePage.styles';

const HomePage = () => {
  const [selectedContent, setSelectedContent] = useState<Content | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const allTags = Array.from(new Set(courseContent.flatMap((c: Content) => c.tags)));
  const allCategories = Array.from(new Set(courseContent.map((c: Content) => c.category)));

  const handleCardClick = (content: Content) => {
    setSelectedContent(content);
  };

  const handleCloseModal = () => {
    setSelectedContent(null);
  };

  const handleSelectTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredContent = courseContent.filter((content: Content) => {
    const categoryMatch = !selectedCategory || content.category === selectedCategory;
    const tagsMatch = selectedTags.length === 0 || selectedTags.every(tag => content.tags.includes(tag));
    const searchMatch = searchTerm.trim() === '' ||
      content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (typeof content.description === 'string' && content.description.toLowerCase().includes(searchTerm.toLowerCase()));
      
    return categoryMatch && tagsMatch && searchMatch;
  });

  return (
    <PageContainer>
      <Filter
        categories={allCategories}
        tags={allTags}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        selectedTags={selectedTags}
        onSelectTag={handleSelectTag}
      />
      <MainContent>
        <Header>
            <h1>Материалы курса</h1>
            <SearchInput 
              type="text"
              placeholder="Поиск по названию и описанию..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
        </Header>
        <ContentGrid>
          {filteredContent.map((content: Content) => (
            <ContentCard
              key={content.id}
              item={content}
              onClick={() => handleCardClick(content)}
            />
          ))}
        </ContentGrid>
      </MainContent>

      {selectedContent && (
        <Modal 
            isOpen={!!selectedContent}
            onClose={handleCloseModal} 
            item={selectedContent} 
        />
      )}
    </PageContainer>
  );
};

export default HomePage; 