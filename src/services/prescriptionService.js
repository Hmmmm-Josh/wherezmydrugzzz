export const getPrescriptionData = async () => {
  const response = await fetch('/api/prescription');
  const data = await response.json();
  return data;
};