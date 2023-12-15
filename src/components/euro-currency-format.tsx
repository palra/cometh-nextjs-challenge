import CurrencyFormat from "react-currency-format";

export function EuroCurrencyFormat({
  value,
  className,
  fixedDecimalScale,
}: CurrencyFormat.Props) {
  return (
    <CurrencyFormat
      value={value ? Number(value) / 100 : value}
      displayType={"text"}
      suffix={"\u00A0€"}
      thousandSeparator={"\u00A0"}
      decimalSeparator=","
      decimalScale={2}
      {...{ className, fixedDecimalScale }}
    />
  );
}
