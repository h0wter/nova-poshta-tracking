const formatDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

const getTodayDate = () => {
  const today = new Date();
  const formattedDate = formatDate(today);
  console.log(formattedDate);
  return formattedDate;
};

export { getTodayDate };
