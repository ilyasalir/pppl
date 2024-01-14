import './globals.css'
import { Raleway } from 'next/font/google'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Raleway({ subsets: ["latin"]})

export const metadata = {
  title: 'Angkringan 99',
  description: 'Angkringan 99',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
            <ToastContainer />
      </body>
  
    </html>
  )
}
