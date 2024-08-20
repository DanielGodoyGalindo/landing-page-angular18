import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  // variable para agrupar todos los valores recogidos por el formulario
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // indicar campos requeridos
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(20)]]
    })
  }

  // metodos
  enviarForm(event: Event) {
    event.preventDefault();
    console.log(this.contactForm.value);
  }

  hasErrors(campo: string, tipoError: string) {
    return this.contactForm.get(campo)?.hasError(tipoError) && this.contactForm.get(campo)?.touched;
  }
}
