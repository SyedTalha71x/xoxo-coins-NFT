import { useState } from 'react'
import { Search, Filter, Settings, Download, ChevronLeft, ChevronRight } from 'lucide-react'
import Avatar from '../../../public/Avatar.png'
import CardImage from '../../../public/card-header (1).png'
import { AiOutlineEye } from 'react-icons/ai';
import CardImage2 from '../../../public/card-header2.png'

const MOCK_NFTS = [
  {
    id: '1',
    title: 'Digital Masterpiece #001',
    thumbnail: CardImage,
    creator: {
      name: 'Thomas Lean',
      avatar: Avatar
    },
    mintDate: '23 Nov 2022'
  },
  {
    id: '2',
    title: 'Digital Masterpiece #001',
    thumbnail: CardImage2,
    creator: {
      name: 'Bonnie Green',
      avatar: Avatar
    },
    mintDate: '03 Nov 2023'
  },
  {
    id: '3',
    title: 'Digital Masterpiece #001',
    thumbnail: CardImage,
    creator: {
      name: 'Roberta Casas',
      avatar: Avatar
    },
    mintDate: 'Yesterday'
  },
  {
    id: '4',
    title: 'Digital Masterpiece #001',
    thumbnail: CardImage,
    creator: {
      name: 'Bonnie Green',
      avatar: Avatar
    },
    mintDate: '23 Nov 2022'
  },


]

export default function NFTTable() {
  const [selectedNFTs, setSelectedNFTs] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [filterType, setFilterType] = useState('all')
//   const itemsPerPage = 10
  const totalPages = 100

  const toggleSelectAll = () => {
    if (selectedNFTs.length === MOCK_NFTS.length) {
      setSelectedNFTs([])
    } else {
      setSelectedNFTs(MOCK_NFTS.map(nft => nft.id))
    }
  }

  const toggleSelectNFT = (id) => {
    if (selectedNFTs.includes(id)) {
      setSelectedNFTs(selectedNFTs.filter(nftId => nftId !== id))
    } else {
      setSelectedNFTs([...selectedNFTs, id])
    }
  }

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white lg:p-6 md:p-5 sm:p-2 p-2">
    <div className="max-w-7xl mx-auto bg-[#1F2A37] lg:p-6 md:p-4 sm:p-3 p-2 rounded-md">
      <h1 className="text-2xl font-bold mb-6">My NFTs</h1>

      <div className="flex flex-col gap-4 mb-6">
        <div className="lg:w-[60%] mr-auto flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-[#374151] border border-gray-700 rounded-md pl-10 pr-4 py-1.5 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-1.5 bg-gray-800 border border-gray-400 text-sm rounded-md hover:bg-gray-700 text-gray-400">
              <Filter className="h-4 w-4" />
              Filters
            </button>
            <button className="flex items-center gap-2 px-4 py-1.5 bg-gray-800 border border-gray-400 text-sm rounded-md hover:bg-gray-700 text-gray-400">
              <Settings className="h-4 w-4" />
              Configurations
            </button>
          </div>
        </div>
        <div className='h-[1px] w-full bg-gray-700 mb-4 mt-4'></div>

        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-sm text-gray-400">Show only:</span>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="filter"
                  value="all"
                  checked={filterType === 'all'}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="text-blue-500 focus:ring-blue-500 h-4 w-4 bg-gray-700 border-gray-600"
                />
                <span className="text-sm">All</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="filter"
                  value="title"
                  checked={filterType === 'title'}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="text-blue-500 focus:ring-blue-500 h-4 w-4 bg-gray-700 border-gray-600"
                />
                <span className="text-sm">Title</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="filter"
                  value="attribute"
                  checked={filterType === 'attribute'}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="text-blue-500 focus:ring-blue-500 h-4 w-4 bg-gray-700 border-gray-600"
                />
                <span className="text-sm">Attribute</span>
              </label>
            </div>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-black border rounded-full border-gray-400 text-sm  hover:bg-gray-950 text-white">
            <Download className="h-4 w-4" />
            Download in CSV
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
  <table className="w-full border-collapse">
    <thead>
      <tr className="border-b border-gray-700 bg-[#374151]">
        <th className="p-4 text-left">
          <input
            type="checkbox"
            checked={selectedNFTs.length === MOCK_NFTS.length}
            onChange={toggleSelectAll}
            className="rounded border-gray-700 "
          />
        </th>
        <th className="p-4 text-left text-sm font-medium text-gray-400">TITLE</th>
        <th className="p-4 text-left text-sm font-medium text-gray-400 ">CREATOR</th>
        <th className="p-4 text-left text-sm font-medium text-gray-400">MINT DATE</th>
        <th className="p-4 text-left text-sm font-medium text-gray-400">VIEW DETAILS</th>
      </tr>
    </thead>
    <tbody>
      {MOCK_NFTS.map((nft) => (
        <tr 
          key={nft.id} 
          className={`border-b border-gray-700 hover:bg-[#2C3B4E] transition-colors ${
            selectedNFTs.includes(nft.id) ? 'bg-[#2C3B4E]' : 'bg-[#1F2A37]'
          }`}
        >
          <td className="p-4 bg-black">
            <input
              type="checkbox"
              checked={selectedNFTs.includes(nft.id)}
              onChange={() => toggleSelectNFT(nft.id)}
              className="rounded border-gray-700 bg-gray-800"
            />
          </td>
          <td className="p-4 text-sm">
            <div className="flex items-center gap-3">
              <img
                src={nft.thumbnail || "/placeholder.svg"}
                alt={nft.title}
                className="rounded h-8 w-8"
              />
              <span className="font-medium">{nft.title}</span>
            </div>
          </td>
          <td className="p-4 bg-black text-sm">
            <div className="flex items-center gap-2">
              <img
                src={nft.creator.avatar || "/placeholder.svg"}
                alt={nft.creator.name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span>{nft.creator.name}</span>
            </div>
          </td>
          <td className="p-4 text-sm text-gray-300">{nft.mintDate}</td>
          <td className="p-4 flex items-center gap-2">
            <AiOutlineEye className="text-white h-5 w-5 cursor-pointer" />
            <button className="text-white text-sm hover:text-blue-300">View Details</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between flex-wrap gap-4">
        <div className="text-sm text-gray-400">
          Showing 1-10 of 1000
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-md hover:bg-gray-800 disabled:opacity-50"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-1">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === page ? 'bg-gray-500 text-white' : 'hover:bg-gray-800'
                }`}
              >
                {page}
              </button>
            ))}
            <span className="px-2">...</span>
            <button
              onClick={() => setCurrentPage(totalPages)}
              className={`px-3 py-1 rounded-md hover:bg-gray-800`}
            >
              {totalPages}
            </button>
          </div>
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-md hover:bg-gray-800 disabled:opacity-50"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

