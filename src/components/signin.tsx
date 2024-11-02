"use client";

import { auth } from "../../firebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "@/context/auth-context";
import SectionHeader from "./section-header";

const SignIn: React.FC = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <section
      id="signin"
      className={`${user && "hidden"} container mx-auto scroll-m-[64px] px-3 pt-16 text-lg xl:max-w-screen-xl`}
    >
      <SectionHeader
        caption={`Sign In`}
        desc={`Start a 14-day free trial for unlimited access, or sign in if you’re a paid user.`}
      />
      <div className="mx-5 sm:mx-7 md:mx-9 lg:mx-11">
        <div className="flex flex-col items-start gap-2 py-6 sm:pt-10 md:pt-12 lg:items-center lg:pt-16">
          <p className="text-xl lg:text-2xl">{}</p>

          <div className="flex w-auto flex-col items-center gap-3 py-8">
            <Button
              disabled={loading}
              variant={"outline"}
              className={"text-lg"}
              onClick={handleGoogleSignIn}
            >
              <FcGoogle className="mr-2" size={20} />
              Continue with Google
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
