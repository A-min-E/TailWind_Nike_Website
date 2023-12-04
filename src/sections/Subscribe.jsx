import Button from "../components/Button";
const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10 flex-col"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up from
        <span className="text-coral-red"> Updates </span> & Newsletter
      </h3>
      <div className="lg:max-w-[80%] w-full flex flex-center max-sm:flex-col gap-5 p-1 sm:border sm:border-gray-400 rounded-full">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="input text-[1.3rem] bg-transparent"
        />
        <div className="flex justify-end items-center max-sm:w-full ">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
