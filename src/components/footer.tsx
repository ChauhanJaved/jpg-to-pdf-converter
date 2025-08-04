// External imports
import Link from "next/link";
import { Button } from "./ui/button";

interface PropsFooter {
  companyName: string;
  copyrightYear: string;
}

export default function Footer(props: PropsFooter) {
  return (
    <footer className="mt-10 border-t text-sm">
      <div className="mx-5 mt-5 mb-16 flex flex-col items-center gap-1 text-center sm:mx-7 md:mx-9 lg:mx-11">
        <Button
          variant={"link"}
          className="h-auto px-0 py-0"
          aria-label="Go to company website"
        >
          <Link href={"https://www.frameworkteam.com/"} target="_blank">
            © {props.copyrightYear} {props.companyName}
          </Link>
        </Button>

        <div className="flex flex-row gap-1">
          <Button variant={"link"} className="h-auto px-0 py-0">
            <Link
              href="https://www.frameworkteam.com/terms-of-use.html"
              target="_blank"
            >
              Terms of Use
            </Link>
          </Button>
          <span className="mx-2">|</span>
          <Button variant={"link"} className="h-auto px-0 py-0">
            <Link
              href="https://www.frameworkteam.com/privacy-policy.html"
              target="_blank"
            >
              Privacy Policy
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
