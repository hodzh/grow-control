import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EpisodeComponent } from './episode.component';
import {DbService} from '../../../services/storage/db.service';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('EpisodeComponent', () => {
  let component: EpisodeComponent;
  let fixture: ComponentFixture<EpisodeComponent>;
  let db: DbService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpisodeComponent ],
      providers: [
        {provide: DbService, useValue: {}},
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    db = TestBed.get(DbService);
    db.getAccessControlEpisode = async () => [];
    fixture = TestBed.createComponent(EpisodeComponent);
    component = fixture.componentInstance;
    component.episode = {
      key: 1,
      value: {lastKey: 2},
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
