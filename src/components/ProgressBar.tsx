type ProgressBarProps = {
  value: number
}

export default function ProgressBar({ value }: ProgressBarProps) {
  // Calculate the width for the progress bar, based on the
  // passed value. This will allow us to set the progress bar
  // dynamically.
  //
  // Keep in mind, we arent using the tailwindcss properties here,
  // but instead the raw style property with width so that it is
  // easily modifiable.
  const progressValue = {width: `${(value || 0) * 10}%`}

  return (
    <div className="flex w-full h-2 rounded bg-slate-200 overflow-hidden" role="progressbar" aria-valuenow={8} aria-valuemin={0} aria-valuemax={10}>
      <div 
        className="flex flex-col rounded justify-center overflow-hidden bg-gradient-to-r from-rose-500 to-purple-700 text-xs text-white text-center whitespace-nowrap transition duration-500" 
        style={progressValue}>  
      </div>
    </div>
  )
}