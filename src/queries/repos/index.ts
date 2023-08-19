import { useQuery, QueryFunctionContext } from "@tanstack/react-query"
import api from "../../services/api"
import { Repo } from "./types"

const getRepos = async (ctx: QueryFunctionContext) => {
    const [, userId] = ctx.queryKey
    const {data} = await api.get<Repo[]>(`/users/${userId}/repos`)
    return data
}

const getRepo = async (ctx: QueryFunctionContext) => {
    const [, userId, repoName] = ctx.queryKey
    const {data} = await api.get<Repo[]>(`/repos/${userId}/${repoName}`)
    return data
}

const useFetchRepos = (userId: string)  => useQuery(['repos', userId], getRepos);

const useFetchRepo = (userId: string, repoName: string)  => useQuery(['repo', userId, repoName], getRepo);

export {
    useFetchRepos,
    useFetchRepo
}
