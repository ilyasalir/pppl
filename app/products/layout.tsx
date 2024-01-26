export const metadata = {
  title: 'Products | Angkringan99',
  description: 'Products. Angkringan99',
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
