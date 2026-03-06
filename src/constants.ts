import React from 'react';

export interface TimeSlot {
  time: string;
  period: 'morning' | 'afternoon';
}

export interface AppointmentDetails {
  date: string; // YYYY-MM-DD
  time: string;
}

export const MORNING_SLOTS: string[] = ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM'];
export const AFTERNOON_SLOTS: string[] = ['04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM'];

export const MONTHS = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

export const DAYS = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do'];
