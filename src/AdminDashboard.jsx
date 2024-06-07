import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminDashboard = () => {
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/Forms') // Adjust the URL according to your setup
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data); // Log the fetched data
        setFormData(data.Forms || []); // Ensure data.Forms is an array
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching form data:', error); // Log any errors
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Admin Dashboard</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Num</th>
            <th scope="col">Coming</th>
            <th scope="col">Leaving</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
        <tbody>
          {formData.length > 0 ? (
            formData.map((form, index) => (
              <tr key={form.id}> {/* Using form.id as key */}
                
                <td>{form.firstname}</td>
                <td>{form.lastname}</td>
                <td>{form.email}</td>
                <td>{form.phone}</td>
                <td>{form.num}</td>
                <td>{form.coming}</td>
                <td>{form.leaving}</td>
                <td>{form.details}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="text-center">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
