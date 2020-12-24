export const formatPrice = (amount) => {
  let i = amount.toString();
  let j = i.length > 3 ? i.length % 3 : 0;
  return (
    (j ? i.substr(0, j) + "," : "") +
    i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + ",")
  );
};
