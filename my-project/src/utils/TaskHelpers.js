export const calculateSummary = (tasks) => {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const remaining = total - completed;
  
  return { total, completed, remaining };
};

export const formatDate = (dateString) => {
  if (!dateString) return '';
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};