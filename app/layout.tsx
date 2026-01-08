import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./globals.css"
import BootstrapClient from "./BootstrapClient"

export const metadata = {
  title: "EYE VISION",
  description: "Advanced Eye Care and Vision Correction Center",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <BootstrapClient />
        {children}
      </body>
    </html>
  )
}
