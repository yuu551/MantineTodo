export const getToday = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  // 月と日を文字列に変換し、"月日"の形式で表示する
  const formattedDate = month + "月" + day + "日";

  return formattedDate;
};

export const extractDate = (date: string) => {
  const targetDate = new Date(date);
  const month = targetDate.getMonth() + 1;
  const day = targetDate.getDate();

  // 月と日を文字列に変換し、"月日"の形式で表示する
  const formattedDate = month + "月" + day + "日";

  return formattedDate;
};

export const getTodayDay = () => {
  const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];
  const today = new Date();
  const dayOfWeekIndex = today.getDay();

  // 曜日を配列から取得
  const dayOfWeek = daysOfWeek[dayOfWeekIndex];

  return dayOfWeek;
};

export const extractDay = (date: string) => {
  const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];
  const targetDate = new Date(date);
  const dayOfWeekIndex = targetDate.getDay();

  // 曜日を配列から取得
  const dayOfWeek = daysOfWeek[dayOfWeekIndex];

  return dayOfWeek;
};
