import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosDoJogoComponent } from './eventos-do-jogo.component';

describe('EventosDoJogoComponent', () => {
  let component: EventosDoJogoComponent;
  let fixture: ComponentFixture<EventosDoJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventosDoJogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventosDoJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
