export default function SocialLinks() {
  return (
    <div className="fixed left-5 top-1/2 flex flex-col gap-4 z-50">
      
      <a
        href="mailto:gpdsanthosh916@gmail.com"
        className="text-white bg-cyan-500 p-3 rounded-full hover:scale-110 transition"
      >
        📧
      </a>

      <a
        href="https://github.com/santhosh-kr714"
        target="_blank"
        className="text-white bg-gray-800 p-3 rounded-full hover:scale-110 transition"
      >
        💻
      </a>

      <a
        href="https://www.linkedin.com/in/santhosh-kr-65079b32b/"
        target="_blank"
        className="text-white bg-blue-600 p-3 rounded-full hover:scale-110 transition"
      >
        🔗
      </a>

    </div>
  )
}