import 'styled-components';

interface ITheme {
  colors: {
    primary: string;
    background: string;
    text: string;
    card: string;
    border: string;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
} 