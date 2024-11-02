export interface UserInterface {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    is_staff: boolean;
  }

  export interface Order {
    cost: Number
    id: Number
    order_route: Number
    order_status: String
    order_user: Number
    weight: Number
  }

  export interface Route {
    cost_per_kg: Number
    destination_airport: Number
    id: Number
    origin_airport: Number
  }

  export interface Airport {
    airport_name: String
    id: Number
    latitude: Number
    longitude: Number
  }

  export interface News {
    id: Number
    article_title: String
    article_content: String
    article_user: Number
    created_date: String
    updated_date: String
  }