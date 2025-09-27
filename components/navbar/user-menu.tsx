"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../avatar";
import { useCallback, useState } from "react";
import MenuItem from "./menu-item";
import useSignupModal from "@/hooks/use-signup-modal";
import useSigninModal from "@/hooks/use-signin-modal";
import { SafeUser } from "@/types";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import useRentModal from "@/hooks/use-rent-modal";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const signupModal = useSignupModal();
  const signinModal = useSigninModal();
  const rentModal = useRentModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((value) => !value);
  };

  const onRent = useCallback(() => {
    if (!currentUser) {
      return signinModal.onOpen();
    }

    rentModal.onOpen();
  }, [signinModal, currentUser, rentModal]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
          onClick={onRent}
        >
          Airbnb your home
        </div>
        <div
          className="p-4 md:py-1 md:px-2 border border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
          onClick={toggleOpen}
        >
          <AiOutlineMenu />
          <div className="hidden sm:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute right-0 top-12 w-[40vw] md:w-3/4 bg-white rounded-xl shadow-md text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <div className="px-4 py-3">
                <MenuItem
                  label="My trips"
                  onClick={() => router.push("/trips")}
                />
                <MenuItem
                  label="My favorites"
                  onClick={() => router.push("/favorites")}
                />
                <MenuItem
                  label="My reservations"
                  onClick={() => router.push("/reservations")}
                />
                <MenuItem
                  label="My properties"
                  onClick={() => router.push("/properties")}
                />
                <MenuItem label="Airbnb your home" onClick={onRent} />
                <hr className="my-1" />
                <MenuItem
                  label="Logout"
                  onClick={() => {
                    signOut();
                    router.refresh();
                  }}
                />
              </div>
            ) : (
              <div className="px-4 py-3">
                <MenuItem label="Sign up" onClick={signupModal.onOpen} />
                <MenuItem label="Sign in" onClick={signinModal.onOpen} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
