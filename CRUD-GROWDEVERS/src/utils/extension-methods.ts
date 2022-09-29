interface String {
  clearSpecialCharacteres(): string;
}

interface Number {
  multiplicarPor10(): string;
}

String.prototype.clearSpecialCharacteres = function () {
  return this.replace(/\W/g, "");
};

Number.prototype.multiplicarPor10 = function () {
  return (Number(this) * 10).toString();
};

// export const removeSpecialCharacteres = (value: string) => {
//   return value.replace(/\W/g, "");
// };
