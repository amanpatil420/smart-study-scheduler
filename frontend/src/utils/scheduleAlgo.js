export const scheduleTasks = (tasks, availableDates) => {
  const sorted = [...tasks].sort((a, b) => {
    const urgencyA = new Date(a.deadline) - Date.now();
    const urgencyB = new Date(b.deadline) - Date.now();
    return (urgencyA / a.priority) - (urgencyB / b.priority);
  });

  const schedule = [];

  for (let i = 0; i < availableDates.length; i++) {
    if (sorted[i]) {
      sorted[i].scheduledDate = availableDates[i];
      schedule.push(sorted[i]);
    }
  }

  return schedule;
};
