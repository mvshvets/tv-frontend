import './Footer.sass'

import React, { FC } from 'react'


export const Footer: FC = React.memo(() => {
    return (
        <footer className="footer">
            <div>2020 <span>(c) LapkiSoft</span></div>
        </footer>
    )
})
