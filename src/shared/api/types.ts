export interface OrderItemType {
  track_number: string;
  status: string;
}

export type OrdersListType = Array<OrderItemType> | [];
