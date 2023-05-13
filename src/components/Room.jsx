import room from "../assets/hotelroom.webp";

const Room = () => {
  return (
    <div className="flex flex-col md:flex-row sm:p-10 p-2 items-center m-auto justify-center">
      <div className=" flex w-80 h-80 md:w-1/2 rounded-md">
        <img src={room} alt="" />
      </div>
      <div className="md:w-1/2 md:font-bold md:text-xl mt-6 md:mt-0 md:ml-10 text-center">
        <h1 className="text-4xl mb-8 ">Rooms</h1>
        <p className="text-sm font-normal ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          quidem explicabo. Veritatis possimus, eum numquam quidem magnam
          repellat et doloribus commodi fuga iusto, voluptas architecto impedit
          officiis iure doloremque quo eaque molestias odio dignissimos, nisi
          odit deleniti amet a! Adipisci, non ullam fuga accusamus odit sed? Cum
          facilis possimus molestias commodi voluptas voluptatum necessitatibus
          veritatis quam laboriosam harum sed aliquid, non inventore officia
          illo consectetur molestiae minima repellat quae quisquam maiores? Quo
          accusantium expedita dolore dicta esse corporis iure dolorum tempore
          nulla eaque aliquid in numquam laudantium quam, quis provident
          corrupti. Magnam harum, ipsum voluptates ratione voluptas rem ducimus
          similique.
        </p>
      </div>
    </div>
  );
};

export default Room;
