import { Link } from "react-router-dom"
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";



const Footer = () => {
  return (
    <div className='flex flex-col w-full justify-between bg-gradient-to-r from-[#434343] to-[#000000] text-gray-50 py-8 px-2 '>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-6 py-8 border-b-2 border-gray-600 '>
        <div>
            <h6 className='font-semibold pb-2 uppercase space-x-4'>Useful Links</h6>
            <ul className="font-thin">
                <li className='py-1'>Home</li>
                <li className='py-1'>About Us</li>
                <li className='py-1'>Rooms</li>
                <li className='py-1'>Near By Places</li>
                <li className='py-1'>Contact Us</li>
            </ul>
        </div>
        <div>
            <h6 className='font-semibold pb-2 uppercase'>Activites</h6>
            <ul className="font-thin">
                <li className='py-1'>Born Fire</li>
                <li className='py-1'>Tracking</li>
                <li className='py-1'>Site Seeing</li>
                <li className='py-1'>Swimming</li>
                
            </ul>
        </div>
       <div>
        <h6 className="font-semibold pb-2 uppercase">Socials</h6>
        <div className='flex space-x-6 sm:w-[300px] pt-4 text-2xl'>
                <FacebookIcon/>
                <InstagramIcon/>
                <TwitterIcon/>
            </div>
       </div>
               
      <div >
        <h6 className="font-semibold pb-2 uppercase">Address</h6>
        <p className="font-thin"> Kotri Kalan, Ashta, Near, Indore Road, Bhopal, Madhya Pradesh, 466114</p>
        <p className="font-thin text-sm"><span className="font-medium ">Phone : </span> 9817764473</p>
        <p className="font-thin text-sm"><span className="font-medium ">Email :</span> mohitom2002@gmail.com</p>
      </div>
     
      <div className=' flex col-span-2 ml-10 pt-8 md:pt-2 items-center justify-center'>
                  <h1 className="font-semibold text-2xl items-center "><span className="font-bold text-5xl text-gold">SUKHAM</span> RESORT</h1>
                </div>
        
        
    </div>
    <div className=' flex flex-col max-w-[1240px] mx-auto   px-2 py-4 justify-between sm:flex-row text-center text-gray-500'>
           
        </div>
            <p className='flex font-bold text-xl py-2 items-center justify-center'>WebOutfit</p>
</div>

  
  )
}

export default Footer