export const idealClassCode: string =
`// Existing CSS property implementation
// See https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow
text-shadow: {offset-x} {offset-y} {blue-radius} {color};

// Possible implementation classes
text-shadow-{size} (sm|md|lg|xl|2xl)
text-shadow-{color}-{shade}

// Apply default styling
//
// This implementation would add the same kind of shadowing
// as the root "shadow" classes. It does not require any
// other settings.
text-shadow

// Example
text-shadow-lg text-shadow-slate-500/10`