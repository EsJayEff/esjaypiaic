import React from 'react'
import VisibilitySensor from 'react-visibility-sensor';





export default function Visibility() {
    return (
        <VisibilitySensor>
        {({isVisible}) =>
          <div>I am {isVisible ? 'visible' : 'invisible'}</div>
        }
      </VisibilitySensor>
  )
}


