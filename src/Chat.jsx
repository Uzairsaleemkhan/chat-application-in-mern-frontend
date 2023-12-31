export default function Chat (){

return (
    <div className="flex h-screen">
        <div className="bg-blue-100 w-1/3">
            contacts
        </div>
        <div className="bg-blue-300 w-2/3">
            <div> Messages with selected person</div>
            <div className="flex gap-2 mx-2 ">
                <input type="text" placeholder="Type your message" className="bg-white p-2 flex-grow border" />
              <button className="bg-blue-500 p-2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>
              </button>

            </div>
        </div>

    </div>
)


}