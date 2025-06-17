import { GetByDateRequest } from "../models/interface";
import { GetAIResponseByDateService } from "../services/AiService";
import { useQuery } from "@tanstack/react-query";

export const useGetResponses = (params: GetByDateRequest) => {
  const queryEnabled = !!params?.limit && !!params?.page;

  const { isLoading, data } = useQuery({
    queryKey: ["getResponsesByDate", params],
    queryFn: () => GetAIResponseByDateService(params),
    enabled: queryEnabled,
    retry: 2,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  return {
    isLoading,
    data,
  };
};
