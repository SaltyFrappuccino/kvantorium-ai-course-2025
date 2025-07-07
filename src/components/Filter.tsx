import React from 'react';
import { FilterContainer, FilterSection, Tag } from './Filter.styles';

interface FilterProps {
  categories: string[];
  tags: string[];
  selectedCategory: string | null;
  selectedTags: string[];
  onSelectCategory: (category: string | null) => void;
  onSelectTag: (tag: string) => void;
}

const Filter: React.FC<FilterProps> = ({
  categories,
  tags,
  selectedCategory,
  selectedTags,
  onSelectCategory,
  onSelectTag,
}) => {
  return (
    <FilterContainer>
      <FilterSection>
        <h3>Категории</h3>
        <Tag
          isActive={selectedCategory === null}
          onClick={() => onSelectCategory(null)}
        >
          Все
        </Tag>
        {categories.map((category) => (
          <Tag
            key={category}
            isActive={selectedCategory === category}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </Tag>
        ))}
      </FilterSection>
      <FilterSection>
        <h3>Теги</h3>
        {tags.map((tag) => (
          <Tag
            key={tag}
            isActive={selectedTags.includes(tag)}
            onClick={() => onSelectTag(tag)}
          >
            {tag}
          </Tag>
        ))}
      </FilterSection>
    </FilterContainer>
  );
};

export default Filter; 