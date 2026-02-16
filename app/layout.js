export const metadata = {
  title: 'Whales and Sharks | Apex Luxury-Casual Wear',
  description: 'Luxury presence. Everyday comfort. Limited drops of premium streetwear built for power and ease.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-foam text-ink antialiased">
        {children}
      </body>
    </html>
  )
}
