import getCurrentUser from "@/app/actions/get-current-user";
import getSingleListing from "@/app/actions/get-single-listing";
import ClientOnly from "@/components/client-only";
import EmptyState from "@/components/empty-state";
import ListingClient from "./listing-client";
import getReservations from "@/app/actions/get-reservations";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getSingleListing(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ListingClient
        listing={listing}
        currentUser={currentUser}
        reservations={reservations}
      />
    </ClientOnly>
  );
};

export default ListingPage;
