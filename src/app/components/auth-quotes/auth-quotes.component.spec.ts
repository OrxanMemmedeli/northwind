import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthQuotesComponent } from './auth-quotes.component';

describe('AuthQuotesComponent', () => {
  let component: AuthQuotesComponent;
  let fixture: ComponentFixture<AuthQuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthQuotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
