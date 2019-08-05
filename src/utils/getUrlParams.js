const getUrlParams = location => {
  const searchParams = new URLSearchParams(location.search);
  return {
    query: searchParams.get("name") || ""
  };
};

export default getUrlParams;
