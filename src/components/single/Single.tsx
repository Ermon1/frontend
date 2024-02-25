import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./single.scss";

// Profile.tsx

import React from 'react';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string | null;
  role: string;
  username: string;
}

interface ProfileProps {
  user: User;
}

const Single: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div className="container mx-auto mt-10">
      <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">{`${user.firstName} ${user.lastName}`}</h2>
          <p className="text-gray-600 mb-2">{`Email: ${user.email}`}</p>
          {user.phoneNumber && (
            <p className="text-gray-600 mb-2">{`Phone Number: ${user.phoneNumber}`}</p>
          )}
          <p className="text-gray-600 mb-2">{`Role: ${user.role}`}</p>
          <p className="text-gray-600 mb-2">{`Username: ${user.username}`}</p>
        </div>
      </div>
    </div>
  );
};




export default Single;
