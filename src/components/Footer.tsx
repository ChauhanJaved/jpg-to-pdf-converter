// External imports
import Link from "next/link";

interface PropsFooter {
  companyName: string;
  copyrightYear: string;
}

export default function Footer(props: PropsFooter) {
  return (
    <footer className="container mx-auto flex flex-col items-center border-t-[1px] border-black-200 px-2 py-8 text-center xl:max-w-screen-xl">
      <p>
        © Copyright {props.copyrightYear}{" "}
        <span className="font-bold">{props.companyName}</span>. All Rights
        Reserved
      </p>
      <div className="mt-2">
        <Link
          href="/terms-of-use"
          className="hover:text-black-800 active:text-black-800"
        >
          Terms of Use
        </Link>
        <span className="mx-2">|</span>
        <Link
          href="/privacy-policy"
          className="hover:text-black-800 active:text-black-800"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
