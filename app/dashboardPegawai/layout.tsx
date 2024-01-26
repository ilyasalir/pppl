export const metadata = {
  title: 'Dashboard | Angkringan99',
  description: 'Dashboard Pegawai. Angkringan99',
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
