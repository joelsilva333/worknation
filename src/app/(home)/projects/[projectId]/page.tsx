import { use } from "react";

export default function ProjectIdPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = use(params);

  return (
    <div className="min-h-screen text-white flex items-center justify-center text-9xl font-extrabold">
      {projectId}
    </div>
  );
}
