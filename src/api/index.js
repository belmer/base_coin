export async function getProducts() {
  const products = await fetch('https://api.pro.coinbase.com/products')
  return products.json()
}

export async function getProduct24HrStat(id) {
  const stats = await fetch(`https://api.pro.coinbase.com/products/${id}/stats`)
  return stats.json()
}
