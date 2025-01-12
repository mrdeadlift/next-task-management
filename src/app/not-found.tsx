import Link from "next/link"

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4 animate-bounce">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">
          ページが見つかりません
        </h2>
        <p className="text-gray-600 mb-8">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <Link 
          href='/' 
          className="inline-block bg-gradient-to-r from-gray-600 to-gray-700 
            hover:from-gray-700 hover:to-gray-800 
            text-white font-semibold py-3 px-8 rounded-md 
            shadow-lg hover:shadow-xl 
            transform hover:-translate-y-0.5 active:translate-y-0 
            transition-all duration-150"
        >
          ホームに戻る
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage