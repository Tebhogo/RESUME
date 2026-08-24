const CV_PATH = `${import.meta.env.BASE_URL}cv/liynadah_hela_cv.pdf`
const CV_FILENAME = 'liynadah_hela_cv.pdf'

export function downloadCV() {
  fetch(CV_PATH)
    .then((response) => {
      if (!response.ok) {
        throw new Error('CV file not found')
      }
      return response.blob()
    })
    .then((blob) => {
      if (blob.size === 0) {
        throw new Error('CV file is empty')
      }

      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = CV_FILENAME
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    })
    .catch(() => {
      window.open(CV_PATH, '_blank', 'noopener,noreferrer')
    })
}
