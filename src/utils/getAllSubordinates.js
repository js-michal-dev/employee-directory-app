import http from "../service/httpService";
import flatten from "./flatten";

const DIRECT_SUBORDINATES = "direct-subordinates";

const getAllSubordinates = async employee => {
  return [...new Set(await getSubordinates([employee]))];
};

const getSubordinates = async employees => {
  const fetchSubordinates = async employee => {
    try {
      const { data } = await http.get(`/${employee}`);
      return (data[1] && data[1][DIRECT_SUBORDINATES]) || [];
    } catch (error) {
      throw error.response.statusText;
    }
  };

  if (employees.length === 0) {
    return [];
  }

  const subordinates = [
    ...new Set(
      flatten(
        await Promise.all(
          employees.map(async employee => await fetchSubordinates(employee))
        )
      )
    )
  ];
  return subordinates.concat(await getSubordinates(subordinates));
};

export default getAllSubordinates;
