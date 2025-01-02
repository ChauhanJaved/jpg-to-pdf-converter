// External imports
import Link from "next/link";

interface PropsFooter {
  companyName: string;
  copyrightYear: string;
}

export default function Footer(props: PropsFooter) {
  return (
    <footer className="mt-10 border-t">
      <div className="mx-5 mb-16 mt-5 flex flex-col items-center gap-1 text-center sm:mx-7 md:mx-9 lg:mx-11">
        <p>
          © {props.copyrightYear}
          {", "}
          <Link href={"https://www.frameworkteam.com/"} target="_blank">
            {props.companyName}
          </Link>
        </p>
        <div className="flex flex-row gap-1">
          <Link
            href="https://www.frameworkteam.com/terms-of-use.html"
            target="_blank"
          >
            Terms of Use
          </Link>
          <span className="mx-2">|</span>
          <Link
            href="https://www.frameworkteam.com/privacy-policy.html"
            target="_blank"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
