import './globals.css'

export const metadata = {
    title: 'Code by Kieran | Developer Portfolio',
    description: 'A portfolio website',
    icon:'./favicon.ico'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
