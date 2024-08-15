export const fetchPhotos = async (page: number = 1): Promise<string[]> => {
  const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=9`);
  const data = await response.json();
  return data.map((photo: any) => photo.download_url);
};