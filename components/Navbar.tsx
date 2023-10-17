import { UserButton } from "@clerk/nextjs";
import StoreSwitcher from "@/components/StoreSwitcher";
import MainNav from "@/components/MainNav";

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher />
        <MainNav />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
