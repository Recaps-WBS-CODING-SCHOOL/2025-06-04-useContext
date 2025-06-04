import Dashboard from "./Dashboard";

function LayoutWrapper() {
  return (
    <div className="p-4 border border-dashed border-gray-600 rounded-lg w-full max-w-md">
      <p className="text-sm text-gray-400 mb-2">LayoutWrapper</p>
      <Dashboard />
    </div>
  );
}
export default LayoutWrapper;
