import Header from "@/components/header";
import SignInButtons from "@/components/sing-in-buttons";
import { HeaderNavItems } from "@/data/website-data";

export default function Page() {
  return (
    <>
      <Header defaultActiveSection={HeaderNavItems.Home} />
      <main id="main">
        <SignInButtons />
      </main>
    </>
  );
}
