export const solutionTwoCode: string = 
`// In order to fully examine this solution, we are going to make a couple
// assumptions about the TailwindCSS compiler.
//
// 1. There is actually a JIT compiler in place (there is, I know it.)
// 2. The JIT compiler is able to pull class names, and organize/exclude what it needs

// This is an assume object configuration.
const $tw = <tailwind config>

/**
 * Example compiler function for generating text-shadow class
 * properties. This will spit out 1 class depending on the properties supplied. 
 * 
 * Keep in mind that it would be up to the calling compiler to implement
 * deduping of the classes to make sure there is not difference, as well as
 * manipulating the element passed.
 * 
 * @param element {HTMLElement} - the element to modify
 * @return {string}
 */
function generateTextShadowJitClass(element: HTMLElement): string {
  // Filter the element class list so that we only have
  // text shadow classes applied. If there are none, we need to exit early.
  classList = element.classList.filter((cls) => !cls.includes('text-shadow'))
  if (classList.length < 1) {
    return
  }

  let offsetX = 0
  let offsetY = 0
  let blurRadius = 0
  let color = 'grey'
  let shade = '200'
  for (let c = 0; c < classList.length; c++) {
    stub = classList[c].replaceAll('text-shadow-', '')
    if ($tw.sizing.includes(cls)) {
      offsetX = ...
      offsetY = ...
      blurRadius = ...
    } else {
      let [c, s] = classList[c].split('-')
      color = c
      if (s) {
        shade = s
      }
    }
  }

  return \`[text-shadow:_\${offsetX}_\${offsetY}_\${blurRadius}_var(--tw-\${color}-color})]\`
}
`