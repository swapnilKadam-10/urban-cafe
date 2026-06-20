function Loader() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-primary text-white">
      <div className="text-center">
        <p className="script text-5xl text-accent">The URBAN Cafe</p>
        <div className="mx-auto mt-6 h-1.5 w-44 overflow-hidden rounded-full bg-white/20">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-accent" />
        </div>
      </div>
    </div>
  )
}

export default Loader
