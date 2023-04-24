import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline'

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <DocumentMagnifyingGlassIcon className="h-64 w-64 text-indigo-600/20"></DocumentMagnifyingGlassIcon>
      <h1 className="text-3xl text-center mt-2 text-black font-bold mb-5">Welcome to Tedtex Webscraper</h1>
      <h2 className="text-lg italic text-center text-black/50">
        Your neighbourhood Amazon Webscraper
      </h2>
    </div>
  )
}

export default HomePage