import Item from "./Item";

function Dashboard() {
  return (
    <div className="p-4 bg-base-200 rounded-lg mt-2">
      <h3 className="text-xl text-info mb-3">Dashboard</h3>
      <Item itemName="Secret Key" />
      <Item itemName="Encrypted Map" />
    </div>
  );
}
export default Dashboard;
