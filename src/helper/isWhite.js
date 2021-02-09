export default function isWhite(x,y) {
  const X = Math.floor(x/3)
  const Y = Math.floor(y/3)

  if(X === Y || (X === 0 && Y === 2) || (X === 2 && Y === 0))
    return false
  else
    return true
}