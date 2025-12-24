import { useState } from 'react';
import './Communication.css';

const Communication = () => {
  const [communications, setCommunications] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    date: '',
    patientName: '',
    schoolYear: '',
    currentDentist: '',
    language: '',
    dateCalled: '',
    dateEmailed: '',
    referralType: '',
    notes: '',
    createdBy: '',
  });

  const referralTypes = ['TU0', 'TU1', 'TU2', 'TU3'];

  const languages = [
    'English',
    'Spanish',
    'Mandarin',
    'Cantonese',
    'Vietnamese',
    'Korean',
    'Tagalog',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      // Update existing communication
      setCommunications(communications.map(comm =>
        comm.id === editingId ? { ...formData, id: editingId } : comm
      ));
      setEditingId(null);
    } else {
      // Add new communication
      const newCommunication = {
        ...formData,
        id: Date.now(),
      };
      setCommunications([...communications, newCommunication]);
    }

    // Reset form
    setFormData({
      date: '',
      patientName: '',
      schoolYear: '',
      currentDentist: '',
      language: '',
      dateCalled: '',
      dateEmailed: '',
      referralType: '',
      notes: '',
      createdBy: '',
    });
    setShowForm(false);
  };

  const handleEdit = (communication) => {
    setFormData(communication);
    setEditingId(communication.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this communication record?')) {
      setCommunications(communications.filter(comm => comm.id !== id));
    }
  };

  const handleCancel = () => {
    setFormData({
      date: '',
      patientName: '',
      schoolYear: '',
      currentDentist: '',
      language: '',
      dateCalled: '',
      dateEmailed: '',
      referralType: '',
      notes: '',
      createdBy: '',
    });
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="communication-container">
      <div className="communication-header">
        <div>
          <h1>Communication</h1>
          <p className="communication-subtitle">Track patient interactions and referrals</p>
        </div>
        <button className="add-button" onClick={() => setShowForm(true)}>
          + Add Communication
        </button>
      </div>

      {showForm && (
        <div className="form-card">
          <div className="form-card-header">
            <h3>{editingId ? 'Edit Communication' : 'New Communication'}</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-field">
                <label>Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-field">
                <label>Patient's Name *</label>
                <input
                  type="text"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleInputChange}
                  placeholder="Enter patient's full name"
                  required
                />
              </div>

              <div className="form-field">
                <label>School Year *</label>
                <input
                  type="text"
                  name="schoolYear"
                  value={formData.schoolYear}
                  onChange={handleInputChange}
                  placeholder="e.g., 2024-2025"
                  required
                />
              </div>

              <div className="form-field">
                <label>Current Dentist</label>
                <input
                  type="text"
                  name="currentDentist"
                  value={formData.currentDentist}
                  onChange={handleInputChange}
                  placeholder="Enter dentist's name"
                />
              </div>

              <div className="form-field">
                <label>Language *</label>
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Language</option>
                  {languages.map(lang => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>

              <div className="form-field">
                <label>Date Called</label>
                <input
                  type="date"
                  name="dateCalled"
                  value={formData.dateCalled}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-field">
                <label>Date Emailed</label>
                <input
                  type="date"
                  name="dateEmailed"
                  value={formData.dateEmailed}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-field">
                <label>Referral Type *</label>
                <select
                  name="referralType"
                  value={formData.referralType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Referral Type</option>
                  {referralTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="form-field full-width">
                <label>Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Add any additional notes or comments"
                  rows="4"
                />
              </div>

              <div className="form-field">
                <label>Created By *</label>
                <input
                  type="text"
                  name="createdBy"
                  value={formData.createdBy}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="cancel-btn" onClick={handleCancel}>
                Cancel
              </button>
              <button type="submit" className="submit-btn">
                {editingId ? 'Update' : 'Save'} Communication
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="communications-table-card">
        <h3>Communication Records</h3>
        {communications.length === 0 ? (
          <div className="empty-state">
            <p>No communication records found</p>
            <p className="empty-state-subtitle">Click "Add Communication" to create your first record</p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="communications-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Patient's Name</th>
                  <th>School Year</th>
                  <th>Current Dentist</th>
                  <th>Language</th>
                  <th>Date Called</th>
                  <th>Date Emailed</th>
                  <th>Referral Type</th>
                  <th>Created By</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {communications.map((comm) => (
                  <tr key={comm.id}>
                    <td>{new Date(comm.date).toLocaleDateString()}</td>
                    <td className="patient-name">{comm.patientName}</td>
                    <td>{comm.schoolYear}</td>
                    <td>{comm.currentDentist || '-'}</td>
                    <td>{comm.language}</td>
                    <td>{comm.dateCalled ? new Date(comm.dateCalled).toLocaleDateString() : '-'}</td>
                    <td>{comm.dateEmailed ? new Date(comm.dateEmailed).toLocaleDateString() : '-'}</td>
                    <td>
                      <span className={`referral-badge referral-${comm.referralType.toLowerCase()}`}>
                        {comm.referralType}
                      </span>
                    </td>
                    <td>{comm.createdBy}</td>
                    <td>
                      <div className="action-buttons">
                        <button
                          className="edit-btn"
                          onClick={() => handleEdit(comm)}
                          title="Edit"
                        >
                          ✏️
                        </button>
                        <button
                          className="delete-btn"
                          onClick={() => handleDelete(comm.id)}
                          title="Delete"
                        >
                          🗑️
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Communication;
