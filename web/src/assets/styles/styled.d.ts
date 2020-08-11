import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      tertiary: string;

      titles: string;
      texts: string;
      textInColors: string;

      background: string;
      headerBackground: string;
      footerBackground: string;
      complement: string;
      complementContrast: string;
    };

    handleToggleTheme?: function;
  }
}
