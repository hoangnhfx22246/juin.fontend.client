import axiosPublic from "../util/axiosPublic";

export const getCategories = async () => {
  const res = await axiosPublic.get("/api/categories/sub");
  return res.data;
};
