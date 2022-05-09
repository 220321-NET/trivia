import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestAmountComponent } from './quest-amount.component';

describe('QuestAmountComponent', () => {
  let component: QuestAmountComponent;
  let fixture: ComponentFixture<QuestAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
