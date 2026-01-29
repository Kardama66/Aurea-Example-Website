import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ButtonComponent } from '../../shared/button/button.component';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { UiStore } from '../../shared/ui-store.service';

const isEmail = (value: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const isPhone = (value: string): boolean =>
  /^[+\d][\d\s-]{6,}$/.test(value);

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, ButtonComponent, SectionTitleComponent],
  templateUrl: './reservation-form.component.html'
})
export class ReservationFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly ui = inject(UiStore);
  readonly submitted = signal(false);
  readonly reservationCopy = computed(() => this.ui.site().reservation);

  readonly form = this.fb.group({
    date: ['', Validators.required],
    time: ['', Validators.required],
    guests: [2, [Validators.required, Validators.min(1), Validators.max(12)]],
    contact: ['', [this.contactValidator]]
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitted.set(true);
    this.form.reset({ guests: 2 });
  }

  private contactValidator(control: AbstractControl): ValidationErrors | null {
    const value = String(control.value || '').trim();
    if (!value) {
      return { required: true };
    }
    return isEmail(value) || isPhone(value) ? null : { contact: true };
  }
}
