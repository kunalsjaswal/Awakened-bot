import React from 'react'
import { FooterDiv } from './stylesheet'

const FooterPage = () => {
  return (
    <FooterDiv>
        <div className="left">
            <div className="blured"></div>
            <h3>About</h3>
            <h3>Blog</h3>
            <h3>Terms & policies</h3>
            <h3>Help (support)</h3>
            <button>
                <h3>Freebot</h3>
            </button>
        </div>
    </FooterDiv>
  )
}

export default FooterPage