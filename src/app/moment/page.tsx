import { MomentContent } from "./MomentContent";

interface MomentPageProps {
  searchParams: Promise<{ activity?: string | string[] }>;
}

export default async function MomentPage({ searchParams }: MomentPageProps) {
  const { activity } = await searchParams;
  const activityId = Array.isArray(activity) ? activity[0] : activity;

  return <MomentContent key={activityId ?? "latest"} activityId={activityId} />;
}
