import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTimeComponent } from './cadastro-time.component';

describe('CadastroTimeComponent', () => {
  let component: CadastroTimeComponent;
  let fixture: ComponentFixture<CadastroTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroTimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
