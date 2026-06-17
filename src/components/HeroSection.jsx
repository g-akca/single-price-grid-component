function HeroSection() {
  return (
    <section className="bg-white p-9.5 tablet:pl-10 tablet:pr-20 tablet:py-11 flex flex-col gap-6">
      <h1 className="text-teal-500 text-[24px] leading-[115%] tracking-[-0.25px] font-bold">Join our community</h1>

      <div className="flex flex-col gap-2">
        <h2 className="text-green-400 text-[18px] leading-[115%] tracking-[-0.25px] font-bold">30-day, hassle-free money back guarantee</h2>

        <p className="tracking-[-0.5px]">Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
      </div>
    </section>
  )
}

export default HeroSection;