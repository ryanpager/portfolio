export const solutionOneCode: string = 
`// Setup the basic constraints so that we can generate the classes
// accordingly. This will allow us to have 1 class for every possiblity.
//
// Disclaimer: I'm aware this is not all of the options, this is a psudocode example.
const sizes = ['sm', 'lg', 'xl', '2xl', ...n]
const offsets = [1, 2, ...n]
const colors = [..n]

// In the compiler
let classes = []
for (let s = 0; s < sizes.length; s++) {
  // generator for "text-shadow-{size}-{offset-x}
  for (let i = 0; i < offsets.length; i++) {
    classes.push(\`
      .text-shadow-{sizes[s]}-{offsets[i]}-{0}-{0} {
        ...property information
      }
    \`)
  }

  // and so on (repeat for colors, sizes, offsets)
  // you get the point, ...bear with me while I throw up.
}
`