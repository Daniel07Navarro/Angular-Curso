import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { app } from '../../../server';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent implements OnInit, OnDestroy{

  usuarioActivo: any = {
    nombre: 'Juan',
    apellido: 'Perez',
    dni: '12345678'
  };

  documento: string = '';

  formulario: FormGroup;

  constructor(private fb:FormBuilder) {
    this.formulario = this.fb.group({
      nombre: ['',[Validators.required,Validators.minLength(3)]],
      apellido: ['',[Validators.required,Validators.minLength(3)]],
      dni: ['',[Validators.required,Validators.minLength(8)]],
      tipoDocumento: [''],
      direccion: ['', [Validators.required,Validators.minLength(5)]],
      email: ['',[Validators.required,Validators.email]]
    });
  }
  ngOnDestroy(): void {
    console.log('Se destruyó el componente')
  }

  enviar(){
    alert("Hola")
  }

  hasErrors(controlName: string, errorType: string){
    return this.formulario.get(controlName)?.hasError(errorType) && this.formulario.get(controlName)?.touched;
  }

  validarDni(dni: string): boolean{
    return dni === '' ? false : true;
  }

  ngOnInit(): void {
    this.formulario.get('tipoDocumento')?.valueChanges.subscribe(value => {
      this.documento=value;
    });
  }

  

  /* PRIMER CASO PARA DESHABILITAR CAMPOS
  ngOnInit(): void {
    //this.formulario.get('nombre')?.setValue(this.usuarioActivo);
    Para eliminar validaciones
    this.formulario.get('nombre')?.clearValidators();
    this.formulario.get('nombre')?.updateValueAndValidity();
    this.formulario.patchValue({
      nombre: this.usuarioActivo.nombre,
      apellido: this.usuarioActivo.apellido,
      dni: this.usuarioActivo.dni
    })
    this.formulario.get('nombre')?.disable();
    this.formulario.get('apellido')?.disable();
  }*/



  


}
