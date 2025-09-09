import { Suspense } from "react"
import { PrintVersion } from "@/components/print-version"

export default function PrintVersionPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PrintVersion />
    </Suspense>
  )
}