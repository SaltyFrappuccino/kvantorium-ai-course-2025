import React from 'react';
import type { Content } from '../types';
import { Card, CardTitle, CardDescription, TagsContainer, Tag } from './ContentCard.styles';

interface ContentCardProps {
  item: Content;
  onClick: () => void;
}

const ContentCard: React.FC<ContentCardProps> = ({ item, onClick }) => {
  return (
    <Card onClick={onClick}>
      <CardTitle>{item.title}</CardTitle>
      <CardDescription>{item.description}</CardDescription>
      <TagsContainer>
        {item.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsContainer>
    </Card>
  );
};

export default ContentCard; 