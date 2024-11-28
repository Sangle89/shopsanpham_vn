export type TProductItem = {
  id: number;
  title: string;
  price: number;
  price_before_discount: number;
  image: string;
  stock: number;
  rating_star: number;
  raw_discount: number;
  item_id: number;
  shop_id: number;
};
export type TCategoryItem = {
  id: number;
  display_name: string;
  cat_id_fe: number;
};
