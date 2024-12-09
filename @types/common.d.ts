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
  description: string;
};
export type TCategoryItem = {
  id: number;
  display_name: string;
  cat_id_fe: number;
  parent_id: number;
};
export type TShop = {
  shop_id: number;
  place: string;
  shop_location: string;
  account: {
    portrait: string;
    username: string;
  };
  name: string;
};
