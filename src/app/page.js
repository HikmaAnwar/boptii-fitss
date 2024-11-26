import NavBar from "@/components/nav/page";
import Home from "../../src/app/home/page";

export default function Main() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 sm:p-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <div className="flex flex-col items-center space-y-2 w-full max-w-screen-lg">
        <Home />
      </div>
    </div>
  );
}
