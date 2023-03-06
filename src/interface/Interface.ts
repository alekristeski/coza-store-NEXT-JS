export interface ProductInterface {
  id: string;
  price: string;
  title: string;
  gender: string;
  img: string;
  description: string;
}
export interface AboutInterface {
  title: string;
  first_content: string;
  second_content: string;
  third_content: string;
  first_image: string;
  second_image: string;
  second_title: string;
  fourth_content: string;
  author: string;
}
export interface BlogInterface {
  id: string;
  author: string;
  date: string;
  category: string;
  excerpt: string;
  img: string;
  title: string;
  first_content: string;
  second_content: string;
}
export interface BannerInterface {
  preTitle: string;
  title: string;
}
