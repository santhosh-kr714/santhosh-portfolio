import "./globals.css"
import { ParallaxProvider } from "react-scroll-parallax"

export const metadata = {
  title: "Santhosh KR Portfolio",
  description: "AI & ML Student | Python Developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ParallaxProvider>
          {children}
        </ParallaxProvider>
      </body>
    </html>
  )
}