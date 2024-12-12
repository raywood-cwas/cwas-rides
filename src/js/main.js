// src/js/main.js

import '@css/main.css'; 
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
// import { database } from './firebase'; // Uncomment when Firebase is set up

document.addEventListener('DOMContentLoaded', () => {
  const calendarEl = document.getElementById('calendar');

  const calendar = new Calendar(calendarEl, {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    events: [], // This will be populated from Firebase Realtime Database
  });

  calendar.render();
});
