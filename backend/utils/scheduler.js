function scheduleTasks(tasks, availableSlots) {
  const sorted = tasks.sort((a, b) => {
    const urgencyA = new Date(a.deadline) - Date.now();
    const urgencyB = new Date(b.deadline) - Date.now();
    return (urgencyA / a.priority) - (urgencyB / b.priority);
  });

  const schedule = [];

  for (const slot of availableSlots) {
    const task = sorted.find(t => !t.scheduledDate);
    if (task) {
      task.scheduledDate = slot;
      schedule.push({ ...task, timeSlot: slot });
    }
  }

  return schedule;
}

module.exports = { scheduleTasks };
