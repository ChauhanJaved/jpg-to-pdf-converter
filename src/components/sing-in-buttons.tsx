"use client";
import React, { useEffect } from "react";
import { auth } from "../../firebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/navigation";
import { raleway } from "@/lib/font";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "@/context/auth-context";

const SignInButtons: React.FC = () => {
  const { user, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    // Redirect to homepage if the user is already logged in
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user.uid);
      console.log(user.photoURL);
      router.push("/"); // redirect on successful login
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <section
      id="singin"
      className="container m-auto mt-[83px] w-full scroll-m-[83px] xl:max-w-screen-xl"
    >
      <div className="mx-5 sm:mx-7 md:mx-9 lg:mx-11">
        <div className="flex flex-col items-start gap-2 py-6 sm:pt-10 md:pt-12 lg:items-center lg:pt-16">
          <h1
            className={`${raleway.className} text-4xl font-extrabold lg:text-5xl`}
          >
            Sign In
          </h1>
          <p
            className={`text-lg leading-7 text-secondary-foreground lg:text-xl`}
          >
            New user?
            <Link className="ml-3" href={""}>
              Create an account
            </Link>
          </p>
          <div className="flex w-auto flex-col items-center gap-3 py-10">
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

export default SignInButtons;
