import axios from "axios";

axios.defaults.baseURL = "http://api.unsplash.com//search/photos";
export const getImages = async () => {
  const { data } = await axios.get("", {
    params: {
      client_id: "QMyvt8jb24108khvQVvUu6GbAKmLMegr2UZ9NZ7VatM",
      page: 1,
      per_page: 2,
      query: "red car",
    },
  });
  return data;
};
