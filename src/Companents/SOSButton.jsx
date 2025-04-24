import React from 'react';

const SOSButton = () => {
  const handleSOS = () => {
    const message = "Мама, я в опасности!";
    const phone = "+998991449406"; 
    const smsLink = `sms:${phone}?body=${encodeURIComponent(message)}`;
    window.location.href = smsLink;
  };

  return (
    <button onClick={handleSOS}  className=" my-8 w-50 h-50 rounded-full bg-blue-600 text-white text-4xl font-bold shadow-lg border-20 border-blue-200" >
      SOS
    </button>
  );
};

export default SOSButton;
