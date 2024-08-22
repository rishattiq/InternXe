import { ComponentFixture, TestBed } from '@angular/core/testing';


import { FeedbackComponent } from './feedback.component';
import { AdminCrudComponent } from './admin-crud.component';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedbackComponent);



describe('AdminCrudComponent', () => {
  let component: AdminCrudComponent;
  let fixture: ComponentFixture<AdminCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCrudComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

