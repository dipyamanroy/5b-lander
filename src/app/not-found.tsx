import { Container } from "@/components/container";
import { GradientBackground } from "@/components/gradient";
import { Navbar } from "@/components/navbar";
import { Heading, Lead } from "@/components/text";
import { Button } from "@/components/button";
import { PlusGrid, PlusGridItem, PlusGridRow } from '@/components/plus-grid'
import Link from "next/link";


function SocialIconX(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M12.6 0h2.454l-5.36 6.778L16 16h-4.937l-3.867-5.594L2.771 16H.316l5.733-7.25L0 0h5.063l3.495 5.114L12.6 0zm-.86 14.376h1.36L4.323 1.539H2.865l8.875 12.837z" />
    </svg>
  )
}

function SocialIconFacebook(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8.05C16 3.603 12.418 0 8 0S0 3.604 0 8.05c0 4.016 2.926 7.346 6.75 7.95v-5.624H4.718V8.05H6.75V6.276c0-2.017 1.194-3.131 3.022-3.131.875 0 1.79.157 1.79.157v1.98h-1.008c-.994 0-1.304.62-1.304 1.257v1.51h2.219l-.355 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.95z"
      />
    </svg>
  )
}

function SocialIconLinkedIn(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
    </svg>
  )
}

function SocialLinks() {
  return (
    <>
      <Link
        href="https://facebook.com"
        target="_blank"
        aria-label="Visit us on Facebook"
        className="text-gray-950 data-hover:text-gray-950/75"
      >
        <SocialIconFacebook className="size-4" />
      </Link>
      <Link
        href="https://x.com"
        target="_blank"
        aria-label="Visit us on X"
        className="text-gray-950 data-hover:text-gray-950/75"
      >
        <SocialIconX className="size-4" />
      </Link>
      <Link
        href="https://linkedin.com"
        target="_blank"
        aria-label="Visit us on LinkedIn"
        className="text-gray-950 data-hover:text-gray-950/75"
      >
        <SocialIconLinkedIn className="size-4" />
      </Link>
    </>
  )
}

function Copyright() {
  return (
    <div className="text-sm/6 text-gray-950">
      &copy; {new Date().getFullYear()} 5th Bridge Data Technologies LLP.
    </div>
  )
}
export default function NotFound() {
  return (
    <main className="relative flex flex-col min-h-screen">
      <Navbar />
      <GradientBackground />
      {/* Use flex-grow to push the footer down */}
      <Container className="flex flex-col items-center justify-center flex-grow text-center">
        <Heading as="h1" className="text-6xl font-bold text-gray-900">404</Heading>
        <Lead className="mt-4 text-gray-600">Oops! We haven&apos;t rendered that part yet.</Lead>
        <div className="m-10">
          <a href="/" className="">
            <Button variant="primary">Go Home</Button>
          </a>
        </div>
      </Container>
      {/* Footer - stays at the bottom */}
      <Container className="pb-8">
        <PlusGrid>
          <PlusGridRow className="flex justify-between">
            <div>
              <PlusGridItem className="py-3">
                <Copyright />
              </PlusGridItem>
            </div>
            <div className="flex">
              <PlusGridItem className="flex items-center gap-8 py-3">
                <SocialLinks />
              </PlusGridItem>
            </div>
          </PlusGridRow>
        </PlusGrid>
      </Container>
    </main>
  );
}

