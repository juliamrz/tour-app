export const formatNumber = (num: number) => {
  return new Intl.NumberFormat("en-US", { useGrouping: true })
    .format(num)
    .replace(/,/g, ' ');
}
