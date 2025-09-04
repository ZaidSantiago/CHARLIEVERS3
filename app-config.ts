import type { AppConfig } from './lib/types';

export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: 'CHARLIE',
  pageTitle: 'CHARLIE',
  pageDescription: 'Chat live with CHARLIE',

  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,
  isPreConnectBufferEnabled: true,

  logo: '/bot.svg',
  accent: '#000000ff',
  logoDark: '/bot.svg',
  accentDark: '#ffffffff',
  startButtonText: 'TALK TO CHARLIE',

  agentName: undefined,
};
