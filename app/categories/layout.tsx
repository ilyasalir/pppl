export const metadata = {
  title: 'Categories | Angkringan99',
  description: 'Categories. Angkringan99',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <div>
            {children}
      </div>  
   
  )
}
