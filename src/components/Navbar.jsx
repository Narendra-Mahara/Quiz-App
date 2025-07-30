const Navbar = () => {
  return (
    <>
      <nav className="p-2 md:p-5 text-center bg-[#030712]">
        <a className="w-fit inline-block" href="/">
          {" "}
          <h1 className="text-2xl text-white  md:text-5xl font-mono w-fit underline">
            <span className="underline">Quiz</span> App
          </h1>
        </a>
      </nav>
    </>
  );
};

export default Navbar;
