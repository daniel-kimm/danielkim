import React from 'react';

export default function GitHubContributions({ data }) {
  console.log('GitHubContributions received data:', data);

  if (!data || data.length === 0) {
    return null;
  }

  // Calculate total contributions for the last year
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  const totalContributions = data.reduce((sum, day) => {
    const date = new Date(day.date);
    if (date >= oneYearAgo) {
      return sum + day.count;
    }
    return sum;
  }, 0);

  // Group contributions by month and day
  const contributions = data.reduce((acc, day) => {
    // Parse the date string and adjust for timezone
    const date = new Date(day.date);
    // Adjust for timezone offset to ensure consistent day mapping
    const adjustedDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
    const month = adjustedDate.getMonth();
    const dayOfMonth = adjustedDate.getDate();
    const year = adjustedDate.getFullYear();
    
    // Create a unique key for each month-year combination
    const monthKey = `${year}-${month}`;
    if (!acc[monthKey]) {
      acc[monthKey] = {};
    }
    acc[monthKey][dayOfMonth] = day.count;
    return acc;
  }, {});

  // Debug logging with actual data
  console.log('Raw contribution data (first 10):', data.slice(0, 10).map(d => ({
    date: d.date,
    count: d.count,
    parsedDate: new Date(d.date).toISOString()
  })));

  console.log('Processed contributions by month:', Object.entries(contributions).map(([key, days]) => ({
    monthKey: key,
    days: Object.entries(days).map(([day, count]) => ({
      day: parseInt(day),
      count,
      date: new Date(key.split('-')[0], key.split('-')[1], day).toISOString()
    }))
  })));

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
      monthKey: `${year}-${month}`
    };
  }).reverse();

  console.log('Last 6 months with contributions:', last6Months.map(m => ({
    name: m.name,
    year: m.year,
    days: m.daysInMonth,
    contributions: contributions[m.monthKey] || {},
    monthKey: m.monthKey
  })));

  console.log('Current date:', currentDate.toISOString());
  console.log('Last 6 months dates:', last6Months.map(m => `${m.name} ${m.year}`));

  // Get the intensity color based on contribution count
  const getColor = (count) => {
    if (count === 0) return 'bg-[#F0F0D7]/10';
    if (count === 1) return 'bg-[#9be9a8]';
    if (count <= 3) return 'bg-[#40c463]';
    if (count <= 6) return 'bg-[#30a14e]';
    return 'bg-[#216e39]';
  };

  // Get the contribution text
  const getContributionText = (count) => {
    if (count === 0) return 'No contributions';
    if (count === 1) return '1 contribution';
    return `${count} contributions`;
  };

  return (
    <div className="mt-8 fade-in">
      <h3 className="text-[#F0F0D7] text-center mb-4">GitHub Contributions</h3>
      <div className="flex flex-col items-center">
        <div className="flex gap-2 relative">
          <div className="absolute -top-6 right-0 text-sm text-[#F0F0D7]">
            {totalContributions} contributions in the last year
          </div>
          {last6Months.map((month) => (
            <div key={`${month.year}-${month.month}`} className="flex flex-col items-center">
              <div className="text-[#F0F0D7] text-xs mb-1">{month.name}</div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: month.daysInMonth }, (_, i) => {
                  const day = i + 1;
                  const count = contributions[month.monthKey]?.[day] || 0;
                  return (
                    <div
                      key={`${month.year}-${month.month}-${day}`}
                      className="relative group"
                    >
                      <div
                        className={`w-3 h-3 rounded-sm transition-all duration-200 ${getColor(count)} group-hover:scale-110`}
                      />
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 invisible group-hover:visible z-50 pointer-events-none transition-all duration-200 bg-[#727D73] text-[#F0F0D7] text-xs px-2 py-1 rounded whitespace-nowrap">
                        {count} contribution{count !== 1 ? 's' : ''} on {month.name} {day}
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