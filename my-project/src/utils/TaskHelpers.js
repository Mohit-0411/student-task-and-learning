export const calculatetaskSummary = (tasks) => {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const remaining = total - completed;
  
  return { total, completed, remaining };
};