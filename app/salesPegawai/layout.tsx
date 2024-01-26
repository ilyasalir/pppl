export const metadata = {
  title: 'Sales | Angkringan99',
  description: 'Sales. Angkringan99',
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
