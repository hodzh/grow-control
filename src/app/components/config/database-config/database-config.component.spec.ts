import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatabaseConfigComponent } from './database-config.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MemoryPipe} from '../../../pipes/memory.pipe';

describe('DatabaseConfigComponent', () => {
  let component: DatabaseConfigComponent;
  let fixture: ComponentFixture<DatabaseConfigComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseConfigComponent, MemoryPipe ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
