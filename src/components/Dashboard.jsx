import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './Dashboard.css';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Mock data for metric cards
  const metrics = {
    activeStudents: 11,
    activeSchools: 18,
  };

  // Mock data for Oral Health Status chart
  const oralHealthData = {
    labels: ['History of Caries', 'Sealant Present', 'Untreated Caries'],
    datasets: [
      {
        label: 'Yes',
        data: [10, 45, 45],
        backgroundColor: '#0693e3',
      },
      {
        label: 'No',
        data: [90, 55, 55],
        backgroundColor: '#00d084',
      },
    ],
  };

  // Mock data for Services Received chart (stacked)
  const servicesData = {
    labels: ['Sealant', 'Vaccine', 'Diabetes'],
    datasets: [
      {
        label: 'Yes',
        data: [40, 40, 40],
        backgroundColor: '#0693e3',
      },
      {
        label: 'No',
        data: [60, 60, 60],
        backgroundColor: '#00d084',
      },
    ],
  };

  // Chart options for Oral Health Status
  const oralHealthOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  // Chart options for Services (stacked)
  const servicesOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  // Mock data for School Statistics table
  const schoolStats = [
    {
      school: 'ANGELU ELEMENTARY SCHOOL',
      studentServed: 2,
      receivingSealant: 2,
      receivingFluoride: 2,
      receivingProphy: 2,
      studentsIn3rdGrade: 0,
    },
    {
      school: 'GLENORE ELEMENTARY SCHOOL',
      studentServed: 4,
      receivingSealant: 2,
      receivingFluoride: 2,
      receivingProphy: 2,
      studentsIn3rdGrade: 0,
    },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p className="dashboard-subtitle">Overview of key metrics and statistics</p>
      </div>

      {/* Metric Cards */}
      <div className="metrics-container">
        <div className="metric-card">
          <div className="metric-icon" style={{ backgroundColor: '#0693e3' }}></div>
          <div className="metric-content">
            <div className="metric-label">Active Students</div>
            <div className="metric-value">{metrics.activeStudents}</div>
          </div>
        </div>
        <div className="metric-card">
          <div className="metric-icon" style={{ backgroundColor: '#00d084' }}></div>
          <div className="metric-content">
            <div className="metric-label">Active Schools</div>
            <div className="metric-value">{metrics.activeSchools}</div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts-container">
        <div className="chart-card">
          <h3>Oral Health Status (%) Summary</h3>
          <div className="chart-wrapper">
            <Bar data={oralHealthData} options={oralHealthOptions} />
          </div>
        </div>
        <div className="chart-card">
          <h3>% of children receiving the following service</h3>
          <div className="chart-wrapper">
            <Bar data={servicesData} options={servicesOptions} />
          </div>
        </div>
      </div>

      {/* Tables Section */}
      <div className="tables-container">
        {/* School Statistics Table */}
        <div className="table-card">
          <h3>CSDP's Statistics By School</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th># Student Served</th>
                  <th># Receiving Sealant</th>
                  <th># Receiving Fluoride</th>
                  <th># Receiving Prophy</th>
                  <th># Students in 3rd Grade</th>
                </tr>
              </thead>
              <tbody>
                {schoolStats.map((row, index) => (
                  <tr key={index}>
                    <td>
                      <div className="school-name">{row.school}</div>
                      <div>{row.studentServed}</div>
                    </td>
                    <td>{row.receivingSealant}</td>
                    <td>{row.receivingFluoride}</td>
                    <td>{row.receivingProphy}</td>
                    <td>{row.studentsIn3rdGrade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Facilities Statistics Table */}
        <div className="table-card">
          <h3>CSDP's Statistics By Facilities</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th># People Serve</th>
                  <th># Receiving Fluoride</th>
                  <th># Receiving Prophy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="3" className="no-data">
                    No data available in table
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="table-info">Showing 0 to 0 of 0 entries</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
