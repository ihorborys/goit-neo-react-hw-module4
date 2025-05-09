import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
export const getImages = async (searchQuery) => {
  console.log("🔍 searchQuery:", searchQuery);

  if (!searchQuery || searchQuery.trim() === "") {
    throw new Error("Search query is missing");
  }
  const { data } = await axios.get("/search/photos", {
    params: {
      client_id: "QMyvt8jb24108khvQVvUu6GbAKmLMegr2UZ9NZ7VatM",
      page: 1,
      per_page: 20,
      query: searchQuery,
    },
  });
  return data;
};
