import gdax from 'gdax';

const publicClient = new gdax.PublicClient();

export async function getProducts() {
  const products = await publicClient.getProducts();
  return products;
}

export async function getProduct24HrStat(id) {
  const stats = await publicClient.getProduct24HrStats(id);
  return stats;
}
