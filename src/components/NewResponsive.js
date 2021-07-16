import {osName, isMobile,isDesktop, isFirefox, isLandscape,isPortrait	} from 'react-device-detect'
import { withOrientationChange } from 'react-device-detect'


export 
export function CheckMobile ({ children }) {
  if (isMobile) {
    return children;
  }
  return null;
}

export function NotMobile ({ children }) {
  if (!isMobile) {
    return children;
  }
  return null;
}



export function MacView({ children }) {
  if (osName === "Mac OS") {
    return children;
  }
  return null;
}


export function NotMacView ({ children }) {
  if (osName !== "Mac OS") {
    return children;
  }
  return null;
}

export function FireFoxView({ children }) {
  if (isFirefox) {
    return children;
  }
  return null;
}

export function NotFireFoxView({ children }) {
  if (!isFirefox) {
    return children;
  }
  return null;
}



let Orientation = props => {
  const { isLandscape, isPortrait } = props

  if (isLandscape) {
    return  <div>The device is in Landscape mode</div>
  }
  
  if (isPortrait) {
    return  <div>The device is in Portrait mode</div>
  }

  return null
}

Orientation = withOrientationChange(Orientation)

export { Orientation }