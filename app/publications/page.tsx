import type { Metadata } from "next"
import PublicationsClient from "./PublicationsClient"

export const metadata: Metadata = {
  title: "Publications - RD Models Newspaper Cuttings",
  description:
    "View our collection of newspaper cuttings highlighting RD Models' achievements and contributions in 3D architectural modeling.",
  keywords: [
    "newspaper cuttings",
    "3D modeling achievements",
    "architectural model making",
    "RD Models publications",
  ],
}

export default function PublicationsPage() {
  return <PublicationsClient />
}