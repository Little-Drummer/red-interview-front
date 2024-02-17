interface Author {
  authorId: number
  name: string
  bio: string
  profilePictureUrl: string
  createdAt: string // 可能应该是 Date 类型，根据需要进行转换
  updatedAt: string // 可能应该是 Date 类型，根据需要进行转换
}

interface Image {
  imageId: number
  postId: number
  imageUrl: string
  imageHeight: string
  imageWidth: string
  createdAt: string // 可能应该是 Date 类型，根据需要进行转换
}

interface Post {
  author: Author
  authorId: number
  commentsCount: number
  content: string
  createdAt: string // 可能应该是 Date 类型，根据需要进行转换
  favoritesCount: number
  images: Image[]
  likesCount: number
  postId: number
  title: string
  updatedAt: string // 可能应该是 Date 类型，根据需要进行转换
}

interface PostPage {
  pageNumber: number
  pageSize: number
  records: Post[]
  totalPage: number
  totalRow: number
}

export type { Author, Image, Post, PostPage }
