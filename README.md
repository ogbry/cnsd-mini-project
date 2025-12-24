# Clean & Seal Dashboard Trial Project

## 📖 How to Use

### Navigation

- **Desktop/Laptop**: Use the sidebar on the left with icons and labels
- **Mobile/Tablet**: Use the top navigation bar with icons

### Dashboard Tab 📊

1. **View Metrics**: See active students and schools at a glance
2. **Analyze Charts**: Review oral health status and services data
3. **Check Tables**: View detailed statistics by school and facilities

> **Note**: Dashboard data is mock/placeholder data for demonstration purposes.

### Calendar Tab 📅

1. **Navigate Months**:

   - Click `←` and `→` buttons to move between months
   - Click `Today` to jump to the current date

2. **Add an Appointment**:

   - Click on any date in the calendar
   - Fill in the event details:
     - Event Title (e.g., "Dental Screening - Lincoln Elementary")
     - Time (e.g., 10:00 AM)
     - Color (choose from 6 options)
   - Click `Save Event`

3. **View Appointments**:

   - Events appear as colored bars on calendar dates
   - See full details in the "Upcoming Appointments" sidebar

4. **Edit an Appointment**:

   - Click the ✏️ (edit) icon next to the appointment
   - Modify the details
   - Click `Update Communication`

5. **Delete an Appointment**:
   - Click the 🗑️ (delete) icon next to the appointment
   - Confirm deletion

> **⚠️ Warning**: All appointments will be lost when you refresh the page or switch tabs!

### Communication Tab 💬

1. **Add a New Communication Record**:

   - Click the `+ Add Communication` button
   - Fill in all required fields (marked with \*)
   - Add optional information (Current Dentist, Date Called, etc.)
   - Select a Referral Type (TU0, TU1, TU2, or TU3)
   - Add notes if needed
   - Click `Save Communication`

2. **View Records**:

   - All communication records appear in the table below
   - Scroll horizontally on mobile to see all columns
   - Color-coded badges indicate referral types:
     - **TU0**: Blue
     - **TU1**: Green
     - **TU2**: Amber/Yellow
     - **TU3**: Red

3. **Edit a Record**:

   - Click the ✏️ (edit) icon in the Actions column
   - Modify the information
   - Click `Update Communication`

4. **Delete a Record**:
   - Click the 🗑️ (delete) icon in the Actions column
   - Confirm deletion when prompted

> **⚠️ Warning**: All communication records will be lost when you refresh the page or switch tabs!

## ⚠️ Important Limitations

### No Data Persistence

This application is currently **state-based only**, which means:

- ❌ **Data is NOT saved** to any database
- ❌ **Data is NOT saved** to browser localStorage
- ❌ **Data is NOT saved** to any file
- ❌ **All data is lost** when you:
  - Refresh the page
  - Close the browser tab
  - Switch between tabs (Dashboard ↔ Calendar ↔ Communication)
  - Close the application

### What This Means

- **Calendar**: All appointments you create will disappear when you navigate away or refresh
- **Communication**: All patient records you add will be lost when you change tabs or refresh
- **Dashboard**: Statistics are mock data and cannot be modified

### Future Development

To add data persistence, you would need to implement:

- Backend database (MongoDB, PostgreSQL, etc.)
- API endpoints for data operations
- LocalStorage/SessionStorage for client-side persistence
- State management library (Redux, Zustand, etc.)

## 🛠️ Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and development server
- **Chart.js** - Data visualization
- **react-chartjs-2** - React wrapper for Chart.js
- **CSS3** - Styling with responsive design

## 🎨 Brand Colors

- **Primary Blue**: `#0693e3` (Vivid cyan blue)
- **Primary Green**: `#00d084` (Vivid green cyan)
- **Dark Text**: `#32373c` (Dark charcoal)
- **Background**: `#f5f7fa` (Light gray-blue)

**Remember**: This is a demonstration application with no data persistence. Always test thoroughly before using in a production environment with real patient data.
