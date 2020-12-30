import http from './httpService';
export default function getWeather(lat, lon) {
  return http.get(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=ac7c75b9937a495021393024d0a90c44`,
  );
}
