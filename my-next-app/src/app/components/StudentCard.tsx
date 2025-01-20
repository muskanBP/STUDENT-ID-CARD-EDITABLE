'use client';

import React, { useState } from 'react';

interface StudentCardProps {
  initialName: string;
  initialAge: number;
  initialRollNumber: string;
  initialClass: string;
}

const StudentCard: React.FC<StudentCardProps> = ({
  initialName,
  initialAge,
  initialRollNumber,
  initialClass,
}) => {
  const [name, setName] = useState(initialName);
  const [age, setAge] = useState(initialAge);
  const [rollNumber, setRollNumber] = useState(initialRollNumber);
  const [studentClass, setStudentClass] = useState(initialClass);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => setAge(Number(e.target.value));
  const handleRollNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => setRollNumber(e.target.value);
  const handleClassChange = (e: React.ChangeEvent<HTMLInputElement>) => setStudentClass(e.target.value);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleEdit = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 max-w-sm">
      {isSubmitted ? (
        // Show the submitted data
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
          <p className="text-gray-600">Age: {age}</p>
          <p className="text-gray-600">Roll Number: {rollNumber}</p>
          <p className="text-gray-600">Class: {studentClass}</p>
          <button
            onClick={handleEdit}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Edit
          </button>
        </div>
      ) : (
        // Show the form with input fields
        <div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={handleNameChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-600">Age</label>
            <input
              id="age"
              type="number"
              value={age}
              onChange={handleAgeChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="rollNumber" className="block text-gray-600">Roll Number</label>
            <input
              id="rollNumber"
              type="text"
              value={rollNumber}
              onChange={handleRollNumberChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="studentClass" className="block text-gray-600">Class</label>
            <input
              id="studentClass"
              type="text"
              value={studentClass}
              onChange={handleClassChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default StudentCard;
