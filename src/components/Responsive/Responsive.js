import Desktop from './devices/Desktop'
import Tablet from './devices/Tablet'
import TabletLandscape from './devices/TabletLandscape'

import Mobile from './devices/Mobile'
import { checkTablet as isTablet, checkDesktop as isDesktop, checkMobile as isMobile, checkTabletLandscape as isTabletLandscape } from './helper'

/**
 * Podemos saber en que dispositivo estamos y a raíz de eso podemos maquetar distinto. //
 */

function getDevice() {
  if (typeof navigator === 'undefined') {
    return 'ssr'
  }
  if (isTablet()) {
    return 'tablet'
  }
  if (isMobile()) {
    return 'mobile'
  }
  if (isDesktop()) {
    return 'desktop'
  }
  if (isTabletLandscape()) {
    return 'tablet'
  }
}

/**
 * Responsive Utilities
 *
 * @object
 * @property {React$Component} Desktop - Component that shows its children just on desktop devices
 * @property {React$Component} Tablet - Component that shows its children just on tablet devices
 * @method isDesktop - Returns true/false if it's desktop
 * @method isTablet - Returns true/false if it's tablet
 * @method isMobile - Returns true/false if it's mobile
 * @method getDevice - Returns the device string. (desktop|tablet|mobile)
 */
const Utils = {
  Desktop,
  Tablet,
  TabletLandscape,
  Mobile,
  isDesktop,
  isTablet,
  isTabletLandscape,
  isMobile,
  getDevice,
}

export default Utils
