import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const getImages = async (searchQuery, page) => {
  const { data } = await axios.get("/search/photos", {
    params: {
      client_id: "QMyvt8jb24108khvQVvUu6GbAKmLMegr2UZ9NZ7VatM",
      query: searchQuery,
      page: page,
      per_page: 20,
    },
  });
  return data;
};
