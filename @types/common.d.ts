export type TProductModel = {
  name: string;
  price: number;
};
export type TProductItem = {
  id: number;
  title: string;
  slug: string;
  price: number;
  price_before_discount: number;
  image: string;
  stock: number;
  rating_star: number;
  total_rating_count: number;
  global_sold: number;
  raw_discount: number;
  item_id: number;
  shop_id: number;
  description: string;
  models: TProductModel[];
  ref_link: string;
};
export type TCategoryItem = {
  id: number;
  display_name: string;
  cat_id_fe: number;
  parent_id: number;
  slug: string;
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
export type TSeo = {
  meta_title: string;
  meta_keywords: string;
  meta_description: string;
  og_image: string;
  top_content: string;
  bottom_content: string;
};
