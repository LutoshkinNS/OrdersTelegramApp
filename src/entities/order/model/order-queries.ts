import { fetchOrdersByTrackNumber } from "@/shared/api/fetchOrdersByTrackNumber.ts";

const QUERY_KEY = "orders";

export const orderListQuery = (trackNumber: string) => ({
  queryKey: [QUERY_KEY, "list"],
  queryFn: () => fetchOrdersByTrackNumber(trackNumber),
});
