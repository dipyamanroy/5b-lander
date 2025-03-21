import { clsx } from 'clsx'

type HeadingProps = {
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  dark?: boolean
} & React.ComponentPropsWithoutRef<
  'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
>

export function Heading({
  className,
  as: Element = 'h2',
  dark = false,
  ...props
}: HeadingProps) {
  return (
    <Element
      {...props}
      data-dark={dark ? 'true' : undefined}
      className={clsx(
        className,
        'text-2xl sm:text-4xl lg:text-6xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white',
      )}
    />
  )
}


export function Subheading({
  className,
  as: Element = 'h2',
  dark = false,
  ...props
}: HeadingProps) {
  return (
    <Element
      {...props}
      data-dark={dark ? 'true' : undefined}
      className={clsx(
        className,
        'text-xs/5 font-bold tracking-widest text-gray-500 uppercase data-dark:text-gray-400',
        'font-mono',
        'font-[JetBrains Mono, monospace]'
      )}
    />
  )
}

export function Lead({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'p'>) {
  return (
    <p
      className={clsx(
        className,
        'text-lg sm:text-xl md:text-2xl font-medium text-gray-500'
      )}
      {...props}
    />
  )
}
