import FooterSection from '@/components/sections/footer.section'
import HeaderSection from '@/components/sections/header.section'
import React from 'react'

type LayoutProps = {
    children :React.ReactNode
}

const MainLayout:React.FC<LayoutProps> = ({ children })=>{
    return (
        <div className="flex min-h-screen flex-col">
            <HeaderSection />
                <main className="flex-1">
                    { children }
                </main>
            <FooterSection />
      </div>
    )
}

export default MainLayout;