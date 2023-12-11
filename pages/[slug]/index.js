import { useRouter } from "next/router";

export function Page() {
  const router = useRouter();
  console.log(router);
  return <div>{router.query.slug}</div>;
}

export default Page;
