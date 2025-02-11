const GetAPICall = async (url) => {
  const response = await fetch(url);
  return response.json();
};

const PostAPICall = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export { GetAPICall, PostAPICall };
