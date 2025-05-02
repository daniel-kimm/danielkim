import React from 'react';

export default function GitHubContributions({ data }) {
  if (!data || data.length === 0) {
    return null;
  }

  console.log('GitHubContributions received data:', data);

  // Calculate total contributions
  const totalContributions = data.reduce((sum, day) => sum + day.count, 0);
  console.log('Total contributions calculated:', totalContributions);

  // Group contributions by month and day
  const contributions = data.reduce((acc, day) => {
    const date = new Date(day.date);
    const month = date.getMonth();
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();
    
    // Create a unique key for each month-year combination
    const monthKey = `${year}-${month}`;
    if (!acc[monthKey]) {
      acc[monthKey] = {
        days: {},
        firstDayOfWeek: new Date(year, month, 1).getDay() // 0 = Sunday, 6 = Saturday
      };
    }
    acc[monthKey].days[dayOfMonth] = day.count;
    return acc;
  }, {});

  console.log('Grouped contributions:', contributions);

  // Get the last 6 months
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const currentDate = new Date();
  const last6Months = Array.from({ length: 6 }, (_, i) => {
    const date = new Date(currentDate);
    date.setMonth(currentDate.getMonth() - i);
    const year = date.getFullYear();
    const month = date.getMonth();
    
    return {
      month,
      year,
      name: months[month],
      daysInMonth: new Date(year, month + 1, 0).getDate(),
      monthKey: `${year}-${month}`,
      firstDayOfWeek: new Date(year, month, 1).getDay()
    };
  }).reverse();

  console.log('Last 6 months:', last6Months);

  // Get the intensity color based on contribution count
  const getColor = (count) => {
    if (!count || count === 0) return 'bg-[#F0F0D7]/10'; // Light background for empty cells
    if (count === 1) return 'bg-[#9be9a8]';
    if (count <= 3) return 'bg-[#40c463]';
    if (count <= 6) return 'bg-[#30a14e]';
    return 'bg-[#216e39]';
  };

  return (
    <div className="mt-8 fade-in">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-2xl relative mb-8">
          <h3 className="text-[#F0F0D7] text-center text-lg font-semibold">GitHub Contributions</h3>
          <div className="text-sm text-[#F0F0D7] absolute top-0 right-0">
            {totalContributions} contributions
          </div>
        </div>
        <div className="flex gap-2">
          {last6Months.map(({ name, year, daysInMonth, monthKey, firstDayOfWeek }) => (
            <div key={monthKey} className="flex flex-col items-center">
              <div className="text-[#F0F0D7] text-xs mb-1">{name}</div>
              <div className="grid grid-cols-7 gap-1">
                {/* Add empty cells for days before the first day of the month */}
                {Array.from({ length: firstDayOfWeek }, (_, i) => (
                  <div key={`empty-${i}`} className="w-3 h-3" />
                ))}
                {/* Add cells for each day of the month */}
                {Array.from({ length: daysInMonth }, (_, i) => {
                  const day = i + 1;
                  const count = contributions[monthKey]?.days[day] || 0;
                  return (
                    <div
                      key={`${monthKey}-${day}`}
                      className="relative group"
                    >
                      <div
                        className={`w-3 h-3 rounded-sm transition-all duration-200 ${getColor(count)} group-hover:scale-110`}
                      />
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 invisible group-hover:visible z-50 pointer-events-none transition-all duration-200 bg-[#727D73] text-[#F0F0D7] text-xs px-2 py-1 rounded whitespace-nowrap">
                        {count} contribution{count !== 1 ? 's' : ''} on {name} {day}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 