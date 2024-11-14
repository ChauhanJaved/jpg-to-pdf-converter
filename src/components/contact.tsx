"use client";
//External Imports
import { Copy } from "lucide-react";

//Internal Imports
import { email, HeaderNavItems } from "@/data/website-data";
import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    toast({
      title: "Email Copied !",
    });
  };
  return (
    <section
      id={HeaderNavItems.Contact}
      className="container scroll-m-20 px-5 pt-10 text-gray-700 dark:text-gray-300 lg:px-10 lg:pt-20 xl:max-w-screen-xl"
    >
      <SectionHeader
        caption="Contact Us"
        element="h2"
        desc="Product Support | Purchase Inquiries | Report an Issue"
      />
      <div className="mt-10 flex flex-col items-center">
        <div className="m-2 flex flex-col items-center justify-center rounded border p-5 shadow">
          <p className="text-lg font-medium">{email}</p>
          <Button
            className="mt-2"
            onClick={handleCopyEmail}
            variant={"outline"}
            aria-label="Copy Email"
          >
            <Copy className="mr-2 h-5 w-5" />
            Copy Email
          </Button>
        </div>
        <p className={`mt-5 text-lg`}>
          Please feel free to contact us if you have encountered a problem with
          our product, you have a question about our product or purchase related
          question. If you are a licensed user, please include your order
          details, so that we can make your problem a priority for our support
          staff. Please note that the response will take some time (12 - 24
          hours).
        </p>
      </div>
    </section>
  );
}
