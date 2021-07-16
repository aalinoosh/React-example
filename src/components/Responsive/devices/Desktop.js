import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { checkDesktop } from '../helper' 

const Desktop = ({ children, minWidth = true }) => {
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
      if (checkDesktop()) {
        setShow('visible')
        setShowDevice(true)
        document.querySelector('#vasava-edit').setAttribute('data-device', 'desktop')
        loadEvent('desktop')
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
      <div className="vsv-desktop" style={{ visibility: show, minWidth: minWidth ? 1024 : 'auto' }}>
        {children}
      </div>
    )
  }
  return null
}

Desktop.propTypes = {
  children: PropTypes.node
}

export default Desktop

