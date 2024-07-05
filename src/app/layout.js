import HocLayout from "./HocLayout";
import "./globals.scss";
import 'react-photo-view/dist/react-photo-view.css';

export const metadata = {
  title: "Jarvis Al Baasith",
  description: "Jarvis's Personal Site",
};

export default function RootLayout({ children }) {
  return <HocLayout>{children}</HocLayout>;
}
