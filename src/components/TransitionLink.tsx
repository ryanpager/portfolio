import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LinkTransition(props: Readonly<{
  children: React.ReactNode;
  href: string;
  className: string;
}>) {
  const router = useRouter()

  /**
   * This method will simulate and trigger the link routing
   * based on browser support. If there is not support for it,
   * then wel fallback.
   * 
   * @param e {React.MouseEvent} - the html event wrapper that is native
   *                               to the element specified.
   * @returns void
   */
  function handleClick(e: React.MouseEvent<HTMLElement>) {
    // If the browser does not support view transitions, then
    // we just execute the default link behaviour.
    if (!document.startViewTransition) {
      return;
    }

    // Execute the browaer transition, and push the route.
    e.preventDefault();
    document.startViewTransition(() => {
      router.push(props.href);
    });
  }
  
  return (
    <Link onClick={handleClick} {...props}>
      {props.children}
    </Link>
  )
}