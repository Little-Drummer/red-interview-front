import { decode } from 'blurhash'

function blurHashToImageSrc(blurHash: string, imgWidth: number, imgHeight: number): string {
  // console.log(blurHash)
  // BlurHash相关的库和函数可能需要导入，请确保您已安装和导入它们
  // 这里使用了blurhash库 (https://www.npmjs.com/package/blurhash)

  // 定义图像的宽度和高度
  const width = Math.floor(imgWidth / 10) // 根据需求设置
  const height = Math.floor(imgHeight / 10) // 根据需求设置

  // 使用BlurHash解码生成图像的像素数据
  const pixels = decode(blurHash, width, height)

  // 创建一个HTMLCanvasElement来绘制图像
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const context = canvas.getContext('2d')

  // 将像素数据绘制到Canvas上
  if (!context) throw new Error('Canvas context is null')
  const imageData = context.createImageData(width, height)
  imageData.data.set(pixels)
  context.putImageData(imageData, 0, 0)

  // 将Canvas数据转换为Base64编码的图像链接
  const base64Image = canvas.toDataURL('image/png') // 可以根据需要更改图像格式

  return base64Image
}

export default blurHashToImageSrc
