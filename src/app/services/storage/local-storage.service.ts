import { Injectable } from '@angular/core';
import { SettingsState } from '../../store/settings/settings.reducer';
import { ConfigState } from '../../store/config/config.reducer';

const settingsKey = 'settings';
const configKey = 'config';
const versionKey = 'version';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  static version = '12';

  constructor() {
    const version = localStorage.getItem(versionKey);
    if (version !== LocalStorageService.version) {
      localStorage.clear();
      localStorage.setItem(versionKey, LocalStorageService.version);
    }
  }

  loadSettings(): SettingsState {
    console.log('load settings');
    const value = localStorage.getItem(settingsKey);
    if (!value) {
      return;
    }
    return JSON.parse(value);
  }

  saveSettings(settings: SettingsState) {
    console.log('save settings');
    localStorage.setItem(settingsKey, JSON.stringify(settings));
  }

  loadConfig(): ConfigState {
    console.log('load config');
    const value = localStorage.getItem(configKey);
    if (!value) {
      return;
    }
    return JSON.parse(value);
  }

  saveConfig(config: ConfigState) {
    console.log('save config');
    localStorage.setItem(configKey, JSON.stringify(config));
  }
}
