import 'styled-components/native';
import { theme } from '../theme';  // Ajuste o caminho conforme o local correto do arquivo

declare module 'styled-components/native' {
  type ThemeType = typeof theme;
  export interface DefaultTheme extends ThemeType { }
}