import axiosPublic from "../util/axiosPublic";

export const getCategoriesAPI = async () => {
  const res = await axiosPublic.get("/api/category", {
    withCredentials: true,
  });

  return res.data;
};
