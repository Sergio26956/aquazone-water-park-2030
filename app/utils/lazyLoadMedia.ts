export function lazyVideo(src:string){
  const v=document.createElement("video")
  v.src=src
  v.loading="lazy"
  v.muted=true
  v.loop=true
  return v
}
