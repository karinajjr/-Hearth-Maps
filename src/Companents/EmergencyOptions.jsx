import React from 'react';

const options = [
    'Medical', 'Fire', 'Rescue', 'Violance',
    'Accident', 'Natural disasster', 'Call Umida'
];

const EmergencyOptions = () => (
    <div className="flex flex-wrap justify-center gap-2  mb-6">

        {options.map((opt) => (

            <button key={opt} className="bg-gray-100 rounded-full px-1.5 py-0.5 text-sm flex items-center gap-2" >
                <span className="w-3 h-3 bg-blue-400 rounded-full"></span> {opt}
            </button>
        ))}
    </div>
);

export default EmergencyOptions;
