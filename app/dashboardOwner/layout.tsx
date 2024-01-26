export const metadata = {
  title: 'Dashboard | Angkringan99',
  description: 'Dashboard Owner. Angkringan99',
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
