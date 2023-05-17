import React,{useState} from 'react'

const JobForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [workExp, setworkExp]=useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };
  return (
    <div className="max-w-lg mx-auto">
      <h1 className=" font-bold mb-4 justify-center items-center text-center mt-4 font-serif text-4xl">Job Application Form</h1>
      <form action='https://getform.io/f/4fc7ea5e-1f12-4ac5-bbb9-ea3220b6f0a5' method='POST' onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name='name'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
           placeholder='Enter your name'
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="age">
            Age
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="age"
            name='message'
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder='Enter your age'
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="gender">
            Gender
          </label>
          <select
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="gender"
            name='gender'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="non-binary">Non-Binary</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="dateOfBirth">
            Date of Birth
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="dateOfBirth"
            name='date'
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="workExperience">
            Work Experience (in years)
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="workExperience"
            name='work-experience'
            type="number"
            value={workExperience}
            onChange={(e) => setWorkExperience(e.target.value)}
            placeholder="e.g 5"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Work Experience 
          </label>
          <textarea 
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="workExperience"
            name='message'
            type="text"
            rows="10"
            value={workExp}
            onChange={(e)=>setworkExp(e.target.value)}
           
            placeholder='Tell Us about your Past Work Experience!!'
            required
          />
        </div>
        <button type='submit' onClick={handleSubmit} className='bg-black rounded-md text-white px-8 py-4 w-full mb-4 font-bold text-lg'>
          Apply 
        </button>
        </form>
        </div>
  )




}

export default JobForm
