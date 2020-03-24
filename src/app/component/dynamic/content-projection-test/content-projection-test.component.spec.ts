import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectionTestComponent } from './content-projection-test.component';

describe('ContentProjectionTestComponent', () => {
  let component: ContentProjectionTestComponent;
  let fixture: ComponentFixture<ContentProjectionTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentProjectionTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentProjectionTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
