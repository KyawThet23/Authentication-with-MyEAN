import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardUseComponent } from './board-use.component';

describe('BoardUseComponent', () => {
  let component: BoardUseComponent;
  let fixture: ComponentFixture<BoardUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardUseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoardUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
