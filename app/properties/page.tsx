import ClientOnly from "@/components/client-only";
import getCurrentUser from "../actions/get-current-user";
import EmptyState from "@/components/empty-state";
import PropertiesClient from "./properties-client";
import getListings from "../actions/get-listings";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please sign in" />
      </ClientOnly>
    );
  }

  const listings = await getListings({
    userId: currentUser.id,
  });

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No Properties Found"
          subtitle="Looks like you have no properties yet"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <PropertiesClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default PropertiesPage;
