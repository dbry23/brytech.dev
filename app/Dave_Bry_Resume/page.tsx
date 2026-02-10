import { redirect } from 'next/navigation'

// this path exists only to redirect to resume PDF
// LinkedIn doesn't like a link ending in PDF, so this is my workaround
export default function Dave_Bry_Resume() {
  redirect('/Dave_Bry_Resume.pdf')
}
