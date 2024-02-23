import base_requests from '@/utils/base_requests.ts'
import type { Post, PostPage } from '@/type/noteType.ts'

export const getPostsWithImagesAuthorService: () => Promise<Post[]> = () => {
  return base_requests({
    url: '/posts/list',
    method: 'get'
  })
}

export const getPostsWithImagesAuthorPageService: (
  pageNumber: number,
  pageSize: number
) => Promise<PostPage> = (pageNumber: number, pageSize: number) => {
  return base_requests({
    url: `/posts/page?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    method: 'get'
  })
}

export const getPostsDetailService: (postId: number) => Promise<Post> = (
  postId: number
) => {
  return base_requests({
    url: `/posts/${postId}`,
    method: 'get'
  })
}
