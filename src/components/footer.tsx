// External imports
import Link from "next/link";

interface PropsFooter {
  companyName: string;
  copyrightYear: string;
}

export default function Footer(props: PropsFooter) {
  return (
    <footer className="mt-10 border-t text-gray-700 dark:text-gray-300">
      <div className="mx-5 my-5 flex flex-col items-center text-center sm:mx-7 md:mx-9 lg:mx-11">
        <p>
          © {props.copyrightYear}{" "}
          <Link href={"https://www.frameworkteam.com/"} target="_blank">
            {props.companyName}
          </Link>
          . All Rights Reserved
        </p>
        <div className="mt-2">
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
