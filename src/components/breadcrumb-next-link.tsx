"use client";
import Link from "next/link";
import React from "react";
import { useActiveSection } from "@/context/active-section-context";

interface BreadcrumbNextLinkProps {
  linkName: string;
  hrefActiveSection: string;
  headerActiveSection: string;
}
export default function BreadcrumbNextLink({
  linkName,
  hrefActiveSection,
  headerActiveSection,
}: BreadcrumbNextLinkProps) {
  const { setActiveSection } = useActiveSection();
  return (
    <Link
      href={hrefActiveSection}
      onClick={() => setActiveSection(headerActiveSection)}
    >
      {linkName}
    </Link>
  );
}
