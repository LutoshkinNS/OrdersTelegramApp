import { fetchOrdersByTrackNumber } from "@/shared/api/fetchOrdersByTrackNumber.ts";
import { fetchOrdersByTgId } from "@/shared/api/fetchOrdersByTgId.ts";

const QUERY_KEY = "orders";

export const orderListByTrackNumberQuery = (trackNumber: string) => ({
  queryKey: [QUERY_KEY, "list", "trackNumber", trackNumber],
  queryFn: () => fetchOrdersByTrackNumber(trackNumber),
});

export const orderListByTgIdQuery = (tgId: number) => ({
  queryKey: [QUERY_KEY, "list", "tgId", tgId],
  queryFn: () => fetchOrdersByTgId(tgId),
});
