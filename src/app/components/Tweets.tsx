import Script from 'next/script'


import React from 'react'

export default function Tweets() {
  return (
   <div className="block">
   <a className="twitter-timeline" data-width="1000" data-height="800" href="https://twitter.com/piaicofficial?ref_src=twsrc%5Etfw">Tweets by piaicofficial</a> 
    <Script src="https://platform.twitter.com/widgets.js"/>
    </div>

  )
}

