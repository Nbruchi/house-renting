import { SafeUser } from "@/types";
import { useRouter } from "next/navigation";
import useSignInModal from "./use-signin-modal";
import { MouseEvent, useCallback, useMemo } from "react";
import toast from "react-hot-toast";

interface IUseFavorite {
  listingId: string;
  currentUser?: SafeUser | null;
}

const useFavorite = ({ listingId, currentUser }: IUseFavorite) => {
  const router = useRouter();
  const signinModal = useSignInModal();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favoriteIds || [];
    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavorite = useCallback(
    async (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return signinModal.onOpen();
      }

      try {
        let request;

        if (hasFavorited) {
          request = await fetch(`/api/favorites/${listingId}`, {
            method: "DELETE",
          });
        } else {
          request = await fetch(`/api/favorites/${listingId}`, {
            method: "POST",
          });
        }

        await request.json();

        if (hasFavorited) {
          toast.success("Favorite removed");
        } else {
          toast.success("Favorite added");
        }

        router.refresh();
      } catch {
        toast.error("Something went wrong");
      }
    },
    [currentUser, listingId, hasFavorited, signinModal, router]
  );

  return {
    hasFavorited,
    toggleFavorite,
  };
};

export default useFavorite;
