import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { checkTablet } from '../helper'

const Tablet = ({ children }) => {
  const [show, setShow] = useState('hidden')
  const [showDevice, setShowDevice] = useState(true)

  function loadEvent(device) {
    var event = new CustomEvent('responsive-event', {
      detail: {
        device,
      }
    });
    document.body.dispatchEvent(event);
  }

  const changeVisibility = () => {
    setTimeout(() => {
      if (checkTablet()) {
        setShow('visible')
        setShowDevice(true)
        document.querySelector('#vasava-edit').setAttribute('data-device', 'tablet')
        loadEvent('tablet')
      } else {
        setShowDevice(false)
      }
    }, 500)
  }

  useEffect(() => {
    changeVisibility()
    window.addEventListener('resize', changeVisibility)
    return () => {
      window.removeEventListener('resize', changeVisibility)
    }
  }, [])

  if (showDevice) {
    return (
      <div className="vsv-tablet" style={{ visibility: show }}>
        {children}
      </div>
    )
  }
  return null
}

Tablet.propTypes = {
  children: PropTypes.node
}

export default Tablet
