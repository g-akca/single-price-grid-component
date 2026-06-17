function SubscriptionDetails() {
  return (
    <section className="bg-teal-500 text-white py-6 px-9 flex flex-col gap-4 justify-between">
      <div className="flex flex-col gap-4">
        <h2 className="text-[18px] leading-[115%] tracking-[-0.25px] font-bold">Monthly Subscription</h2>

        <div>
          <div className="flex items-center gap-2">
            <p className="text-[32px] leading-[115%] tracking-[-0.4px] font-bold">$29</p>

            <p className="lowercase tracking-[-0.5px] opacity-50">Per month</p>
          </div>

          <p className="tracking-[-0.5px]">Full access for less than $1 a day</p>
        </div>
      </div>

      <button type="button" className="bg-green-400 p-2 h-12 rounded-[5px] leading-[145%] tracking-[-0.25px] font-bold shadow-[0_10px_10px_rgba(0,0,0,0.1)]">
        Sign Up
      </button>
    </section>
  )
}

export default SubscriptionDetails;