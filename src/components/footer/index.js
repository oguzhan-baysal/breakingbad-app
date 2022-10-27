import React from 'react'

function Footer() {
  return (
   
        <div className="fixed">
            Developed by <strong>Oguzhan Baysal</strong>
            <div>
                Github {">> "}
                <a  href='https://github.com/oguzhan-baysal' rel="noreferrer" target="_blank">
                    @oguzhan-baysal
                </a>
            </div>
        </div>
    )
} 

export default React.memo(Footer)