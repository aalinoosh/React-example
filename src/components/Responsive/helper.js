export function checkMobile() {
  if (typeof navigator === "undefined") {
    return true;
  }
  const isMobileDevice = Boolean(
    /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
  );
  const width =
    window.screen.width ||
    document.documentElement.clientWidth ||
    window.innerWidth;
  const height =
    window.screen.height ||
    document.documentElement.clientHeight ||
    window.innerHeight;
  return (isMobileDevice || navigator.maxTouchPoints > 1) && ((width < 767) || (width > height && height < 767));
}

export function checkTablet() {
  if (typeof navigator === "undefined") {
    return true;
  }
  const isMobileDevice = Boolean(
    /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
  );
  const width =
    window.screen.width ||
    document.documentElement.clientWidth ||
    window.innerWidth;
  const height =
    window.screen.height ||
    document.documentElement.clientHeight ||
    window.innerHeight;
  return (
    (isMobileDevice || navigator.maxTouchPoints > 1) &&
    width >= 767 &&
    width <= 1367 &&
    window.orientation === 0
  );
}

export function checkTabletLandscape() {
  if (typeof navigator === "undefined") {
    return true;
  }
  const isMobileDevice = Boolean(
    /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
  );
  const width =
    window.screen.width ||
    document.documentElement.clientWidth ||
    window.innerWidth;
  const height =
    window.screen.height ||
    document.documentElement.clientHeight ||
    window.innerHeight;
  return (
    (isMobileDevice || navigator.maxTouchPoints > 1) &&
    width >= 767 &&
    width <= 1367 &&
    (window.orientation === 90 || window.orientation === 180)
  );
}

export function checkDesktop() {
  if (typeof navigator === "undefined") {
    return true;
  }
  const isMobileDevice = Boolean(
    /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)
  );
  return !checkTablet() && !checkMobile() && !isMobileDevice;
}
