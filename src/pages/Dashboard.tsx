import Header from "./Header";
import Frame3 from "./Frame3";
import Frame2 from "./Frame2";
import Frame78 from "./Frame78";
import Frame86 from "./Frame86";
import Frame87 from "./Frame87";

const Dashboard = () => {
  return (
    <div className="relative bg-default-white w-full h-[3007px] overflow-hidden text-left text-base text-default-white font-heading-heading-3">
    <Header />
       <Frame3 />
       <Frame2 />
       <Frame78 />
       <Frame86 />
       <Frame87 />
    </div>
  );
}

export default Dashboard;
