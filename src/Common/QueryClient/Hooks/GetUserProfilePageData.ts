import { useQuery } from "@tanstack/react-query";
import { GetUserProfileDataByUsername } from "../../util/API";

export const GetUserProfilePageData = (username: string) =>  useQuery({
    queryKey: ["profile", username],
    queryFn: async () => await GetUserProfileDataByUsername(username),
    enabled: !!username,
  })
