export function formatCurrency(currency) {
  return new Intl.NumberFormat('de-DE').format(currency)
}

export const rateSale = (original, sale) => Math.round(((original - sale) / original) * 100) + '%'
