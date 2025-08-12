
import { Loader2 } from "lucide-react";

export function EditorLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      <span className="ml-2">Loading project...</span>
    </div>
  );
}
