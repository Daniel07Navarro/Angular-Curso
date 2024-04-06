import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrl: './dni.component.css'
})
export class DniComponent implements OnChanges{

 
  @Input() tipoDni: string = 'DNI';

  valorActual: string = '';
  
  formularioDocumento: FormGroup;

  constructor(private fb:FormBuilder) {
    this.formularioDocumento = this.fb.group({
      dni: ['',[Validators.required,Validators.minLength(8)]]
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.valorActual = changes?.['tipoDni'].currentValue;
  }

  hasErrors(controlName: string, errorType: string){
    return this.formularioDocumento.get(controlName)?.hasError(errorType) && this.formularioDocumento.get(controlName)?.touched;
  }

  

}
