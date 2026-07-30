import OpeningScene from "./sections/OpeningScene/OpeningScene";
import Homepage from "./sections/Homepage/Homepage";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";

export default function App() {
  return (
    <div>
      <ThemeToggle />
      <OpeningScene />
      <Homepage />
    </div>
  );
}
