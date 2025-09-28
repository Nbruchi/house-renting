import prisma from "@/lib/prismadb";

interface IParams {
  listingId?: string;
}

export default async function getSingleListing(params: IParams) {
  try {
    const { listingId } = params;
    if (!listingId) {
      throw new Error("Invalid ID");
    }
    const listing = await prisma.listing.findUnique({
      where: {
        id: listingId,
      },
      include: {
        user: true,
      },
    });

    if (!listing) {
      return null;
    }
    return {
      ...listing,
      createdAt: listing.createdAt.toISOString(),
      user: {
        ...listing.user,
        createdAt: listing.user.createdAt.toISOString(),
        updatedAt: listing.user.updatedAt.toISOString(),
        emailVerified: listing.user.emailVerified?.toISOString() || null,
      },
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}
