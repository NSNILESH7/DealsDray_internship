import React, { useState } from 'react'
import { useCreateEmployeeMutation, useUploadImageMutation } from '../redux/api/adminapiSlice'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const CreateEmployee = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [designation, setDesignation] = useState("");
  const [course, setCourse] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState(null);

  const [uploadImage] = useUploadImageMutation();


  const [createEmployee] = useCreateEmployeeMutation();

 
  const validateForm = () => {
    if (!name.trim()) {
      toast.error('Name is required');
      return false;
    }

    if (!email.trim()) {
      toast.error('Email is required');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return false;
    }

    if (!phone.trim()) {
      toast.error('Phone number is required');
      return false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      toast.error('Please enter a valid 10-digit phone number');
      return false;
    }

    if (!designation) {
      toast.error('Designation is required');
      return false;
    }

    if (!course) {
      toast.error('Course is required');
      return false;
    }

    if (!gender) {
      toast.error('Gender is required');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      const res = await createEmployee({name, email, phone, designation, course, gender, image}).unwrap();
      if (res.message) {
        toast.success(res.message);
      } else {
        toast.success("Employee created successfully");
        // Reset form
        setName("");
        setEmail("");
        setPhone("");
        setDesignation("");
        setCourse("");
        setGender("");
        setImage("");
      }
      navigate("/employeelist");
    } catch (err) {
      toast.error("Failed to create employee");
    }
  };

  const uploadFileHandler = async (e:any) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);

    try {
      const res = await uploadImage(formData).unwrap();
      toast.success(res.message);
      setImage(res.image);
      setImageUrl(res.image);
    } catch (error:any) {
      toast.error(error?.data?.message || error.error);
      console.log(error);
      
    }
  };
  return (
    <>
      <div className="flex justify-center my-4">
        <h1 className="text-2xl font-bold">Create Employee</h1>
      </div>

      <div className="flex justify-center h-screen mt-8">
          <form
            className="flex flex-col gap-2 w-1/2 text-xl border border-gray-300 rounded-lg p-4"
            onSubmit={handleSubmit}
          >


{imageUrl && (
            <div className="text-center">
              <img
                src={imageUrl}
                alt="product"
                className="block mx-auto max-h-[200px]"
              />
            </div>
          )}

          <div className="mb-3">
            <label className="border text-black px-4 block w-full text-center rounded-lg cursor-pointer font-bold py-11">
              {image ? "Image Selected" : "Upload Image"}

              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={uploadFileHandler}
                className={image ? "hidden" : "text-white"}
              />
            </label>
          </div>
            <label htmlFor="name" className="text-sm font-semibold text-md">
              Name
            </label>
            <input
              className="border border-gray-300 rounded-md p-2"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email" className="text-sm font-semibold text-md">
              Email
            </label>
            <input
              className="border border-gray-300 rounded-md p-2"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="phone" className="text-sm font-semibold text-md">
              Phone
            </label>
            <input
              className="border border-gray-300 rounded-md p-2"
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label
              htmlFor="designation"
              className="text-sm font-semibold text-md"
            >
              Designation
            </label>
            <select
              className="border border-gray-300 rounded-md p-2"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            >
              <option value="">Select Designation</option>
              <option value="HR">HR</option>
              <option value="Manager">Manager</option>
              <option value="Sales">Sales</option>
            </select>
            <label htmlFor="course" className="text-sm font-semibold text-md">
              Course
            </label>
            <div className="flex gap-4 p-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="BE"
                  checked={course === "BE"}
                  onChange={(e) => setCourse(e.target.checked ? "BE" : "")}
                  className="mr-2"
                />
                BE
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="MBA"
                  checked={course === "MBA"}
                  onChange={(e) => setCourse(e.target.checked ? "MBA" : "")}
                  className="mr-2"
                />
                MBA
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="BSC"
                  checked={course === "BSC"}
                  onChange={(e) => setCourse(e.target.checked ? "BSC" : "")}
                  className="mr-2"
                />
                BSC
              </label>
            </div>
            <label htmlFor="gender" className="text-sm font-semibold text-md">
              Gender
            </label>
            <div className="flex gap-4 p-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2"
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2"
                />
                Female
              </label>
            </div>
           
            {/* <label htmlFor="image" className="text-sm font-semibold text-md">
              Image
            </label>
            <input
              className="border border-gray-300 rounded-md p-2"
              type="file"
              placeholder="Image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            /> */}
            <button className="bg-blue-500 text-white p-2 rounded-md">
              Create Employee
            </button>
          </form>
        
      </div>
    </>

  )
}

export default CreateEmployee
