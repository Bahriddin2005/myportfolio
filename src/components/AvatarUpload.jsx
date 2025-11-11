import React, { useState, useEffect } from 'react'

export default function AvatarUpload({ onImageChange }) {
  const [preview, setPreview] = useState(null)
  const [showUpload, setShowUpload] = useState(false)

  // Load saved image from localStorage
  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage')
    if (savedImage) {
      setPreview(savedImage)
      if (onImageChange) onImageChange(savedImage)
    }
  }, [])

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const imageData = reader.result
        setPreview(imageData)
        localStorage.setItem('profileImage', imageData)
        if (onImageChange) onImageChange(imageData)
        setShowUpload(false)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setPreview(null)
    localStorage.removeItem('profileImage')
    if (onImageChange) onImageChange(null)
  }

  return (
    <div className="relative group">
      {/* Avatar Display */}
      <div className="relative">
        {preview ? (
          <img 
            src={preview} 
            alt="Profile" 
            className="w-full h-full object-cover rounded-3xl"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center text-7xl shadow-2xl">
            👨‍💻
          </div>
        )}
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-3xl opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
          <button
            onClick={() => setShowUpload(!showUpload)}
            className="px-6 py-3 bg-white text-gray-900 rounded-xl font-black uppercase tracking-wide text-sm hover:scale-105 transition-all shadow-lg"
          >
            {preview ? 'Change Photo' : 'Upload Photo'}
          </button>
        </div>
      </div>

      {/* Upload Modal */}
      {showUpload && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-black text-gray-900">Upload Photo</h3>
              <button
                onClick={() => setShowUpload(false)}
                className="text-gray-400 hover:text-gray-600 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mb-6">
              <label className="block w-full cursor-pointer">
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-600 transition-all">
                  <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-600 font-bold mb-2">Click to select image</p>
                  <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>

            {preview && (
              <button
                onClick={removeImage}
                className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-all"
              >
                Remove Photo
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

