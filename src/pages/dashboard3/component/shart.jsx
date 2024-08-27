
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// eslint-disable-next-line react/prop-types
const Chart = ({ percentage = 60, highlightColor = '#82ca9d', grayColor = '#5e5c5c' }) => {
  // Calculate remaining percentage
  const remaining = 100 - percentage;

  // Define the data
  const data02 = [
    { name: 'Highlighted', value: percentage }, // Highlighted percentage
    { name: 'Remaining', value: remaining },   // Remaining percentage
  ];

  // Define the colors
  const COLORS = [highlightColor, grayColor]; // Highlighted color and gray for the rest

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data02}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={35} // Adjust inner and outer radius to fit
          outerRadius={40} 
          fill={highlightColor}
          startAngle={90}
          endAngle={450}
          
          
          stroke="none" // Remove the outline
        >
          {data02.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        {/* Custom label in the center */}
        <text
          x="50%"
          y="50%"
          dy={5}
          textAnchor="middle"
          fill="#f6f6f4"
          fontSize={16} // Adjusted font size
          fontWeight="bold"
        >
          {`${percentage}%`}
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default Chart;
