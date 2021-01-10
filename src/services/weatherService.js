import http from './httpService';
export default async function getWeather(lat, lon) {
  const data = await http.get(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=78a500181eede1d5e50c73da32b26fa4`,
  );

  let result = await data;
  console.log('resons', result);

  return result;
}
