//export function formatDate(dateString: string) {
// si quiero transformarlo en una función de flecha.. sería de esta forma
// si se quiere trabajar todo con funciones de flecha..
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("es", options);
};
