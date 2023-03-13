/* fixing window height on iPhone */

const appHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()

/*  IMPORTANT ON CSS ADD

 :root {
    --app-height: 100%;
 }
 and

 height: 100vh;
height: var(--app-height);

    on necessary element

*/