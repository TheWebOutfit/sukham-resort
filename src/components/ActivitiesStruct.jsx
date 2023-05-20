
const ActivitiesStruct = ({ activity: { img, heading, desc } }) => {
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