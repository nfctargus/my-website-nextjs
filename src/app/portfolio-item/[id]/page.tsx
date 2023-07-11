'use client'

import { useParams } from 'next/navigation'

export default function PortfolioItem() {
    const params = useParams()
    return <div>PortfolioItem: {params.id}</div>
}
