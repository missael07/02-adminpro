import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [
  ]
})
export class IncrementComponent implements OnInit{
  
  
  @Input('valor') progreso: number = 50;
  @Input('clase') btnClass: string = 'btn-primary';
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor > 0) {
      this.cambioValor.emit(100);
      return this.progreso = 100;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.cambioValor.emit(0);
      return this.progreso = 0;
    
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
    return this.progreso;
  }

  onChange(newValue: number) {
    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    this.cambioValor.emit(this.progreso);
  }
}
