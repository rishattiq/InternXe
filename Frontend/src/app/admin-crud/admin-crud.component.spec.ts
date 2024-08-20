import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:Frontend/src/app/product/feedback/feedback.component.spec.ts
import { FeedbackComponent } from './feedback.component';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedbackComponent);
========
import { AdminCrudComponent } from './admin-crud.component';

describe('AdminCrudComponent', () => {
  let component: AdminCrudComponent;
  let fixture: ComponentFixture<AdminCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCrudComponent);
>>>>>>>> dev1Test:Frontend/src/app/admin-crud/admin-crud.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
