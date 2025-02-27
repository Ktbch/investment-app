
const BASE_URL="https://backend-servcie-586n.onrender.com/api/v1/";

// DESIGN PATTERN SOLVING A DESIGN PROBLEM

// const signOut = () => {
//   const { setIsLoggedIn } = useUserContext();
//   setIsLoggedIn(false);
//   window.location.replace("#/Sign-in");
//   console.log("checking");
// };

const pathWithBaseUrl=(path) => {
  if(path.includes("http")) {
    return path;
  }
  return BASE_URL+path;
};

const getHeaders=() => {
  const token=localStorage.getItem("token");
  console.log(localStorage.getItem("cookieConcent"));
  const headers={
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    "cookie-consent": localStorage.getItem("cookieConcent")? "true":"false",
  };

  return headers;
};

// work

const handleRequestError=async (response,errorMessage) => {
  if(response.ok) {
    return;
  }

  if(response.status===500) {
    return 'Internal Server Error Try Again Later'
  }

  const error=await response.json()
  return error.message
};

const makeRequest=async (method,path,data) => {
  const response=await fetch(path,{
    method: method,
    credentials: "include",
    headers: {
      ...getHeaders(),
    },
    body: data? JSON.stringify(data):undefined,
  });

  const error=await handleRequestError(response,"error");

  if(error) {
    console.log(error.message)
    return error
  }
  try {
    return await response.json();
  } catch {
    return response;
  }
};

const makeRawRequest=async (path) => {
  return await fetch(path,{method: "GET",credentials: "include"});
};

export const ApiRequest={
  GET: async (path) => {
    const response=await makeRawRequest(pathWithBaseUrl(path));
    await handleRequestError(response,"error");
    return await response.json();
  },
  POST: async (path,data) =>
    await makeRequest("POST",pathWithBaseUrl(path),data),
  PATCH: async (path) => await makeRequest("PATCH",pathWithBaseUrl(path)),
  PUT: async (path) => await makeRequest("PUT",pathWithBaseUrl(path)),
  DELETE: async (path) => await makeRequest("DELETE",pathWithBaseUrl(path)),
};
