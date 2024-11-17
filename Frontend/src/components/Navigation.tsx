import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLogoutMutation } from "../redux/api/adminapiSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



const Navigation = () => {
  const [state, setState] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state: any) => state.auth);

  const [logout] = useLogoutMutation();

  const Handler = async () => {
    try {
      // console.log("logoutHandler");
      // await logout().unwrap();
      // dispatch(logout());
      setState(!state);
      navigate("/login");
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {state==false ? (
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white gap-8">
          <div className="flex items-center gap-8">
          <Link to="/">Home</Link>
          <Link to="/employeelist">EmployeeList</Link>
          </div>
          <div className="flex items-center gap-8">
            <button onClick={()=>Handler()}>Logout</button>
          </div>
        </nav>
      ) : (
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
          <div className="flex items-center gap-8">
          <Link to="/">Home</Link>
          </div>
          <div className="flex items-center gap-8">
          <button onClick={()=>Handler()}>Login</button>
          {/* <Link to="/register">Register</Link> */}
          </div>
        </nav>
      )}
    </> 
  );
};

export default Navigation;
