export function formatCredits(amount, precision) {
  if (Number.isNaN(parseFloat(amount))) return '0';
  return parseFloat(amount)
    .toFixed(precision || 1)
    .replace(/\.?0+$/, '');
}

export function formatFullPrice(amount, precision = 1) {
  let formated = '';

  const quantity = amount.toString().split('.');
  const fraction = quantity[1];

  if (fraction) {
    const decimals = fraction.split('');
    const first = decimals.filter((number) => number !== '0')[0];
    const index = decimals.indexOf(first);

    // Set format fraction
    formated = `.${fraction.substring(0, index + precision)}`;
  }

  return parseFloat(quantity[0] + formated);
}

export function creditsToString(amount) {
  const creditString = String(amount);

  if (creditString.includes('.')) {
    return creditString;
  }
  return `${creditString}.0`;
}
