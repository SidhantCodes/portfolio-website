
const BorderMagicButton = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    element?.blur();
  }
  return (
    <button onClick={() => scrollToSection("aboutme")} className="absolute mt-96 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/85 px-5 py-2 text-sm font-medium text-white backdrop-blur-3xl">
        {/* <FaArrowDown size={25} color="white"/>  */}
        Run About()
      </span>
    </button>
  )
}

export default BorderMagicButton