export const formatCurrency = (amount: number, currency: string) => {
  try {
    const formattedNumber = new Intl.NumberFormat('fr-FR', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);

    const symbol = new Intl.NumberFormat('en', {
      style: 'currency',
      currency: currency.toUpperCase(),
      currencyDisplay: 'narrowSymbol',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
      .formatToParts(0)
      .find(part => part.type === 'currency')?.value ?? currency;

    return `${formattedNumber} ${symbol}`;
  } catch {
    return `${amount} ${currency}`;
  }
};
