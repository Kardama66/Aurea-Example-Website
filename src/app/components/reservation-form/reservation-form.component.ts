import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { ButtonComponent } from '../../shared/button/button.component';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { UiStore } from '../../shared/ui-store.service';

const isPhone = (value: string): boolean =>
  /^[+\d][\d\s-]{6,}$/.test(value);

const phoneValidator = (control: AbstractControl): ValidationErrors | null => {
  const value = String(control.value || '').trim();
  if (!value) {
    return null;
  }
  return isPhone(value) ? null : { phone: true };
};

interface CalendarDay {
  date: Date;
  label: string;
  isCurrentMonth: boolean;
  isToday: boolean;
  isPast: boolean;
}

interface TimeSlot {
  time: string;
  available: boolean;
}

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor, NgClass, ButtonComponent, SectionTitleComponent],
  templateUrl: './reservation-form.component.html'
})
export class ReservationFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly ui = inject(UiStore);
  readonly submitted = signal(false);
  readonly reservationCopy = computed(() => this.ui.site().reservation);
  readonly selectedDate = signal<Date | null>(null);
  readonly selectedTime = signal<string | null>(null);

  private readonly today = this.normalizeDate(new Date());
  private readonly currentYear = this.today.getFullYear();
  private readonly currentMonth = this.today.getMonth();
  private readonly slotTimes = [
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
    '22:00'
  ];

  readonly calendarDays = this.buildCalendarDays();

  readonly weekdayLabels = computed(() =>
    this.ui.language() === 'pl'
      ? ['Pon', 'Wt', '\u015ar', 'Czw', 'Pt', 'Sob', 'Nd']
      : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  );

  readonly monthLabel = computed(() => {
    const monthNames = this.getMonthNames();
    return `${monthNames[this.currentMonth]} ${this.currentYear}`;
  });

  readonly timeSlots = computed<TimeSlot[]>(() => {
    const date = this.selectedDate();
    if (!date) {
      return [];
    }
    return this.slotTimes.map((time) => ({
      time,
      available: this.isSlotAvailable(date, time)
    }));
  });

  readonly form = this.fb.group({
    date: ['', Validators.required],
    time: ['', Validators.required],
    guests: [2, [Validators.required, Validators.min(1), Validators.max(12)]],
    name: ['', Validators.required],
    phone: ['', [Validators.required, phoneValidator]]
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitted.set(true);
    this.form.reset({ guests: 2, date: '', time: '', name: '', phone: '' });
    this.selectedDate.set(null);
    this.selectedTime.set(null);
  }

  selectDate(day: CalendarDay): void {
    if (!day.isCurrentMonth || day.isPast) {
      return;
    }
    const normalized = this.normalizeDate(day.date);
    this.selectedDate.set(normalized);
    this.selectedTime.set(null);
    this.submitted.set(false);
    this.form.get('date')?.setValue(this.formatDateForInput(normalized));
    this.form.get('date')?.markAsTouched();
    this.form.get('time')?.reset('');
  }

  selectTime(slot: TimeSlot): void {
    if (!this.selectedDate() || !slot.available) {
      return;
    }
    this.selectedTime.set(slot.time);
    this.submitted.set(false);
    this.form.get('time')?.setValue(slot.time);
    this.form.get('time')?.markAsTouched();
  }

  isSelectedDate(day: CalendarDay): boolean {
    const selected = this.selectedDate();
    if (!selected) {
      return false;
    }
    return this.isSameDay(day.date, selected);
  }

  dayButtonClasses(day: CalendarDay): string {
    const isSelected = this.isSelectedDate(day);
    const isSelectable = day.isCurrentMonth && !day.isPast;
    return [
      'flex h-10 w-10 items-center justify-center rounded-full border text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-strong)]',
      isSelected
        ? 'border-[var(--gold)] bg-[var(--gold)] text-[var(--ink)] shadow-[0_8px_20px_rgba(184,155,94,0.35)]'
        : 'border-transparent text-[var(--text)]',
      day.isToday && !isSelected ? 'border-[var(--gold)]/50' : '',
      isSelectable ? 'hover:bg-[var(--gold)]/15' : 'cursor-not-allowed opacity-30',
      day.isCurrentMonth ? '' : 'opacity-30'
    ]
      .filter(Boolean)
      .join(' ');
  }

  timeSlotClasses(slot: TimeSlot): string {
    const isSelected = slot.time === this.selectedTime();
    return [
      'flex min-h-[3rem] flex-col items-center justify-center gap-1 rounded-2xl border px-3 py-2 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold-strong)]',
      slot.available
        ? isSelected
          ? 'border-[var(--gold)] bg-[var(--gold)] text-[var(--ink)] shadow-[0_8px_20px_rgba(184,155,94,0.25)]'
          : 'border-[var(--gold)]/30 text-[var(--text)] hover:bg-[var(--gold)]/15'
        : 'border-[var(--gold)]/20 bg-[var(--surface-strong)]/40 text-[var(--text)]/40'
    ]
      .filter(Boolean)
      .join(' ');
  }

  formatDateForDisplay(date: Date): string {
    const day = date.getDate();
    const monthName = this.getMonthNames()[date.getMonth()];
    const year = date.getFullYear();
    return this.ui.language() === 'pl'
      ? `${day} ${monthName} ${year}`
      : `${monthName} ${day}, ${year}`;
  }

  selectedDateLabel(): string {
    const date = this.selectedDate();
    return date ? this.formatDateForDisplay(date) : '';
  }

  private buildCalendarDays(): CalendarDay[] {
    const first = new Date(this.currentYear, this.currentMonth, 1);
    const startOffset = (first.getDay() + 6) % 7;
    const start = new Date(this.currentYear, this.currentMonth, 1 - startOffset);
    const days: CalendarDay[] = [];

    for (let i = 0; i < 42; i += 1) {
      const date = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i);
      const normalized = this.normalizeDate(date);
      days.push({
        date,
        label: String(date.getDate()),
        isCurrentMonth: date.getMonth() === this.currentMonth,
        isToday: normalized.getTime() === this.today.getTime(),
        isPast: normalized.getTime() < this.today.getTime()
      });
    }

    return days;
  }

  private normalizeDate(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  private isSameDay(first: Date, second: Date): boolean {
    return (
      first.getFullYear() === second.getFullYear() &&
      first.getMonth() === second.getMonth() &&
      first.getDate() === second.getDate()
    );
  }

  private formatDateForInput(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  private isSlotAvailable(date: Date, time: string): boolean {
    const seed = `${this.formatDateForInput(date)}-${time}`;
    const hash = this.hashSeed(seed);
    return hash % 5 !== 0;
  }

  private hashSeed(value: string): number {
    let hash = 0;
    for (let i = 0; i < value.length; i += 1) {
      hash = (hash * 31 + value.charCodeAt(i)) % 2147483647;
    }
    return hash;
  }

  private getMonthNames(): string[] {
    return this.ui.language() === 'pl'
      ? [
          'Stycze\u0144',
          'Luty',
          'Marzec',
          'Kwiecie\u0144',
          'Maj',
          'Czerwiec',
          'Lipiec',
          'Sierpie\u0144',
          'Wrzesie\u0144',
          'Pa\u017adziernik',
          'Listopad',
          'Grudzie\u0144'
        ]
      : [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ];
  }
}
