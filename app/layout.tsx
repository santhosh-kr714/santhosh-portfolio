import "./globals.css"
import ParallaxWrapper from "../components/ParallaxWrapper"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#020617] text-white">
        <ParallaxWrapper>
          {children}
        </ParallaxWrapper>
      </body>
    </html>
  )
}