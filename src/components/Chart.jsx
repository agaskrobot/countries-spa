import PropTypes from 'prop-types';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';

export function Chart({ countries }) {
  if (!countries.length) {
    return null;
  }

  return (
    <div className="flex text-xs mt-5 w-64 h-64 sm:w-98 sm:h-98 items-center justify-center mx-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={countries}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar maxBarSize={40} dataKey="population" fill="rgba(99, 102, 241, var(--tw-bg-opacity))" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

Chart.propTypes = {
  countries: PropTypes.array
};
