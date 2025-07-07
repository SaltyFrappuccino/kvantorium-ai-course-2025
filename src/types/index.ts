export type ContentItem = string | { code: string; language: string };

export interface Content {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  content: ContentItem[];
} 