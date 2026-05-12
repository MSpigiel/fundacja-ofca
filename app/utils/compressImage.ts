/**
 * Compress an image file client-side using Canvas API.
 * Resizes to fit within maxDimension and converts to WebP.
 * Returns a new File ready for upload.
 */
export async function compressImage(
  file: File,
  options: {
    maxDimension?: number
    quality?: number
  } = {},
): Promise<File> {
  const { maxDimension = 1920, quality = 0.82 } = options

  // Skip non-image files or GIFs (GIFs lose animation when drawn to canvas)
  if (!file.type.startsWith('image/') || file.type === 'image/gif') {
    return file
  }

  return new Promise((resolve, reject) => {
    const img = new Image()
    const url = URL.createObjectURL(file)

    img.onload = () => {
      URL.revokeObjectURL(url)

      let { width, height } = img

      // Scale down if exceeds max dimension
      if (width > maxDimension || height > maxDimension) {
        if (width > height) {
          height = Math.round(height * (maxDimension / width))
          width = maxDimension
        }
        else {
          width = Math.round(width * (maxDimension / height))
          height = maxDimension
        }
      }

      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height

      const ctx = canvas.getContext('2d')
      if (!ctx) {
        resolve(file) // Fallback to original if canvas fails
        return
      }

      ctx.drawImage(img, 0, 0, width, height)

      canvas.toBlob(
        (blob) => {
          if (!blob || blob.size >= file.size) {
            // If compression didn't help, keep the original
            resolve(file)
            return
          }

          const compressedName = file.name.replace(/\.[^.]+$/, '.webp')
          const compressedFile = new File([blob], compressedName, {
            type: 'image/webp',
            lastModified: Date.now(),
          })
          resolve(compressedFile)
        },
        'image/webp',
        quality,
      )
    }

    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error(`Nie udało się załadować obrazu: ${file.name}`))
    }

    img.src = url
  })
}

/**
 * Compress multiple image files.
 * Returns a FileList-like array of compressed Files.
 */
export async function compressImages(
  files: FileList,
  options?: { maxDimension?: number, quality?: number },
): Promise<File[]> {
  const promises = Array.from(files).map(file => compressImage(file, options))
  return Promise.all(promises)
}
