import unsplash_request from '@/utils/unsplash_request.ts'

interface UnsplashResult {
  results: [
    {
      id: string
      blur_hash: string
      description: string
      alt_description: string
      urls: {
        raw: string
        full: string
        regular: string
        small: string
        small_s3: string
        thumb: string
      }
    }
  ]
  total: number
  total_pages: number
}

export const getPhotoService = (
  query: string,
  pageSize: number,
  currentPage: number
): Promise<UnsplashResult> => {
  return unsplash_request({
    url: `/search/photos?page=${currentPage}&per_page= + ${pageSize} + &query= + ${query}`,
    method: 'get'
    // params: {
    //   lang: 'zh-Hans'
    // }
  })
}
