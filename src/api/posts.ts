import base_requests from '@/utils/base_requests.ts'
import type { Post, PostPage } from '@/type/noteType.ts'
import type { ResultType } from '@/type/resultType.ts'
import type { AxiosResponse } from 'axios'

export const getPostsWithImagesAuthorService: () => Promise<Post[]> = () => {
  return base_requests({
    url: '/posts/list',
    method: 'get'
  })
}

export const getPostsWithImagesAuthorPageService: (
  pageNumber: number,
  pageSize: number
) => Promise<ResultType<PostPage>> = async (
  pageNumber: number,
  pageSize: number
) => {
  return base_requests({
    url: `/posts/page?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    method: 'get'
  }).then((res: AxiosResponse<ResultType<PostPage>>) => {
    return res.data
  })
}

export const getPostsDetailService: (
  postId: number
) => Promise<ResultType<Post>> = async (postId: number) => {
  return base_requests({
    url: `/posts/${postId}`,
    method: 'get'
  }).then((res: AxiosResponse<ResultType<Post>>) => {
    return res.data
  })
}
