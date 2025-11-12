// src/components/footer.tsx

import Link from "next/link";
import { Button } from "./ui/button";
import { headerCompanyName } from "@/data/website-data";

interface PropsFooter {
  companyName: string;
  copyrightYear: string;
}

export default function Footer(props: PropsFooter) {
  return (
    <footer className="mt-10 border-t text-sm">
      <div className="mx-5 mt-5 mb-16 flex flex-col items-center gap-3 text-center sm:mx-7 md:mx-9 lg:mx-11">
        <div className="flex flex-row flex-wrap items-center justify-center gap-3">
          <Button
            variant={"link"}
            className="h-auto px-0 py-0"
            aria-label="Go to company website"
            asChild
          >
            <Link
              href={`https://www.${headerCompanyName.toLowerCase()}.com/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              © {props.copyrightYear} {props.companyName}
            </Link>
          </Button>
        </div>

        <div className="flex flex-row">
          <Button
            asChild
            variant={"link"}
            className="h-auto px-0 py-0"
            aria-label="Go to company website for terms of use"
          >
            <Link
              href={`https://www.${headerCompanyName.toLowerCase()}.com/terms-of-use`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Use
            </Link>
          </Button>
          <span className="mx-2">|</span>
          <Button
            variant={"link"}
            className="h-auto px-0 py-0"
            aria-label="Go to company website for privacy policy"
            asChild
          >
            <Link
              href={`https://www.${headerCompanyName.toLowerCase()}.com/privacy-policy`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
