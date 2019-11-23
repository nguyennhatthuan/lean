interface Book {
  title: string;
  description: string;
  image?: string;
  category: BookCategory;
  quantity: number;
  price: number;
}

enum BookCategory {
  Drama,
  Comedy,
  Sport
}

export default Book;
