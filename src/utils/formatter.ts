import { format } from "date-fns";

export const formatDateTime = (date: any, formatString: any) => {
  if (date === "" || date === "N/A") return "--";
  if (date === null) return "--";
  if (date === undefined) return "--";
  const formattedDate =
    typeof date === "string"
      ? format(new Date(date), formatString)
      : format(date, formatString);
  return formattedDate;
};

const currencyOptions = [
  { key: "£", value: "Pound" },
  { key: "£", value: "GBP" },
  { key: "$", value: "Dollar" },
  { key: "$", value: "USD" },
  { key: "₦", value: "Naira" },
  { key: "₦", value: "NGN" },
  { key: "€", value: "Euro" },
  { key: "€", value: "EUR" },
  { key: "₵", value: "Cedi" },
];

export const getCurrency = (currencyName: string) => {
  const currency: any = currencyOptions.find(
    (option) => option.value.toLowerCase() === currencyName.toLowerCase()
  );
  return currency?.key;
};
