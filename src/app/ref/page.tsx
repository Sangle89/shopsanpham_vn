import { redirect } from "next/navigation";

export default async function RefPage({
  searchParams,
}: {
  searchParams: Promise<{
    target: string;
  }>;
}) {
  const ref_link = (await searchParams).target;
  const target = atob(ref_link);
  redirect(target); // Navigate to the new post page
}
