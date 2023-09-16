export const priceDecimalFormatter = (price: number): string => {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const lowerCaseFormatter = (
  string: string | undefined
): string | undefined => {
  return string?.toLocaleLowerCase();
};
