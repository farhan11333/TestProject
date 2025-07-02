
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Electronics', value: 40, color: '#3b82f6' },
  { name: 'Furniture', value: 35, color: '#8b5cf6' },
  { name: 'Clothing', value: 25, color: '#10b981' },
];

export function RevenueChart() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend 
            verticalAlign="middle" 
            align="right" 
            layout="vertical"
            iconType="circle"
            wrapperStyle={{ paddingLeft: '20px', fontSize: '14px' }}
          />
        </PieChart>
      </ResponsiveContainer>
      
    </div>
  );
}
