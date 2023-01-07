import { useQuery, QueryFunctionContext } from "@tanstack/react-query"
import api from "../../services/api"
import { User } from "./types"

const getUserInfo = async (ctx: QueryFunctionContext) => {
    const [, userId] = ctx.queryKey
    const {data} = await api.get<User[]>(`/users/${userId}`)

    return data
}

export default function useFetchUsers(userId: string) {
    return useQuery(['user', userId], getUserInfo);
}