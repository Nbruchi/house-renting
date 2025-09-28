import getCurrentUser from "@/app/actions/get-current-user";
import prisma from "@/lib/prismadb"
import { NextResponse } from "next/server";

interface IParams{
  listingId?: string;
}

export async function DELETE(request: Request, {params}: { params: IParams }) {
  const currentUser = getCurrentUser();
  const { listingId } = params;

  if (!currentUser) {
    return NextResponse.error()
  }

  if (!listingId || typeof listingId !== 'string') {
    throw new Error('Invalid ID');
  }

  const listing = await prisma.listing.deleteMany({
    where: {
      id: listingId,
      userId: currentUser.id
    }
  })

  return NextResponse.json(listing);
}