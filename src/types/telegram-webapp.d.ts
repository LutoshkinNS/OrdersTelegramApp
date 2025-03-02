interface TelegramWebApp {
  WebApp: {
    ready: () => void;
    colorScheme: 'light' | 'dark';
  }
}

interface Window {
  Telegram: TelegramWebApp;
} 