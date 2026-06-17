import SubscriptionDetails from "./SubscriptionDetails";
import SubscriptionWhyUs from "./SubscriptionWhyUs";

function SubscriptionSection() {
  return (
    <div className="grid grid-rows-2">
      <SubscriptionDetails />
      <SubscriptionWhyUs />
    </div>
  )
}

export default SubscriptionSection;