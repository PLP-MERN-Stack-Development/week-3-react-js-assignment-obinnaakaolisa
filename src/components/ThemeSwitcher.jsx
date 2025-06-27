import { useTheme } from '../context/ThemeContext';
import Button from './Button';

export default function ThemeSwitcher() {
  const { dark, setDark } = useTheme();

  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={() => setDark(!dark)}
      className="ml-4"
    >
      {dark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </Button>
  );
}
