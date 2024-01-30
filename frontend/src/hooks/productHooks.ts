import { useQuery } from "@tanstack/react-query"
import apiClient from "../apiClient"
import { Product } from "../types/Product"

export const useGetProductQuery = () => {
  useQuery({
    queryKey: ["products"],
    queryFn: async () => (await apiClient.get<Product[]>("api/products")).data,
  })
}
