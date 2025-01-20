import React from 'react';
import StudentCard from '../StudentCard';



const students = [
  {
    name: 'Alice Johnson',
    age: 15,
    rollNumber: '101',
    studentClass: '10th Grade',
  },
  {
    name: 'Bob Smith',
    age: 16,
    rollNumber: '102',
    studentClass: '11th Grade',
  },
  {
    name: 'Charlie Brown',
    age: 17,
    rollNumber: '103',
    studentClass: '12th Grade',
  },
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Editable Student ID Cards</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student, index) => (
          <StudentCard
            key={index}
            initialName={student.name}
            initialAge={student.age}
            initialRollNumber={student.rollNumber}
            initialClass={student.studentClass}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
