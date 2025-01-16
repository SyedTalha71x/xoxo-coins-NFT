/* eslint-disable no-unused-vars */
import { useState } from 'react'
import TickButton from '../../../public/check-circle.png'
import FalseButton from '../../../public/delete-bin-line.png'
import InfoButton from '../../../public/info.png'
import MagicKey from '../../../public/magic-line.png'

export default function Page() {
  const [files, setFiles] = useState([
    { id: 1, name: 'flexible-pro-v2.2.0.zip', size: '22 MB' },
    { id: 2, name: 'flexible-pro-v2.2.0.zip', size: '22 MB' },
    { id: 3, name: 'flexible-pro-v2.2.0.zip', size: '22 MB' },
  ])

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    attributes: ''
  })

  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isMinted, setIsMinted] = useState(false)

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e) => {
    e.preventDefault()
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required'
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const simulateMinting = () => {
    setIsLoading(true)
    setProgress(0)
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsLoading(false)
          setIsMinted(true)
          return 100
        }
        return prev + 2
      })
    }, 100)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      simulateMinting()
    }
  }

  return (
    <div className="min-h-screen bg-black lg:p-6 md:p-4 sm:p-2 p-2">
      <h1 className="mb-6 text-2xl font-bold text-white">Mini NFT</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div className="rounded bg-[#1F2A37] p-4">
            <h2 className="mb-2 flex gap-1 items-center text-lg text-gray-200 font-bold">
              File upload
              <div>
                <img src={InfoButton || "/placeholder.svg"} className='h-5 w-5' alt="" />
              </div>
            </h2>
            
            <div 
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              className="flex min-h-[200px] cursor-pointer flex-col items-center justify-center rounded border-2 border-dashed border-gray-600 bg-gray-600 p-4 text-center"
            >
              <svg className="mb-2 h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="text-sm text-gray-400">Drag files here to upload</p>
              <p className="text-xs text-gray-500">2 minutes to mint</p>
            </div>

            <div className="mt-4 space-y-2">
              {files.map((file) => (
                <div key={file.id} className="flex items-center justify-between rounded p-2">
                  <div className="flex items-center space-x-2">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-sm text-white">{file.name}</span>
                    <span className="text-xs text-gray-400">{file.size}</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="rounded-full bg-green-500/10 p-1 h-6 w-6 text-green-500 hover:bg-green-500/20">
                      <img src={TickButton || "/placeholder.svg"} className='' alt="" />
                    </button>
                    <button className="rounded-full bg-red-500/10 p-1 h-6 w-6 text-red-500 hover:bg-red-500/20">
                      <img src={FalseButton || "/placeholder.svg"} className='' alt="" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded bg-[#1F2A37] p-4">
            <h3 className="text-sm text-white">Additional Details:</h3>
            <div className="mt-2 space-y-2 text-sm">
              <p className="text-white">Token ID: <span className="text-white">12345</span></p>
              <p className="text-white">
                IPFS Link: <a href="#" className="text-blue-400 hover:underline">View your NFT on IPFS</a>
              </p>
            </div>
          </div>
        </div>

        <div className="rounded bg-[#1F2A37] p-4">
          <h2 className="mb-2 flex gap-1 items-center text-lg text-gray-200 font-bold">
            General Information
            <div>
              <img src={InfoButton || "/placeholder.svg"} className='h-5 w-5' alt="" />
            </div>
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            <div>
              <label className="mb-1 block text-sm text-white">
                Title<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full rounded bg-[#D9D9D9] p-2 text-black text-sm placeholder-gray-400 outline-none"
                placeholder="Enter title"
              />
              {errors.title && (
                <p className="mt-1 text-xs text-red-500">{errors.title}</p>
              )}
            </div>

            <div>
              <label className="mb-1 block text-sm text-white">
                Description<span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="h-32 w-full rounded bg-[#D9D9D9] p-2 text-black text-sm placeholder-gray-400 outline-none"
                placeholder="Add description of NFT here"
              />
              {errors.description && (
                <p className="mt-1 text-xs text-red-500">{errors.description}</p>
              )}
            </div>

            <div>
              <label className="mb-1 block text-sm text-white">Attributes(optional)</label>
              <input
                type="text"
                name="attributes"
                value={formData.attributes}
                onChange={handleInputChange}
                className="w-full rounded bg-[#D9D9D9] p-2 text-black text-sm placeholder-gray-400 outline-none"
                placeholder="Add new Attributes"
              />
            </div>

            {isLoading ? (
              <div className="space-y-2">
                <div className="h-2 w-full rounded-full bg-gray-700">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-center text-sm text-gray-400">Mining in Progress</p>
                <p className="text-center text-sm text-gray-400">Progress: {progress}%</p>
              </div>
            ) : isMinted ? (
              <button
                type="button"
                className="w-full flex justify-center border-[1px] border-slate-200 items-center rounded-full text-sm bg-[#00C853] py-2 text-center text-white transition-colors "
              >
                 <img
                  src={MagicKey || "/placeholder.svg"}
                  alt="Mint"
                  className="w-5 h-5 mr-2 filter invert"
                />
                NFT Minted Successfully
              </button>
            ) : (
              <button
                type="submit"
                className="w-full flex justify-center border-[1px] border-slate-200 items-center rounded-full text-sm bg-[#00C853] py-2 text-center text-white transition-colors hover:bg-green-600"
              >
                <img
                  src={MagicKey || "/placeholder.svg"}
                  alt="Mint"
                  className="w-5 h-5 mr-2 filter invert"
                />
                Mint your first NFT
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

