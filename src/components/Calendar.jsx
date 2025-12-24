import { useState } from 'react';
import './Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventForm, setEventForm] = useState({
    title: '',
    time: '',
    color: '#0693e3',
  });

  const eventColors = [
    { name: 'Blue', value: '#0693e3' },
    { name: 'Green', value: '#00d084' },
    { name: 'Orange', value: '#ff6900' },
    { name: 'Red', value: '#cf2e2e' },
    { name: 'Purple', value: '#9b51e0' },
    { name: 'Amber', value: '#fcb900' },
  ];

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const handleDateClick = (day) => {
    const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(clickedDate);
    setShowModal(true);
  };

  const handleAddEvent = () => {
    if (eventForm.title && eventForm.time) {
      const newAppointment = {
        id: Date.now(),
        date: selectedDate.toDateString(),
        title: eventForm.title,
        time: eventForm.time,
        color: eventForm.color,
      };
      setAppointments([...appointments, newAppointment]);
      setEventForm({ title: '', time: '', color: '#0693e3' });
      setShowModal(false);
    }
  };

  const handleDeleteEvent = (id) => {
    setAppointments(appointments.filter(apt => apt.id !== id));
  };

  const getAppointmentsForDate = (day) => {
    const dateStr = new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toDateString();
    return appointments.filter(apt => apt.date === dateStr);
  };

  const isToday = (day) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const renderCalendarDays = () => {
    const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayAppointments = getAppointmentsForDate(day);
      const isTodayDate = isToday(day);

      days.push(
        <div
          key={day}
          className={`calendar-day ${isTodayDate ? 'today' : ''}`}
          onClick={() => handleDateClick(day)}
        >
          <div className="day-number">{day}</div>
          <div className="day-events">
            {dayAppointments.slice(0, 3).map((apt) => (
              <div
                key={apt.id}
                className="event-dot"
                style={{ backgroundColor: apt.color }}
                title={`${apt.time} - ${apt.title}`}
              >
                <span className="event-title">{apt.title}</span>
              </div>
            ))}
            {dayAppointments.length > 3 && (
              <div className="more-events">+{dayAppointments.length - 3} more</div>
            )}
          </div>
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h1>Calendar</h1>
        <p className="calendar-subtitle">Schedule and manage your appointments</p>
      </div>

      <div className="calendar-content">
        <div className="calendar-main">
          <div className="calendar-controls">
            <div className="month-navigation">
              <button onClick={handlePrevMonth} className="nav-button">←</button>
              <h2 className="current-month">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <button onClick={handleNextMonth} className="nav-button">→</button>
            </div>
            <button onClick={handleToday} className="today-button">Today</button>
          </div>

          <div className="calendar-grid-container">
            <div className="calendar-weekdays">
              {daysOfWeek.map(day => (
                <div key={day} className="weekday">{day}</div>
              ))}
            </div>
            <div className="calendar-grid">
              {renderCalendarDays()}
            </div>
          </div>
        </div>

        <div className="upcoming-appointments">
          <h3>Upcoming Appointments</h3>
          <div className="appointments-list">
            {appointments.length === 0 ? (
              <p className="no-appointments">No appointments scheduled</p>
            ) : (
              appointments
                .sort((a, b) => new Date(a.date) - new Date(b.date))
                .map((apt) => (
                  <div key={apt.id} className="appointment-item">
                    <div className="appointment-color" style={{ backgroundColor: apt.color }}></div>
                    <div className="appointment-details">
                      <div className="appointment-title">{apt.title}</div>
                      <div className="appointment-datetime">
                        {new Date(apt.date).toLocaleDateString()} at {apt.time}
                      </div>
                    </div>
                    <button
                      className="delete-button"
                      onClick={() => handleDeleteEvent(apt.id)}
                    >
                      ×
                    </button>
                  </div>
                ))
            )}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Add Appointment</h3>
              <button className="close-button" onClick={() => setShowModal(false)}>×</button>
            </div>
            <div className="modal-body">
              <div className="modal-date">
                {selectedDate?.toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="form-group">
                <label>Event Title</label>
                <input
                  type="text"
                  placeholder="Enter event title"
                  value={eventForm.title}
                  onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Time</label>
                <input
                  type="time"
                  value={eventForm.time}
                  onChange={(e) => setEventForm({ ...eventForm, time: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Color</label>
                <div className="color-picker">
                  {eventColors.map((color) => (
                    <button
                      key={color.value}
                      className={`color-option ${eventForm.color === color.value ? 'selected' : ''}`}
                      style={{ backgroundColor: color.value }}
                      onClick={() => setEventForm({ ...eventForm, color: color.value })}
                      title={color.name}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="cancel-button" onClick={() => setShowModal(false)}>
                Cancel
              </button>
              <button className="save-button" onClick={handleAddEvent}>
                Save Event
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
