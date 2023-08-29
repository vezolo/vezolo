import AuthLayout from "@/components/screen/Auth/AuthLayout";
import localFont from "next/font/local";
const SFCompactRounded = localFont({
  src: "../../fonts/sf-compact-rounded.ttf",
});
import "../../styles/global.css";

export const metadata = {
  title: "Vezolo",
  description: "Vezolo Innovative Softwares",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={SFCompactRounded.className}>
        <AuthLayout>{children}</AuthLayout>
      </body>
    </html>
  );
}
