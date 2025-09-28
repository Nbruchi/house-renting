import ClientOnly from "@/components/client-only";
import getCurrentUser from "../actions/get-current-user";
import EmptyState from "@/components/empty-state";
import FavoritesClient from "./favorites-client";
import getFavoriteListings from "../actions/get-favorite-listings";

const FavoritesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState
          title="Unauthorized"
          subtitle="Please sign in to continue"
        />
      </ClientOnly>
    );
  }

  const listings = await getFavoriteListings();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites found"
          subtitle="Looks like you have no favorites on your properties"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default FavoritesPage;
