import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonChooserComponent } from './json-chooser.component';

describe('JsonChooserComponent', () => {
  let component: JsonChooserComponent;
  let fixture: ComponentFixture<JsonChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonChooserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
