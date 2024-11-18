import SearchForm from "@/components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const searchQuery = (await searchParams).query;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Start your startup, <br /> connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit ideas, vote on Ideas, and Get noticed in Virtual Competition
        </p>
        <SearchForm query={searchQuery} />
      </section>
    </>
  );
}
