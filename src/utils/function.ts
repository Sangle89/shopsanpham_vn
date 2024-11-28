export function formatMoney(price: number) {
  return new Intl.NumberFormat("vi-VN").format(price / 10000);
}

export function productUrl(title: string, item_id: number, shop_id: number) {
  return `/san-pham/${title.replace(/ /g, "-")}-i.${shop_id}.${item_id}`;
}

export function extractProductSlug(slug: string) {
  const id = slug.split("-i").pop();
  return id?.split(".").pop();
}