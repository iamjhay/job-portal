import { Plus } from "lucide-react";
import Link from "next/link";

const JobsPageOverview = async () => {
  return (
    <div className="p-6">
      <div className="flex items-end justify-end">
        <Link href="/admin/create">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center">
            <Plus className="w-5 h-5 mr-2" />
            New Job
          </button>
        </Link>
      </div>
      <div className="mt-8">{/* Add your job listings here */}</div>
    </div>
  );
};

export default JobsPageOverview;
