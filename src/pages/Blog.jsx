import content from '../data/Content.json'
import PageHeader from '../components/PageHeader'

const Blog = () => {
  const { blogs } = content

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        kicker="The Journal"
        title="Stories worth your time"
        description="Guides, history, and buying advice from the Kronos desk."
        hour={6}
        index="02"
      />

      {/* Blog Grid */}
     <div className="px-5 sm:px-10 lg:px-20 py-12 sm:py-16">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
    {blogs.map((blog) => (
      <article
        key={blog.id}
        className="border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
      >
        {/* Responsive YouTube Video Embed instead of static Image */}
        <div className="w-full aspect-video bg-black overflow-hidden">
          <iframe
            className="w-full h-full border-0"
            src={blog.link}
            title={blog.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Card Body */}
        <div className="p-6">
          {/* Category & Date */}
          <div className="flex items-center justify-between mb-3">
            <span className="font-raleway text-xs font-bold text-red-500 uppercase tracking-widest">
              {blog.category}
            </span>
            <span className="font-raleway text-xs text-gray-400">
              {blog.date}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-merriweather font-bold text-gray-800 text-base leading-snug mb-3">
            {blog.title}
          </h3>

          {/* Description */}
          <p className="font-raleway text-gray-500 text-sm leading-relaxed mb-5">
            {blog.description}
          </p>

          {/* Optional: Updated "Watch Video" visual reference helper */}
          <span className="font-raleway text-sm font-semibold text-gray-800 uppercase tracking-widest border-b-2 border-red-500 pb-1 cursor-default">
            Playing Above
          </span>
          
        </div>
      </article>
    ))}
  </div>
</div>

    </div>
  )
}

export default Blog