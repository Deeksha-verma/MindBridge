import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Planner.css';  // Optional: Create a CSS file for custom styling

const Planner = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasks, setTasks] = useState({});
  const timeSlots = Array.from({ length: 9 }, (_, i) => `${i + 9}:00 - ${i + 10}:00`);

  const handleTaskChange = (timeSlot, event) => {
    setTasks({ ...tasks, [timeSlot]: event.target.value });
  };

  const saveSchedule = () => {
    console.log('Schedule for', selectedDate);
    console.log(tasks);
    alert('Schedule saved successfully!');
  };

  return (
    <div className="planner-container">
      <h2>Daily Planner</h2>
      <div className="date-picker">
        <label>Select Date: </label>
        <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
      </div>

      <div className="time-slots">
        {timeSlots.map((slot) => (
          <div key={slot} className="time-slot">
            <label>{slot}:</label>
            <input
              type="text"
              value={tasks[slot] || ''}
              onChange={(event) => handleTaskChange(slot, event)}
            />
          </div>
        ))}
      </div>

      <button onClick={saveSchedule} className="save-button">Save Schedule</button>
    </div>
  );
};

export default Planner;
