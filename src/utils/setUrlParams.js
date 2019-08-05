const setUrlParams = ({ query = "" }) => {
  const searchParams = new URLSearchParams();
  searchParams.set("name", query);
  return searchParams.toString();
};

export default setUrlParams;
