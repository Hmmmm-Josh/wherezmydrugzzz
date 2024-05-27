
import React, { useState } from 'react';
import { getPrescriptionData } from '../services/prescriptionService';

const Prescription = () => {
  const [prescription, setPrescription] = useState(null);

  const fetchPrescription = async () => {
    const data = await getPrescriptionData();
    setPrescription(data);
  };

  return (
    <div>
      <h1>Prescription Details</h1>
      <button onClick={fetchPrescription}>Get Prescription</button>
      {prescription && (
        <div>
          <p>Medicine: {prescription.medicine}</p>
          <p>Dosage: {prescription.dosage}</p>
        </div>
      )}
    </div>
  );
};

export default Prescription;
