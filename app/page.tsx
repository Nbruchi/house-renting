import ClientOnly from "@/components/client-only";
import { Container } from "@/components/container";
import EmptyState from "@/components/empty-state";
import getListings, { IListingParams } from "./actions/get-listings";
import ListingCard from "@/components/listings/listing-card";
import getCurrentUser from "./actions/get-current-user";
import { SafeListing } from "@/types";

interface HomeProps {
  searchParams: IListingParams;
}

const Page = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div className="pt-44 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {listings.map((listing: SafeListing) => (
            <ListingCard
              key={listing.id}
              data={listing}
              currentUser={currentUser}
            />
          ))}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Page;
