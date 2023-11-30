const httpGET = async (endpoint) => {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: AUTH,
    },
  });

  const data = await res.json();

  return data;
};

const BASE_URL = "https://api.themoviedb.org/3";
const AUTH =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDNiMDU2YzdjNzU3OWFkNDhlOTA4MDA2ZGNhNWE1MiIsInN1YiI6IjY1NjRlMjhmN2RmZGE2NTkzMTc1YjllYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0wtJ7NjO-YTwt3X8vSYj5_-pUbE2sGFwSnGfgHroFqI";

export { httpGET };
