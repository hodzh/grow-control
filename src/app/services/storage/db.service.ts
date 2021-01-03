import { Injectable } from '@angular/core';
import { DBSchema, IDBPDatabase, openDB } from 'idb';

export interface DbAccessControlCamshotValue {
  processTime: number;
  image: string;
}

export interface DbAccessControlCamshot {
  key: number;
  value: DbAccessControlCamshotValue;
}

export interface DbAccessControlEpisodeValue {
  lastKey: number;
}

export interface DbAccessControlEpisode {
  key: number;
  value: DbAccessControlEpisodeValue;
}

interface AppDb extends DBSchema {
  temp: {
    key: string,
    value: number,
  };
  flow: {
    key: string,
    value: number,
  };
  accessControlCamshot: DbAccessControlCamshot;
  accessControlEpisode: DbAccessControlEpisode;
}

@Injectable({
  providedIn: 'root',
})
export class DbService {
  private db: IDBPDatabase<AppDb>;

  constructor() {
  }

  async init() {
    this.db = await openDB<AppDb>('grow-control-db4', 1, {
      upgrade(db) {
        db.createObjectStore('temp');
        db.createObjectStore('flow');
        db.createObjectStore('accessControlCamshot');
        db.createObjectStore('accessControlEpisode');
      },
    });
  }

  async logTemp(temp: number) {
    await this.db.put('temp', temp, new Date().toISOString());
  }

  async getTemp() {
    return { xData: await this.db.getAllKeys('temp'), yData: await this.db.getAll('temp') };
  }

  async logFlow(flow: number) {
    await this.db.put('flow', flow, new Date().toISOString());
  }

  async getFlow() {
    return { xData: await this.db.getAllKeys('flow'), yData: await this.db.getAll('flow') };
  }

  async logAccessControl(episode: number, camshot: DbAccessControlCamshot) {
    const transaction = this.db.transaction(
      ['accessControlCamshot', 'accessControlEpisode'], 'readwrite');
    transaction.objectStore('accessControlEpisode').put({ lastKey: camshot.key }, episode);
    transaction.objectStore('accessControlCamshot').put(camshot.value, camshot.key);
    await transaction.done;
  }

  async getAccessControlEpisode() {
    const keys = await this.db.getAllKeys('accessControlEpisode');
    const values = await this.db.getAll('accessControlEpisode');
    return keys.map((key, index) => ({ key, value: values[index] })).sort((a, b) => b.key - a.key);
  }

  async getAccessControlEpisodeKeys(episode: DbAccessControlEpisode): Promise<number[]> {
    const keyRangeValue = IDBKeyRange.bound(episode.key, episode.value.lastKey);
    const transaction = this.db.transaction(['accessControlCamshot'], 'readonly');
    const objectStore = transaction.objectStore('accessControlCamshot');
    let cursor = await objectStore.openCursor(keyRangeValue);
    const keys = [];
    while (cursor) {
      keys.push(cursor.key);
      cursor = await cursor.continue();
    }
    return keys;
  }

  async getAccessControlCamshot(key: number): Promise<DbAccessControlCamshotValue> {
    return await this.db.get('accessControlCamshot', key);
  }

  async getAccessControlCamshotNext(key: number): Promise<DbAccessControlCamshot> {
    const keyRangeValue = IDBKeyRange.lowerBound(key, true);
    const transaction = this.db.transaction(['accessControlCamshot'], 'readonly');
    const objectStore = transaction.objectStore('accessControlCamshot');
    const cursor = await objectStore.openCursor(keyRangeValue);
    const next = { key: cursor.key, value: cursor.value };
    return next;
  }

  async getAccessControlCamshotPrev(key: number): Promise<DbAccessControlCamshot> {
    const keyRangeValue = IDBKeyRange.upperBound(key, true);
    const transaction = this.db.transaction(['accessControlCamshot'], 'readonly');
    const objectStore = transaction.objectStore('accessControlCamshot');
    const cursor = await objectStore.openCursor(keyRangeValue);
    const next = { key: cursor.key, value: cursor.value };
    return next;
  }

  async clear(names) {
    await Promise.all(names.map(name => this.db.clear(name)));
  }

  async getTableSize(name) {
    let size = 0;
    let count = 0;
    let cursor = await this.db.transaction(name).store.openCursor();
    while (cursor) {
      size += JSON.stringify(cursor.value).length;
      size += JSON.stringify(cursor.key).length;
      count++;
      cursor = await cursor.continue();
    }
    return { name, size, count };
  }

  async getDatabaseSize() {
    const tableNames = Array.from(this.db.objectStoreNames);
    const sizes = await Promise.all(tableNames.map(t => this.getTableSize(t)));
    const report: any = sizes;
    report.push({
      name: 'total',
      size: sizes.reduce((acc, val) => acc + val.size, 0),
      count: sizes.reduce((acc, val) => acc + val.count, 0),
    });
    return report;
  }
}
