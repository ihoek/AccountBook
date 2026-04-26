export const formatCurrency = (amount: number): string => {
  return Math.abs(amount).toLocaleString('ko-KR') + '원';
};

export const formatMonth = (date: Date): string => {
  return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
};

export const formatDate = (dateStr: string): string => {
  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];

  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];

  if (dateStr === todayStr) return '오늘';
  if (dateStr === yesterdayStr) return '어제';

  const date = new Date(dateStr);
  return `${date.getMonth() + 1}월 ${date.getDate()}일`;
};
