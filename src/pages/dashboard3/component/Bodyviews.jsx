import { BiSolidDownArrow } from "react-icons/bi"
import Chart from "./shart"


function Bodyview() {
  return (
    <div className=" ">
      <div className=" flex items-center gap-3  mb-5 justify-between">
      <h1 className=" font-medium text-black  text-3xl ">Body Overview</h1>
      <button className=" bg-white text-black flex items-center gap-2 rounded-3xl  ">Monthly <span><BiSolidDownArrow />
      </span> </button>
      </div>
    <div className="body-overview bg-gray-900 text-white rounded-3xl p-6  text-center">
  <h2 className="text-lg font-thin text-white text-opacity-65">You ve gained 
    <span className="  text-white text-opacity-90 font-bold"> 2kg</span> in a month keep  it up !</h2>
    <h2 className="text-lg text-center font-thin text-white text-opacity-65">
      Still need to gain 
    </h2>
  <h1 className="text-4xl font-bold my-3">950 kcal</h1>
  

  <div className="flex   h-28 justify-center gap-5   ">
  <div className="flex flex-col items-center gap-1" style={{ width: '80px' }}>
    <Chart percentage={35} highlightColor="#cdfb47" />
    <p className="text-sm">Protein</p>
  </div>
  <div className="flex flex-col items-center gap-1" style={{ width: '80px' }}>
    <Chart percentage={65} highlightColor="#fbc947" />
    <p className="text-sm">Carbs</p>
  </div>
  <div className="flex flex-col items-center gap-1" style={{ width: '80px' }}>
    <Chart percentage={50} highlightColor="#ff6347" />
    <p className="text-sm">Fats</p>
  </div>
</div>

</div>
</div>
  )
}

export default Bodyview