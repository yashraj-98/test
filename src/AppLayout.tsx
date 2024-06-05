import { ReactNode } from "react";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/Navbar";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="theme">
        <Navbar />
        <div className="h-full">{children}</div>
      </ThemeProvider>
    </>
  );
};

export default AppLayout;
