import React, { useEffect, useState } from 'react';

function TermsPage() {
  const [termsContent, setTermsContent] = useState('');

  useEffect(() => {
    fetch('API_URL')
      .then(response => response.text())
      .then(data => setTermsContent(data))
      .catch(error => console.error('Error fetching terms:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1>Terms and Conditions</h1>
      <div dangerouslySetInnerHTML={{ __html: termsContent }} />
    </div>
  );
}

export default TermsPage;
