import base_requests from '@/utils/base_requests.ts'
import type { Post } from '@/type/noteType.ts'

export const getPostsWithImagesAuthorService: () => Promise<Post[]> = () => {
  return base_requests({
    url: '/posts/list',
    method: 'get'
  })
}
