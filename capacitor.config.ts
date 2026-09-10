import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'net.ajustadores.help',
  appName: 'Ajustador HN',
  webDir: 'www',
  android: {
    allowMixedContent: true,
    webContentsDebuggingEnabled: false
  },
  server: {
    // Keep http so existing cookies/localStorage survive the Capacitor 6+ scheme change.
    androidScheme: 'http'
  },
  plugins: {
    CapacitorHttp: {
      enabled: true
    },
    SystemBars: {
      insetsHandling: 'css',
      style: 'DARK',
      hidden: false
    }
  }
};

export default config;
