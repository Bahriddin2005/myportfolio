// Resume PDF Generator using jsPDF
export const generateResumePDF = () => {
  // For now, we'll use the static PDF file
  // In production, you can use jsPDF or html2canvas for dynamic generation
  const link = document.createElement('a')
  link.href = '/BAHRIDDIN_RESUME.pdf'
  link.download = 'Bahriddin_Resume.pdf'
  link.click()
}

export const openResumeInNewTab = () => {
  window.open('/BAHRIDDIN_RESUME.pdf', '_blank')
}

