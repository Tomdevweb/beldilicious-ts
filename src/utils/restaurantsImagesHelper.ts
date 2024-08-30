export const getImageUrl = async (id: string): Promise<string> => {
  const imageModule = await import(`../assets/restaurants/${id}.png`);
  return imageModule.default;
};
