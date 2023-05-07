
const ActivitiesStruct = ({ activity: { id, img, heading, desc } }) => {
    console.log(img);
    return (

        <div>
            
            <div>

                <img src={img} alt="" />
                <h1 className="text-xl uppercase py-2" >
                    {heading}
                </h1>
                <div>
                    {desc}
                </div>
            </div>
        </div>
    )
}

export default ActivitiesStruct