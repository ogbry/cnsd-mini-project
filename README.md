# Clean & Seal Dashboard

A comprehensive React-based management system for the Clean & Seal Dental Program (CSDP) featuring dashboard analytics, calendar scheduling, and patient communication tracking.

## Features

### Dashboard
- Company-branded navigation with official Clean & Seal logo
- Active Students and Schools metric cards
- Oral Health Status (%) Summary chart
- Services received percentage chart
- CSDP's Statistics by School table
- CSDP's Statistics by Facilities table

### Calendar
- Google Calendar-inspired interface
- Month view with day-by-day breakdown
- Add, edit, and delete appointments
- Color-coded events (6 color options)
- Upcoming appointments sidebar
- Click any date to schedule new events

### Communication
- Track patient interactions and referrals
- Comprehensive patient information form including:
  - Date, Patient's Name, School Year
  - Current Dentist, Language selection
  - Date Called, Date Emailed
  - Referral Type (TU0, TU1, TU2, TU3)
  - Notes and Created By fields
- Full CRUD functionality (Create, Read, Update, Delete)
- Searchable and sortable data table
- Color-coded referral type badges

### Design
- Professional color scheme matching cleanandsealdp.com
- Responsive sidebar navigation (converts to top bar on mobile)
- **Fully responsive design** optimized for:
  - **Desktop** (1024px and above): Full sidebar with spacious layouts
  - **Tablet** (768px - 1024px): Optimized grid layouts and adjusted spacing
  - **Mobile** (480px - 768px): Top navigation bar, stacked layouts
  - **Small Mobile** (below 480px): Compact views with touch-optimized controls
- Clean, accessible interface with proper touch targets (44px minimum)
- Smooth transitions and animations
- Horizontally scrollable tables on small screens
- Optimized form layouts for mobile input

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

Dependencies are already installed. If you need to reinstall them:

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm run dev
```

The application will open at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Technologies Used

- React 18
- Vite
- Chart.js with react-chartjs-2
- CSS3

## Brand Colors

The dashboard uses the official Clean & Seal Dental Program color scheme:
- Primary Blue: `#0693e3` (Vivid cyan blue)
- Primary Green: `#00d084` (Vivid green cyan)
- Dark Text: `#32373c` (Dark charcoal)
- Background: `#f5f7fa` (Light gray-blue)

## Project Structure

```
src/
  ├── components/
  │   ├── Dashboard.jsx
  │   ├── Dashboard.css
  │   ├── Calendar.jsx
  │   ├── Calendar.css
  │   ├── Communication.jsx
  │   ├── Communication.css
  │   ├── Sidebar.jsx
  │   └── Sidebar.css
  ├── App.jsx
  ├── App.css
  ├── main.jsx
  └── index.css
public/
  └── clean-and-seal-logo.png
```
